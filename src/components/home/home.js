import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <section className="first-section">
        <h1 className="name">Jakob Persson</h1>
        <h1 className="skills">
          UX/UI Designer | Developer | Graphics | Photographer
        </h1>
      </section>

      <div className="short-info-box">
        <div className="short-info">
          <h1>Hi, I'm Jakob Persson</h1>
          <p>
            I'm currently studying my fifth year as a Master of Engineering in
            interaction and design at Umeå University. What interests me most in
            my education is UX/UI design and front-end development. But besides
            that, I also do graphic design and photo editing in my spare-time.
          </p>
        </div>
        <div className="image-container">
          <div className="top-image">
            <img src={process.env.PUBLIC_URL + "/images/jakob-camera.jpg"} />
          </div>
          <div className="bot-image">
            <img src={process.env.PUBLIC_URL + "/images/jakob-sun.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
