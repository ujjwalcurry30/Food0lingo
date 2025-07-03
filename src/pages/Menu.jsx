import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Rating,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { updateItemPopularity } from '../redux/slices/restaurantSlice';
import './Menu.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector((state) => state.restaurants.selectedRestaurant);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  if (!selectedRestaurant) {
    return (
      <Container>
        <div style={{ padding: '32px 0', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Please select a restaurant first
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            className="menu-back-btn"
          >
            Go to Home
          </Button>
        </div>
      </Container>
    );
  }

  const categories = ['All', ...new Set(selectedRestaurant.menu.map(item => item.category))];

  const filteredMenu = searchQuery.trim() === ''
    ? (selectedCategory === 'All' ? selectedRestaurant.menu : selectedRestaurant.menu.filter(item => item.category === selectedCategory))
    : selectedRestaurant.menu.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleAddToCart = (item) => {
    dispatch(addToCart({
      ...item,
      restaurantId: selectedRestaurant.id,
      restaurantName: selectedRestaurant.name
    }));
    dispatch(updateItemPopularity({
      restaurantId: selectedRestaurant.id,
      itemId: item.id
    }));
  };

  return (
    <Container>
      {/* Restaurant Info */}
      <Paper elevation={3} className="menu-restaurant-info">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3}>
            <CardMedia
              component="img"
              image={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="menu-restaurant-image"
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" gutterBottom>
              {selectedRestaurant.name}
            </Typography>
            <div className="menu-restaurant-rating-box">
              <Rating value={selectedRestaurant.rating} precision={0.5} readOnly />
              <Typography variant="body2" className="menu-restaurant-rating-value">
                ({selectedRestaurant.rating})
              </Typography>
            </div>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {selectedRestaurant.cuisine} • {selectedRestaurant.deliveryTime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedRestaurant.distance} km away
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Search Bar with Suggestions */}
      <div className="menu-search-bar-container">
        <TextField
          fullWidth
          placeholder="Search for food items"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
            if (value.trim() === '') {
              setSuggestions([]);
              setShowSuggestions(false);
            } else {
              const matches = selectedRestaurant.menu.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
              );
              setSuggestions(matches);
              setShowSuggestions(true);
            }
          }}
          onFocus={() => {
            if (suggestions.length > 0) setShowSuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 100); // Delay to allow click
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {showSuggestions && suggestions.length > 0 && (
          <Paper elevation={3} className="menu-suggestions-dropdown">
            {suggestions.map((item) => (
              <Box
                key={item.id}
                sx={{ p: 1, cursor: 'pointer', '&:hover': { background: '#f0f0f0' } }}
                onMouseDown={() => {
                  setSearchQuery(item.name);
                  setShowSuggestions(false);
                  setSelectedCategory('All');
                  // Optionally scroll to or filter for this item
                }}
              >
                {item.name}
              </Box>
            ))}
          </Paper>
        )}
      </div>

      {/* Category Tabs */}
      <div className="menu-category-tabs">
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => setSelectedCategory(category)}
            color={selectedCategory === category ? 'primary' : 'default'}
            className="menu-category-chip"
          />
        ))}
      </div>

      {/* Menu Items */}
      <Grid container spacing={3}>
        {filteredMenu.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="menu-item-card">
              <div style={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                {item.popularity > 50 && (
                  <Chip
                    label={`${item.popularity} orders`}
                    size="small"
                    className="menu-popularity-badge"
                  />
                )}
                {item.isBestseller && (
                  <Chip
                    label="Bestseller"
                    color="primary"
                    size="small"
                    className="menu-bestseller-chip"
                  />
                )}
              </div>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <div className="menu-item-details">
                  <Typography variant="h6" color="primary">
                    ₹{item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu; 