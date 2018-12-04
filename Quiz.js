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
    this.state = {
      answered: false,
      output: false
    };
    this.textStyle = {
      color: "#fff200",
      fontWeight: "bold"
    };
    this.correctStyle = {
        color: "#009432",
        fontWeight: "bold"
    };
    this.incorrectStyle = {
        color: "#e74c3c",
        fontWeight: "bold"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(answerVar) {
    console.log(answerVar);
    if (answerVar == this.props.correct) {
      this.setState({ answered: true, output: true });
    } else {
      this.setState({ answered: true, output: false });
    }
  }

  render() {
    return (
      // Styling
      <View
        style={{
          backgroundColor: "#3498db",
          position: "absolute",
          layoutOrigin: [0.5, 0.5, 0.5],
          width: 1,
          height: 0.65,
          transform: [{ rotateY: this.props.rotateY }, { translateZ: -3 }],
          opacity: 1
        }}
      >
        <Text style={this.textStyle}>{this.props.question}</Text>
        <VrButton onClick={() => this.handleClick(this.props.answer1)}>
          <Text style={this.textStyle}>{this.props.answer1}</Text>
        </VrButton>
        <VrButton onClick={() => this.handleClick(this.props.answer2)}>
          <Text style={this.textStyle}>{this.props.answer2}</Text>
        </VrButton>
        <VrButton onClick={() => this.handleClick(this.props.answer3)}>
          <Text style={this.textStyle}>{this.props.answer3}</Text>
        </VrButton>
        {this.state.answered &&
            <Text style={this.state.output ? this.correctStyle : this.incorrectStyle} >
            {this.state.output ? 'Correct' : 'Incorrect'}
          </Text>
        }
      </View>
    );
  }
}
