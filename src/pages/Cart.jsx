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
import styled from 'styled-components';

const CenteredContainer = styled(Container)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CartCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

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
      <CenteredContainer>
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      </CenteredContainer>
    );
  }

  return (
    <CenteredContainer>
      <CartCard>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Your Cart
          </Typography>
          
          {items.map((item) => (
            <Box key={item.id} sx={{ mb: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.restaurantName}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                        ₹{item.price}
                      </Typography>
                    </Box>
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item, -1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(item, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 2 }} />
            </Box>
          ))}

          <Box sx={{ mt: 3 }}>
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
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Total</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography variant="h6">
                  ₹{total + deliveryCharge + gst - firstOrderDiscount}
                </Typography>
              </Grid>
            </Grid>
          </Box>

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
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </CardContent>
      </CartCard>
    </CenteredContainer>
  );
};

export default Cart; 