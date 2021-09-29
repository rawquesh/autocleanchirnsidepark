import React, { useState } from "react";
import DenseAppBar from "./appBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "./card";

import "./style.css";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Footer from "./footer";
import MyPlan from "./plans";
import ContactUs from "./contact";

function Registration() {
  const [planSelected, setPlanSelected] = useState();

  const [cardNumber, setCardNumber] = React.useState("");
  const [cardValid, setCardValid] = React.useState(true);
  const [name, setName] = React.useState("");
  const [rego, setRego] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  var valid = require("card-validator");

  function PayButton() {
    console.log(
      "card number ",
      cardNumber,
      "card valid ",
      cardValid,
      "name ",
      name,
      "rego ",
      rego,
      "phone ",
      phone,
      "month ",
      month,
      "year ",
      year,
      "cvv ",
      cvv
    );
  }

  return (
    <>
      <div className=" big-image">
        <DenseAppBar />
        <MainLabel />
      </div>
      <div className="main-style">
        <ServicesCard />
        <Typography className="text-style">Choose your plan.</Typography>
        <div style={{ maxWidth: "57em", margin: "auto" }}>
          <Grid container className="plan-style">
            {planData.map((data, index) => (
              <MyPlan
                title={data.title}
                key={index}
                desc={data.desc}
                selected={planSelected === index}
                onClick={() => {
                  setPlanSelected(index);
                }}
              />
            ))}
          </Grid>
        </div>
        <Typography className="text-style">Credit Card</Typography>

        <br />
        <div className="card">
          <div className="card-field">
            <TextField
              label="Name"
              variant="outlined"
              autoComplete="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              fullWidth
            />
          </div>
          <div className="card2">
            <div className="card-field2" style={{ marginRight: "5px" }}>
              <TextField
                label="Rego"
                variant="outlined"
                value={rego}
                onChange={(event) => {
                  setRego(event.target.value);
                }}
                fullWidth
              />
            </div>
            <div className="card-field2">
              <TextField
                label="Phone Number"
                inputMode="tel"
                autoComplete="tel"
                variant="outlined"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value.replace(/\D/, ""));
                }}
                fullWidth
              />
            </div>
          </div>
          <div className="card-field">
            <TextField
              label="Card Number"
              variant="outlined"
              autoComplete="cc-number"
              error={!cardValid}
              value={cardNumber}
              helperText={cardValid ? "" : "Enter valid card number."}
              onChange={(event) => {
                var numberValidation = valid.number(
                  event.target.value.toString()
                );
                if (!numberValidation.isValid) {
                  setCardValid(false);
                } else {
                  setCardValid(true);
                }
                setCardNumber(event.target.value);
              }}
              fullWidth
            />
          </div>

          <div className="card2">
            <div className="card-field2" style={{ marginRight: "5px" }}>
              <FormControl fullWidth>
                <InputLabel id="month">Month</InputLabel>
                <Select
                  value={month}
                  label="month"
                  autoComplete="cc-exp-month"
                  onChange={(event) => {
                    setMonth(event.target.value);
                  }}
                >
                  {genArrayOfMonths().map((e) => (
                    <MenuItem key={e} value={e}>
                      {e.toString().length === 1
                        ? "0" + e.toString()
                        : e.toString()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="card-field2" style={{ marginRight: "5px" }}>
              <FormControl fullWidth>
                <InputLabel id="year">Year</InputLabel>
                <Select
                  value={year}
                  label="year"
                  autoComplete="cc-exp-year"
                  onChange={(event) => {
                    setYear(event.target.value);
                  }}
                >
                  {genArrayOfYears(15).map((e) => (
                    <MenuItem key={e} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="card-field2">
              <TextField
                label="cvv"
                variant="outlined"
                autoComplete="cc-csc"
                value={cvv}
                onChange={(event) => {
                  if (event.target.value.length > 4) return;
                  setCvv(event.target.value.replace(/\D/, ""));
                }}
                fullWidth
              />
            </div>
          </div>
          <br />
          <Button
            style={{ height: "50px" }}
            variant="contained"
            fullWidth
            onClick={PayButton}
          >
            {planSelected !== undefined
              ? "Pay $" + planData[planSelected].ammout.toString()
              : "Select a plan"}
          </Button>
        </div>
        <br  />
        <br  />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Registration;

function genArrayOfYears(max) {
  let newDate = new Date();
  let today = newDate.getFullYear();
  let value = [];
  for (let index = 0; index < max; index++) {
    value.push(today);
    today++;
  }
  return value;
}
function genArrayOfMonths() {
  let value = [];
  for (let index = 1; index <= 12; index++) {
    value.push(index);
  }
  return value;
}

function ServicesCard() {
  return (
    <>
      <Typography className="text-style">OUR CAR SERVICES.</Typography>
      <Grid
        container
        style={{
          justifyContent: "center",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <Card title="Exterior Washes" image="/images/registration/card1.jpg" />
        <Card
          title="Interior Detailing"
          image="/images/registration/card2.jpg"
        />
        <Card title="Extra Services" image="/images/registration/card3.jpg" />
      </Grid>
    </>
  );
}

function MainLabel() {
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
      <Button variant="outlined" style={{ color: "white" }}>
        Join Now
      </Button>
    </div>
  );
}

const planData = [
  {
    title: "$25/Month",
    desc: "Unlimited Car Wash. No Frill car wash. No discounts for additional cars.",
    ammout: 25,
  },
  {
    title: "$40/Month",
    desc: "Unlimited Wash.The member should be able to sign up more cars under the same credit card for a discounted price.",
    ammout: 40,
  },
  {
    title: "$75/Month",
    desc: "Unlimited Wash + 1 interior clean every month. The member should be able to sign up more cars under the same credit card for a discounted price.",
    ammout: 75,
  },
];
