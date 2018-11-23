import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';

export default class MyLiveTour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='demo-dentist-tour.json' />
    );
  }
};

AppRegistry.registerComponent('MyLiveTour', () => MyLiveTour);