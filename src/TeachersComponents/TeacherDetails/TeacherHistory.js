import React from "react";
import { useHistory } from "react-router-dom";
const Hello = () => {
  const history = useHistory();
  const handleClick = () => history.push("/TeacherDashboard");
  return (
    <div>
      <h1>history</h1>
    </div>
  );
};

export default Hello;
