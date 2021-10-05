import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { alpha } from "@mui/material/styles";
import {
  Button,
  Box,
  Divider,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Icon,
} from "@mui/material";
import MenuPopover from "../components/menuPopover";
// import { AppSettingsAlt, Home, Person } from "@mui/icons-material";
// components
//

// ----------------------------------------------------------------------

// const MENU_OPTIONS = [
//   {
//     label: "Home",
//     icon: Home,
//     linkTo: "/",
//   },
//   {
//     label: "Profile",
//     icon: Person,
//     linkTo: "#",
//   },
//   {
//     label: "Settings",
//     icon: AppSettingsAlt,
//     linkTo: "#",
//   },
// ];

const email = "autocleanchirnsidepark@outlook.com";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function onLogoutHandle() {
    console.log("onLogoutHandle");
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.2),
            },
          }),
        }}
      >
        <Avatar
          sx={{ width: 27, height: 27 }}
          alt="Account"
          src="/images/avatar.jpg"
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 280 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="body2" noWrap>
            {email.split("@")[0]}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }} noWrap>
            {email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            onClick={onLogoutHandle}
            fullWidth
            color="inherit"
            variant="outlined"
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
