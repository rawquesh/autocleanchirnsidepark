import React from "react";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { planData } from "../view/data";

export default function PaymentPage({ selectedPlan }) {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardValid, setCardValid] = React.useState(true);
  const [name, setName] = React.useState("");
  const [rego, setRego] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  function PayButton() {
    console.log({
      "card number ": cardNumber,
      "card valid ": cardValid,
      "name ": name,
      "rego ": rego,
      "phone ": phone,
      "month ": month,
      "year ": year,
      "cvv ": cvv,
    });
  }

  return (
    <div className="card" elevation={4}>
      <Typography className="text-style">Credit Card</Typography>
      <br />
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
            const valid = require("card-validator");
            let numberValidation = valid.number(event.target.value.toString());
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
        style={{ height: "50px", marginBottom: "7px" }}
        variant="contained"
        fullWidth
        onClick={PayButton}
      >
        {selectedPlan !== undefined
          ? "Pay $" + planData[selectedPlan].ammout.toString()
          : "Select a plan"}
      </Button>
    </div>
  );
}

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
