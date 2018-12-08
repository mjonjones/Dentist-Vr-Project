import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';
import Title from './Title';
import Sounds from './Sounds';
import Quiz from './Quiz';
import DisplayImages from './DisplayImages';

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='dentist-tour.json' >
        <Title entries="titles" />
          <Sounds entries="clickSounds" />
        <Quiz entries="questions"/>
        <DisplayImages entries="images" />
      </LiveTour>
    );
  }
};

AppRegistry.registerComponent('MyLiveTour', () => MyLiveTour);