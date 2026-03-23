import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextProvider from "./Context/Context.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
