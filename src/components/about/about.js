import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section>
      <div className="header">
        <img src={process.env.PUBLIC_URL + "/images/Profilbild.jpg"} />
        <h1>About</h1>
        <p>I am 26 years old and was born and raised in Stockholm</p>
      </div>
    </section>
  );
};
export default About;
