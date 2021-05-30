import React, { useContext } from "react";
import Useritem from "./Useritem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/Github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userDisplay}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
const userDisplay = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
