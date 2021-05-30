import React from "react";
import PropTypes from "prop-types";
const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      {repo.fork && (
        <div>
          {" "}
          <i class="fas fa-code-branch"></i> <strong>forked</strong>{" "}
        </div>
      )}
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p>{repo.description}</p>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.array.isRequired,
};

export default RepoItem;
