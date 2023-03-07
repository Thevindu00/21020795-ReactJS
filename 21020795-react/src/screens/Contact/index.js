import React from "react";
import "./index.css";

function Contact() {
  return (
    <div className="columns">
      <div className="column is-12">
        <div id="block" style={{ zIndex: 1 }}>
          <h2 className="title is-2 has-text-link">Contact</h2>
          <h3
            className="subtitle is-2"
            style={{ paddingLeft: "15px", paddingTop: "50px" }}
          >
            Have a question or work together
          </h3>
          <div className="buttons" style={{ paddingTop: "30px" }}>
            <button
              className="button is-link is-rounded"
              style={{ width: "500px" }}
            >
              Start a conversation
            </button>
          </div>
          <div className="row" style={{ paddingTop: "50px" }}>
            <div className="column01">
              <img src="facebook.png" alt="Snow" style={{ width: "20%" }} />
            </div>
            <div className="column01">
              <img
                src="instagram.png"
                alt="Forest"
                style={{ width: "20%", position: "relative", right: "100px" }}
              />
            </div>
            <div className="column01">
              <img
                src="periscope.png"
                alt="Mountains"
                style={{ width: "20%", position: "relative", right: "200px" }}
              />
            </div>
            <div className="column01">
              <img
                src="twitter.png"
                alt="Mountains"
                style={{ width: "20%", position: "relative", right: "300px" }}
              />
            </div>
            <div className="column01">
              <img
                src="linkedin.png"
                alt="Mountains"
                style={{ width: "20%", position: "relative", right: "400px" }}
              />
            </div>
          </div>
        </div>
        <img className="rec04" style={{ zIndex: 0 }} src="Rectangle07.png" />
      </div>
    </div>
  );
}

export default Contact;
