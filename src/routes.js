import React from "react";
const Home = React.lazy(() => import("./pages/home/home"));
const Gallery = React.lazy(() => import("./pages/gallery/gallery"));
const Contact = React.lazy(() => import("./pages/contact/contact"));
const Employment = React.lazy(() => import("./pages/employment/employment"));
const AboutUs = React.lazy(() => import("./pages/about-us/about-us"));
const Services = React.lazy(() => import("./pages/services/services"));
const IndividualService = React.lazy(() =>
  import("./pages/individual-service/individual-service")
);

export const finalRoutes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: <Home />,
  },
  {
    path: "/gallery",
    name: "gallery",
    exact: true,
    component: <Gallery />,
  },
  {
    path: "/contact",
    name: "contact",
    exact: true,
    component: <Contact />,
  },
  {
    path: "/employment",
    name: "employment",
    exact: true,
    component: <Employment />,
  },
  {
    path: "/services",
    name: "services",
    exact: true,
    component: <Services />,
  },
  {
    path: "/about-us",
    name: "about-us",
    exact: true,
    component: <AboutUs />,
  },
  {
    path: "/services/:categoryId/:serviceId",
    name: "about-us",
    exact: true,
    component: <IndividualService />,
  },
];
