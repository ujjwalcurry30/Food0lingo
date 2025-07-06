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
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './OrderComplete.css';
import {
  CheckCircle as CheckCircleIcon,
  Restaurant as RestaurantIcon,
  LocalShipping as DeliveryIcon,
  AccessTime as TimeIcon,
  Discount as DiscountIcon,
  Receipt as ReceiptIcon
} from '@mui/icons-material';

const OrderComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get order details from location state or find in active orders
  const { activeOrders } = useSelector(state => state.orderTracking);
  const orderId = location.state?.orderId;
  
  // Find the order in active orders
  const orderDetails = activeOrders.find(order => order.id === orderId) || {
    orderNumber: `ORD${Date.now()}`,
    restaurantInfo: { name: "Restaurant" },
    items: [],
    total: 0,
    estimatedDelivery: "25-30 mins",
    status: "Confirmed",
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFoodImage = (itemName) => {
    // Map food names to images
    const foodImages = {
      'Butter Chicken': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Biryani': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Naan': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Paneer Butter Masala': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      'Tandoori Chicken': 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
      'Dal Tadka': 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
      'Margherita Pizza': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'Garlic Bread': 'https://therecipecritic.com/wp-content/uploads/2020/02/cheesy_garlic_bread.jpg',
      'Spaghetti Carbonara': 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };
    return foodImages[itemName] || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';
  };

  const calculateBillBreakdown = () => {
    const subtotal = orderDetails.total || 0;
    const deliveryCharge = 40;
    const gst = Math.round(subtotal * 0.18);
    const discount = orderDetails.customerInfo?.firstOrder ? Math.round(subtotal * 0.1) : 0;
    const finalTotal = subtotal + deliveryCharge + gst - discount;

    return {
      subtotal,
      deliveryCharge,
      gst,
      discount,
      finalTotal
    };
  };

  const billBreakdown = calculateBillBreakdown();

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
                Order ID: {orderDetails.orderNumber}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Restaurant: {orderDetails.restaurantInfo?.name || 'Restaurant'}
              </Typography>
              {orderDetails.createdAt && (
                <Typography variant="body2" color="text.secondary">
                  Ordered: {formatDate(orderDetails.createdAt)}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ReceiptIcon fontSize="small" />
                Items Ordered:
              </Typography>
              {orderDetails.items && orderDetails.items.length > 0 ? (
                <List dense>
                  {orderDetails.items.map((item, index) => (
                    <ListItem key={index} className="order-complete-item-list">
                      <ListItemAvatar>
                        <Avatar 
                          src={getFoodImage(item.name)} 
                          alt={item.name}
                          variant="rounded"
                          className="order-complete-food-avatar"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${item.quantity}x ${item.name}`}
                        secondary={`₹${item.price * item.quantity}`}
                        className="order-complete-item-text"
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No items available
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ReceiptIcon fontSize="small" />
                Bill Details
              </Typography>
              <Paper elevation={1} sx={{ p: 2, backgroundColor: '#f8f9fa' }} className="order-complete-bill-paper">
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2">Subtotal</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography variant="body2">₹{billBreakdown.subtotal}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Delivery Charge</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography variant="body2">₹{billBreakdown.deliveryCharge}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">GST (18%)</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography variant="body2">₹{billBreakdown.gst}</Typography>
                  </Grid>
                  {billBreakdown.discount > 0 && (
                    <>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <DiscountIcon fontSize="small" />
                          First Order Discount
                        </Typography>
                      </Grid>
                      <Grid item xs={6} textAlign="right">
                        <Typography variant="body2" color="success.main">-₹{billBreakdown.discount}</Typography>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12}>
                    <Divider sx={{ my: 1 }} />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" fontWeight="bold">Total Amount</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography variant="subtitle1" fontWeight="bold">₹{billBreakdown.finalTotal}</Typography>
                  </Grid>
                </Grid>
              </Paper>
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
              className="order-complete-continue-btn"
            >
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/orders', { state: { orderId: orderDetails.id } })}
              className="order-complete-track-btn"
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