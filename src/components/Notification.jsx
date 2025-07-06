import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import './Notification.css';

const Notification = ({ open, message, severity = 'success', onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      TransitionComponent={Slide}
      className="notification-container"
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        variant="filled"
        className={`notification-snackbar ${severity}`}
      >
        <span className="notification-message">{message}</span>
      </Alert>
    </Snackbar>
  );
};

export default Notification; 