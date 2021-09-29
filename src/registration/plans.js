import * as React from "react";
// import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
// import { margin, maxWidth } from "@mui/system";
import "./style.css";

export default function MyPlan({ title, desc, selected, onClick }) {
  return (
    <Grid item sm={4} md={3}>
      <div
        onClick={onClick}
        className={"plan " + (selected && "plan-s")} 
      
      >
        {/* <Radio
          style={{ position: "absolute", top: "20px",color:"green"}}
          disableRipple
          checked={selected}
        /> */}

        <Typography
          style={{
            textTransform: "uppercase",
            fontSize: "17px",
            textAlign: "center",
            letterSpacing: "1",
            marginBottom: "8px",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            // textTransform: "uppercase",
            color: "#3C3C3C",
            fontSize: "12px",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          {desc}
        </Typography>
      </div>
    </Grid>
  );
}
