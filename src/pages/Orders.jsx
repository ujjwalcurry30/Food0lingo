import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Chip, 
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Restaurant as RestaurantIcon,
  LocalShipping as DeliveryIcon,
  AccessTime as TimeIcon,
  Discount as DiscountIcon,
  Receipt as ReceiptIcon
} from '@mui/icons-material';
import OrderTracking from '../components/OrderTracking';
import './Orders.css';

const Orders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Get real orders from the tracking system
  const { activeOrders, orderHistory } = useSelector(state => state.orderTracking);
  const allOrders = [...activeOrders, ...orderHistory];

  // Check if we're coming from order completion
  React.useEffect(() => {
    if (location.state?.orderId) {
      setSelectedOrder(location.state.orderId);
    }
  }, [location.state]);

  const handleTrackOrder = (orderId) => {
    setSelectedOrder(orderId);
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'preparing':
        return 'warning';
      case 'out_for_delivery':
        return 'info';
      case 'nearby':
        return 'primary';
      case 'delivered':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'preparing':
        return 'Preparing';
      case 'out_for_delivery':
        return 'Out for Delivery';
      case 'nearby':
        return 'Nearby';
      case 'delivered':
        return 'Delivered';
      default:
        return 'Unknown';
    }
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

  const calculateBillBreakdown = (order) => {
    const subtotal = order.total || 0;
    const deliveryCharge = 40;
    const gst = Math.round(subtotal * 0.18);
    const discount = order.customerInfo?.firstOrder ? Math.round(subtotal * 0.1) : 0;
    const finalTotal = subtotal + deliveryCharge + gst - discount;

    return {
      subtotal,
      deliveryCharge,
      gst,
      discount,
      finalTotal
    };
  };

  if (selectedOrder) {
    return (
      <Container className="orders-centered-container">
        <Box sx={{ mb: 2 }}>
          <Button variant="outlined" onClick={handleBackToOrders}>
            ← Back to Orders
          </Button>
        </Box>
        <OrderTracking orderId={selectedOrder} />
      </Container>
    );
  }

  return (
    <Container className="orders-centered-container">
      <Typography variant="h4" gutterBottom>
        Track Your Orders
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        View and track your active orders in real-time.
      </Typography>

      {allOrders.length === 0 ? (
        <Card className="no-orders-card">
          <CardContent>
            <Typography variant="h6" gutterBottom align="center">
              No Orders Yet
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" paragraph>
              You haven't placed any orders yet. Start by browsing our restaurants!
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
              >
                Browse Restaurants
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {allOrders.map((order) => {
            const billBreakdown = calculateBillBreakdown(order);
            
            return (
              <Grid item xs={12} md={6} key={order.id}>
                <Card className="order-card">
                  <CardContent>
                    {/* Order Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" className="order-number">
                          {order.orderNumber}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                          <RestaurantIcon color="primary" fontSize="small" />
                          <Typography variant="body2" color="text.secondary">
                            {order.restaurantInfo?.name || 'Restaurant'}
                          </Typography>
                        </Box>
                      </Box>
                      <Chip
                        label={getStatusLabel(order.status)}
                        color={getStatusColor(order.status)}
                        size="small"
                        className="status-chip"
                      />
                    </Box>

                    {/* Food Items with Images */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ReceiptIcon fontSize="small" />
                        Items Ordered
                      </Typography>
                      <List dense>
                        {order.items && order.items.length > 0 ? (
                          order.items.map((item, index) => (
                            <ListItem key={index} className="order-item-list">
                              <ListItemAvatar>
                                <Avatar 
                                  src={getFoodImage(item.name)} 
                                  alt={item.name}
                                  variant="rounded"
                                  className="food-avatar"
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={`${item.quantity}x ${item.name}`}
                                secondary={`₹${item.price * item.quantity}`}
                                className="item-text"
                              />
                            </ListItem>
                          ))
                        ) : (
                          <ListItem>
                            <ListItemText primary="No items available" />
                          </ListItem>
                        )}
                      </List>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Bill Breakdown */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <ReceiptIcon fontSize="small" />
                        Bill Details
                      </Typography>
                      <Paper elevation={1} className="order-bill-paper">
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
                                <Typography variant="body2" color="success.main">
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
                            <Typography variant="subtitle1" fontWeight="bold">Total</Typography>
                          </Grid>
                          <Grid item xs={6} textAlign="right">
                            <Typography variant="subtitle1" fontWeight="bold">₹{billBreakdown.finalTotal}</Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Box>

                    {/* Info section below the bill */}
                    <div className="order-info-section">
                      <div>
                        <strong>Ordered:</strong> {formatDate(order.createdAt)}
                      </div>
                      {order.status === 'delivered' && (
                        <div>
                          <strong>Delivered:</strong> {formatDate(order.completedAt)}
                        </div>
                      )}
                      <div>
                        <strong>Estimated Delivery:</strong> {order.estimatedDelivery}
                      </div>
                      <div>
                        <strong>Payment Method:</strong> {order.customerInfo?.paymentMethod?.toUpperCase() || 'COD'}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Box sx={{ mt: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleTrackOrder(order.id)}
                        fullWidth
                        disabled={order.status === 'delivered'}
                        className="track-button"
                      >
                        {order.status === 'delivered' ? 'Order Completed' : 'Track Order'}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button variant="outlined" color="primary" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Orders; 