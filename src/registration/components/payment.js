import React from "react";

import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { planData } from "../view/data";
import { MyAlert } from "../../components/alerts";

export default function PaymentPage({ selectedPlan }) {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardValid, setCardValid] = React.useState(true);
  const [name, setName] = React.useState("");
  const [rego, setRego] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState();

  function PayButton() {
    if (cardNumber === "" || !cardValid) {
      setAlert({ type: "error", message: "Credit card number is invalid." });
    } else if (name === "") {
      setAlert({ type: "error", message: "Enter a name." });
    } else if (rego === "") {
      setAlert({ type: "error", message: "Enter a rego numebr." });
    } else if (phone === "") {
      setAlert({ type: "error", message: "Enter a phone number." });
    } else if (month === "") {
      setAlert({ type: "error", message: "Select card's expiry month." });
    } else if (year === "") {
      setAlert({ type: "error", message: "Select card's expiry year." });
    } else if (cvv === "") {
      setAlert({ type: "error", message: "Enter card's cvv number." });
    } else {
      setAlert({ type: "info", message: "Prosseccing the payemnt..." });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAlert({ type: "success", message: "Payment successful." });
        reset();
      }, 3000);
    }
  }

  function reset() {
    setCardNumber("");
    setName("");
    setPhone("");
    setMonth("");
    setRego("");
    setYear("");
    setCvv("");
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
              setRego(event.target.value.toUpperCase());
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
        disabled={loading}
        onClick={PayButton}
      >
        {loading ? (
          <CircularProgress size={25} />
        ) : (
          <div>
            {selectedPlan !== undefined
              ? "Pay $" + planData[selectedPlan].ammout.toString()
              : "Select a plan"}
          </div>
        )}
      </Button>
      <br />
      {alert !== undefined && (
        <MyAlert type={alert.type} message={alert.message} />
      )}
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
