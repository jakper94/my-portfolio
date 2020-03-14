import React , {Switch,Route}  from "react";
import { NavLink } from "react-router-dom";
import "./projectBox.scss";
import ProjectSide from "../projectside/project-side";
const ProjectBox = ({title,logo}) => {
    return (
            <div className="project-box">
                <img src={process.env.PUBLIC_URL + logo} alt=""/>
                <h2>{title}</h2>
            </div>
    );
};
export default ProjectBox;