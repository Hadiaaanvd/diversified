import React from "react";
import Banner from "../../components/banner/banner.component";
import HomeContent from "../../components/home-content/home-content.component";
import HomeAbout from "../../components/home-about/home-about.component";
import HomeProjects from "../../components/home-projects/home-projects.component";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <HomeAbout />
      <HomeContent />
      <HomeProjects />
    </div>
  );
};

export default Home;
