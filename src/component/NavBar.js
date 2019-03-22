import React, { Component } from "react";
import { Navigation } from "react-mdl";
import Interactive from "react-interactive";
import { HashLink as Link } from "react-router-hash-link";

import "./NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-header">
        <div className="navbar-content">
          <div>
            <Interactive as={Link} to="/" className="navbar-title">
              {`<`}
              <span className="navbar-BC">BC</span>
              {`SKILLS>`}
            </Interactive>
          </div>
          <Navigation className="navbar-elements">
            <Interactive className="navbar-items" as={Link} smooth to="/">
              Home
            </Interactive>
            <Interactive className="navbar-items" as={Link} smooth to="/about">
              About
            </Interactive>
            <Interactive
              className="navbar-items"
              as={Link}
              smooth
              to="/projects"
            >
              Projects
            </Interactive>
            <Interactive className="navbar-items" as={Link} to="/contact">
              Contact
            </Interactive>
          </Navigation>
        </div>
      </div>
    );
  }
}
