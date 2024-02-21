import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Head from "./components/Header/Head";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>
);
