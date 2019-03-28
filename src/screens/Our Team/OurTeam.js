import React, { Component } from "react";
import "./OurTeam.scss";
import TeamCard from "../../component/TeamCard";
import Faker from "faker";

export default class OurTeam extends Component {
  render() {
    return (
      <TeamCard
        member={Faker.image.avatar()}
        person={Faker.name.findName()}
        title={Faker.name.jobType()}
        bio={Faker.lorem.sentences(2)}
      />
    );
  }
}
