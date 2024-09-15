import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sub"><div className="search-bar">
        
      </div>
      <div className="photo">
      <img src="/icons/logo.jpeg"   />
      </div>
      <div className="location-info">
        <h2>Buxar, Bihar</h2>
        <div className="details"><h1>7.72 pH</h1>
        <p>Moderate Polluted</p>
        <p>High: 8.22 | Low: 7.22</p></div>
        
      </div>
      <div className="today"><div className="highlights">
        <h3>Today Highlights</h3>
        <p>Dissolved Oxygen: 8.75 mg/L</p>
        <p>Conductivity: 332 μmhos/cm</p>
        <p>BOD: 1 BDL</p>
        <p>Fecal Coliform: 18500 MPN/100ml</p>
        <p>Total Coliform: 29500 MPN/100ml</p>
      </div></div>
      
    </div></div>
      
  );
};

export default Sidebar;
