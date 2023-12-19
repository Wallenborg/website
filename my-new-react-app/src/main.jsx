// Importing the React library
import React from "react";
// Importing the ReactDOM library (client module)
import ReactDOM from "react-dom/client";
// Importing the main App component from the App.jsx file
import App from "./App.jsx";
// Importing the styles from the index.css file
import "./index.css";

// Wrapping the App component with React StrictMode
// And rendering the main App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
