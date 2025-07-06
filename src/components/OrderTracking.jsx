import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Button,
  Alert,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import {
  Restaurant,
  LocalShipping,
  LocationOn,
  CheckCircle,
  Schedule
} from '@mui/icons-material';
import OrderTrackingMap from './OrderTrackingMap';
import socketService from '../utils/socketService';
import { setCurrentOrder, setIsTracking } from '../redux/slices/orderTrackingSlice';
import './OrderTracking.css';

const statusSteps = [
  { key: 'preparing', label: 'Preparing', icon: <Restaurant /> },
  { key: 'out_for_delivery', label: 'Out for Delivery', icon: <LocalShipping /> },
  { key: 'nearby', label: 'Nearby', icon: <LocationOn /> },
  { key: 'delivered', label: 'Delivered', icon: <CheckCircle /> },
];

const statusIndex = (status) => {
  switch (status) {
    case 'preparing': return 0;
    case 'out_for_delivery': return 1;
    case 'nearby': return 2;
    case 'delivered': return 3;
    default: return 0;
  }
};

const OrderTracking = ({ orderId }) => {
  const dispatch = useDispatch();
  const { activeOrders, socketConnected, error } = useSelector(state => state.orderTracking);
  const [orderStatus, setOrderStatus] = useState('preparing');

  // Memoize currentOrder to avoid recalculating on every render
  const currentOrder = useMemo(() => activeOrders.find(order => order.id === orderId), [activeOrders, orderId]);

  // Only run socket and simulation logic once per mount
  useEffect(() => {
    if (!currentOrder) {
      console.error('Order not found:', orderId);
      return;
    }

    socketService.connect();
    socketService.joinOrderTracking(orderId);
    dispatch(setCurrentOrder(currentOrder));
    dispatch(setIsTracking(true));
    socketService.simulateOrderUpdates(orderId);

    return () => {
      socketService.leaveOrderTracking(orderId);
      dispatch(setIsTracking(false));
    };
    // Only depend on orderId and dispatch, not currentOrder
  }, [orderId, dispatch]);

  // Only update orderStatus when currentOrder.status changes
  useEffect(() => {
    if (currentOrder?.status) {
      setOrderStatus(currentOrder.status);
    }
  }, [currentOrder?.status]);

  if (!currentOrder) {
    return (
      <Box className="order-tracking-container" sx={{ p: 4, textAlign: 'center' }}>
        <Alert severity="info" className="error-alert">
          No order selected. Please select an order to track from your Orders page.
        </Alert>
      </Box>
    );
  }

  const getStatusInfo = (status) => {
    const statusConfig = {
      preparing: {
        label: 'Preparing',
        color: 'warning',
        icon: <Restaurant />,
        description: 'Your order is being prepared at the restaurant'
      },
      out_for_delivery: {
        label: 'Out for Delivery',
        color: 'info',
        icon: <LocalShipping />,
        description: 'Your order is on the way to you'
      },
      nearby: {
        label: 'Nearby',
        color: 'success',
        icon: <LocationOn />,
        description: 'Your order is almost here!'
      },
      delivered: {
        label: 'Delivered',
        color: 'success',
        icon: <CheckCircle />,
        description: 'Your order has been delivered'
      }
    };

    return statusConfig[status] || statusConfig.preparing;
  };

  const getProgressValue = (status) => {
    const progressMap = {
      preparing: 25,
      out_for_delivery: 50,
      nearby: 75,
      delivered: 100
    };
    return progressMap[status] || 0;
  };

  const statusInfo = getStatusInfo(orderStatus);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Bill breakdown calculation
  const calculateBillBreakdown = (order) => {
    const subtotal = order.total || 0;
    const deliveryCharge = 40;
    const gst = Math.round(subtotal * 0.18);
    const discount = order.customerInfo?.firstOrder ? Math.round(subtotal * 0.1) : 0;
    const finalTotal = subtotal + deliveryCharge + gst - discount;
    return { subtotal, deliveryCharge, gst, discount, finalTotal };
  };

  const billBreakdown = calculateBillBreakdown(currentOrder);

  return (
    <Box className="order-tracking-container">
      {error && (
        <Alert severity="error" className="error-alert">
          {error}
        </Alert>
      )}

      {/* Only show the current status */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Chip
          icon={statusInfo.icon}
          label={statusInfo.label}
          color={statusInfo.color}
          className="order-status-chip order-status-chip-large"
          sx={{ fontSize: '1.2rem', padding: '1rem 2rem', minWidth: 220, height: 56 }}
        />
      </Box>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>{statusInfo.label}</Typography>
        <Typography variant="body1" color="text.secondary">{statusInfo.description}</Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Order Status Card */}
        <Grid item xs={12} md={4}>
          <Card className="order-status-card">
            <CardContent>
              <Typography variant="h6" className="order-status-title">
                Order Status
              </Typography>
              
              <Box className="status-info-container">
                <Chip
                  icon={statusInfo.icon}
                  label={statusInfo.label}
                  color={statusInfo.color}
                  className="order-status-chip"
                />
                <Typography variant="body2" className="status-description">
                  {statusInfo.description}
                </Typography>
              </Box>

              <Box className="progress-container">
                <Typography variant="body2" className="progress-label">
                  Order Progress
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={getProgressValue(orderStatus)}
                  className="order-progress-bar"
                />
                <Typography variant="caption" className="progress-percentage">
                  {getProgressValue(orderStatus)}% Complete
                </Typography>
              </Box>

              {/* Order Details Section with Paper for contrast */}
              <Box className="order-details-section" sx={{ mt: 2 }}>
                <Paper elevation={1} className="order-details-paper">
                  <Typography variant="body2" className="details-label">
                    Order Details
                  </Typography>
                  <Typography variant="body2" className="order-detail">
                    <strong>Order #:</strong> {currentOrder.orderNumber}
                  </Typography>
                  <Typography variant="body2" className="order-detail">
                    <strong>Restaurant:</strong> {currentOrder.restaurantInfo?.name || 'Restaurant'}
                  </Typography>
                  <Typography variant="body2" className="order-detail">
                    <strong>Estimated Delivery:</strong> {currentOrder.estimatedDelivery}
                  </Typography>
                  <Typography variant="body2" className="order-detail">
                    <strong>Total:</strong> ₹{currentOrder.total}
                  </Typography>
                  {currentOrder.createdAt && (
                    <Typography variant="body2" className="order-detail">
                      <strong>Ordered:</strong> {formatDate(currentOrder.createdAt)}
                    </Typography>
                  )}
                  {currentOrder.lastUpdated && (
                    <Typography variant="body2" className="order-detail">
                      <strong>Last Updated:</strong> {formatDate(currentOrder.lastUpdated)}
                    </Typography>
                  )}
                </Paper>
              </Box>

              <Box className="items-section">
                <Typography variant="body2" className="items-label">
                  Items:
                </Typography>
                <div className="order-items-container">
                  {currentOrder.items && currentOrder.items.length > 0 ? (
                    currentOrder.items.map((item, index) => (
                      <Chip
                        key={index}
                        label={`${item.quantity}x ${item.name}`}
                        size="small"
                        variant="outlined"
                        className="order-item-chip"
                      />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No items available
                    </Typography>
                  )}
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Map Card */}
        <Grid item xs={12} md={8}>
          <Card className="map-card">
            <CardContent>
              <Typography variant="h6" className="map-header">
                Live Tracking
              </Typography>
              <OrderTrackingMap
                orderId={orderId}
                deliveryLocation={currentOrder?.currentLocation}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Connection Status */}
      <Paper className={`connection-status-paper ${socketConnected ? 'connected' : 'disconnected'}`}>
        <Box className="connection-status-content">
          <Schedule />
          <Typography variant="body2" className="connection-message">
            {socketConnected 
              ? 'Live tracking is active. You\'ll receive real-time updates.'
              : 'Connection lost. Trying to reconnect...'
            }
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default OrderTracking; 