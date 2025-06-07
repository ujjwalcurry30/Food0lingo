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
import styled from 'styled-components';

const SearchSection = styled.div`
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const SearchBar = styled(TextField)`
  background: #f1f1f1;
  border-radius: 8px;
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

const RestaurantCard = styled(Card)`
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 12px;
  &:hover {
    transform: translateY(-5px);
  }
`;

const RestaurantImage = styled(CardMedia)`
  height: 200px;
  object-fit: cover;
`;

const QuickLinks = styled(Box)`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const QuickLinkItem = styled(Paper)`
  padding: 1rem;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: #f5f5f5;
  }
`;

const FilterChip = styled(Chip)`
  margin: 0.5rem;
  border-radius: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { restaurants, dailyOffers, bestsellers, categories } = useSelector((state) => state.restaurants);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

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

  return (
    <div>
      <SearchSection>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <SearchBar
                fullWidth
                placeholder="Search for restaurants and food"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              <Box display="flex" gap={2}>
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </SearchSection>

      <Container sx={{ py: 4 }}>
        {/* Quick Links */}
        <QuickLinks>
          <QuickLinkItem>
            <DeliveryIcon color="primary" />
            <Typography variant="body2">Delivery</Typography>
          </QuickLinkItem>
          <QuickLinkItem>
            <RestaurantIcon color="primary" />
            <Typography variant="body2">Dining Out</Typography>
          </QuickLinkItem>
          <QuickLinkItem>
            <OfferIcon color="primary" />
            <Typography variant="body2">Offers</Typography>
          </QuickLinkItem>
          <QuickLinkItem>
            <TimeIcon color="primary" />
            <Typography variant="body2">24/7</Typography>
          </QuickLinkItem>
        </QuickLinks>

        {/* Filters */}
        <Box sx={{ my: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">Filters</Typography>
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', flex: 1 }}>
            {filters.map((filter) => (
              <FilterChip
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
              />
            ))}
          </Box>
          <Button
            variant="outlined"
            startIcon={<SortIcon />}
          >
            Sort
          </Button>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Restaurants Section */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Restaurants Near You
          </Typography>
          <Grid container spacing={3}>
            {restaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                <RestaurantCard onClick={() => handleRestaurantClick(restaurant)}>
                  <Box sx={{ position: 'relative' }}>
                    <RestaurantImage
                      component="img"
                      image={restaurant.image}
                      alt={restaurant.name}
                    />
                    <Box sx={{ 
                      position: 'absolute', 
                      top: 10, 
                      right: 10,
                      display: 'flex',
                      gap: 1
                    }}>
                      <IconButton
                        size="small"
                        sx={{ 
                          bgcolor: 'white',
                          '&:hover': { bgcolor: 'white' }
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      p: 1
                    }}>
                      <Typography variant="subtitle2">
                        {restaurant.deliveryTime} • {restaurant.distance} km
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Box>
                        <Typography variant="h6" component="h2">
                          {restaurant.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {restaurant.cuisine}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        bgcolor: '#48c479', 
                        color: 'white', 
                        px: 1, 
                        py: 0.5, 
                        borderRadius: 1 
                      }}>
                        <Typography variant="body2">
                          {restaurant.rating} ★
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
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
                    </Box>
                  </CardContent>
                </RestaurantCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home; 