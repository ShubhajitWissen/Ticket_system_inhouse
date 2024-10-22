
import React from 'react';
import logo from "./assets/Logo.svg";
import moon from "./assets/moon.svg";
import Notification from "./assets/Component 88.svg";
import Avatar from "./assets/Avatar.svg";
import Arrow from "./assets/arrow-down.svg";
import './Header.css';

function Header() {
    return (
        <div>
            <nav className='navbar'>
                <div className="navbar-content">
                    {/* Logo Section with Line */}
                    <div className="navbar-logo">
                        <img src={logo} className="Wissen" alt="logo" />
                    </div>
                    <div className="line"></div> {/* Line after the logo */}
                    <h2 className="Access">User</h2>
                    {/* Navbar Links with Line */}
                    <div className="navbar-right">
                        <ul className="navbar-links">
                            <li className="Home"><a href="#home">Home</a></li>
                            <li className="History"><a href="#History">History</a></li>
                            <li className="Archive"><a href="#Archive">Archive</a></li>
                        </ul>
                        <div className="line"></div> {/* Line after navbar-links */}

                        {/* Profile Section */}
                        <div className="profile-section">
                            <img src={moon} className="icon dark-mode" alt="moon" />
                            <img src={Notification} className="icon notification" alt="notification" />
                            <div className="profile-info">
                                <img src={Avatar} className="profile-pic" alt="Avatar" />
                                <h2 className="profile-name">Name</h2>
                                <img src={Arrow} className="dropdown-icon" alt="Arrow-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
