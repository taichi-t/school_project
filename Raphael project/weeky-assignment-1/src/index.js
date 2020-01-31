import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6be7ff",
      main: "#23b5d3",
      dark: "#0085a2",
      contrastText: "#000000"
    },
    secondary: {
      light: "#ff6bc0",
      main: "#ff2990",
      dark: "#c60063",
      contrastText: "#000000"
    }
  }
});

ReactDOM.render(
  <SnackbarProvider
    maxSnack={1}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
  >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </SnackbarProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
