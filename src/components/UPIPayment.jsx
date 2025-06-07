import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import { QrCode2 as QrCodeIcon } from '@mui/icons-material';

const UPIPayment = ({ open, onClose, amount, onPaymentComplete }) => {
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');

  const validateUpiId = (id) => {
    // Basic UPI ID validation (example: name@upi)
    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/;
    return upiRegex.test(id);
  };

  const handlePayment = () => {
    if (!upiId) {
      setError('Please enter your UPI ID');
      return;
    }

    if (!validateUpiId(upiId)) {
      setError('Please enter a valid UPI ID (e.g., name@upi)');
      return;
    }

    // Here you would typically integrate with a payment gateway
    // For now, we'll just simulate a successful payment
    onPaymentComplete({
      method: 'UPI',
      upiId,
      amount,
      status: 'success',
      transactionId: `UPI${Date.now()}`,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>UPI Payment</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Amount to Pay: ₹{amount}
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Enter UPI ID"
          variant="outlined"
          value={upiId}
          onChange={(e) => {
            setUpiId(e.target.value);
            setError('');
          }}
          placeholder="example@upi"
          error={!!error}
          helperText={error}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <QrCodeIcon color="primary" />
          <Typography variant="body2" color="text.secondary">
            You can also scan the QR code to pay
          </Typography>
        </Box>

        <Alert severity="info" sx={{ mb: 2 }}>
          After entering your UPI ID, you will be redirected to your UPI app to complete the payment.
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handlePayment}
          disabled={!upiId}
        >
          Pay ₹{amount}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UPIPayment; 