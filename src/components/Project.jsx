import React from "react";
import Header from 'Header',
import Footer from 'Footer'

function Project() {
  return (
    <div>
      <Header />
    <div className='projectSection'>
      <div className="sectionTitle">
        <h2>Projects</h2>
      </div>
      <div>
        <div className="card">
          <a
            className="cardTitle"
            href="https://github.com/gwennr-t/Random-Password-Generator"
            style="text-decoration: none"
          >
            Random Password Generator
          </a>
        </div>

        <div className="card">
          <a className="cardTitle" href="https://github.com/gwennr-t/Work-Day-Scheduler" style="text-decoration: none">
            Work Day Scheduler
          </a>
        </div>

        <div className="card">
          <a className="cardTitle" href="https://github.com/gwennr-t/code-quiz" style="text-decoration: none">
            Code Quiz
          </a>
        </div>

        <div className="card">
          <a className="cardTitle" href="https://github.com/gwennr-t/Weather-Dashboard" style="text-decoration: none">
            Weather Dashboard
          </a>
        </div>

        <div className="card">
          <a className="cardTitle" href="https://github.com/gwennr-t/professional-readme-generator" style="text-decoration: none">
            Professional README.md Generator
          </a>
        </div>

        <div className="card">
          <a className="cardTitle" href="https://github.com/gwennr-t/text-editor" style="text-decoration: none">
            Text Editor
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Project;
