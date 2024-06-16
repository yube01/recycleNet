import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GrassIcon from '@mui/icons-material/Grass';
import { GiFruiting } from "react-icons/gi";
import { RxCrumpledPaper } from "react-icons/rx";
import WineBarIcon from '@mui/icons-material/WineBar';

const iconStyle = { fontSize: "24px", color: "inherit" };

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        zIndex: 1000, // Ensure sidebar is below the navbar
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          position: "fixed",
          top: "7rem", // Adjust based on navbar height
          left: 0,
          height: "calc(100% - 4rem)",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=vegetable-wastes">
          <ListItemIcon>
            <GrassIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Vegetable Wastes" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=fruit-wastes">
          <ListItemIcon>
            <GiFruiting style={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Fruit Wastes" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=paper-wastes">
          <ListItemIcon>
            <RxCrumpledPaper style={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Paper Wastes" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=other">
          <ListItemIcon>
            <WineBarIcon style={iconStyle} />
          </ListItemIcon>
          <ListItemText primary="Others" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideBar;
