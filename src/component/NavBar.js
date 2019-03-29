import React, { Component } from "react";
import { Navigation } from "react-mdl";
//import { Link } from "react-router-dom";

import "./NavBar.scss";

export default class NavBar extends Component {

  scrollTo(name) {
      const element = document.getElementById(name)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
            <a className="navbar-items" onClick={ () => this.scrollTo("home")}>
              Home
            </a>
            <a className="navbar-items" onClick={() => this.scrollTo("about-anchor")}>
              About
            </a>
            <a className="navbar-items" onClick={() => this.scrollTo("testimonial")}>
              Testimonials
            </a>
            <a className="navbar-items" onClick={() => this.scrollTo("contact")}>
              Contact
            </a>
          </Navigation>
        </div>
      </div>
    );
  }
}
