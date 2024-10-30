import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./components/App"
import { createStore } from "redux";
import reducer from "./reducers/game_reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);