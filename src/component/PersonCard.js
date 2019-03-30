import React from "react";
import "./PersonCard.scss";

const PersonCard = ({ bio, bioPicture, firstName, lastName, age, county, time}) => {

  return (

    <div className="person-card-container">
      <div className="left-container">

        <div className="logo-picture-container">
          <img className="logo-picture" src={require("../assets/img/logo.png")} alt={"logo"} />
        </div>

        <div className="bio-text-container">
          {bio}
        </div>

        <div className="twitter-links-container">
          <a
            href="https://twitter.com/BarrenSkills"
            target="_blank"
            rel="noreferrer noopener"
          >
            @BarrenSkills
          </a>
          <a
            href="https://twitter.com/barrenschools"
            target="_blank"
            rel="noreferrer noopener"
          >
            @barrenschools
          </a>
          <a
            href="https://twitter.com/BarrenZone"
            target="_blank"
            rel="noreferrer noopener"
          >
            @BarrenZone
          </a>
          <a
            href="https://twitter.com/Interapt"
            target="_blank rel='noreferrer noopener'"
          >
          </a>
        </div>

      </div>
      <div className="right-container">
        <div className="bio-picture-container">
          <img src={require(`../assets/img/${bioPicture}.png`)} alt={bioPicture} />
        </div>
        <div className="name-container">
        <div>{`${firstName} ${lastName}, ${age}`}</div>

        </div>

      </div>
    </div>
  );
}










//   return (
//     <div className="container" style={props.containerstyle}>
//       <div className="left-side">
//         <div className="logo">
//           <img alt="logo.jpg" src={props.logo} />
//         </div>
//         <div className="bio" style={props.biostyle}>
//           "{props.bio}"
//         </div>
//       </div>
//       <div className="right-side">
//         <div className="bio-pic">
//           <img alt="bio-pic.jpg" src={props.pic} />
//         </div>
//         <div className="name-age" style={props.namestyle}>
//           {props.firstname}
//           <span> {props.lastname}</span>, {props.age}
//         </div>
//         <div className="location" style={props.locationstyle}>
//           {props.county}, <span className="state">{props.statename}</span>
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="time">{props.time}</div>
//         <div className="twitter-handles">
          // <a
          //   href="https://twitter.com/BarrenSkills"
          //   target="_blank"
          //   rel="noreferrer noopener"
          // >
          //   @BarrenSkills
          // </a>
          // <a
          //   href="https://twitter.com/barrenschools"
          //   target="_blank"
          //   rel="noreferrer noopener"
          // >
          //   @barrenschools
          // </a>
          // <a
          //   href="https://twitter.com/BarrenZone"
          //   target="_blank"
          //   rel="noreferrer noopener"
          // >
          //   @BarrenZone
          // </a>
          // <a
          //   href="https://twitter.com/Interapt"
          //   target="_blank rel='noreferrer noopener'"
          // >
//             @Interapt
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export { PersonCard };
