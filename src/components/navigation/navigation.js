import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import "./navigation.scss";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <div className="text">
          <h4>JAKOB PERSSON</h4>
        </div>
      </div>
      <div className="menu">
        <NavLink exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink exact to="/about" onClick={() => scrollToTop()}>
          About
        </NavLink>
        <NavLink exact to="/resume" onClick={() => scrollToTop()}>
          Resume
        </NavLink>
        <NavLink exact to="/projects" onClick={() => scrollToTop()}>
          My Projects
        </NavLink>
      </div>
      <div className="icons">
        <a href="mailto:jakob.j.persson@hotmail.com">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/jakob-persson/">
          <FaLinkedinIn size={30} />
        </a>
        <a href="https://www.instagram.com/jakper/">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
