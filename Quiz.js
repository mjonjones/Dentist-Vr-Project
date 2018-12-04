import React from 'react';
import {
    Text,
    View,
  } from 'react-vr';
  
  export default class Quiz extends React.Component{
    static defaultProps = {
        "rotateY":0,
        "question":"",
        "answer1":"",
        "answer2":"",
        "answer3":"",
        "correct":""
      };
    
      constructor(props) {
        super();
        this.state = {
        };
        this.textStyle = {
            color: "#fff200",
            fontWeight: "bold"
        }
      }

      render(){
        return(
            <View
                style={{
                    backgroundColor: "#3498db",
                    position:'absolute',
                    layoutOrigin: [0.5, 0.5, 0.5],
                    width: 1,
                    height: 0.5,
                    transform: [
                    {rotateY: this.props.rotateY},
                    {translateZ: -3}
                    ],
                    opacity: 1,
                }}>
                <Text style={this.textStyle}>
                    {this.props.question}
                </Text>
                <Text style={this.textStyle}>
                    {this.props.answer1}
                </Text>
                <Text style={this.textStyle}>
                    {this.props.answer2}
                </Text>
                <Text style={this.textStyle}>
                    {this.props.answer3}
                </Text>
            </View>
        )
      }
  }