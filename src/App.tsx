import React from "react"
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <React.StrictMode>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.StrictMode>
      <GlobalStyle />
    </ThemeProvider>
  );
}
