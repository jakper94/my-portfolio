import React from "react";
import "./projectBox.scss";
const ProjectBox = ({ title, logo, id }) => {
  return (
    <a href={"#/project/" + id}>
      <div className="project-box">
        <img src={process.env.PUBLIC_URL + logo} alt="" />
        <h2>{title}</h2>
      </div>
    </a>
  );
};
export default ProjectBox;
