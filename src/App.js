import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./Component/Layout/Navbar";
import Users from "./Component/Users/Users";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Users />
      </div>
    </Fragment>
  );
};
export default App;
