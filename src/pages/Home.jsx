import React, { useEffect, useState } from 'react';
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
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  FilterList as FilterIcon,
  DeliveryDining as DeliveryIcon,
  Restaurant as RestaurantIcon,
  LocalOffer as OfferIcon,
  AccessTime as TimeIcon,
  Sort as SortIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLocation, setSelectedRestaurant } from '../redux/slices/restaurantSlice';
import './Home.css';

const QUICK_LINKS = [
  { key: 'delivery', label: 'Delivery', icon: <DeliveryIcon color="primary" /> },
  { key: 'diningOut', label: 'Dining Out', icon: <RestaurantIcon color="primary" /> },
  { key: 'offers', label: 'Offers', icon: <OfferIcon color="primary" /> },
  { key: 'is247', label: '24/7', icon: <TimeIcon color="primary" /> },
];

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { restaurants, dailyOffers, bestsellers, categories } = useSelector((state) => state.restaurants);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedQuickLink, setSelectedQuickLink] = useState('all');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [dispatch]);

  const handleRestaurantClick = (restaurant) => {
    dispatch(setSelectedRestaurant(restaurant));
    navigate('/menu');
  };

  const filters = [
    "Rating 4.0+",
    "Pure Veg",
    "Offers Available",
    "Fast Delivery",
    "New on Food0lingo",
    "₹300-600",
    "Less than ₹300",
    "More than ₹600"
  ];

  const filteredRestaurants = React.useMemo(() => {
    if (selectedQuickLink === 'all') return restaurants;
    if (selectedQuickLink === 'delivery') return restaurants.filter(r => r.isDelivery);
    if (selectedQuickLink === 'diningOut') return restaurants.filter(r => r.isDiningOut);
    if (selectedQuickLink === 'offers') return restaurants.filter(r => r.hasOffer);
    if (selectedQuickLink === 'is247') return restaurants.filter(r => r.is247);
    return restaurants;
  }, [restaurants, selectedQuickLink]);

  return (
    <div>
      <div className="home-search-section">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search for restaurants and food"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="home-search-bar"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="home-search-bar-actions">
                <Button
                  variant="outlined"
                  startIcon={<LocationIcon />}
                  fullWidth
                >
                  Select Location
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FilterIcon />}
                >
                  Filters
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container>
        {/* Quick Links */}
        <div className="home-quick-links">
          {QUICK_LINKS.map(link => (
            <div
              key={link.key}
              className={`home-quick-link-item${selectedQuickLink === link.key ? ' active' : ''}`}
              onClick={() => setSelectedQuickLink(link.key)}
              style={undefined}
            >
              {link.icon}
              <Typography variant="body2">{link.label}</Typography>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="home-filters-box">
          <Typography variant="h6">Filters</Typography>
          <div className="home-filters-bar">
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', flex: 1 }}>
              {filters.map((filter) => (
                <Chip
                  key={filter}
                  label={filter}
                  onClick={() => {
                    if (selectedFilters.includes(filter)) {
                      setSelectedFilters(selectedFilters.filter(f => f !== filter));
                    } else {
                      setSelectedFilters([...selectedFilters, filter]);
                    }
                  }}
                  color={selectedFilters.includes(filter) ? 'primary' : 'default'}
                  variant={selectedFilters.includes(filter) ? 'filled' : 'outlined'}
                  className="home-filter-chip"
                />
              ))}
            </div>
            <Button
              variant="outlined"
              startIcon={<SortIcon />}
            >
              Sort
            </Button>
          </div>
        </div>

        <Divider />

        {/* Restaurants Section */}
        <div className="home-restaurants-section">
          <Typography variant="h5" component="h2" gutterBottom>
            Restaurants Near You
          </Typography>
          <Grid container spacing={3}>
            {filteredRestaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                <Card className="home-restaurant-card" onClick={() => handleRestaurantClick(restaurant)}>
                  <div className="home-restaurant-card-image-wrapper">
                    <CardMedia
                      component="img"
                      image={restaurant.image}
                      alt={restaurant.name}
                      className="home-restaurant-image"
                    />
                    <div className="home-restaurant-card-fav-btn">
                      <IconButton
                        size="small"
                        style={{ background: 'white' }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </div>
                    <div className="home-restaurant-card-gradient">
                      <div className="home-flex-between-mb8">
                        <div>
                          <Typography variant="h6" component="h2">
                            {restaurant.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" className="home-restaurant-cuisine-white">
                            {restaurant.cuisine}
                          </Typography>
                        </div>
                        <div className="home-restaurant-rating-box">
                          <Typography variant="body2">
                            {restaurant.rating} ★
                          </Typography>
                        </div>
                      </div>
                      <div className="home-mt8-flex-gap8">
                        <Chip
                          label={`${restaurant.menu.length} items`}
                          size="small"
                          variant="outlined"
                          className="home-restaurant-chip-white"
                        />
                        <Chip
                          label="Free Delivery"
                          size="small"
                          variant="outlined"
                          className="home-restaurant-chip-white"
                        />
                      </div>
                    </div>
                  </div>
                  <CardContent>
                    <div className="home-restaurant-card-content">
                      <div className="home-restaurant-card-details">
                        <Typography variant="subtitle2">
                          {restaurant.deliveryTime} • {restaurant.distance} km
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home; 