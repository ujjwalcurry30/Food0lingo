import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const navigate = useNavigate();
  return (
    <Container className="orders-centered-container">
      <Typography variant="h4" gutterBottom>
        Track Your Orders
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Order tracking and history will appear here.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>Go to Home</Button>
    </Container>
  );
};

export default Orders; 