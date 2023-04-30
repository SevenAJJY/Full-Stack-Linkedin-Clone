import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import RequireAuth from "./components/requireAuth/RequireAuth";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Header />
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
