import { styled } from "@mui/material/styles";
import { Card, Icon, IconButton, MenuItem, Typography } from "@mui/material";
import { Download, MoreVert } from "@mui/icons-material";

import React, { useRef, useState } from "react";
import MenuPopover from "../../../components/menuPopover";
import { Box } from "@mui/system";

// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.primary,
}));

// ----------------------------------------------------------------------

// const TOTAL = 714000;

export default function MyInfoCard({
  title = "Title",
  subTitle = "Sub Title",
}) {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <RootStyle>
      <IconButton
        ref={anchorRef}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: 0,
          width: 44,
          height: 44,
        }}
        onClick={handleOpen}
      >
        <MoreVert />
      </IconButton>
      <MenuPopover
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        sx={{ width: 200 }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ typography: "body2", py: 1, px: 2.5 }}
        >
          <Box
            component={Icon}
            icon={Download}
            color="black"
            sx={{
              mr: 2,
              width: 24,
              height: 24,
              color : "primary"
            }}
          />

          {"Download"}
        </MenuItem>
      </MenuPopover>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {subTitle}
      </Typography>
    </RootStyle>
  );
}
