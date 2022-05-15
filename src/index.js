import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";
import $ from "jquery";
import Popper from "popper.js";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import BrowerRoute from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowerRoute>
      <App />
    </BrowerRoute>
  </React.StrictMode>,
  document.getElementById("root")
);
