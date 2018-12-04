import React from "react";
import { Text, View, VrButton } from "react-vr";

export default class Quiz extends React.Component {
  static defaultProps = {
    rotateY: 0,
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correct: ""
  };

  constructor(props) {
    super();
    state = {
      textStyle: {
        color: "#fff200",
        fontWeight: "bold"
      },
      output: ""
    };
    // bind here
  }

  handleClick = answer => {
    if (answer == this.props.correct) {
      this.setState.output("Correct");
    } else {
      this.setState.output("Try Again");
    }
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#3498db",
          position: "absolute",
          layoutOrigin: [0.5, 0.5, 0.5],
          width: 1,
          height: 0.5,
          transform: [{ rotateY: this.props.rotateY }, { translateZ: -3 }],
          opacity: 1
        }}
      >
        <Text style={this.textStyle}>{this.props.question}</Text>
        <VrButton onClick={this.handleClick(answer1)}>
          <Text style={this.textStyle}>{this.props.answer1}</Text>
        </VrButton>

        <Text style={this.textStyle}>{this.props.answer2}</Text>
        <Text style={this.textStyle}>{this.props.answer3}</Text>
      </View>
    );
  }
}
