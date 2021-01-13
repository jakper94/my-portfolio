import React from "react";
import "./design-skills.scss";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
const DesignSkills = () => {
  const iconSize = 100;
  return (
    <div className="design-skills">
      <div className="outside-box">
        <h2>DESIGN SKILLS</h2>
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
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-2e0f3.appspot.com/o/XD.png?alt=media&token=81bbe62f-626e-4257-8b5e-b9ad510ec02e"
              }
              height={iconSize}
              alt="XD icon"
            />
            <p>
              <b>Adobe XD</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSkills;
