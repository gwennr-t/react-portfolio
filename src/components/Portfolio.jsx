import React from "react";
import Project from "./Project";
import Header from 'Header';
import Footer from 'Footer';


function Portfolio() {
  return (
    <div>
      <Header />
      <div>
        <div className="portfolioTitle">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolioItem">
          <div className="itemImage">
            <a href=""></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
