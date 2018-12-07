import React from "react";
import { asset, Text, View, VrButton, Sound } from "react-vr";


export default class Sounds extends React.Component {
    static defaultProps = {
        soundName: "Play Sounds",
        rotateY: 0,
        src: "",
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
                    width: 0.6,
                    height: 0.15,
                    transform: [
                        {rotateY: this.props.rotateY},
                        {translateZ: -3}
                    ],
                    borderRadius: 0.07
                }}
            >
                <VrButton loop = {false} onClickSound={{ wav: asset(this.props.src) }}>
                    <Text style={this.textStyle}>{this.props.soundName}</Text>
                </VrButton>
            </View>
        );
    }
}
