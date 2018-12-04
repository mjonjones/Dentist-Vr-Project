import React from 'react';
import {
    asset,
    View,
    Animated,
    AnimatedImage,
  } from 'react-vr';
  
  export default class Quiz extends React.Component{
    static defaultProps = {
        op: 1, // opacity of hero picture
        width: 1, // width of hero picture
        height: 1, // height of hero picture
        rotateY: 0, // position
        src: null, // file name
      };
    
      constructor(props) {
        super();
        this.state = {
          rotAnim: new Animated.Value(0),
        };
      }
  }