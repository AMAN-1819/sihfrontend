import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import './Forecast.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; // For modal styling
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // For Leaflet styling
import 'leaflet-polylinedecorator'; // Import the polyline decorator

// Registering the Chart.js elements
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

// Leaflet configuration
const containerStyle = {
  width: '100%',
  height: '500px',
};

const gangaPath = [
  [30.160, 78.850], // Gangotri
  [29.945, 78.157], // Rishikesh
  [29.583, 78.150], // Haridwar
  [28.708, 77.207], // Delhi
  [27.569, 80.669], // Kanpur
  [26.846, 80.946], // Lucknow
  [25.317, 82.973], // Varanasi
  [25.594, 85.137], // Patna
  [23.520, 87.311], // Kolkata
];

const polylineOptions = {
  color: '#0000FF',
  weight: 4,
  opacity: 1.0,
};

const Forecast = () => {
  const [openMap, setOpenMap] = useState(false); // To toggle the modal for the map

  // Handle the map initialization and animation
  useEffect(() => {
    if (openMap) {
      // Initialize the map when the modal opens
      const map = L.map('map').setView([25.317, 82.973], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const polyline = L.polyline(gangaPath, polylineOptions).addTo(map);

      L.polylineDecorator(polyline, {
        patterns: [
          { offset: 0, repeat: 10, symbol: L.Symbol.dashedLine({ pixelSize: 5, pathOptions: { color: 'red' } }) }
        ]
      }).addTo(map);
    }
  }, [openMap]);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'pH Levels',
        data: [6.9, 7.1, 7.22, 7.2, 6.7, 8.5, 8.7, 8.9],
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'red',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="forecast">
  <div className="forecast-header">
    <h2>
      {
        "Forecasted Quality".split("").map((letter, index) => (
          <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
        ))
      }
    </h2>
  </div>


      
      <div className="forecast-cards">
        <div className="forecast-card">
          <p>Today</p>
          <img src="/icons/water.png" alt="Quality" className="quality-icon1" />
          <h2>7.72 pH</h2>
        </div>
        <div className="forecast-card">
          <p>Tomm.</p>
          <img src="/icons/water.png" alt="Quality" className="quality-icon2" />
          <h2>7.82 pH</h2>
        </div>
        <div className="forecast-card">
          <p>18 Sept</p>
          <img src="/icons/water.png" alt="Quality" className="quality-icon" />
          <h2>7.22 pH</h2>
        </div>
        <div className="forecast-card">
          <p>19 Sept</p>
          <img src="/icons/water.png" alt="Quality" className="quality-icon4" />
          <h2>8.5 pH</h2>
        </div>
        <div className="forecast-card">
          <p>20 Sept</p>
          <img src="/icons/water.png" alt="Quality" className="quality-icon" />
          <h2>8.1 pH</h2>
        </div>
        <div className="forecast-card">
          <p>21 Sept</p>
          <img src="/icons/water.png" alt="Quality" className="quality-icon3" />
          <h2>7.1 pH</h2>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-container">
        <h3 className="chart-title">Quality v/s Month</h3>
        <Line data={data} options={options} />
      </div>

      {/* Modal for displaying the Leaflet Map */}
      <Modal open={openMap} onClose={() => setOpenMap(false)} center>
        <div id="map" style={containerStyle}></div>
      </Modal>
    </div>
  );
};

export default Forecast;
