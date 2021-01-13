import React from "react";
import "./project-site.scss";
import projectData from "../../../jsonData/projectData.json";
import ProgramUsed from "./programUsed/program-used";

const ProjectSite = ({ match }) => {
  var ID = match.params.assignID;
  let id = ID - 1;
  const project = projectData.projects;
  const content = project[id].content;
  return (
    <div className="project-site">
      <div className="top-ps">
        <div className="title">
          <img
            className="background"
            src={project[id].headerImage}
            alt={project[id].title + " logo"}
          />
          <img
            className="logo"
            src={project[id].logo}
            alt={project[id].title + " logo"}
          />

          <h1
            style={{
              color: `${project[id].textColor}`,
            }}
          >
            {project[id].title}
          </h1>
          <h3
            style={{
              color: `${project[id].textColor}`,
            }}
          >
            {project[id].skills}
          </h3>
        </div>

        {content.map((cont) => (
          <div className="content">
            {
              <div className="about">
                <div className="about-text">
                  <h2>ABOUT THE {cont.type}</h2>
                  <p>{cont.about}</p>
                  <ProgramUsed data={content} />
                </div>

                <img src={cont.image1} alt="project-image" />
              </div>
            }
            {!cont.buttonLink ? (
              ""
            ) : (
              <a className="link-button" href={cont.buttonLink} target="_blank">
                <p>{cont.buttonText}</p>
              </a>
            )}
          </div>
        ))}
      </div>

      {content.map((cont) => (
        <div className="second-part">
          {!cont.image2 ? (
            ""
          ) : (
            <div className="image-sp">
              <img src={cont.image2} />
              <div className="image-sp-text">
                <h3>{cont.image2h3}</h3>
                <p>{cont.image2Text}</p>
              </div>
            </div>
          )}
          {!cont.image3 ? (
            ""
          ) : (
            <div className="image-sp-2">
              <div className="image-sp-text-2">
                <h3>{cont.image3h3}</h3>
                <p>{cont.image3Text}</p>
              </div>
              <img src={cont.image3} />
            </div>
          )}
          {!cont.image4 ? (
            ""
          ) : (
            <div className="image-sp">
              <img src={cont.image4} />
              <div className="image-sp-text">
                <h3>{cont.image4h3}</h3>
                <p>{cont.image4Text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ProjectSite;
