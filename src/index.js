import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import AppExport from "./app";
import LightSwitch from "./lightSwitch";

const rootElement = document.getElementById("root");
ReactDOM.render(<LightSwitch />, rootElement);
