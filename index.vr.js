import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';
<<<<<<< HEAD
import SceneTitle from './SceneTitle';
=======
import Title from './Title';
>>>>>>> dff2c88432a01fc840947dbfa1a04d0e5aca2829

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <LiveTour tourURI='dentist-tour.json'>
        <SceneTitle entries="titles"/>
=======
      <LiveTour tourURI='dentist-tour.json' >
        <Title entries="titles" />
>>>>>>> dff2c88432a01fc840947dbfa1a04d0e5aca2829
      </LiveTour>
    );
  }
};

AppRegistry.registerComponent('MyLiveTour', () => MyLiveTour);