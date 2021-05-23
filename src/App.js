import "./App.css";
import React, { Component, Fragment } from "react";
import Navbar from "./Component/Layout/Navbar";
import Useritem from "./Component/Users/Useritem";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title="Github-finder" icon="fab fa-github" />
        <Useritem />
      </Fragment>
    );
  }
}

export default App;
