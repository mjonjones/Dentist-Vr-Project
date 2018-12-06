// import React from "react";
// import { Text, View, VrButton } from "react-vr";

// export default class TestComponent extends React.Component {
//   static defaultProps = {
//     rotateY: 0,
//     test: "",
//     message: "",
//     message2: ""
//   };

//   constructor(props) {
//     super();
//     this.state = {};
//     this.textStyle = {
//       color: "#fff200",
//       fontWeight: "bold",
//       textAlign: "center"
//     };
//     this.correctStyle = {
//       color: "#009432",
//       fontWeight: "bold"
//     };
//     this.incorrectStyle = {
//       color: "#e74c3c",
//       fontWeight: "bold"
//     };
//   }

//   render() {
//     return (
//       // Styling
//       <View
//         style={{
//           backgroundColor: "#3498db",
//           position: "absolute",
//           layoutOrigin: [0.5, 0.5, 0.5],
//           width: 2,
//           height: 0.85,
//           transform: [{ rotateY: this.props.rotateY }, { translateZ: -4 }],
//           opacity: 1
//         }}
//       >
//         <VrButton>
//           <Text style={this.textStyle}>{this.props.test}</Text>
//         </VrButton>
//         <Text style={this.textStyle}>{this.props.message}</Text>
//         <VrButton>
//           <Text style={this.textStyle}>{this.props.message2}</Text>
//         </VrButton>
//       </View>
//     );
//   }
// }
