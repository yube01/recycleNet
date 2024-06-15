// Navbar.js
import React from "react";
import "./Navbar.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Recycle Net</a>
      </div>
      <div className="nav-menu">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/about" className="nav-item">
          About Us
        </a>
        <a href="/signup" className="nav-item signup">
          Sign Up
        </a>
        <a href="/login" className="nav-item">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Nav;
