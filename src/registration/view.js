import React from "react";
import DenseAppBar from "./appBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "./card";

import "./style.css";
import { Grid } from "@mui/material";
import Footer from "./footer";
import MyPlan from "./plans";

function Registration() {
  return (
    <>
      <div className=" big-image">
        <DenseAppBar />
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
          <Button variant="outlined" style={{ color: "white" }}>
            Join Now
          </Button>
        </div>
      </div>

      <div
        style={{
          maxWidth: "77em",
          textAlign: "center",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Typography style={textStyle}>OUR CAR SERVICES.</Typography>
        <Grid
          container
          style={{
            justifyContent: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Card
            title="Exterior Washes"
            image="/images/registration/card1.jpg"
          />
          <Card
            title="Interior Detailing"
            image="/images/registration/card2.jpg"
          />
          <Card title="Extra Services" image="/images/registration/card3.jpg" />
        </Grid>
        <Typography style={textStyle}>Choose your plan.</Typography>
        <Grid
          container
          style={{
            justifyContent: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <MyPlan title="Exterior Washes" />
          <MyPlan title="Interior Detailing" />
          <MyPlan title="Extra Services" />
        </Grid>
        <Footer />
      </div>
    </>
  );
}

const textStyle = {
  color: "black",
  paddingTop: "20px",
  textTransform: "uppercase",
  fontSize: "15px",
  letterSpacing: "2px",
  textDecoration: "underline",
  textUnderlineOffset: "5px",
};

export default Registration;
