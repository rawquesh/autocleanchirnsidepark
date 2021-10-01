import { Divider, IconButton, Stack, Typography } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#F4F4F4",
        margin: "30px 0 30px 0",
        padding: "10px 0 10px 0",
        borderTop : "2px solid #CBCBCB"
      }}
    >
      <Stack direction="row" justifyContent="center">
        <IconButton color="primary" size="large">
          <Facebook />
        </IconButton>

        <IconButton color="success" size="large">
          <Instagram />
        </IconButton>
      </Stack>

      <br />
      <Typography
        style={{
          color: "black",
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: "2px",
        }}
      >
        Copyright 2019 | ALL RIGHTS RESERVED
      </Typography>
    </div>
  );
}

export default Footer;
