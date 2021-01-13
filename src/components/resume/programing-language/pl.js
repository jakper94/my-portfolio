import React from "react";
import "./pl.scss";
import {
  DiJavascript1,
  DiJava,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiSass,
  DiCss3,
} from "react-icons/di";
const iconSize = 100;
const Pl = () => {
  return (
    <div className="programing-skills">
      <h2>PROGRAMING SKILLS</h2>

      <div className="skills">
        <div className="type">
          <DiJavascript1 size={iconSize} />
          <p>
            <b>JavaScript</b>
          </p>
        </div>
        <div className="type">
          <DiJava size={iconSize} />
          <p>
            <b>Java</b>
          </p>
        </div>
        <div className="type">
          <DiReact size={iconSize} />
          <p>
            <b>React</b>
          </p>
        </div>
        <div className="type">
          <DiNodejsSmall size={iconSize} />
          <p>
            <b>Nodejs</b>
          </p>
        </div>
        <div className="type">
          <DiHtml5 size={iconSize} />
          <p>
            <b>Html5</b>
          </p>
        </div>
        <div className="type">
          <DiSass size={iconSize} />
          <p>
            <b>Sass</b>
          </p>
        </div>
        <div className="type">
          <DiCss3 size={iconSize} />
          <p>
            <b>CSS</b>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Pl;
