import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Registration from "./registration/view/view";
import AdminView from "./adminPage/main/view";
import Login from "./login/view";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Registration} />
      <Route exact path="/login" component={Login} />
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
