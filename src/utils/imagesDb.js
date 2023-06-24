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
    image: images[0],
    heading: "New Business Main, Service & Meter",
    description:
      "We can install new main, service, and meter lines for your natural gas utility needs. This includes everything from the main line that runs from the gas main to your property to the service line that runs from your meter to your appliances. We can also install new meters and regulators.",
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
      "We can install and maintain regulator stations to control the pressure of your natural gas lines. This is important for ensuring that the pressure in your lines is safe and consistent.",
  },
  {
    category: "Distribution",
    image: images[3],
    heading: "Customer/Developer/DOT Relocations",
    description:
      "We can relocate your natural gas lines to accommodate new construction or development. This is important for ensuring that your lines are not damaged by construction activities.",
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
      "We can convert your natural gas meters to master meters to improve the efficiency of your utility operations. This can save you money on your natural gas bills.",
  },
  {
    category: "Distribution",
    image: images[6],
    heading: "Cased Pipe Remediation",
    description:
      "We can repair damaged cased pipe to prevent leaks and ensure the integrity of your natural gas lines. This is important for preventing leaks and ensuring the safety of your natural gas lines.",
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
      "We can provide routine maintenance and emergency service for your natural gas lines to ensure that they are in good working order. This includes everything from inspecting your lines for leaks to repairing any damage that is found.",
  },
  {
    category: "Distribution",
    image: images[10],
    heading: "Mainline Pipe Work (up to 36”)",
    description:
      "We can repair damaged cased pipe to prevent leaks and ensure the integrity of your natural gas lines. This is important for preventing leaks and ensuring the safety of your natural gas lines.",
  },
  {},
];

export const transmission = [
  {
    image: images[11],
    heading: "Mainline Pipe Work (up to 36”)",
    description:
      "We can install and maintain mainline pipe work up to 36 inches in diameter. This includes everything from installing new pipe to repairing damaged pipe.",
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
    image: images[17],
    heading: "Station Work",
    description:
      "We can install and maintain natural gas distribution stations, including regulator stations, compressor stations, and metering stations. This is important for ensuring that your natural gas lines are properly regulated and that your meters are accurate",
  },
  {
    image: images[18],
    heading: "Pipeline Integrity Work",
    description:
      "We can perform a variety of pipeline integrity work, including ICDA (Internal Corrosion Direct Assessment) and ECDA (External Corrosion Direct Assessment). This is important for preventing leaks and ensuring the safety of your natural gas lines",
  },
  {},
];

export const other = [
  {
    image: images[19],
    heading: "Vacuum Excavation",
    description:
      "We can use vacuum excavation to safely and efficiently excavate around buried utilities, such as natural gas lines. This is important for preventing damage to your natural gas lines during construction activities",
  },
  {
    image: images[20],
    heading: "System Records Creation",
    description:
      "We can create system records for your natural gas distribution system to improve the efficiency of your utility operations. This can save you time and money.",
  },
  {
    image: images[21],
    heading: "Constructability Consultation",
    description:
      "We can provide constructability consultation services to help you plan and execute your natural gas distribution projects. This can help you avoid costly mistakes. ",
  },
];
