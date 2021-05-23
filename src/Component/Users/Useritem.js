import React, { Component } from "react";

export class Useritem extends Component {
  state = {
    id: "id",
    login: "Sparsh Gupta",
    avatar_url: "https://avatars.githubusercontent.com/u/71493667?v=4",
    html_url: "https://github.com/sparsh229",
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "70px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Useritem;
