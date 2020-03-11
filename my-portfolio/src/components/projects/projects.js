import React, {useState, useEffect} from "react";
import "./projects.scss"
import ProjectBox from "./projectBox/projectbox"
import projectData from "./projectData.json"
const project = projectData.projects;
const Projects = () =>{
    return (
        <section>
            {project.map(projects=>(
                <ProjectBox name={projects.title}/>
            ))}
            
        </section>
        );
}
export default Projects;