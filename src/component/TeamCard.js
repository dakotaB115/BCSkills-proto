import React from "react";
import "./TeamCard.scss";

const TeamCard = props => {
  return (
    <div className="member">
      <div className="pic">
        <img alt="team member" src={props.member} />
      </div>
      <div className="content">
        <div className="person">{props.person}</div>
        <div className="title">{props.title}</div>
        <div className="bio">{props.bio}</div>
      </div>
    </div>
  );
};

export default TeamCard;
