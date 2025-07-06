const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175"
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175"
  ],
  credentials: true
}));
app.use(express.json());

// Store active orders and their tracking data
const activeOrders = new Map();
let nextOrderId = 1;

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Join order tracking room
  socket.on('joinOrderTracking', ({ orderId }) => {
    socket.join(`order_${orderId}`);
    console.log(`Client ${socket.id} joined tracking for order ${orderId}`);
    
    // Send current order data if exists
    const order = activeOrders.get(orderId);
    if (order) {
      socket.emit('orderUpdate', order);
    }
  });

  // Leave order tracking room
  socket.on('leaveOrderTracking', ({ orderId }) => {
    socket.leave(`order_${orderId}`);
    console.log(`Client ${socket.id} left tracking for order ${orderId}`);
  });

  // Create new order from frontend
  socket.on('createOrder', (orderData) => {
    const newOrder = {
      id: nextOrderId,
      orderNumber: `ORD-${nextOrderId.toString().padStart(3, '0')}`,
      status: 'preparing',
      currentLocation: { lat: 28.6139, lng: 77.2090 }, // Restaurant location
      createdAt: new Date().toISOString(),
      estimatedDelivery: '30-35 min',
      lastUpdated: new Date().toISOString(),
      ...orderData
    };
    
    activeOrders.set(nextOrderId, newOrder);
    console.log(`Created new order: ${newOrder.orderNumber}`);
    
    // Send the created order back to client
    socket.emit('orderCreated', newOrder);
    nextOrderId++;
  });

  // Sync orders from frontend
  socket.on('syncOrders', (orders) => {
    orders.forEach(order => {
      if (!activeOrders.has(order.id)) {
        activeOrders.set(order.id, {
          ...order,
          currentLocation: order.currentLocation || { lat: 28.6139, lng: 77.2090 },
          lastUpdated: new Date().toISOString()
        });
      }
    });
    console.log(`Synced ${orders.length} orders from frontend`);
  });

  // Request order update
  socket.on('requestOrderUpdate', ({ orderId }) => {
    const order = activeOrders.get(orderId);
    if (order) {
      socket.emit('orderUpdate', order);
    }
  });

  // Update order status (from delivery app or admin)
  socket.on('updateOrderStatus', ({ orderId, status, location }) => {
    const order = activeOrders.get(orderId);
    if (order) {
      order.status = status;
      if (location) {
        order.currentLocation = location;
      }
      order.lastUpdated = new Date().toISOString();
      
      // Broadcast update to all clients tracking this order
      io.to(`order_${orderId}`).emit('orderUpdate', order);
      console.log(`Order ${orderId} status updated to: ${status}`);
    }
  });

  // Simulate delivery movement (for demo purposes)
  socket.on('simulateOrderUpdates', (orderId) => {
    const order = activeOrders.get(orderId);
    if (order) {
      console.log(`Starting simulation for order ${orderId}`);
      
      // Simulate delivery agent movement
      const locations = [
        { lat: 28.6139, lng: 77.2090 }, // Restaurant
        { lat: 28.6145, lng: 77.2095 }, // Moving
        { lat: 28.6150, lng: 77.2100 }, // Near customer
        { lat: 28.6155, lng: 77.2105 }  // Customer location
      ];
      
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < locations.length) {
          order.currentLocation = locations[currentIndex];
          order.status = currentIndex === 0 ? 'preparing' : 
                        currentIndex === 1 ? 'out_for_delivery' :
                        currentIndex === 2 ? 'nearby' : 'delivered';
          order.lastUpdated = new Date().toISOString();
          
          io.to(`order_${orderId}`).emit('orderUpdate', order);
          console.log(`Order ${orderId} simulation: ${order.status}`);
          currentIndex++;
        } else {
          clearInterval(interval);
          console.log(`Order ${orderId} simulation completed`);
        }
      }, 5000); // Update every 5 seconds
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// REST API endpoints
app.get('/api/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = activeOrders.get(parseInt(orderId));
  
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

app.get('/api/orders', (req, res) => {
  res.json(Array.from(activeOrders.values()));
});

app.post('/api/orders', (req, res) => {
  const orderData = req.body;
  const newOrder = {
    id: nextOrderId,
    orderNumber: `ORD-${nextOrderId.toString().padStart(3, '0')}`,
    status: 'preparing',
    currentLocation: { lat: 28.6139, lng: 77.2090 },
    createdAt: new Date().toISOString(),
    estimatedDelivery: '30-35 min',
    lastUpdated: new Date().toISOString(),
    ...orderData
  };
  
  activeOrders.set(nextOrderId, newOrder);
  nextOrderId++;
  
  res.json(newOrder);
});

app.post('/api/orders/:orderId/status', (req, res) => {
  const { orderId } = req.params;
  const { status, location } = req.body;
  
  const order = activeOrders.get(parseInt(orderId));
  if (order) {
    order.status = status;
    if (location) {
      order.currentLocation = location;
    }
    order.lastUpdated = new Date().toISOString();
    
    // Broadcast to all connected clients
    io.to(`order_${orderId}`).emit('orderUpdate', order);
    
    res.json({ success: true, order });
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    activeConnections: io.engine.clientsCount,
    activeOrders: activeOrders.size,
    nextOrderId: nextOrderId
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Socket.IO server ready for order tracking`);
  console.log(`Health check: http://localhost:${PORT}/health`);
}); 