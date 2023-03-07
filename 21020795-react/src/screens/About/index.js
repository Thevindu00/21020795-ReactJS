import React from "react";
import "./index.css";

function About() {
  return (
    <div className="home-hero">
      <div className="columns">
        <div className="column is-8">
          <div id="block" style={{ zIndex: 1 }}>
            <h2 className="title is-2 has-text-link">
              <b>About ME</b>
            </h2>
            <p className="subtitle is 4">
              Since beginning my journey as a freelance designer over 4 years
              <br />
              ago, I've done remote work for agencies, consulted for startups,
              <br />
              and collaborated with talented people to create digital products
              <br />
              for both business and consumer use. I'm quietly confident,
              <br />
              naturally curious, and perpetually working on improving my chops
              <br />
              one design problem at a time
            </p>
            <p className="subtitle is 2">
              <span style={{ color: "rgb(214, 206, 41)" }}>
                <b>Name :</b>
              </span>
              Thevindu Rathanayake
            </p>
            <p className="subtitle is 2">
              <span style={{ color: "rgb(214, 206, 41)" }}>
                <b>age :</b>
              </span>
              22
            </p>
            <p className="subtitle is 2">
              <span style={{ color: "rgb(214, 206, 41)" }}>
                <b>University:</b>
              </span>
              University of Colombo
            </p>
            <p className="subtitle is 2">
              <span style={{ color: "rgb(214, 206, 41)" }}>
                <b>Youtube:</b>
              </span>
              Thevindu Rathanayake
            </p>
          </div>
          <img
            className="photo01"
            style={{ zIndex: 0 }}
            src="Rectangle04.png"
          />
        </div>
        <div className="column is-4">
          <img className="me" src="me.HEIC" />
        </div>
      </div>
    </div>
  );
}

export default About;
