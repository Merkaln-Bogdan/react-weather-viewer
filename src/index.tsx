import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StorageProvider } from "contexts/StorageContext";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StorageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StorageProvider>
    </Provider>
  </React.StrictMode>
);
