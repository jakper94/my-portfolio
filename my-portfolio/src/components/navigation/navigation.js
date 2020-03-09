import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";


const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink exact to="/">
          <img src="/images/logo.png" alt="logo" />
        </NavLink>
        <div className="text">
          <h4>Jakob</h4>
          <h4>Persson</h4>
        </div>
      </div>
      <div className="menu">
        <NavLink exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink exact to="/projects" onClick={() => scrollToTop()}>
          Projects
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
