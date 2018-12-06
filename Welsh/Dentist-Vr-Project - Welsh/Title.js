import React from "react";
import { Text, View, VrButton } from "react-vr";

export default class Title extends React.Component {
  static defaultProps = {
    txt: "",
    rotateY: 0,
  };

  constructor(props) {
    super();
    this.state = {
    };
    this.textStyle = {
      color: "#fff200",
      fontWeight: "bold",
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
          width: 0.4,
          height: 0.25,
          transform: [{ rotateY: this.props.rotateY }, { translateZ: -3 }],
          opacity: 1
        }}
      >
        <Text style={this.textStyle}>{this.props.txt}</Text>
      </View>
    );
  }
}