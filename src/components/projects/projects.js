import React, {useState, useEffect} from "react";
import "./projects.scss"
import ProjectBox from "./projectBox/projectbox"
import projectData from "./projectData.json"

const project = projectData.projects;
const Projects = () =>{
    return (
        <section>
            <div className="header">
                <h1>My Projects</h1>
            </div>
        
            <div className="projectBoxes">
                {project.map(projects=>(
                    <ProjectBox title={projects.title} logo={projects.logo}/>
                ))}
            </div>
           
        </section>
        );
}
export default Projects;