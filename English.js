import React from "react";
import Title from "./Title";
import Sounds from "./Sounds";
import Quiz from "./Quiz";
import { LiveTour } from "live-tour-lab";
import RouteButton from "./RouteEnglish";

export default class English extends React.Component {
  render() {
    return (
      <LiveTour tourURI="dentist-tour.json">
        <Title entries="titles" />
        <Sounds entries="clickSounds" />
        <Quiz entries="questions" />
        <RouteButton entries="links" />
      </LiveTour>
    );
  }
}
