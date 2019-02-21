import React from 'react';
import './SuperButton.css';
//REDUX
import { connect } from 'react-redux'

class SuperButton extends React.Component {

    _toggleView(value) {
        const action = { type: "TOGGLE_VIEW", value: value }
        this.props.dispatch(action)
    }

    handleClick(){
        var nextView = this.props.nextView
        var onClick = this.props.onClick
        if(nextView){
            this._toggleView(nextView)
        }
        else if(onClick){
            onClick()
        }
    }

    render(){

        const types = {
            "ok": "super-button-ok",
            "back": "super-button-back",
            "leave": "super-button-leave",
            "menu": "super-button-menu",
            "5050": "super-button-5050",
            "phone": "super-button-phone",
            "audience": "super-button-audience",
        }

        return(
            <div 
                onClick={() => this.handleClick()}
                className={this.props.isActive ? `${types[this.props.type]}-active` : types[this.props.type]}
            />
        )

    }

}

const mapStateToProps = (state) => {
    return {
      currentView: state.currentView
    }
}

export default connect(mapStateToProps)(SuperButton);