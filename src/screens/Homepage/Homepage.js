import React, { Component } from "react";
import "./Homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="homepage-contents">
          <div className="homepage-header">
            <h4 className="homepage-header-text">
              {`<`}
              <span className="homepage-BC">BC</span>
              {`SKILLS>`}
            </h4>
          </div>
          <p className="homepage-statement">
            Mauris commodo dapibus fames viverra dictum nunc dapibus
            sollicitudin luctus fusce non, morbi eros ultrices curae tortor diam
            justo nunc felis ac vulputate duis, malesuada nostra euismod in
            purus aenean consequat sem aliquam dictumst porta mauris porttitor
            ac maecenas cras sem iaculis porta at tellus, eget molestie
            habitasse amet cras quisque convallis gravida tristique.
          </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
