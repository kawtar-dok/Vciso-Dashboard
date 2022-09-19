import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import ExpertApp from "ExpertApp";
// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const user = JSON.parse(localStorage.getItem("user"));
const currentWindow = window.location.href;

if (!user) {
  if (!currentWindow.includes("sign")) {
    window.location.href = "/authentication/sign-in";
  }
  root.render(
    <BrowserRouter>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </BrowserRouter>
  );
} else {
  root.render(
    <BrowserRouter>
      <SoftUIControllerProvider>
        {JSON.parse(localStorage.getItem("user")).role === "Client" ? <App /> : <ExpertApp />}
      </SoftUIControllerProvider>
    </BrowserRouter>
  );
}
