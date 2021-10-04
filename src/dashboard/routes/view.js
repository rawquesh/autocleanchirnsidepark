import * as React from "react";
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
import { Helmet } from "react-helmet";

import {
  Analytics,
  Home,
  PeopleAlt,
  ShoppingBag,
  Sms,
} from "@mui/icons-material";
import { Avatar, ListItemButton } from "@mui/material";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../Pages/home/view";
import BookingsPage from "../Pages/bookings/view";
import MembersPage from "../Pages/members/view";
import MarketingPage from "../Pages/marketing/view";
import StatisticPage from "../Pages/statistic/view";

const drawerWidth = 240;

function Dashboard(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(getIndex());

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function getIndex() {
    const path = props.location.pathname.split("/").slice(-1)[0];
    if (path !== "") {
      const i = navData.findIndex((e) => e.path === path);
      if (i === -1) {
        return 0;
      } else {
        return i;
      }
    } else {
      return 0;
    }
  }

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
            selected={selectedIndex === i}
            onClick={(event) => handleListItemClick(event, i)}
            key={data.title}
            component={Link}
            to={"/" + data.path}
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
      <BrowserRouter basename="/dashboard">
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
        <Box component="main">
          <Toolbar />
          <Switch>
            {navData.map((item) => (
              <Route
                key={item}
                exact
                path={"/" + item.path}
                render={() => {
                  return (
                    <>
                      <Helmet>
                        <title>{item.title + " | Dashboard"}</title>
                      </Helmet>
                      <item.page />
                    </>
                  );
                }}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default Dashboard;

const navData = [
  {
    icon: Home,
    title: "Home",
    path: "",
    page: HomePage,
  },
  {
    icon: ShoppingBag,
    title: "Bookings",
    path: "bookings",
    page: BookingsPage,
  },
  {
    icon: PeopleAlt,
    title: "Members",
    path: "members",
    page: MembersPage,
  },
  {
    icon: Sms,
    title: "Marketing",
    path: "marketing",
    page: MarketingPage,
  },
  {
    icon: Analytics,
    title: "Statistic",
    path: "statistic",
    page: StatisticPage,
  },
];
