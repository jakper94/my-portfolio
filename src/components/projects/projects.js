import React, { useState, useEffect } from "react";
import "./projects.scss";
import ProjectBox from "./projectBox/projectbox";
import projectData from "../../jsonData/projectData.json";

const project = projectData.projects;
const Projects = () => {
  return (
    <section className="projects">
      <div className="header">
        <h2>MY PROJECTS</h2>
      </div>
      <div className="projectBoxes">
        {project.map((projects) => (
          <ProjectBox
            title={projects.title}
            logo={projects.logo}
            id={projects.id}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
