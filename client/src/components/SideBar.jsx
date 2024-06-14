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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          marginTop: "5rem",
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/category1">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Category 1" />
        </ListItem>
        <ListItem button component={Link} to="/category2">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Category 2" />
        </ListItem>
        <ListItem button component={Link} to="/category3">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Category 3" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
