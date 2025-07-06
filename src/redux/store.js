import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import cartReducer from './slices/cartSlice';
import orderTrackingReducer from './slices/orderTrackingSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    cart: cartReducer,
    orderTracking: orderTrackingReducer,
  },
}); 