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
              <div style={{ display: 'flex', gap: '16px' }}>
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
              style={{ border: selectedQuickLink === link.key ? '2px solid #1976d2' : undefined }}
            >
              {link.icon}
              <Typography variant="body2">{link.label}</Typography>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="home-filters-box">
          <Typography variant="h6">Filters</Typography>
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
                  <div style={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={restaurant.image}
                      alt={restaurant.name}
                      className="home-restaurant-image"
                    />
                    <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: '8px' }}>
                      <IconButton
                        size="small"
                        style={{ background: 'white' }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: 'white', padding: '8px' }}>
                      <Typography variant="subtitle2">
                        {restaurant.deliveryTime} • {restaurant.distance} km
                      </Typography>
                    </div>
                  </div>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div>
                        <Typography variant="h6" component="h2">
                          {restaurant.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {restaurant.cuisine}
                        </Typography>
                      </div>
                      <div className="home-restaurant-rating-box">
                        <Typography variant="body2">
                          {restaurant.rating} ★
                        </Typography>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                      <Chip
                        label={`${restaurant.menu.length} items`}
                        size="small"
                        variant="outlined"
                      />
                      <Chip
                        label="Free Delivery"
                        size="small"
                        variant="outlined"
                      />
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