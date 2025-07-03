import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slices/cartSlice';
import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from '@mui/icons-material';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, total, deliveryCharge, gst, firstOrderDiscount } = useSelector((state) => state.cart);

  const handleQuantityChange = (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  if (items.length === 0) {
    return (
      <Container>
        <div className="cart-empty-box">
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            className="cart-empty-btn"
          >
            Continue Shopping
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Your Cart
          </Typography>
          
          {items.map((item) => (
            <div key={item.id} className="cart-item-box">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className="cart-item-details">
                    <div>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.restaurantName}
                      </Typography>
                      <Typography variant="h6" color="primary" className="cart-summary-total">
                        ₹{item.price}
                      </Typography>
                    </div>
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                  <div className="cart-item-qty-box">
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item, -1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography className="cart-item-qty-value">{item.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
              <Divider className="cart-summary-divider" />
            </div>
          ))}

          <div className="cart-summary-box">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Subtotal</Typography>
              </Grid>
              <Grid item xs={6} className="cart-summary-align-right">
                <Typography>₹{total}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Delivery Charge</Typography>
              </Grid>
              <Grid item xs={6} className="cart-summary-align-right">
                <Typography>₹{deliveryCharge}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>GST (18%)</Typography>
              </Grid>
              <Grid item xs={6} className="cart-summary-align-right">
                <Typography>₹{gst}</Typography>
              </Grid>
              {firstOrderDiscount > 0 && (
                <>
                  <Grid item xs={6}>
                    <Typography color="success.main">First Order Discount</Typography>
                  </Grid>
                  <Grid item xs={6} className="cart-summary-align-right">
                    <Typography color="success.main">-₹{firstOrderDiscount}</Typography>
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <Divider className="cart-summary-divider" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Total</Typography>
              </Grid>
              <Grid item xs={6} className="cart-summary-align-right">
                <Typography variant="h6">
                  ₹{total + deliveryCharge + gst - firstOrderDiscount}
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div className="cart-actions">
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Cart; 