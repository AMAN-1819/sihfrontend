import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Forecast from './components/Forecast';
import Login from './components/Login'; // Import the location input page
import './App.css';

function App() {
  const [location, setLocation] = useState(''); // Track the location input

  return (
    <div className="app">
      {/* Conditionally render the location input page or the app content */}
      {!location ? (
        <Login setLocation={setLocation} /> // Pass the setLocation handler to Login component
      ) : (
        <>
          <Sidebar location={location} /> {/* Pass the location to Sidebar */}
          <Forecast location={location} /> {/* Pass the location to Forecast */}
        </>
      )}
    </div>
  );
}

export default App;
