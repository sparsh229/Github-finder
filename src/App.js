import "./App.css";
import React, { Component } from "react";
import Navbar from "./Component/Layout/Navbar";
import Users from "./Component/Users/Users";
import Search from "./Component/Users/Search";
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
