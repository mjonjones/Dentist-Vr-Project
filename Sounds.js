import React from "react";
import { Text, View, VrButton } from "react-vr";


export default class Sounds extends React.Component {
    static defaultProps = {
        soundName: "",
        rotateY: 0,


    };

    constructor(props) {
        super();
        this.state = {
            play: false,
        };
        this.textStyle = {
            color: "#fff200",
            fontWeight: "bold"
        };

        this.togglePlay = this.togglePlay.bind(this);
    }




    togglePlay() {
       console.log("Pressed")
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
                    height: 0.5,
                    transform: [
                        {rotateY: this.props.rotateY},
                        {translateZ: -3}
                    ],
                }}
            >
                <VrButton onClick={this.togglePlay}>
                    <Text style={this.textStyle}>{this.props.soundName}</Text>
                </VrButton>
            </View>
        );
    }
}
