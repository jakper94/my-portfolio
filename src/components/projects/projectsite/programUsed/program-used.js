import React from "react";
import "./program-used.scss";
import {
  DiJavascript1,
  DiJava,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiSass,
  DiCss3,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import { FaCameraRetro } from "react-icons/fa";
const ProgramUsed = ({ data }) => {
  const iconSize = 50;
  return (
    <div className="program-used">
      {data.map((content) => (
        <div className="programs">
          {content.react === 1 ? <DiReact size={iconSize} /> : ""}
          {content.reactNative === 1 ? <DiReact size={iconSize} /> : ""}
          {content.java === 1 ? <DiJava size={iconSize} /> : ""}
          {content.javascript === 1 ? <DiJavascript1 size={iconSize} /> : ""}
          {content.node === 1 ? <DiNodejsSmall size={iconSize} /> : ""}
          {content.html5 === 1 ? <DiHtml5 size={iconSize} /> : ""}
          {content.sass === 1 ? <DiSass size={iconSize} /> : ""}
          {content.css === 1 ? <DiCss3 size={iconSize} /> : ""}
          {content.photoshop === 1 ? <DiPhotoshop size={iconSize} /> : ""}
          {content.illustrator === 1 ? <DiIllustrator size={iconSize} /> : ""}
          {content.xd === 1 ? <p>XD</p> : ""}
          {content.camera === 1 ? <FaCameraRetro size={iconSize} /> : ""}
        </div>
      ))}
    </div>
  );
};
export default ProgramUsed;
