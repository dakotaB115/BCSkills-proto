import React, { Component } from "react";
import { Layout } from "react-mdl";
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
