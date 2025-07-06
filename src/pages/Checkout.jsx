import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
  Box,
  Alert,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, setFirstOrder } from '../redux/slices/cartSlice';
import { createOrderFromCart } from '../redux/slices/orderTrackingSlice';
import socketService from '../utils/socketService';
import './Checkout.css';
import UPIPayment from '../components/UPIPayment';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, total, deliveryCharge, gst, firstOrderDiscount } = useSelector((state) => state.cart);
  const selectedRestaurant = useSelector((state) => state.restaurants.selectedRestaurant);
  const { nextOrderId } = useSelector((state) => state.orderTracking);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiDialogOpen, setUpiDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    dispatch(clearCart());
    dispatch(setFirstOrder(false));
  };

  const finalTotal = total + deliveryCharge + gst - firstOrderDiscount;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const createOrder = () => {
    console.log('Creating order...');
    console.log('Selected restaurant:', selectedRestaurant);
    console.log('Items:', items);
    console.log('Form data:', formData);

    if (!selectedRestaurant) {
      console.error('No restaurant selected');
      // Use a default restaurant if none is selected
      const defaultRestaurant = {
        id: 1,
        name: "Spice Garden",
        cuisine: "Indian",
        rating: 4.5
      };
      
      const customerInfo = {
        name: formData.name,
        email: formData.email,
        address: `${formData.address}, ${formData.city} - ${formData.zipCode}`,
        paymentMethod: paymentMethod
      };

      const restaurantInfo = defaultRestaurant;

      // Create order in Redux
      dispatch(createOrderFromCart({
        cartItems: items,
        customerInfo: customerInfo,
        restaurantInfo: restaurantInfo,
        total: finalTotal
      }));

      // Get the created order ID
      const newOrderId = nextOrderId;
      setCreatedOrder(newOrderId);

      // Create order on backend via Socket.IO
      const orderData = {
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total: finalTotal,
        customerInfo: customerInfo,
        restaurantInfo: restaurantInfo,
        deliveryAddress: customerInfo.address,
        paymentMethod: paymentMethod
      };

      socketService.createOrder(orderData);
      return;
    }

    const customerInfo = {
      name: formData.name,
      email: formData.email,
      address: `${formData.address}, ${formData.city} - ${formData.zipCode}`,
      paymentMethod: paymentMethod
    };

    const restaurantInfo = {
      id: selectedRestaurant.id,
      name: selectedRestaurant.name,
      cuisine: selectedRestaurant.cuisine,
      rating: selectedRestaurant.rating
    };

    // Create order in Redux
    dispatch(createOrderFromCart({
      cartItems: items,
      customerInfo: customerInfo,
      restaurantInfo: restaurantInfo,
      total: finalTotal
    }));

    // Get the created order ID
    const newOrderId = nextOrderId;
    setCreatedOrder(newOrderId);

    // Create order on backend via Socket.IO
    const orderData = {
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      total: finalTotal,
      customerInfo: customerInfo,
      restaurantInfo: restaurantInfo,
      deliveryAddress: customerInfo.address,
      paymentMethod: paymentMethod
    };

    socketService.createOrder(orderData);
  };

  const handlePaymentComplete = (paymentDetails) => {
    console.log('Payment completed:', paymentDetails);
    createOrder();
    dispatch(clearCart());
    navigate('/order-complete', { 
      state: { 
        orderId: createdOrder || 1,
        orderDetails: {
          items: items,
          total: finalTotal,
          restaurant: selectedRestaurant?.name || 'Restaurant',
          customerInfo: formData
        }
      }
    });
  };

  const handleProceedToPay = () => {
    // Validate form data
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.zipCode) {
      alert('Please fill in all required fields');
      return;
    }

    if (paymentMethod === 'card' && (!formData.cardNumber || !formData.expiryDate || !formData.cvv)) {
      alert('Please fill in all card details');
      return;
    }

    if (paymentMethod === 'upi') {
      setUpiDialogOpen(true);
    } else {
      createOrder();
      dispatch(clearCart());
      navigate('/order-complete', { 
        state: { 
          orderId: createdOrder || 1,
          orderDetails: {
            items: items,
            total: finalTotal,
            restaurant: selectedRestaurant?.name || 'Restaurant',
            customerInfo: formData
          }
        }
      });
    }
  };

  // Geolocation and reverse geocoding
  const handleSelectLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      alert(`Location detected!\nLatitude: ${latitude}\nLongitude: ${longitude}`);
      try {
        // Use OpenStreetMap Nominatim for reverse geocoding
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
        if (!response.ok) {
          alert('Reverse geocoding failed.');
          setFormData((prev) => ({
            ...prev,
            address: `Lat: ${latitude}, Lon: ${longitude}`,
            city: '',
            zipCode: '',
            latitude,
            longitude
          }));
          setLocationLoading(false);
          return;
        }
        const data = await response.json();
        if (!data.display_name) {
          alert('No address found for your location.');
          setFormData((prev) => ({
            ...prev,
            address: `Lat: ${latitude}, Lon: ${longitude}`,
            city: '',
            zipCode: '',
            latitude,
            longitude
          }));
          setLocationLoading(false);
          return;
        }
        setFormData((prev) => ({
          ...prev,
          address: data.display_name,
          city: data.address.city || data.address.town || data.address.village || '',
          zipCode: data.address.postcode || '',
          latitude,
          longitude
        }));
        alert('Address autofilled!');
      } catch (err) {
        alert('Failed to fetch address from location.');
        setFormData((prev) => ({
          ...prev,
          address: `Lat: ${latitude}, Lon: ${longitude}`,
          city: '',
          zipCode: '',
          latitude,
          longitude
        }));
      }
      setLocationLoading(false);
    }, (error) => {
      alert('Unable to retrieve your location. Reason: ' + error.message);
      setLocationLoading(false);
    });
  };

  if (items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="checkout-centered-container">
        <div className="checkout-alert">
          <Alert severity="success">
            Your order has been placed successfully!
          </Alert>
        </div>
        <Typography variant="h5" gutterBottom>
          Thank you for your order
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We'll send you an email confirmation shortly.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          className="checkout-btn"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="checkout-centered-container">
      <div className="checkout-card">
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Checkout
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <form onSubmit={handleSubmit}>
                <Card className="checkout-form-card">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Delivery Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="City"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="ZIP Code"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleSelectLocation}
                          disabled={locationLoading}
                          style={{ marginTop: 8 }}
                        >
                          {locationLoading ? 'Detecting Location...' : 'Select Location'}
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Payment Method
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                      >
                        <div>
                          <CardContent>
                            <FormControlLabel
                              value="card"
                              control={<Radio />}
                              label="Credit/Debit Card"
                            />
                            {paymentMethod === 'card' && (
                              <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12}>
                                  <TextField
                                    required
                                    fullWidth
                                    label="Card Number"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    required
                                    fullWidth
                                    label="Expiry Date"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    required
                                    fullWidth
                                    label="CVV"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                  />
                                </Grid>
                              </Grid>
                            )}
                          </CardContent>
                        </div>
                        <div>
                          <CardContent>
                            <FormControlLabel
                              value="upi"
                              control={<Radio />}
                              label="UPI"
                            />
                          </CardContent>
                        </div>
                        <div>
                          <CardContent>
                            <FormControlLabel
                              value="cod"
                              control={<Radio />}
                              label="Cash on Delivery"
                            />
                          </CardContent>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </CardContent>
                </Card>
              </form>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Order Summary
                  </Typography>
                  <div className="checkout-summary-box">
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography>Subtotal</Typography>
                      </Grid>
                      <Grid item xs={6} textAlign="right">
                        <Typography>₹{total}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Delivery Charge</Typography>
                      </Grid>
                      <Grid item xs={6} textAlign="right">
                        <Typography>₹{deliveryCharge}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>GST (18%)</Typography>
                      </Grid>
                      <Grid item xs={6} textAlign="right">
                        <Typography>₹{gst}</Typography>
                      </Grid>
                      {firstOrderDiscount > 0 && (
                        <>
                          <Grid item xs={6}>
                            <Typography color="success.main">First Order Discount</Typography>
                          </Grid>
                          <Grid item xs={6} textAlign="right">
                            <Typography color="success.main">-₹{firstOrderDiscount}</Typography>
                          </Grid>
                        </>
                      )}
                      <Grid item xs={12}>
                        <Divider className="checkout-summary-divider" />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6">Total</Typography>
                      </Grid>
                      <Grid item xs={6} textAlign="right">
                        <Typography variant="h6">₹{finalTotal}</Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="checkout-actions">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      onClick={handleProceedToPay}
                    >
                      Proceed to Pay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </div>
      <UPIPayment
        open={upiDialogOpen}
        onClose={() => setUpiDialogOpen(false)}
        amount={finalTotal}
        onPaymentComplete={handlePaymentComplete}
      />
    </div>
  );
};

export default Checkout; 