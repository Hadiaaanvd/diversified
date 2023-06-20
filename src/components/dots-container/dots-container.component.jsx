import React from "react";
import "./dots-container.styles.scss";
const Dots = ({ count, top }) => {
  count = count ? count : 10;
  return (
    <div className="">
      {[...Array(count)].map((e, i) => (
        <span className="circle-container" key={i}>
          {[...Array(top ? count : count - 3)].map((e, i) => (
            <span className="circle" key={i}>
              ●
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default Dots;
