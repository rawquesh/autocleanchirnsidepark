import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { borderColor } from "@mui/system";

export default function DenseAppBar() {
  const history = useHistory();

  function onClick() {
    // history.push("/admin");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} color="transparent" position="relative">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="white"
            style={{
              fontSize: 20,
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
          <MyButton title="Join" onClick={onClick} />
          <MyButton title="Contact Us" onClick={onClick} />
          <MyButton title="Admin" onClick={onClick} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function MyButton({ title, onClick }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      style={{
        margin: "15px",
        textTransform: "capitalize",
        letterSpacing: "1px",
      }}
    >
      <Typography variant="p" color="white">
        {title}
      </Typography>
    </Button>
  );
}
