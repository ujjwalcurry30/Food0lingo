import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Divider,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  CheckCircle as CheckCircleIcon,
  Restaurant as RestaurantIcon,
  LocalShipping as DeliveryIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const CenteredContainer = styled(Container)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderCard = styled(Card)`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const StatusChip = styled(Chip)`
  margin: 0.5rem;
`;

const OrderComplete = () => {
  const navigate = useNavigate();
  // In a real app, this would come from your order state/API
  const orderDetails = {
    orderId: `ORD${Date.now()}`,
    restaurantName: "Spice Garden",
    items: [
      { name: "Butter Chicken", quantity: 1, price: 299 },
      { name: "Naan", quantity: 2, price: 60 },
    ],
    total: 419,
    estimatedDelivery: "25-30 mins",
    status: "Confirmed",
  };

  return (
    <CenteredContainer>
      <OrderCard>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <CheckCircleIcon 
              color="success" 
              sx={{ fontSize: 80, mb: 2 }} 
            />
            <Typography variant="h4" gutterBottom>
              Order Confirmed!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Your order has been received and is being prepared
            </Typography>
            <Box sx={{ mt: 2 }}>
              <StatusChip 
                icon={<RestaurantIcon />} 
                label="Restaurant Confirmed" 
                color="success" 
              />
              <StatusChip 
                icon={<CheckCircleIcon />} 
                label="Order Received by Restaurant" 
                color="success" 
              />
              <StatusChip 
                icon={<DeliveryIcon />} 
                label="Preparing Order" 
                color="primary" 
              />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Order Details
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Order ID: {orderDetails.orderId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Restaurant: {orderDetails.restaurantName}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Items Ordered:
              </Typography>
              {orderDetails.items.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>
                    {item.quantity}x {item.name}
                  </Typography>
                  <Typography>
                    ₹{item.price * item.quantity}
                  </Typography>
                </Box>
              ))}
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1">Total Amount</Typography>
                <Typography variant="subtitle1">₹{orderDetails.total}</Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                bgcolor: 'primary.light', 
                p: 2, 
                borderRadius: 1 
              }}>
                <TimeIcon color="primary" />
                <Box>
                  <Typography variant="subtitle1">
                    Estimated Delivery Time
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {orderDetails.estimatedDelivery}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/orders')}
            >
              Track Order
            </Button>
          </Box>
        </CardContent>
      </OrderCard>
    </CenteredContainer>
  );
};

export default OrderComplete; 