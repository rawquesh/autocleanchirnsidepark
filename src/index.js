import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Registration from "./registration/view/view";

import ThemeConfig from "./theme";
import GlobalStyles from './theme/globalStyles';


import Dashboard from "./dashboard/home/view";
import Login from "./login/view";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles/>
      <Router>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </ThemeConfig>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
