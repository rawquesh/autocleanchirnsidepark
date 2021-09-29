import * as React from "react";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import { margin } from "@mui/system";

export default function MyPlan({ title, desc, selected }) {
  return (
    <Grid item sm={6} md={4}>
      <div
        style={{
          boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
          margin: "5px",
          padding: "5px",
          borderRadius: "16px",
          alignItems :"center"

        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{
            textTransform: "uppercase",
            fontSize: "17px",
            textAlign : "center",
            justifyContent : "center",
            letterSpacing: "1",
          }}
        >
          {title}
        </Typography>
      </div>
    </Grid>
  );
}
