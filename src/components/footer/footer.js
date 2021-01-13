import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box">
        <div>
          <h2>Contact</h2>
          <p>Jakob Persson</p>
          <p>Umeå, Stockholm</p>
          <a href="mailto:jakob.j.persson@hotmail.com">
            jakob.j.persson@hotmail.com
          </a>
        </div>
      </div>

      <div className="box">
        <div>
          <h2>Follow</h2>
          <a href="https://www.linkedin.com/in/jakob-persson">Linked In</a>
          <a href="https://www.instagram.com/jakper/">Instagram</a>
          <a href="https://www.flickr.com/photos/jakobphotos/">Flickr</a>
        </div>
      </div>

      <p className="copyright">©Jakob Persson 2020</p>
    </footer>
  );
};

export default Footer;
