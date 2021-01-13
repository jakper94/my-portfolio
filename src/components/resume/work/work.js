import React from "react";
import "./work.scss";
import ResumeData from "../../../jsonData/resume.json";
const Work = () => {
  const work = ResumeData.work;
  return (
    <div className="work">
      <h2>WORK EXPERIENCE</h2>
      {work.map((works) => (
        <div className="work-box">
          <div className="left">
            <p>
              <b>{works.title}</b>
            </p>
          </div>
          <div className="right">
            <p>
              <b>{works.year}</b>
            </p>
            <p>{works.place}</p>
            <p>{works.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Work;
