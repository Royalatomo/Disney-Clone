// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Components
import { store } from "./app/store.js";
import App from "./App.js";
import "./index.css"; // styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
