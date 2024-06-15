import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData && parsedUserData.userType) {
          setUserType(parsedUserData.userType);
          console.log(userType);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [JSON.parse(localStorage.getItem("userData"))]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserType(null);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" height="60px" />
        <a href="/">
          Recycle<span style={{ color: "black" }}>Net</span>
        </a>
      </div>
      <div className="nav-menu">
        {userType !== "buyer" && userType && (
          <>
            <a href="/sellnow" className="nav-item">
              Sell Now
            </a>
            <a href="/list" className="nav-item">
              Add Inventory
            </a>
          </>
        )}
        <a href="/about" className="nav-item">
          About Us
        </a>
        {userType ? (
          <>
            <div className="notification-icon">
              <NotificationsIcon />
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
