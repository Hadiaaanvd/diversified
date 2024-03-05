import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";

import logo from "../../assets/logo.svg";
import "./navbar-inner.styles.scss";
import {
  distribution,
  makeUrl,
  other,
  transmission,
} from "../../utils/imagesDb";
const Navbarr = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const location = useLocation().pathname;

  const handleClick = (id) => {
    navigate(id);
  };

  return (
    <div className="navbar-inner-component">
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse className="justify-content-center" id="navbarScroll">
            <Nav navbarScroll>
              <Nav.Link
                className={`navitem ${
                  location.includes("/home") ? "current" : ""
                }`}
                onClick={() => handleClick("/")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`navitem ${
                  location.includes("/about-us") ? "current" : ""
                }`}
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
                                `/services/distribution/${makeUrl(
                                  item.heading
                                )}`
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
                                `/services/transmission/${makeUrl(
                                  item.heading
                                )}`
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
                              navigate(
                                `/services/other/${makeUrl(item.heading)}`
                              )
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

              <Nav.Link
                onClick={() => navigate("/gallery")}
                className={`navitem ${
                  location.includes("/gallery") ? "current" : ""
                }`}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/employment")}
                className={`navitem ${
                  location.includes("/employment") ? "current" : ""
                }`}
              >
                Employment
              </Nav.Link>

              <Nav.Link
                className={`navitem ${
                  location.includes("/contact") ? "current" : ""
                }`}
                onClick={() => handleClick("/contact")}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbarr;
