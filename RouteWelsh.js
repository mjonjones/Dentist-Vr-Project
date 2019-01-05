import React from "react";
import { Text, View, VrButton } from "react-vr";
import { withRouter } from "react-router";

class RouteWelsh extends React.Component {
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
        <VrButton
          onClick={() => {
            this.props.history.goBack("/English");
          }}
        >
          <Text style={this.textStyle}>English</Text>
        </VrButton>
      </View>
    );
  }
}

export default withRouter(RouteWelsh);
