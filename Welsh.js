import React from "react";
import { LiveTour } from "live-tour-lab";
import Title from "./Title";
import Sounds from "./Sounds";
import Quiz from "./Quiz";
import RouteWelsh from "./RouteWelsh";
import DisplayImages from "./DisplayImages";

export default class Welsh extends React.Component {
  render() {
    return (
      <LiveTour tourURI="dentist-welsh.json">
        <Title entries="titles" />
        <Sounds entries="clickSounds" />
        <Quiz entries="questions" />
        <RouteWelsh entries="links" />
        <DisplayImages entries="images" />
      </LiveTour>
    );
  }
}
