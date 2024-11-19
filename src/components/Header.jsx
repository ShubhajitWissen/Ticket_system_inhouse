import logo from "../assets/Logo.svg";
import moon from "../assets/moon.svg";
import Notification from "../assets/Component 88.svg";
import Avatar from "../assets/Avatar.svg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isDropdown, setIsDropdown] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  const navigate = useNavigate();
  let hideTimer;

  const handleSignout = function () {
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("allUsers");
    localStorage.removeItem("userDetail");
    navigate("/login");
  };

  const handleDropdown = function () {
    if (hideTimer) {
      clearTimeout(hideTimer);
      setIsDropdown(false);
    } else {
      hideTimer = setTimeout(() => {
        setIsDropdown(false);
      }, 1000);
    }
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo Section with Line */}
          <div className="navbar-logo">
            <img src={logo} className="Wissen" alt="logo" />
          </div>
          <div className="line"></div> {/* Line after the logo */}
          <h2 className="Access">{userData.role}</h2>
          {/* Navbar Links with Line */}
          <div className="navbar-right">
            <ul className="navbar-links">
              <li className="Home">
                <Link to="/home">Home</Link>
              </li>
              <li className="History">
                <Link to="/History">History</Link>
              </li>
              <li className="Archive">
                <Link to="/Archive">Archive</Link>
              </li>
            </ul>
            <div className="line"></div> {/* Line after navbar-links */}
            {/* Profile Section */}
            <div className="profile-section">
              <img src={moon} className="icon dark-mode" alt="moon" />
              <img
                src={Notification}
                className="icon notification"
                alt="notification"
              />
              <div className="profile-info">
                <img
                  src={Avatar}
                  className="profile-pic"
                  alt="Avatar"
                  onMouseEnter={() => {
                    clearTimeout(hideTimer);
                    setIsDropdown(true);
                  }}
                  onMouseLeave={handleDropdown}
                />
              </div>
            </div>
          </div>
        </div>
        {isDropdown && (
          <div
            className="dropdown"
            onMouseEnter={() => {
              clearTimeout(hideTimer);
              setIsDropdown(true);
            }}
            onMouseLeave={handleDropdown}
          >
            <span style={{ cursor: "pointer", padding: "4px" }}>
              {userData.username}
            </span>
            <span style={{ cursor: "pointer", padding: "4px" }}>
              {userData.email}
            </span>
            <button onClick={handleSignout}>Logout</button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
