import React, { Component } from "react";
import "./Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact">Contact me at:</div>
        <div className="contact-top">
          <div>justin.browning@barren.kyschools.us</div>
          <a
            href="https://twitter.com/JustinBBrowning"
            target="_blank rel='noreferrer noopener'"
          >
            @JustinBBrowning
          </a>
        </div>
        <div className="contact-bottom">
          <div>270-590-0053 (mobile)</div>
          <div>270-629-3967 (office)</div>
        </div>
      </div>
    );
  }
}
