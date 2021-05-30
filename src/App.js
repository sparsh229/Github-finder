import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Navbar from "./Component/Layout/Navbar";
import Alert from "./Component/Layout/Alert";
import About from "./Component/Pages/About";
import User from "./Component/Users/User";
import NotFound from "./Component/Pages/NotFound";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
