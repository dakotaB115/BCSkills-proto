import React, { Component } from "react";
import { Navigation } from "react-mdl";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-header">
        <div className="navbar-content">
          <div className="navbar-title">
            <Link to="/" style={{ textDecoration: "none", color: "#ffcd00" }}>
              {`<BCSkills>`}
            </Link>
          </div>
          <Navigation className="navbar-elements">
            <Link smooth to="/">
              Home
            </Link>
            <Link smooth to="/aboutus">
              About Us
            </Link>
            <Link smooth to="/projects">
              Projects
            </Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </div>
      </div>
    );
  }
}
