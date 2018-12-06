import React from "react";
import { asset, Text, View, VrButton, Sound } from "react-vr";


export default class Sounds extends React.Component {
    static defaultProps = {
        soundName: "",
        rotateY: 0,
        src: "",


    };

    constructor(props) {
        super();
        this.state = {

        };
        this.textStyle = {
            color: "#fff200",
            fontWeight: "bold"
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
                    width: 1,
                    height: 0.5,
                    transform: [
                        {rotateY: this.props.rotateY},
                        {translateZ: -3}
                    ],
                }}
            >
                <VrButton loop = {false} onClickSound={{ wav: asset(this.props.src) }}>
                    <Text style={this.textStyle}>{this.props.soundName}</Text>
                </VrButton>
            </View>
        );
    }
}
