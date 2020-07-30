import React from "react";
import "./design-skills.scss";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
const DesignSkills = () => {
  const iconSize = 100;
  return (
    <div className="design-skills">
      <h2>Design Skills</h2>
      <div className="design">
        <div className="design-type">
          <DiPhotoshop size={iconSize} />
          <p>
            <b>Adobe Photoshop</b>
          </p>
        </div>
        <div className="design-type">
          <DiIllustrator size={iconSize} />
          <p>
            <b> Adobe Illustrator</b>
          </p>
        </div>
        <div className="design-type">
          <img
            src={process.env.PUBLIC_URL + "Images/XD.png"}
            height={iconSize}
            alt="XD icon"
          />
          <p>
            <b>Adobe XD</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignSkills;
