import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "@/components/icon";

export default function Map({ events }) {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={4}
      scrollWheelZoom={true}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        <Marker
          key={event.id}
          icon={icon}
          position={[
            event.geometry[0].coordinates[1],
            event.geometry[0].coordinates[0],
          ]}
        >
          <Popup>{event.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

/*
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "@/components/icon";

export default function Map({ events}){
    const position = [51.505, -0.09];

    return(
        <MapContainer center={position} zoom={4} scrollWheelZoom={true} style={{height:"100vh",width:"100vw"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {events.map((event) => (
        <Marker key={event.id} icon={icon} position={[event.geometry[0].coordinates[1], 
        event.geometry[0].coordinates[0]]}>
        <Popup>
          {event.title}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
    )
}
*/
/*
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from "@/components/icon";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map({ events }) {
  const position = [20, 0]; // Default center position for better world view

  return (
    <MapContainer 
      center={position} 
      zoom={2} 
      scrollWheelZoom={true} 
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {events
        ?.filter(event => 
          event.geometry?.length > 0 &&
          event.geometry[0].coordinates?.length === 2
        )
        .map((event) => {
          const [longitude, latitude] = event.geometry[0].coordinates;
          return (
            <Marker 
              key={event.id} 
              position={[latitude, longitude]}
              icon={icon}
            >
              <Popup>
                <div className="text-sm font-medium">
                  {event.title}
                </div>
                {event.categories?.map(cat => (
                  <span 
                    key={cat.id}
                    className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs mr-1"
                  >
                    {cat.title}
                  </span>
                ))}
              </Popup>
            </Marker>
          )
        })}
    </MapContainer>
  )
}
  */