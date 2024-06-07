import React from "react";
import App from "./App";
import "./styles/index.scss";


import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


const container = document.getElementById("root");


const root = createRoot(container);


root.render(
    <Provider>
        <App />
    </Provider>
);