import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';
import Title from './Title';
import Sounds from './Sounds';

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='dentist-tour.json' >
        <Title entries="titles" />
          <Sounds entries="clickSounds" />
      </LiveTour>
    );
  }
};

AppRegistry.registerComponent('MyLiveTour', () => MyLiveTour);