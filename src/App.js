import React, { Component } from "react";
import { Layout } from "react-mdl";
import NavBar from "./component/NavBar";
//import Main from "./Main";
import Homepage from "./screens/Homepage/Homepage";
import AboutUs from "./screens/AboutUs/AboutUs";
//import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
//import OurTeam from "./screens/Our Team/OurTeam";
import Testimonial from "./screens/Testimonials/Testimonials";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <section id="home" className="home">
          <Homepage />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="testimonial" className="testimonial">
          <Testimonial />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    );
  }
}

/*<section id="team">
  <OurTeam />
</section>;
*/

export default App;
