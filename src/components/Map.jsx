import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 26.776, // Center near Ganga
  lng: 82.194,
};

const gangaPath = [
  { lat: 30.160, lng: 78.850 }, // Start point (Gangotri)
  { lat: 29.945, lng: 78.157 }, // Rishikesh
  { lat: 29.583, lng: 78.150 }, // Haridwar
  { lat: 28.708, lng: 77.207 }, // Delhi
  { lat: 27.569, lng: 80.669 }, // Kanpur
  { lat: 26.846, lng: 80.946 }, // Lucknow
  { lat: 25.317, lng: 82.973 }, // Varanasi
  { lat: 25.594, lng: 85.137 }, // Patna
  { lat: 23.520, lng: 87.311 }, // Kolkata
];

const polylineOptions = {
  strokeColor: "#0000FF", // Blue line for the river
  strokeOpacity: 1.0,
  strokeWeight: 4,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {/* Polyline to show the Ganga River path */}
        <Polyline path={gangaPath} options={polylineOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
