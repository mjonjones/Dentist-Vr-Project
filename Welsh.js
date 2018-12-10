import React from "react";
import { LiveTour } from "live-tour-lab";

export default class welsh extends React.Component {
  render() {
    return <LiveTour tourURI="dentist-welsh.json" />;
  }
}
