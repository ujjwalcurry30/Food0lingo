# Food0lingo - Food Delivery App

A modern food delivery application built with React, Redux, and Socket.IO for real-time order tracking.

## Features

- 🍽️ **Restaurant Menu Browsing** - Browse through various restaurants and their menus
- 🛒 **Shopping Cart** - Add items to cart and manage quantities
- 💳 **Checkout Process** - Complete orders with payment integration
- 📍 **Real-time Order Tracking** - Track your food orders in real-time using Socket.IO
- 🗺️ **Interactive Maps** - View order location on interactive maps using Leaflet
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Order Tracking with Socket.IO

The app includes a comprehensive real-time order tracking system:

### Features:
- **Live Location Updates** - Real-time delivery agent location tracking
- **Order Status Updates** - Track order progress from preparation to delivery
- **Interactive Maps** - Visual representation of order location using Leaflet maps
- **Progress Indicators** - Visual progress bars showing order completion
- **Connection Status** - Real-time connection status indicators

### How it Works:
1. **Socket.IO Connection** - Establishes real-time connection between client and server
2. **Order Rooms** - Each order has its own tracking room for isolated updates
3. **Location Broadcasting** - Delivery agent location updates are broadcast to all tracking clients
4. **Status Synchronization** - Order status changes are synchronized across all connected clients

## Tech Stack

### Frontend:
- **React 18** - Modern React with hooks
- **Redux Toolkit** - State management
- **Material-UI** - UI components and theming
- **Socket.IO Client** - Real-time communication
- **React Leaflet** - Interactive maps
- **Vite** - Build tool and dev server

### Backend:
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **CORS** - Cross-origin resource sharing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Food0lingo
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:3001`

2. **Start the frontend development server**
   ```bash
   # From the root directory
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Access the application**
   - Open `http://localhost:5173` in your browser
   - Navigate to the "Orders" page to test order tracking
   - Click "Track Order" on any order to see real-time tracking

## Order Tracking Demo

To test the order tracking feature:

1. Go to the "Orders" page
2. Click "Track Order" on any order
3. Watch the real-time updates:
   - Order status changes every 5 seconds
   - Map markers update with new locations
   - Progress bar shows completion percentage
   - Connection status indicator shows live tracking

### Demo Order Status Flow:
1. **Preparing** - Order is being prepared at restaurant
2. **Out for Delivery** - Order is picked up and on the way
3. **Nearby** - Order is close to delivery location
4. **Delivered** - Order has been delivered

## API Endpoints

### Socket.IO Events:
- `joinOrderTracking` - Join order tracking room
- `leaveOrderTracking` - Leave order tracking room
- `requestOrderUpdate` - Request current order status
- `updateOrderStatus` - Update order status (admin/delivery app)
- `orderUpdate` - Receive order status updates

### REST Endpoints:
- `GET /api/orders` - Get all active orders
- `GET /api/orders/:orderId` - Get specific order details
- `POST /api/orders/:orderId/status` - Update order status
- `GET /health` - Server health check

## Project Structure

```
Food0lingo/
├── src/
│   ├── components/
│   │   ├── OrderTracking.jsx      # Main order tracking component
│   │   ├── OrderTrackingMap.jsx   # Interactive map component
│   │   └── ...
│   ├── pages/
│   │   ├── Orders.jsx             # Orders page with tracking
│   │   └── ...
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── orderTrackingSlice.js  # Order tracking state
│   │   │   └── ...
│   │   └── store.js
│   └── utils/
│       └── socketService.js       # Socket.IO service
├── server/
│   ├── server.js                  # Express + Socket.IO server
│   └── package.json
└── package.json
```

## Customization

### Adding Real Delivery Integration:
1. Replace demo location data with real GPS coordinates
2. Integrate with delivery partner APIs
3. Add authentication for delivery agents
4. Implement push notifications

### Map Customization:
- Change map tiles provider
- Customize markers and icons
- Add route visualization
- Implement geofencing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
