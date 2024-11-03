import { useState } from "react";
import "./Login.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);

  const navigate = useNavigate();

  function handleTogglePage() {
    setIsLoginPage((prev) => !prev);
  }

  function handleLogin() {
    if (email && password) {
      let userInfo = {
        email,
        password,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/tickets");
    } else {
      alert("Please fill all fields.");
    }
  }
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

          {/* Name Input */}
          {!isLoginPage && (
            <>
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  placeholder="e.g Tushar"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </>
          )}
          {/* Email Input */}
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              placeholder="info@wisseninfotech.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Button */}
          <button className="login-btn" onClick={handleLogin}>
            {isLoginPage ? "Sign In" : "Sign up"}
          </button>

          {/* Sign Up Option */}
          <p className="signup-option">
            Dont have an account?{" "}
            <a onClick={handleTogglePage} style={{ cursor: "pointer" }}>
              {isLoginPage ? "Sign Up" : "Log in "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
