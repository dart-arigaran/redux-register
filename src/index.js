import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// import { create } from "@mui/material/styles/createTransitions";
//import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));
//axios.defaults.baseURL = process.env.REACT_APP_API_URL;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
