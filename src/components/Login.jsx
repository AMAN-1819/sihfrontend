import React, { useState } from 'react';
import './Login.css'; // Login page styles

function Login({ setLocation }) {
  const [inputLocation, setInputLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLocation) {
      setLocation(inputLocation); // Set the location and proceed to the dashboard
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <img src="/icons/logo.jpeg" alt="Team Logo" className="logo" />
        <h2>Team Members</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/icons/Aman.jpeg" alt="Member 1" className="team-pic" />
            <span>Aman Ojha</span>
          </div>
          <div className="team-member">
            <img src="/icons/waqar.jpeg" alt="Member 2" className="team-pic" />
            <span>Mohd. Waqar Ahmed</span>
          </div>
          <div className="team-member">
            <img src="/icons/aditi.jpg" alt="Member 3" className="team-pic" />
            <span>Aditi Gupta</span>
          </div>
          <div className="team-member">
            <img src="/icons/ansheshwar.jpeg" alt="Member 4" className="team-pic" />
            <span>Ansheshwar Gupta</span>
          </div>
          <div className="team-member">
            <img src="/icons/krishnansh.png" alt="Member 5" className="team-pic" />
            <span>Krishnansh Sharma</span>
          </div>
          <div className="team-member">
            <img src="/icons/lokesh.jpeg" alt="Member 6" className="team-pic" />
            <span>Lokesh Sharma</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-box">
          <h2>Enter Location</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your city"
              value={inputLocation}
              onChange={(e) => setInputLocation(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
