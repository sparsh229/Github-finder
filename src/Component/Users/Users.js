import React, { Component } from "react";
import Useritem from "./Useritem";
export class Users extends Component {
  state = {
    users: [
      {
        id: "id1",
        login: "Sparsh Gupta",
        avatar_url: "https://avatars.githubusercontent.com/u/71493667?v=4",
        html_url: "https://github.com/sparsh229",
      },
      {
        id: "id2",
        login: "Sparsh Gupta",
        avatar_url: "https://avatars.githubusercontent.com/u/71493667?v=4",
        html_url: "https://github.com/sparsh229",
      },
      {
        id: "id3",
        login: "Sparsh Gupta",
        avatar_url: "https://avatars.githubusercontent.com/u/71493667?v=4",
        html_url: "https://github.com/sparsh229",
      },
    ],
  };
  render() {
    return (
      <div style={userDisplay}>
        {this.state.users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userDisplay = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
