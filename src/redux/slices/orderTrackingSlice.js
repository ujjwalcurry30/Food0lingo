import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeOrders: [],
  orderHistory: [],
  currentOrder: null,
  deliveryLocation: null,
  isTracking: false,
  socketConnected: false,
  error: null,
  nextOrderId: 1
};

const orderTrackingSlice = createSlice({
  name: 'orderTracking',
  initialState,
  reducers: {
    setActiveOrders: (state, action) => {
      state.activeOrders = action.payload;
    },
    addOrder: (state, action) => {
      const newOrder = {
        ...action.payload,
        id: state.nextOrderId,
        orderNumber: `ORD-${state.nextOrderId.toString().padStart(3, '0')}`,
        status: 'preparing',
        currentLocation: { lat: 28.6139, lng: 77.2090 }, // Restaurant location
        createdAt: new Date().toISOString(),
        estimatedDelivery: '30-35 min',
        lastUpdated: new Date().toISOString()
      };
      state.activeOrders.push(newOrder);
      state.nextOrderId += 1;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status, location } = action.payload;
      const order = state.activeOrders.find(o => o.id === orderId);
      if (order) {
        order.status = status;
        if (location) {
          order.currentLocation = location;
        }
        order.lastUpdated = new Date().toISOString();
      }
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    setDeliveryLocation: (state, action) => {
      state.deliveryLocation = action.payload;
    },
    setIsTracking: (state, action) => {
      state.isTracking = action.payload;
    },
    setSocketConnected: (state, action) => {
      state.socketConnected = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    completeOrder: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.activeOrders.findIndex(o => o.id === orderId);
      if (orderIndex !== -1) {
        const completedOrder = {
          ...state.activeOrders[orderIndex],
          status: 'delivered',
          completedAt: new Date().toISOString()
        };
        state.orderHistory.push(completedOrder);
        state.activeOrders.splice(orderIndex, 1);
        if (state.currentOrder?.id === orderId) {
          state.currentOrder = null;
        }
      }
    },
    createOrderFromCart: (state, action) => {
      const { cartItems, customerInfo, restaurantInfo, total } = action.payload;
      
      const newOrder = {
        id: state.nextOrderId,
        orderNumber: `ORD-${state.nextOrderId.toString().padStart(3, '0')}`,
        status: 'preparing',
        currentLocation: { lat: 28.6139, lng: 77.2090 }, // Restaurant location
        createdAt: new Date().toISOString(),
        estimatedDelivery: '30-35 min',
        lastUpdated: new Date().toISOString(),
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total: total,
        customerInfo: customerInfo,
        restaurantInfo: restaurantInfo,
        deliveryAddress: customerInfo.address,
        paymentMethod: customerInfo.paymentMethod || 'cod'
      };
      
      state.activeOrders.push(newOrder);
      state.nextOrderId += 1;
    }
  }
});

export const {
  setActiveOrders,
  addOrder,
  updateOrderStatus,
  setCurrentOrder,
  setDeliveryLocation,
  setIsTracking,
  setSocketConnected,
  setError,
  clearError,
  completeOrder,
  createOrderFromCart
} = orderTrackingSlice.actions;

export default orderTrackingSlice.reducer; 