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
import './OrderComplete.css';
import {
  CheckCircle as CheckCircleIcon,
  Restaurant as RestaurantIcon,
  LocalShipping as DeliveryIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

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
    <div className="order-complete-centered-container">
      <Card className="order-complete-card">
        <CardContent>
          <div className="order-complete-icon-box">
            <CheckCircleIcon 
              color="success" 
              className="order-complete-icon-large"
            />
            <Typography variant="h4" gutterBottom>
              Order Confirmed!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Your order has been received and is being prepared
            </Typography>
            <div className="order-complete-chips-box">
              <Chip 
                icon={<RestaurantIcon />} 
                label="Restaurant Confirmed" 
                color="success" 
                className="order-complete-status-chip"
              />
              <Chip 
                icon={<CheckCircleIcon />} 
                label="Order Received by Restaurant" 
                color="success" 
                className="order-complete-status-chip"
              />
              <Chip 
                icon={<DeliveryIcon />} 
                label="Preparing Order" 
                color="primary" 
                className="order-complete-status-chip"
              />
            </div>
          </div>

          <Divider className="order-complete-divider" />

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
                <div key={index} className="order-complete-items-box">
                  <Typography>
                    {item.quantity}x {item.name}
                  </Typography>
                  <Typography>
                    ₹{item.price * item.quantity}
                  </Typography>
                </div>
              ))}
              <Divider className="order-complete-divider" />
              <div className="order-complete-total-box">
                <Typography variant="subtitle1">Total Amount</Typography>
                <Typography variant="subtitle1">₹{orderDetails.total}</Typography>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="order-complete-delivery-box">
                <TimeIcon color="primary" />
                <div>
                  <Typography variant="subtitle1">
                    Estimated Delivery Time
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {orderDetails.estimatedDelivery}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>

          <div className="order-complete-actions">
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderComplete; 