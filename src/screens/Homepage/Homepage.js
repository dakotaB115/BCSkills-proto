import React, { Component } from "react";
import "./Homepage.scss";
import classpic from "./img/classpic.jpg";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="homepage-contents">
          <img className="homepage-pic" alt="classpic.jpg" src={classpic} />
          <div className="homepage-text">
            <div className="homepage-header">
              <div className="homepage-header-text">
                {`<`}
                <span className="homepage-BC">BC</span>
                {`SKILLS>`}
              </div>
              <div className="homepage-statement">
                educate + innovate + deploy
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
