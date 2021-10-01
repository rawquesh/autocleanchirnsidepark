import * as React from "react";
import { Grid, Typography } from "@mui/material";
import "./../view/style.css";
import { planData } from "../view/data";

export default function MyPlans({ selectedPlan, onClick }) {
  return (
    <div >
      <Typography className="text-style">Choose your plan.</Typography>
      <div style={{ maxWidth: "45em", margin: "auto"}}>
        <Grid container className="plan-style">
          {planData.map((data, index) => (
            <MyPlan
              title={data.title}
              key={index}
              desc={data.desc}
              selected={selectedPlan === index}
              onClick={() => {
                onClick(index);
              }}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}

function MyPlan({ title, desc, selected, onClick }) {
  return (
    <Grid item sm={6} md={4}>
      <div
        onClick={onClick}
        style={{
          border: selected && "3px solid #7ebc99",
        }}
        className={"plan " + (selected && "plan-s")}
      >
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
