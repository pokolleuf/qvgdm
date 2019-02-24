import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
//REDUX
import { connect } from 'react-redux'

//CUSTOM COMPONENTS IMPORT
import Load from '../Components/Load';
import Home from '../Components/Home';
import Video from '../Components/Video';
import Game from '../Components/Game';

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          currentView: 0,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            currentView: nextProps.currentView
        })
    }

  render() {

    const { classes } = this.props;

    return (

      <div className={classes.mainContainer}>

        {this.state.currentView === 0 ? <Load /> : ""}
        {this.state.currentView === 1 ? <Home /> : ""}
        {this.state.currentView === 2 ? <Video /> : ""}
        {this.state.currentView === 3 ? <Game /> : ""}

      </div>
    );
  }
}

const styles = theme => ({
    mainContainer: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        backgroundColor: "#000000",
    },
})

const mapStateToProps = (state) => {
    return {
      currentView: state.currentView
    }
  }

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Main)))