import React from "react";
import "./project-site.scss";
import projectData from "../../../jsonData/projectData.json";
const ProjectSite = ({ match }) => {
  var ID = match.params.assignID;
  let id = ID - 1;
  const project = projectData.projects;
  const content = project[id].content;
  return (
    <div className="project-site">
      <div className="title">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + project[id].logo}
          alt={project[id].title + " logo"}
        />
        <h1>{project[id].title}</h1>
        <h3>{project[id].skills}</h3>
      </div>

      {content.map((cont) => (
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p>{cont.about}</p>
          </div>
          <div className="how">
            <h3>How?</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectSite;
