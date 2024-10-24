import * as React from "react";
import { createRoot } from "react-dom/client";

import "../css/main.css";
import { App } from "./App";

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
