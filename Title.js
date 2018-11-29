import React from 'react';
import {
  asset,
  View,
  Animated,
  AnimatedImage,
  Image,
} from 'react-vr';

export default class Title extends React.Component {
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

  render() {
    return (
      <Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: this.props.width,
          height: this.props.height,
          transform: [
            {rotateY: this.props.rotateY},
            {translateZ: -3}
          ],
          opacity: this.props.op,
        }}
        source={ asset(this.props.src) }
      />

      
    );
  }
}