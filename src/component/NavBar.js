import React, { Component } from "react";
import { Navigation } from "react-mdl";
//import { Link } from "react-router-dom";

import "./NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-header">
        <div className="navbar-content">
          <div>
            <a href="#home" className="navbar-title">
              {`<`}
              <span className="navbar-BC">BC</span>
              {`SKILLS>`}
            </a>
          </div>
          <Navigation className="navbar-elements">
            <a className="navbar-items" href="#home">
              Home
            </a>
            <a className="navbar-items" href="#about">
              About
            </a>
            <a className="navbar-items" href="#testimonial">
              Testimonials
            </a>
            <a className="navbar-items" href="#contact">
              Contact
            </a>
          </Navigation>
        </div>
      </div>
    );
  }
}

/*
<Link
  className="navbar-items"
  to="/projects"
>
  Projects
</Link>

<a className="navbar-items" href="#team">
              Our Team
            </a>
*/
