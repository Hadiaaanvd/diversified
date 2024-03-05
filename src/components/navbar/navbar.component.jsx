import React, { useState } from "react";
import logo from "../../assets/logo.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";

import "./navbar.styles.scss";
import {
  distribution,
  makeUrl,
  other,
  transmission,
} from "../../utils/imagesDb";
const Navbarr = () => {
  const location = useLocation().pathname;
  const [show, setShow] = useState(true);
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
            <Dropdown
              className={`show navitem ${
                location.includes("/service") ? "current" : ""
              }`}
            >
              <Dropdown.Toggle>
                <span
                  onClick={() => {
                    handleClick("/services");
                    setShow(false);
                  }}
                >
                  Services
                </span>
              </Dropdown.Toggle>
              {show && (
                <div className="dropdown-menu">
                  <NavDropdown.Item>
                    Distribution
                    <div className="sub-dropdown">
                      {distribution.map((item, index) => (
                        <NavDropdown.Item
                          key={index}
                          onClick={() =>
                            navigate(
                              `/services/distribution/${makeUrl(item.heading)}`
                            )
                          }
                        >
                          {item.heading}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    Transmission
                    <div className="sub-dropdown">
                      {transmission.map((item, index) => (
                        <NavDropdown.Item
                          key={index}
                          onClick={() =>
                            navigate(
                              `/services/transmission/${makeUrl(item.heading)}`
                            )
                          }
                        >
                          {item.heading}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    Other Services
                    <div className="sub-dropdown">
                      {other.map((item, index) => (
                        <NavDropdown.Item
                          key={index}
                          onClick={() =>
                            navigate(`/services/other/${makeUrl(item.heading)}`)
                          }
                        >
                          {item.heading}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </NavDropdown.Item>
                </div>
              )}
            </Dropdown>

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
