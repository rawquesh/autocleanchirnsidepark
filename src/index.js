import React from "react";
import ReactDOM from "react-dom";
import Registration from "./registration/view";
import AdminView from "./admin/main/view";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Registration} />
      <Route exact path="/admin" component={AdminView} />
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
