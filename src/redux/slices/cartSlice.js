import { createSlice } from '@reduxjs/toolkit';

const calculateDeliveryCharge = (distance) => {
  // Base delivery charge
  let charge = 40;
  
  // Add extra charge based on distance
  if (distance > 2) {
    charge += (distance - 2) * 10; // $10 per km after 2km
  }
  
  return charge;
};

const initialState = {
  items: [],
  total: 0,
  deliveryCharge: 40,
  gst: 0,
  firstOrderDiscount: 0,
  isFirstOrder: true,
  restaurantDistance: 0,
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = calculateTotal(state.items);
      state.gst = state.total * 0.18; // 18% GST
      if (state.isFirstOrder) {
        state.firstOrderDiscount = state.total * 0.1; // 10% first order discount
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = calculateTotal(state.items);
      state.gst = state.total * 0.18;
      if (state.isFirstOrder) {
        state.firstOrderDiscount = state.total * 0.1;
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        state.total = calculateTotal(state.items);
        state.gst = state.total * 0.18;
        if (state.isFirstOrder) {
          state.firstOrderDiscount = state.total * 0.1;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.gst = 0;
      state.firstOrderDiscount = 0;
    },
    setFirstOrder: (state, action) => {
      state.isFirstOrder = action.payload;
      if (!state.isFirstOrder) {
        state.firstOrderDiscount = 0;
      }
    },
    setRestaurantDistance: (state, action) => {
      state.restaurantDistance = action.payload;
      state.deliveryCharge = calculateDeliveryCharge(action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setFirstOrder,
  setRestaurantDistance,
} = cartSlice.actions;

export default cartSlice.reducer; 