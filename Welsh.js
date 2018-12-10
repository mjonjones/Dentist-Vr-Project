import React from "react";
import { LiveTour } from "live-tour-lab";
import Title from "./Title";
import Sounds from "./Sounds";
import Quiz from "./Quiz";
import RouteButton from "./RouteEnglish";
import DisplayImages from './DisplayImages';

export default class welsh extends React.Component {
  render() {
    return (
      <LiveTour tourURI="dentist-welsh.json">
        <Title entries="titles" />
        <Sounds entries="clickSounds" />
        <Quiz entries="questions" />
        <RouteButton entries="links" />
        <DisplayImages entries="images" />
      </LiveTour>
    );
  }
}
