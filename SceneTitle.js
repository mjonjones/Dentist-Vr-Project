import React from 'react';
import View from 'react-vr';

class SceneTitle extends React.Component{
    static defaultProps = {
        title: ".....",
    }

    state = {
        title: "...",
    }
    constructor(props){
        super(props);
    }



    componentDidMount(){
        this.state.title == this.props.entries.title;
    }
    render(){
        return(
            <View>{this.state.title}</View>
        );
    }

}
export default SceneTitle;