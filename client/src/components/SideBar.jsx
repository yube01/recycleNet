// SideBar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { FaBeer } from 'react-icons/fa'; // Corrected import

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        zIndex: 1000, // Ensure sidebar is below the navbar
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          position: 'fixed',
          top: '4rem', // Adjust based on navbar height
          left: 0,
          height: 'calc(100% - 4rem)',
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=vegetable-wastes">
          <ListItemIcon>
            <FaBeer style={{ fontSize: '24px', color: 'inherit' }} />
          </ListItemIcon>
          <ListItemText primary="Plastic Waste" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=fruit-wastes">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Paper Waste" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=paper-wastes">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Bio-Degradable Waste" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideBar;
