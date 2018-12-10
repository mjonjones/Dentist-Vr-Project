import React from "react";
import { Text, View, VrButton } from "react-vr";

export default class Title extends React.Component {
  static defaultProps = {
    txt: "",
    rotateY: 0,
    height: 0.15,
    width: 0.4,
    rotateX: 20,
    translateZ: -1
  };

  constructor(props) {
    super();
    this.state = {
    };
    this.textStyle = {
      color: "#fff200",
      fontWeight: "bold",
      textAlign: "center"
    };
  }

  render() {
    return (
      // Styling
      <View
        style={{
          backgroundColor: "#3498db",
          position: "absolute",
          layoutOrigin: [0.5, 0.5, 0.5],
          width: this.props.width,
          height: this.props.height,
          transform: [
            { rotateY: this.props.rotateY }, 
            { rotateX: this.props.rotateX }, 
            { translate: [0, 0, this.props.translateZ] }
          ],
          opacity: 1,
          borderRadius: 0.07,
        }}
      >
        <Text style={this.textStyle}>{this.props.txt}</Text>
      </View>
    );
  }
}