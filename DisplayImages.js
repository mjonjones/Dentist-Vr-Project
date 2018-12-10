import React from 'react';
import {
  asset,
  Animated,
  Image,
} from 'react-vr';

export default class DisplayImages extends React.Component {
  static defaultProps = {
    op: 1, 
    width: 1, 
    height: 1, 
    rotateY: 0, 
    src: null, 
    borderRadius: 0.1
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
          borderRadius: this.props.borderRadius,
        }}
        source={asset(this.props.src) }
      />  
    );
  }
}