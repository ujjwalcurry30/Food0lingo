import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import { ShoppingCart, Restaurant } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Logo onClick={() => navigate('/')}>
          <Restaurant sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Food0lingo
          </Typography>
        </Logo>
        <div>
          <Button color="inherit" onClick={() => navigate('/menu')}>
            Menu
          </Button>
          <IconButton color="inherit" onClick={() => navigate('/cart')}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar; 