import React from "react";
import "./resume.scss";
import ProgramingSkills from "./programing-language/pl";
import DesignSkills from "./design-skills/design-skills";
import ResumeData from "../../jsonData/resume.json";
const Resume = () => {
  const education = ResumeData.education;
  const work = ResumeData.work;
  return (
    <div className="resume">
      <div className="top">
        <img
          src={process.env.PUBLIC_URL + "/images/Profilbild.jpg"}
          alt="Jakob Persson"
        />
        <h1>Jakob Persson</h1>
        <h4>Student - Master of Engineering in Interaction & Design</h4>
      </div>
      <div className="education">
        <h2>Education</h2>
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
      <ProgramingSkills />
      <DesignSkills />
      <div className="work">
        <h2>Work Experience</h2>
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
    </div>
  );
};
export default Resume;
