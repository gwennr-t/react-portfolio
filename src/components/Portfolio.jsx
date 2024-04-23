import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
      <div>
        <div className="portfolioTitle">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolioItem">
          <Project />
        </div>
      </div>
  );
}

export default Portfolio;
