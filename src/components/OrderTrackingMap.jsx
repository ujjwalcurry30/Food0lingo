import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './OrderTrackingMap.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different order statuses
const createCustomIcon = (status) => {
  const colors = {
    preparing: '#ff9800',
    out_for_delivery: '#2196f3',
    nearby: '#4caf50',
    delivered: '#4caf50'
  };

  return L.divIcon({
    className: `custom-marker ${status}`,
    html: `
      <div class="marker-content">
        🚚
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

// Component to handle map updates when order location changes
const MapUpdater = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, zoom || 15);
    }
  }, [center, zoom, map]);

  return null;
};

const OrderTrackingMap = ({ orderId, deliveryLocation }) => {
  const { currentOrder, socketConnected } = useSelector(state => state.orderTracking);
  
  // Default center (Delhi, India)
  const defaultCenter = [28.6139, 77.2090];
  
  // Get current order location or use delivery location
  const currentLocation = currentOrder?.currentLocation || deliveryLocation || defaultCenter;
  
  // Restaurant location (in a real app, this would come from the order data)
  const restaurantLocation = [28.6139, 77.2090]; // Same as default for demo
  
  // Delivery location (customer's address)
  const customerLocation = deliveryLocation || [28.6139, 77.2090];

  return (
    <div className="map-container">
      <div className="map-wrapper">
        <MapContainer
          center={currentLocation}
          zoom={13}
          className="leaflet-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Restaurant Marker */}
          <Marker position={restaurantLocation} icon={createCustomIcon('preparing')}>
            <Popup>
              <div className="map-popup-content">
                <div className="map-popup-title">Restaurant</div>
                <div className="map-popup-description">Your order is being prepared here</div>
              </div>
            </Popup>
          </Marker>

          {/* Delivery Agent Marker (if order is out for delivery) */}
          {currentOrder?.status === 'out_for_delivery' && currentOrder?.currentLocation && (
            <Marker position={currentOrder.currentLocation} icon={createCustomIcon('out_for_delivery')}>
              <Popup>
                <div className="map-popup-content">
                  <div className="map-popup-title">Delivery Agent</div>
                  <div className="map-popup-description">Your order is on the way!</div>
                  <div className="map-popup-description">Status: {currentOrder.status}</div>
                </div>
              </Popup>
            </Marker>
          )}

          {/* Customer Location Marker */}
          <Marker position={customerLocation} icon={createCustomIcon('delivered')}>
            <Popup>
              <div className="map-popup-content">
                <div className="map-popup-title">Delivery Address</div>
                <div className="map-popup-description">Your order will be delivered here</div>
              </div>
            </Popup>
          </Marker>

          {/* Update map when location changes */}
          <MapUpdater center={currentLocation} zoom={13} />
        </MapContainer>
      </div>
      
      {/* Connection Status */}
      <div className={`connection-indicator ${socketConnected ? 'connected' : 'disconnected'}`}>
        <div className={`connection-dot ${socketConnected ? 'connected' : 'disconnected'}`}></div>
        {socketConnected ? '🟢 Live Tracking' : '🔴 Offline'}
      </div>
    </div>
  );
};

export default OrderTrackingMap; 