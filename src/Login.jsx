import React from 'react';
import './Login.css'; // Import the CSS for styling

function Login() {
  return (
    <div className="login-page">
      {/* Left Section with Image */}
      <div className="login-left">
        <div className="overlay-content">
          <h1>WAione</h1>
          <p>by Wissen | Driving Digital Transformation</p>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h2>Login to Wissen</h2>
          <p>Welcome back! Please enter your details.</p>

          {/* Email Input */}
          <label htmlFor="email">Email <span>*</span></label>
          <div className="input-container">
            <input type="email" id="email" placeholder="info@wisseninfotech.com" />
            <i className="icon-envelope"></i> {/* Add an envelope icon here */}
          </div>

          {/* Password Input */}
          <label htmlFor="password">Password <span>*</span></label>
          <div className="input-container">
            <input type="password" id="password" placeholder="••••••••" />
            <i className="icon-lock"></i> {/* Add a lock icon here */}
          </div>

          {/* Sign In Button */}
          <button className="login-btn">Sign In</button>

          {/* Sign Up Option */}
          <p className="signup-option">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
