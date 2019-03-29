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
              At BC Skills, we believe EVERYONE has the capacity to be an
              innovator. We exist to provide opportunities for our students and
              our community to do just that. With an emphasis on computer
              science, BC Skills is a place where high-demand skills are gained
              and connected to industry, entrepreneurship, and higher-education.
            </div>
          </div>
        </div>

        <div className="about-mission">
          <div className="about-mission-content">
            <div className="about-mission-title">Mission statement</div>
            <div className="about-mission-statement">
              We offer EDUCATION opportunities beginning as early as 4th grade
              and continuing throughout adulthood. We facilitate opportunities
              for INNOVATION including partnerships with both public and private
              sector as well as the research and development of original
              products. We DEPLOY our people both locally and nationally as
              app/software/web developers, to higher-education, and as
              ENTREPRENEURS.
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
