import React from "react";
import "./index.css";

function HomePage() {
  return (
    <div>
      <div className="columns">
        <div id="block" style={{ zIndex: 1 }} className="column is-two-thirds">
          <h2 className="title is-2" style={{ color: "blue" }}>
            Hi!
          </h2>
          <h2 className="title is-1" style={{ color: "blue" }}>
            I'm Thevindu Rathnayake
          </h2>
          <br />
          <h2 className="subtitle is-3 has-text-warning">
            Frontend Developer|Designer
          </h2>
          <h4 className="subtitle is-4">
            I am a frontend developer and designer based in
            <br />
            Srilanka
          </h4>
        </div>
        <img className="mt-5" style={{ zIndex: 0 }} src="Rectangle03.png" />
        <div className="buttons">
          <button className="button is-link is-rounded">Hire ME</button>
          <button className="button is-link is-rounded">
            Download my resume
          </button>
        </div>
      </div>
      <div className="column">
        <img className="photo02" src="elephant.png" />
      </div>
    </div>
  );
}

export default HomePage;
