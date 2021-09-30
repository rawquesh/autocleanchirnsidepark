import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { borderColor } from "@mui/system";

export default function DenseAppBar({click}) {

  function onClick() {
    // history.push("/admin");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="white"
          style={{
            fontSize: 15,
            textTransform: "capitalize",
            letterSpacing: "2px",
            textDecoration: "underline",
            textUnderlineOffset: "5px",
          }}
          component="div"
        >
          Auto clean
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        {/* <MyButton title="Join" onClick={onClick} /> */}
        <MyButton title="Contact Us" onClick={click} />
        <MyButton title="Admin" onClick={onClick} />
      </Toolbar>
    </Box>
  );
}

function MyButton({ title, onClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      style={{
        margin: "5px 5px 0",
      }}
    >
      <Typography
        style={{
          fontSize: 13,
          textTransform: "capitalize",
          letterSpacing: "2px",
        }}
        color="white"
      >
        {title}
      </Typography>
    </Button>
  );
}
