import React from "react";
import App from "./App";
import "./styles/index.scss";

import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import rootReducer from "./reducer";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
    reducer: rootReducer,
    devTools,
})
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);