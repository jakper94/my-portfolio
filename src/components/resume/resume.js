import React from "react";
import "./resume.scss";
import ProgramingSkills from "./programing-language/pl";
import DesignSkills from "./design-skills/design-skills";
import Work from "./work/work";
import Education from "./education/education";
const Resume = () => {
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
      <Education />
      <ProgramingSkills />
      <DesignSkills />
      <Work />
      <div className="downloadRes">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-2e0f3.appspot.com/o/Resume_Jakob_Persson_Swe.pdf?alt=media&token=0e106b21-4508-4f19-b9f6-0caf240493ca"
          target="_blank"
          download
        >
          <div className="download-button">
            {" "}
            <p>Download CV (SV)</p>
          </div>
        </a>
        <a href="/pdf/Resume_Jakob_Persson_Swe.pdf" target="_blank" download>
          <div className="download-button">
            {" "}
            <p>Download CV (EN)</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Resume;
