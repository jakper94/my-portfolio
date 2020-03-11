import React from "react";
import "./projectBox.scss"

const ProjectBox = ({name}) => {

    return (
        <div className="box">
            <h1>{name}</h1>
        </div>
    );
};
export default ProjectBox;