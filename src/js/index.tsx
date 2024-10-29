import * as React from "react";
import { createRoot } from "react-dom/client";

import "../css/main.css";
import { App } from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../js/theme"; // テーマのインポート

const root = createRoot(document.getElementById("app")!);
root.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
);
