import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-2e0f3.appspot.com/o/hockey-me.jpg?alt=media&token=42fbbb4e-22c5-439b-b751-d42d19ec161b"
          alt="hockeyimage on Jakob Persson"
        />
        <div className="text">
          <h2> Hi, I'm Jakob Persson!</h2>
          <p>
            Hello my name is Jakob and I am 26 years old and grew up in
            Stockholm. Right now I am currently studying my fifth year at Umeå
            University where I am studying for a Master of Science in
            Interaction and Design. I am most interested in UX / UI, front-end
            and graphic design. <br />
            <br />
            Since I was six years old, I have played ice hockey, which is a big
            interest for me. Right now I play for the division 2 team Umeå
            Dragons HC as a defensemen. I also take care of the team's social
            media, which means instagram, facebook and its graphic interface. In
            addition to my great interest in ice hockey, I also like
            cross-country skiing, slalom and being out in nature. When I'm not
            playing sports, I also enjoy photography. I have photographed
            football matches from the Allsvenskan and various events that have
            been held at Umeå University, including Idag & Inatt and Datatjej
            2019. Feel free to check out my photos in my flickr which is linked
            in the footer.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
