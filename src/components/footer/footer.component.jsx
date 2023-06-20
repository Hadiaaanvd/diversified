import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import footer from "../../assets/footer.png";
import "./footer.styles.scss";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-component">
      <div className="navitems">
        <div className="navitem" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="navitem" onClick={() => navigate("/about-us")}>
          About Us
        </div>
        <div className="navitem" onClick={() => navigate("/services")}>
          Services
        </div>
        <div className="navitem" onClick={() => navigate("/gallery")}>
          Gallery
        </div>
        <div className="navitem" onClick={() => navigate("/employment")}>
          Employment
        </div>
        <div className="navitem" onClick={() => navigate("/contact-us")}>
          Contact Us
        </div>
      </div>
      <div className="logos-container">
        <img className="logo" onClick={() => navigate("/")} src={logo} alt="" />
        <img
          onClick={() =>
            window.open("https://www.3einfrastructure.com/", "_blank")
          }
          className="logo other"
          src={footer}
          alt=""
        />
      </div>
      <div>
        <span>© 2023 Diversified. All Rights Reserved </span>
      </div>
    </div>
  );
};

export default Footer;
