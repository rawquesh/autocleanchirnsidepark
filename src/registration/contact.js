import { Button, TextField, Typography } from "@mui/material";
import "./style.css";

import React from "react";
import { LocationCity } from "@mui/icons-material";

function RowsBuilder({ Icon, message }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Icon style={{ color: "#808080" }} />
      <Typography style={{ color: "#808080" }}>{message}</Typography>
    </div>
  );
}

export default function ContactUs() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <div className="card">
        <Typography className="text-style">OUR SERVICE STATION</Typography>
        <br />
        <RowsBuilder Icon={LocationCity} message="helo" />
      </div>
      <div>
        <Typography className="text-style">Contact Us</Typography>
        {/* <br/> */}
        <br />
        <div className="card">
          <div className="card-field">
            <TextField
              label="Your Name"
              variant="standard"
              autoComplete="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              fullWidth
            />
          </div>
          <div className="card-field">
            <TextField
              label="Email Address"
              variant="standard"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              fullWidth
            />
          </div>
          <div className="card-field">
            <TextField
              label="Phone Number"
              variant="standard"
              autoComplete="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              fullWidth
            />
          </div>
          <div className="card-field">
            <TextField
              label="Subject"
              variant="standard"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              fullWidth
            />
          </div>
          <div className="card-field">
            <TextField
              label="Optional message"
              variant="standard"
              multiline
              id="standard-multiline-flexible"
              rows={4}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              fullWidth
            />
          </div>
          <br />
          <Button style={{ height: "50px" }} variant="contained" fullWidth>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
