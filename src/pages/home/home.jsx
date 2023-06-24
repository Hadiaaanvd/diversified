import React from "react";
import Banner from "../../components/banner/banner.component";
import HomeContent from "../../components/home-content/home-content.component";
import HomeAbout from "../../components/home-about/home-about.component";
import HomeProjects from "../../components/home-projects/home-projects.component";
import { ScrollPage } from "react-scroll-motion";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <ScrollPage className="random">
        <HomeAbout />
      </ScrollPage>
      <ScrollPage className="random">
        <HomeContent />
      </ScrollPage>
      <HomeProjects />
    </div>
  );
};

export default Home;
