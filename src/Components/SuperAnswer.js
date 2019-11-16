import React from 'react';
import './SuperAnswer.css';

class SuperAnswer extends React.Component {

    handleClick(){
        var onClick = this.props.onClick
        if(onClick){
            onClick()
        }
    }

    render(){

        const types = {
            "a": "super-answer-a",
            "b": "super-answer-b",
            "c": "super-answer-c",
            "d": "super-answer-d",
        }

        return(
            <div 
                onClick={() => this.handleClick()}
                style={this.props.ready ? {cursor: "pointer"} : {cursor: "not-allowed"}}
                className={this.props.finger === 3 ? `${types[this.props.type]}-correct` : this.props.finger === 2 ? `${types[this.props.type]}-active` : types[this.props.type]}
            >
                <div className={this.props.finger === 3 ? `${types[this.props.type]}-letter-white` : this.props.finger === 2 ? `${types[this.props.type]}-letter-white` : `${types[this.props.type]}-letter-orange`}/>
                <div className={this.props.finger === 3 ? `${types[this.props.type]}-text-black` : this.props.finger === 2 ? `${types[this.props.type]}-text-black` : `${types[this.props.type]}-text-white`}>{this.props.text}</div>
            </div>
        )

    }

}

export default SuperAnswer;