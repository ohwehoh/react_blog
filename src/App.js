import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import View from "./pages/view/View";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/view">
            <View />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
