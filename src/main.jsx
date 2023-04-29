import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./components/styled/GlobalStyle.js";
import mainTheme from "./components/styled/MainTheme.js";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
