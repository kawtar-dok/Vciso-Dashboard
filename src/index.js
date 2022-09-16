import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import ExpertApp from "ExpertApp";
// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
        <App />
    </SoftUIControllerProvider>
  </BrowserRouter>
);
