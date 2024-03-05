const images = [];

// Use require.context to get all the image file paths in the gallery-images folder
const importAll = (r) => {
  r.keys().forEach((key) => {
    images.push(r(key));
  });
};

// Require all the images using the require.context function
const imagesContext = require.context(
  "../assets/gallery-images",
  false,
  /\.(png|jpe?g|svg)$/
);
importAll(imagesContext);

export default images;

export const distribution = [
  {
    category: "Distribution",
    image: images[22],
    heading: "New Business Main, Service & Meter",
    description:
      "We can install new or upgrade existing gas facilities to serve residential, commercial and industrial customers.  This includes high pressure steel, medium high pressure plastic, main & service taps, meter sets and customer relights.",
  },
  {
    category: "Distribution",
    image: images[1],
    heading: "Pressure Improvements",
    description:
      "We can increase the pressure in your natural gas lines to ensure that you have a reliable supply of gas. This is important for businesses and homes that use a lot of natural gas, such as for heating and cooking.",
  },
  {
    category: "Distribution",
    image: images[2],
    heading: "Regulator Stations",
    description:
      "We can fabricate and install new or replacement regulator stations.  This includes grading, foundations, structural supports, fencing, sound barriers, power & communications.",
  },

  {
    category: "Distribution",
    image: images[3],
    heading: "Customer/Developer/DOT Relocations",
    description:
      "We can perform all gas facility relocations up to 36 diameter to resolve construction conflicts with transportation improvements, greenfield developments and property owner improvements.",
  },
  {
    category: "Distribution",
    image: images[4],
    heading: "DIMP Retirements & Renewals",
    description:
      "We can retire and renew your DIMP (Distribution Integrity Management Program) lines to ensure that they are in compliance with safety regulations. This is important for preventing leaks and ensuring the safety of your natural gas lines",
  },
  {
    category: "Distribution",
    image: images[5],
    heading: "Master Meter Conversions",
    description:
      "We can uprate private gas systems to allow individual metering.",
  },
  {
    category: "Distribution",
    image: images[6],
    heading: "Casing Remediation",
    description:
      "We can remediate shorted casings through full or partial casing removal, pipeline misalignment adjustment, or annulus wax injection.",
  },
  {
    category: "Distribution",
    image: images[7],
    heading: "Mechanical Fitting Remediation",
    description:
      "We can repair damaged mechanical fittings to prevent leaks and ensure the integrity of your natural gas lines. This is important for preventing leaks and ensuring the safety of your natural gas lines.",
  },
  {
    category: "Distribution",
    image: images[8],
    heading: "Inactive Service Retirements",
    description:
      "We can retire inactive natural gas service lines to improve safety and reduce the risk of leaks. This is important for preventing leaks and ensuring the safety of your natural gas lines.",
  },
  {
    category: "Distribution",
    image: images[9],
    heading: "Maintenance & Emergency Work",
    description:
      "We can provide support for emergency work and perform smaller maintenance work like valve replacements, inactive service retirements, mechanical fitting removal and more.",
  },
  {
    category: "Distribution",
    image: images[10],
    heading: "Mainline Pipe Work (up to 36”)",
    description:
      "We can install new or replace gas systems to improve pressure, serve new areas or replace aging infrastructure. We are experienced with steel facilities up to 36 diameter and plastic facilities up to 12 diameter.",
  },
  {
    category: "Distribution",
    image: images[7],
    heading: "Restoration",
    description:
      "With all our work, we can restore hard surfaces & landscaping in construction areas to preconstruction condition or better.",
  },
  {
    category: "Distribution",
    image: images[10],
    heading: "Grouting",
    description:
      "We can grout abandoned pipelines to prevent eventual collapse after pipe deterioration.",
  },
];

export const transmission = [
  {
    image: images[11],
    heading: "Mainline Pipe Work (up to 36”)",
    description:
      "We can install new or replace transmission pipelines up to 36 diameter to improve pressure, serve new areas or replace aging infrastructure.  Our welders, pipe fitters and coaters perform are highly skilled.",
  },
  {
    image: images[12],
    heading: "New Installation",
    description:
      "We can install new mainline pipe work to connect new customers to the natural gas distribution system.",
  },
  {
    image: images[13],
    heading: "Renewals & Relocations",
    description:
      "We can relocate and renew existing mainline pipe work to accommodate new construction or development. This is important for ensuring that your natural gas lines are not damaged by construction activities. ",
  },
  {
    image: images[14],
    heading: "Retirement & Retesting",
    description:
      "We can retire and retest existing mainline pipe work to ensure that it is in compliance with safety regulations. This is important for preventing leaks and ensuring the safety of your natural gas lines.",
  },
  {
    image: images[15],
    heading: "Interconnects",
    description:
      "We can install and maintain interconnects between different natural gas distribution systems. This is important for ensuring that natural gas can flow freely between different systems. ",
  },
  {
    image: images[16],
    heading: "HCA Casing Remediation",
    description:
      "We can repair damaged HCA (High Carbon Steel) casing to prevent leaks and ensure the integrity of your natural gas lines. This is important for preventing leaks and ensuring the safety of your natural gas lines.",
  },
  {
    image: images[16],
    heading: "Restoration",
    description:
      "With all our work, we can restore hard surfaces & landscaping in construction areas to preconstruction condition or better.",
  },
  {
    image: images[17],
    heading: "Station Work",
    description:
      "We can fabricate and install new or replacement City Gate stations.  This includes everything from grading, concrete foundations, fencing, sound barriers to power & communications. We can retrofit existing stations with Launcher/Recievers, Heaters, odorizers, Filter/Separators and modify meter runs.",
  },
  {
    image: images[18],
    heading: "Pipeline Integrity Work",
    description:
      "We can retrofit pipelines to make them piggable, support in-line inspection, expose pipe for direct assessment, make repairs through structural wraps or pipe replacement.",
  },
  {
    image: images[18],
    heading: "AC Mitigation",
    description:
      "We can install zinc ribbon, gradiant mats, solid state decouplers and test stations to protect the pipeline from AC interference.",
  },
];

export const other = [
  {
    image: images[19],
    heading: "Vacuum Excavation",
    description:
      "We can provide soft dig services to prevent damage to critcal infrastructure within Plants, Stations and in areas with utilty congestion or unlocatable utilities.",
  },
  {
    image: images[20],
    heading: "System Records Creation",
    description:
      "We can find and expose gas facilities to establish missing system records such as location, pipe size and material.",
  },
  {
    image: images[21],
    heading: "Constructability Consultation",
    description:
      "We can review prelimnary project plans and provide constructability advice on route, work space requirements, geotech recomendations and construction methods to lower costs and avoid scope changes.",
  },
];

export const makeUrl = (str) => {
  return str.replace(/\s+/g, "-").replace(/\//g, "-").toLowerCase();
};
