import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  let userId;
  const handleClose = () => setOpen(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        userId = parsedUserData._id;
        if (parsedUserData && parsedUserData.userType) {
          setUserType(parsedUserData.userType);
          console.log(userType);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [JSON.parse(localStorage.getItem("userData"))]);

  const handleOpen = async() => {
    // console.log('User Id',id)
    try{
      const response = await fetch(`http://localhost:9000/interest/interestedBuyer/${userId}`,{
        method:'GET'
      })
      const data = await response.json()
      // console.log(data)
      console.log("Datas: ",data)
    }catch(error){
      console.error('Error',error)
    }
    
    setOpen(true)};
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserType(null);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" height="60px" />
        <a href="/">Recycle Net</a>
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
            <div className="notification-icon">
              <NotificationsIcon onClick={handleOpen}/>
            </div>
          </>
        )}
        <a href="/about" className="nav-item">
          About Us
        </a>
        {userType ? (
          <>

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Interested Buyer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
