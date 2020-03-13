import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="box">
        <div>
          <h4>Jakob Persson</h4>
          <p>UMEÅ</p>
          <a href="mailto:jakob.j.persson@hotmail.com">jakob.j.persson@hotmail.com</a>
        </div>
      </div>
      <div className="box">
        <div>
          <h4>Links</h4>
          <Link to="/" onClick={() => scrollToTop()}>
            Home
          </Link>
        </div>
      </div>
      <div className="box">
        <div>
          <h4>Follow</h4>
          <a href="https://www.linkedin.com/in/jakob-persson">
            Linked In
          </a>
          <a href="https://www.instagram.com/jakper/">Instagram</a>
        </div>
      </div>
      <p className="copyright">© Jakob Persson 2020</p>
    </footer>
  );
};

export default Footer;
