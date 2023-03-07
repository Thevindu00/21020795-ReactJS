import React from "react";
import "./index.css";

function Education() {
  return (
    <div className="columns">
      <div id="block" style={{ zIndex: 1 }}>
        <h2 className="title is-2 has-text-link">Education</h2>
        <ol className="title is-2">
          <li>
            GCE Ordinary Level Examination
            <br />
            Central College Bandarawela
          </li>
          <li>
            GCE Advanced Level Examination
            <br />
            Central College Bandarawela
          </li>
          <li>
            Bcs Undergraduate in Information Systems
            <br />
            University of Colombo School of Computing
          </li>
        </ol>
      </div>
      <img className="rec03" style={{ zIndex: 0 }} src="Rectangle05.png" />
    </div>
  );
}

export default Education;
