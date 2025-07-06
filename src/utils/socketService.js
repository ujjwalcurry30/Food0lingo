import { io } from 'socket.io-client';
import { store } from '../redux/store';
import { updateOrderStatus, setSocketConnected, setError } from '../redux/slices/orderTrackingSlice';

class SocketService {
  constructor() {
    this.socket = null;
    this.isConnected = false;
  }

  connect() {
    if (this.socket && this.isConnected) {
      return;
    }

    this.socket = io('http://localhost:3001');

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      this.isConnected = true;
      store.dispatch(setSocketConnected(true));
      store.dispatch(setError(null));
      
      // Sync existing orders with backend
      this.syncOrders();
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
      this.isConnected = false;
      store.dispatch(setSocketConnected(false));
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      store.dispatch(setError('Failed to connect to tracking server'));
    });

    this.socket.on('orderUpdate', (orderData) => {
      console.log('Received order update:', orderData);
      store.dispatch(updateOrderStatus({
        orderId: orderData.id,
        status: orderData.status,
        location: orderData.currentLocation
      }));
    });

    this.socket.on('orderCreated', (orderData) => {
      console.log('Order created on server:', orderData);
      // The order is already created in Redux, just sync the ID if needed
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
      store.dispatch(setSocketConnected(false));
    }
  }

  joinOrderTracking(orderId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('joinOrderTracking', { orderId });
    }
  }

  leaveOrderTracking(orderId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('leaveOrderTracking', { orderId });
    }
  }

  requestOrderUpdate(orderId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('requestOrderUpdate', { orderId });
    }
  }

  updateOrderStatus(orderId, status, location) {
    if (this.socket && this.isConnected) {
      this.socket.emit('updateOrderStatus', { orderId, status, location });
    }
  }

  createOrder(orderData) {
    if (this.socket && this.isConnected) {
      this.socket.emit('createOrder', orderData);
    }
  }

  syncOrders() {
    const state = store.getState();
    const { activeOrders } = state.orderTracking;
    
    if (activeOrders.length > 0 && this.socket && this.isConnected) {
      this.socket.emit('syncOrders', activeOrders);
    }
  }

  simulateOrderUpdates(orderId) {
    if (this.socket && this.isConnected) {
      this.socket.emit('simulateOrderUpdates', orderId);
    }
  }
}

const socketService = new SocketService();
export default socketService; 