import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";
import AboutUs from "./screens/AboutUs/AboutUs";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}
