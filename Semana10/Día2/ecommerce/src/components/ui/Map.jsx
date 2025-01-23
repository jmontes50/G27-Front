import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    // añadimos un div con una altura para que sepa como debe mostrar el mapa
    <div className="w-full border-2 border-gray-500 rounded h-96">
      <MapContainer center={[51.505, -0.09]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
