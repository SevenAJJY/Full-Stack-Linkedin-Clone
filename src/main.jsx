import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./components/styled/GlobalStyle.js";
import mainTheme from "./components/styled/MainTheme.js";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
