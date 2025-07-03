import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ textAlign: 'center', padding: '48px 0' }}>
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