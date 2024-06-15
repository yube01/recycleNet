// Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is user data in localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      setIsUserLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("userData");
    setIsUserLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" height="60px" />
        <h1>
          <a href="/">
            Recycle<span className="net">Net</span>
          </a>
        </h1>
      </div>
      <div className="nav-menu">
        <a href="/sellnow" className="nav-item">
          Sell Now
        </a>
        <a href="/list" className="nav-item">
          Add Inventory
        </a>
        <a href="/about" className="nav-item">
          About Us
        </a>
        {isUserLoggedIn ? (
          <>
            <div className="notification-icon">
              <NotificationsIcon style={{ fontSize: 25 }} />
            </div>
            <a href="#" className="nav-item" onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <a href="/register" className="nav-item signup">
              Sign Up
            </a>
            <a href="/login" className="nav-item">
              Login
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
