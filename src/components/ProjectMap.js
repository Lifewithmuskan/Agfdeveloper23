import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ProjectMap = ({ projects, center = [20.5937, 78.9629], zoom = 5 }) => {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer center={center} zoom={zoom} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projects.map((project) => (
          <Marker key={project.id} position={project.coordinates}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-gray-600">{project.location}</p>
                <p className="text-sm text-gray-500">{project.type} • {project.status}</p>
                <p className="font-medium text-primary-600 mt-1">{project.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ProjectMap;