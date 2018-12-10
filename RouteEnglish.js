import React from "react";
import { asset, Text, View, VrButton, Sound, Pano } from "react-vr";
import { withRouter } from "react-router";
import Welsh from "./Welsh";

class RouteButton extends React.Component {
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
    console.log(this.props);
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
        }}>
        <VrButton
          onClick={() => {
            this.props.history.push("/Welsh");
          }}
        >
          <Text
            style={this.textStyle}
          >
            {this.props.link}
          </Text>
        </VrButton>
      </View>
    );
  }
}

export default withRouter(RouteButton);
