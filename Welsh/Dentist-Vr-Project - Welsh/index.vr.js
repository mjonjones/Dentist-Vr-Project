import React from "react";
import { AppRegistry } from "react-vr";
import { LiveTour } from "live-tour-lab";
import Title from "./Title";
import TestComponent from "./TestComponent";

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
      <LiveTour tourURI="dentist-tour.json">
        <Title entries="titles" />
      </LiveTour>
    );
  }
}

AppRegistry.registerComponent("MyLiveTour", () => MyLiveTour);
