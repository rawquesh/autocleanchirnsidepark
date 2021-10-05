import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Analytics, Home, PeopleAlt, Sms } from "@mui/icons-material";
import { Avatar, ListItemButton } from "@mui/material";

const drawerWidth = 240;

function Appbar({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#233044", height: "100%", color: "white" }}>
      <Toolbar>
        <img src="images/logo.svg" />
        <Typography
          style={{
            marginLeft: "10px",
            fontSize: "0.9rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
          component="div"
        >
          Auto Clean
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navData.map((data, i) => (
          <ListItemButton
            selected={selectedIndex == i}
            onClick={(event) => handleListItemClick(event, i)}
            key={data.title}
          >
            <ListItemIcon>
              {<data.icon style={{ fontSize: "25px" }} color="action" />}
            </ListItemIcon>
            <Typography
              letterSpacing="1px"
              fontSize="15px"
              color="white"
              variant="p"
              component="div"
            >
              {data.title}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        style={{ backgroundColor: "white" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            color="primary"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" noWrap component="div">
            Hi, Welcome back
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <Avatar
              sx={{ width: 27, height: 27 }}
              alt="Account"
              src="/images/avatar.jpg"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;

const navData = [
  {
    icon: Home,
    title: "Home",
    path: "/home",
  },
  {
    icon: PeopleAlt,
    title: "Members",
    path: "/members",
  },
  {
    icon: Sms,
    title: "Marketing",
    path: "/marketing",
  },
  {
    icon: Analytics,
    title: "Statistic",
    path: "/statistic",
  },
];
