import React from "react";
import BannerInner from "../../components/banner-inner/banner-inner.component";
import AboutusContent from "../../components/about-us/about-us.component";
import HomeProjects from "../../components/home-projects/home-projects.component";
const Aboutus = () => (
  <div>
    <BannerInner index={0} />
    <AboutusContent />
    {/* <div className="blue-background"></div> */}
    <HomeProjects />
  </div>
);

export default Aboutus;
