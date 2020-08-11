import React from "react";
import logo from "./logo.svg";
import NavbarX from "./components/navbar";
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Apps from "./Pages/Apps";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
function App() {
  return (
    <Router>
      <NavbarX />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/apps" render={() => <Apps />}></Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
