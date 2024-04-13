import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StateManagementContextProvider } from "./state-management";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateManagementContextProvider>
      <App />
    </StateManagementContextProvider>
  </React.StrictMode>
);
