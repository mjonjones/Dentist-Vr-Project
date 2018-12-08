import React, { Component } from "react";

import React from "react";
import { asset, Text, View, VrButton, Sound } from "react-vr";

export default class RouteButton extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super();
    this.state = {};
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
          width: 0.6,
          height: 0.15,
          transform: [{ rotateY: this.props.rotateY }, { translateZ: -3 }],
          borderRadius: 0.07
        }}
      >
        <VrButton>
          <Text>Hello</Text>
        </VrButton>
      </View>
    );
  }
}
