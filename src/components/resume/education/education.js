import React from "react";
import "./education.scss";
import ResumeData from "../../../jsonData/resume.json";
const Education = () => {
  const education = ResumeData.education;
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      {education.map((educa) => (
        <div className="edu-box">
          <div className="left">
            <p>
              <b>{educa.title}</b>
            </p>
          </div>
          <div className="right">
            <p>
              <b>{educa.year}</b>
            </p>
            <p>{educa.place}</p>
            <p>{educa.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Education;
