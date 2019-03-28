import React, { Component } from "react";
import Card from "../../component/PersonCard";
import "./Testimonials.scss";
import logo from "./img/logo.png";
import everyone from "./img/everyone.png";
import alex from "./img/alex.png";
import katelyn from "./img/Katelyn.png";
import matthew from "./img/Matthew.png";
import jamie from "./img/jamie.png";
import jacob from "./img/jacob.png";
import spencer from "./img/spencer.png";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="background">
        <div className="header">Testimonials</div>
        <div className="class-pic">
          <img alt="classpic.jpg" src={everyone} />
        </div>
        <div className="row">
          <Card
            namestyle={{ paddingTop: 20 }}
            locationstyle={{ paddingTop: 15 }}
            containerstyle={{ marginRight: 200 }}
            logo={logo}
            biostyle={{
              lineHeight: 1.1,
              fontSize: 21
            }}
            bio="BCIS has given me the opportunity to expand my horizons, bridging the gap to opportunities I didn't think would be there."
            pic={alex}
            firstname="Alex"
            lastname="RICHARDSON"
            age="21"
            county="Barren County"
            statename="KY"
            time="Fall, 2018"
          />
          <Card
            namestyle={{ paddingTop: 10 }}
            locationstyle={{ paddingTop: 10 }}
            logo={logo}
            biostyle={{
              lineHeight: 1.1,
              fontSize: 21
            }}
            bio="I am so thankful for this opportunity. It is giving me a great foundation to build on, and I cannot wait to put these skills to work!"
            pic={katelyn}
            firstname="Katelyn"
            lastname="PACE"
            age="25"
            county="Metcalfe County"
            statename="KY"
            time="Fall, 2018"
          />
        </div>
        <div className="row">
          <Card
            namestyle={{ paddingTop: 25 }}
            locationstyle={{ paddingTop: 20 }}
            containerstyle={{ marginRight: 200 }}
            logo={logo}
            biostyle={{
              lineHeight: 1.1,
              fontSize: 15.5
            }}
            bio="This BCIS class has opened my eyes to a career field I had never considered before. The possibility of getting to work and provide for my family by doing something I enjoy is exciting! I am very thankful for being blessed with this opportunity, and I am looking forwart to becoming great at this!"
            pic={matthew}
            firstname="Matthew"
            lastname="RILEY"
            age="31"
            county="Barren County"
            statename="KY"
            time="Fall, 2018"
          />
          <Card
            namestyle={{ paddingTop: 20 }}
            locationstyle={{ paddingTop: 15 }}
            logo={logo}
            biostyle={{
              lineHeight: 1.1,
              fontSize: 21
            }}
            bio="I will push myself into situations that will change me, even if it's hard. I was safe where I was, but that's not what I was built for."
            pic={jamie}
            firstname="Jamie"
            lastname="CUMMINGS"
            age="32"
            county="Barren County"
            statename="KY"
            time="Fall, 2018"
          />
        </div>
        <div className="row" style={{ marginBottom: 20 }}>
          <Card
            namestyle={{ paddingTop: 15 }}
            locationstyle={{ paddingTop: 10 }}
            containerstyle={{ marginRight: 200 }}
            logo={logo}
            biostyle={{
              lineHeight: 1,
              fontSize: 14.5
            }}
            bio="BCIS has shown me that there is great potential for anyone to be a programmer and that you don't have to be perfect at everything in order to succeed. Looking past the BCIS program, I hope to become employed as a software/web developer where I can turn my passion into a living, constantly expanding my knowledge and skill set."
            pic={jacob}
            firstname="Jacob"
            lastname="FINN"
            age="18"
            county="Barren County"
            statename="KY"
            time="Fall, 2018"
          />
          <Card
            namestyle={{ paddingTop: 20 }}
            locationstyle={{ paddingTop: 15 }}
            logo={logo}
            biostyle={{
              lineHeight: 1.1,
              fontSize: 18
            }}
            bio="I've spent the past few years trying to find the right career path, but one really fit. Programming is something I enjoy, and I'm constantly being challenged to be/do better."
            pic={spencer}
            firstname="Spencer"
            lastname="CASTEEL"
            age="23"
            county="Barren County"
            statename="KY"
            time="Fall, 2018"
          />
        </div>
      </div>
    );
  }
}
