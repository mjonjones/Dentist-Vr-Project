import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='dentist-tour.json' />
    );
  }
};

AppRegistry.registerComponent('MyLiveTour', () => MyLiveTour);