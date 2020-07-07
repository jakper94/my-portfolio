import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <section className="first-section">
        <h1 className="name">Jakob Persson</h1>
        <h1 className="skills">
          UX/UI Designer | Developer | Graphics | Photo
        </h1>
      </section>
      <section className="second-section">
        <div className="short-info">
          <h2>Background</h2>
          <p>
            I'm currently studying my fifth year as I study Master of
            Engineering in Interaction & Design. at Umeå University.
          </p>
        </div>

        <img src={process.env.PUBLIC_URL + "/images/Profilbild.jpg"} />
      </section>
      <section className="third-section">
        <h1>Brawl Gaming</h1>
      </section>
    </div>
  );
};

export default Home;
