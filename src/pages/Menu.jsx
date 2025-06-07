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
import styled from 'styled-components';

const MenuItemCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const MenuItemImage = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
`;

const PopularityBadge = styled(Chip)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedRestaurant = useSelector((state) => state.restaurants.selectedRestaurant);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  if (!selectedRestaurant) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Please select a restaurant first
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Go to Home
        </Button>
      </Container>
    );
  }

  const categories = ['All', ...new Set(selectedRestaurant.menu.map(item => item.category))];

  const filteredMenu = selectedCategory === 'All'
    ? selectedRestaurant.menu
    : selectedRestaurant.menu.filter(item => item.category === selectedCategory);

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
    <Container sx={{ py: 4 }}>
      {/* Restaurant Info */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3}>
            <CardMedia
              component="img"
              height="200"
              image={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              sx={{ borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" gutterBottom>
              {selectedRestaurant.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating value={selectedRestaurant.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({selectedRestaurant.rating})
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {selectedRestaurant.cuisine} • {selectedRestaurant.deliveryTime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedRestaurant.distance} km away
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Category Tabs */}
      <Box sx={{ mb: 4, display: 'flex', gap: 1, overflowX: 'auto', pb: 1 }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => setSelectedCategory(category)}
            color={selectedCategory === category ? 'primary' : 'default'}
            sx={{ minWidth: '100px' }}
          />
        ))}
      </Box>

      {/* Menu Items */}
      <Grid container spacing={3}>
        {filteredMenu.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MenuItemCard>
              <Box sx={{ position: 'relative' }}>
                <MenuItemImage
                  component="img"
                  image={item.image}
                  alt={item.name}
                />
                {item.popularity > 50 && (
                  <PopularityBadge
                    label={`${item.popularity} orders`}
                    size="small"
                  />
                )}
                {item.isBestseller && (
                  <Chip
                    label="Bestseller"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                    }}
                  />
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
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
                </Box>
              </CardContent>
            </MenuItemCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu; 