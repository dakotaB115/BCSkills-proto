import React, { Component } from "react";
import { Layout, Content } from "react-mdl";
import Homepage from "./screens/Homepage/Homepage";
import AboutUs from "./screens/AboutUs/AboutUs";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import NavBar from "./component/NavBar";
import Main from "./Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <Main />
      </Layout>
    );
  }
}

export default App;
