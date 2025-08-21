import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Feature data with unique icon URLs
const features = [

  {
    name: 'V Biotech Park',
    description: 'Cutting-edge research and innovation facility.',
    image: 'https://source.unsplash.com/random/300x200?biotech',
    iconUrl: 'https://source.unsplash.com/random/32x32?biotech',
    coordinates: [28.6135, 77.3660],
  },
  {
    name: 'Recreation & Entertainment Hub',
    description: 'Fun for all ages with movies, games, and more.',
    image: 'https://source.unsplash.com/random/300x200?amusement',
    iconUrl: 'https://source.unsplash.com/random/32x32?amusement',
    coordinates: [28.6110, 77.3635],
  },
  {
    name: 'School',
    description: 'World-class education with modern facilities.',
    image: 'https://source.unsplash.com/random/300x200?school',
    iconUrl: 'https://source.unsplash.com/random/32x32?school',
    coordinates: [28.6140, 77.3620],
  },
  {
    name: 'Shopping',
    description: 'Convenient retail for all your daily needs.',
    image: 'https://source.unsplash.com/random/300x200?shop',
    iconUrl: 'https://source.unsplash.com/random/32x32?shop',
    coordinates: [28.6105, 77.3650],
  },
  {
    name: 'Hospital',
    description: 'State-of-the-art healthcare services.',
    image: 'https://source.unsplash.com/random/300x200?hospital',
    iconUrl: 'https://source.unsplash.com/random/32x32?hospital',
    coordinates: [28.6130, 77.3615],
  },
  {
    name: 'Petrol Pump',
    description: 'Reliable fuel station for your convenience.',
    image: 'https://source.unsplash.com/random/300x200?gas-station',
    iconUrl: 'https://source.unsplash.com/random/32x32?gas-station',
    coordinates: [28.6120, 77.3665],
  },
  
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)', transition: { duration: 0.3 } },
};

// Create custom icon for each feature
const createCustomIcon = (iconUrl) =>
  new L.Icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

// Routing Machine Component
const RoutingMachine = ({ start, end }) => {
  const map = useMap();
  const routingControlRef = useRef(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!map || !start || !end || !start.length || !end.length) {
      console.warn('RoutingMachine: Missing map, start, or end coordinates');
      return;
    }

    // Prevent re-initialization during hot reload
    if (isMountedRef.current) {
      return;
    }

    let routingControl = null;
    try {
      routingControl = L.Routing?.control({
        waypoints: [
          L.latLng(start[0], start[1]),
          L.latLng(end[0], end[1]),
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: 'blue', weight: 4 }],
        },
        show: false,
        addWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
      });

      if (routingControl) {
        routingControl.addTo(map);
        routingControlRef.current = routingControl;
        isMountedRef.current = true;
      } else {
        console.error('Failed to initialize L.Routing.control');
      }
    } catch (error) {
      console.error('Error initializing routing control:', error);
    }

    return () => {
      if (routingControlRef.current && map) {
        try {
          map.removeControl(routingControlRef.current);
          routingControlRef.current = null;
          isMountedRef.current = false;
        } catch (error) {
          console.warn('Error removing routing control:', error);
        }
      }
    };
  }, [map, start, end]);

  return null;
};

const LocationFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const mainLocation = features[0].coordinates; // Shopping Center as main location

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore NextGen Location
        </motion.h1>

        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Map Section */}
          <motion.div
            className="lg:w-1/2 h-[400px] sm:h-[600px] rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <MapContainer
              center={[28.6127, 77.3649]}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {features.map((feature, index) => (
                <Marker
                  key={index}
                  position={feature.coordinates}
                  icon={createCustomIcon(feature.iconUrl)}
                >
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-semibold">{feature.name}</h3>
                      <p>{feature.description}</p>
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="w-24 h-16 object-cover mt-2 rounded"
                      />
                    </div>
                  </Popup>
                </Marker>
              ))}
              {selectedFeature && (
                <RoutingMachine start={mainLocation} end={selectedFeature.coordinates} />
              )}
            </MapContainer>
          </motion.div>

          {/* Feature List Section */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center space-x-4 shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-24 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{feature.name}</h2>
                  <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  <motion.button
                    className="mt-2 px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFeature(feature)}
                  >
                    Explore
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationFeatures;