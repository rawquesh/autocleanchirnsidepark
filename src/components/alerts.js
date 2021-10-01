import { Alert, Typography } from "@mui/material";
import React from "react";

/// type : success, error, info.
export function MyAlert({ type, message }) {
  let color;

  switch (type) {
    case "success":
      color = "#2e7d32";
      break;
    case "info":
      color = "#0288d1";
      break;
    case "error":
      color = "#d32f2f";
      break;

    default:
      color = "#1976d2";

      break;
  }

  return (
    <Alert
      style={{ padding: "0px 15px 0 15px", width: "100%" }}
      variant="outlined"
      severity={type}

    >
      <div style={{ color: color }}>{message}</div>
    </Alert>
  );
}
