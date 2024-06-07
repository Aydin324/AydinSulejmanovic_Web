import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "dark", // Default to dark mode
    primary: {
      main: "#646cff",
    },
    background: {
      default: "#242424",
      paper: "#1a1a1a",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "3.2em",
      lineHeight: 1.1,
      marginTop: "40px",
    },
    h3: {
      fontSize: "2em",
      lineHeight: 1.1,
      textAlign: "left",
      marginTop: "35px",
      marginBottom: "35px",
    },
    body1: {
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      fontSize: "1em",
      textTransform: "none", // Prevents uppercase transformation
    },
    link: {
      fontWeight: 500,
      color: "#646cff",
      textDecoration: "inherit",
      "&:hover": {
        color: "#535bf2",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          cursor: "pointer",
          backgroundColor: "#1a1a1a",
          transition: "border-color 0.25s",
          "&:hover": {
            borderColor: "#646cff",
          },
          "&:focus, &:focus-visible": {
            outline: "4px auto -webkit-focus-ring-color",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
