import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { FaBottleWater } from "react-icons/fa6";
import { PiToiletPaperFill } from "react-icons/pi";
import { GiFruiting } from "react-icons/gi";
import './Sidebar.css';

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
            <HomeIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=plastic">
          <ListItemIcon>
            <FaBottleWater className="icon" />
          </ListItemIcon>
          <ListItemText primary="Plastic Waste" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=paper">
          <ListItemIcon>
            <PiToiletPaperFill className="icon" />
          </ListItemIcon>
          <ListItemText primary="Paper Waste" />
        </ListItem>
        <ListItem button component={Link} to="/category?name=bio">
          <ListItemIcon>
            <GiFruiting className="icon" />
          </ListItemIcon>
          <ListItemText primary="Bio Degradable" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
