import React from "react";
import { withRouter } from "react-router-dom";
function Course({ match }) {
  return (
    <React.Fragment>
      <h1 style={{ color: "black" }}>{match.params.courseid}</h1>
    </React.Fragment>
  );
}

export default withRouter(Course);
