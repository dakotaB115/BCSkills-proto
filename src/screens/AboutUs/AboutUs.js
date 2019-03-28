import React, { Component } from "react";
import BCSkills from "./img/BCSkillsEID.jpg";
import "./AboutUs.scss";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header">
          <div className="about-header-contents">
            <div className="about-title">About Us</div>
            <div className="about-description">
              Bibendum potenti iaculis hendrerit
            </div>
          </div>
        </div>

        <div className="about-mission">
          <div className="about-mission-content">
            <div className="about-mission-title">Mission statement</div>
            <div className="about-mission-statement">
              Lorem ipsum vulputate egestas lectus ultricies sollicitudin
              curabitur pretium vehicula congue, aliquam risus curae vehicula
              tristique sapien facilisis sem luctus quisque phasellus,
              consectetur donec sollicitudin nec lorem tempor arcu mollis
              taciti.
            </div>
          </div>
        </div>

        <div className="about-container-img">
          <img className="about-img" src={BCSkills} alt="bcskills" />
        </div>
      </div>
    );
  }
}
