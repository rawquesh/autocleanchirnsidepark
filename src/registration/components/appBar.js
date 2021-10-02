import * as React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";

export default function DenseAppBar({ click, labelClick }) {
  const history = useHistory();
  
  function onClick() {
    history.push("/admin");
  }

  return (
    <>
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
      <MainLabel click={labelClick} />
    </>
  );
}

function MainLabel({ click }) {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        top: "40%",
        position: "relative",
      }}
    >
      <Typography
        style={{
          color: "white",
          marginBottom: "20px",
          textTransform: "uppercase",
          fontSize: "15px",
          letterSpacing: "2px",
        }}
      >
        Join over monthly plans at best prices.
      </Typography>
      <Button variant="outlined" color="info" onClick={click}>
        Join Now
      </Button>
    </div>
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
