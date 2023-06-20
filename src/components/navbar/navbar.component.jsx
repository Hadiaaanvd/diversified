import React from "react";
import logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import "./navbar.styles.scss";
const Navbarr = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(id);
  };

  return (
    <div className="navbar-component">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav navbarScroll>
            <Nav.Link
              className="navitem"
              onClick={() => handleClick("/our-strengths")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navitem"
              onClick={() => handleClick("/about-us")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="navitem"
              onClick={() => handleClick("/services")}
            >
              Services
            </Nav.Link>

            <Nav.Link onClick={() => navigate("/gallery")} className="navitem">
              Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/employment")}
              className="navitem"
            >
              Employment
            </Nav.Link>

            <Nav.Link
              className="navitem"
              onClick={() => handleClick("/contact")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
