import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import store from "./store";
import Home from "./components";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
