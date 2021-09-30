import { Button, TextField, Typography } from "@mui/material";
import "./style.css";

import React from "react";
import { Email, LocationOn, Phone, Timer } from "@mui/icons-material";

function RowsBuilder({ Icon, message }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        textAlign: "start",
      }}
    >
      <Icon style={{ color: "#808080", marginRight: "10px" }} />
      <Typography
        style={{
          color: "#808080",
          fontSize: "16px",
          letterSpacing: "1px",
          overflow: "auto",
        }}
      >
        {message}
      </Typography>
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
      <div className="card-p">
        <div className="card" elevation={4}>
          <Typography className="text-style">OUR SERVICE STATION</Typography>
          <br />
          <RowsBuilder
            Icon={LocationOn}
            message="Undercover Car Park, Unit 510/239-241 Maroondah Hwy, Chirnside Park VIC 3116, Australia"
          />
          <br />
          <RowsBuilder Icon={Phone} message="(03) 9727 0000" />
          <br />
          <RowsBuilder
            Icon={Email}
            message="autocleanchirnsidepark@outlook.com"
          />
          <br />
          <RowsBuilder
            Icon={Timer}
            message="Monday to Sunday 9:00am to 6:00pm
          "
          />
          <br />
        </div>
      </div>
      <div>
        <div className="card-p">
          <div className="card" elevation={4}>
            <Typography className="text-style">Contact Us</Typography>
            <br />
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
            <Button
              style={{ height: "50px", marginBottom: "7px" }}
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
