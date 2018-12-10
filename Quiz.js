import React from "react";
import { Text, View, VrButton } from "react-vr";

export default class Quiz extends React.Component {
  static defaultProps = {
    rotateY: 0,
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correct: "",
    height: 0.8,
    width: 1.3
  };

  constructor(props) {
    super();
    this.state = {
      answered: false,
      output: false
    };
    this.textStyle = {
      color: "#fff200",
      fontWeight: "bold",
      margin: 0.025,
    };
    this.correctStyle = {
        color: "#23FE01",
        fontWeight: "bold",
        backgroundColor: "#0984e3",
        borderRadius: 0.06,
        textAlign: "center"
    };
    this.incorrectStyle = {
        color: "#e74c3c",
        fontWeight: "bold",
        backgroundColor: "#0984e3",
        borderRadius: 0.06,
        textAlign: "center"
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
            width: this.props.width,
            height: this.props.height,
            transform: [{ rotateY: this.props.rotateY }, { translateZ: -3 }],
            opacity: 0.85,
            borderRadius: 0.07,
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
              {this.state.output ? 'Correct' : 'Try Again'}
            </Text>
          }
      </View>
    );
  }
}
