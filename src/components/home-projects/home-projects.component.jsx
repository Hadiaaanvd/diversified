import React, { useEffect, useRef } from "react";

import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.jpg";
import project7 from "../../assets/projects/project7.png";
import project4 from "../../assets/projects/player.png";
import { ReactComponent as Elogo } from "../../assets/projects/3e.svg";

import "./home-projects.styles.scss";

const projects = [
  {
    id: "/project/recovery-from-electrical-catastrophe",
    link: "http://www.dusllc.com/",
    image: project1,
    title: "Recovery From Electrical Catastrophe",
  },
  {
    id: "2",
    link: "http://www.benton-georgia.com/",
    image: project2,
    title: "Hartsfield Jackson Intl Airport",
  },
  {
    id: "/project/compressed-natural-gas-fueling-station",
    image: project3,
    link: "https://pipestrong.com/",
    title: "Compressed Natural Gas Fuel Station",
  },
  {
    id: "/project/recovery-from-electrical-catastrophe",
    link: "http://www.playercompany.com/",
    image:
      "https://www.3einfrastructure.com/wp-content/uploads/2021/11/logo-4.jpeg",
    title: "Recovery From Electrical Catastrophe",
  },
  {
    id: "6",
    link: "http://www.playercompany.com/",
    image:
      "https://www.3einfrastructure.com/wp-content/uploads/2021/11/logo-5-2-300x123.png",
    title: "Hartsfield Jackson Intl Airport",
  },
  {
    id: "/project/compressed-natural-gas-fueling-station",
    link: "http://www.playercompany.com/",
    image: project4,
    title: "Compressed Natural Gas Fuel Station",
  },
];
const HomeProjects = () => {
  const projectsRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const element = projectsRef.current;
      const spans = element.querySelectorAll(".animation-target");
      if (element && isElementInViewport(element)) {
        spans.forEach((span) => {
          span.classList.add("run-animation");
        });
      } else {
        spans.forEach((span) => {
          span.classList.remove("run-animation");
        });
      }
    };

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      console.log("rect", rect, rect.bottom <= window.innerHeight);
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home-projects-components" ref={projectsRef}>
      <h2 className="animation-target">
        <span
          onClick={() =>
            window.open("https://www.3einfrastructure.com/", "_blank")
          }
        >
          <Elogo className="e-logo" />
          &nbsp;
        </span>
        Family of Companies
      </h2>
      <div className="projects-container">
        {projects
          .filter((x, i) => i < 3)
          .map((item, index) => (
            <div
              key={index}
              className="project"
              onClick={() => window.open(item.link, "_blank")}
            >
              <img
                className={`${index !== 1 ? "big" : ""}`}
                src={item.image}
                alt=""
              />
            </div>
          ))}
      </div>
      <div className="projects-container">
        {projects
          .filter((x, i) => i > 2)
          .map((item, index) => (
            <div
              key={index}
              className={`project`}
              onClick={() => window.open(item.link, "_blank")}
            >
              <img
                className={`${index !== 2 ? "small" : ""}`}
                src={item.image}
                alt=""
              />
            </div>
          ))}
      </div>
      <div className="projects-container">
        <div
          className="project mx-auto"
          onClick={() =>
            window.open("https://consciousdatacenters.com/", "_blank")
          }
        >
          <img src={project7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
