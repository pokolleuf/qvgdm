import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import VideoCover from 'react-video-cover';
//REDUX
import { connect } from 'react-redux'

//RESOURCES
import Intro from '../Videos/classic.mp4';

class Video extends React.Component {

    componentDidMount(){
        setTimeout(() => this._toggleView(3), 1500)
    }

    _toggleView(value) {
        const action = { type: "TOGGLE_VIEW", value: value }
        this.props.dispatch(action)
    }

  render() {

    const { classes } = this.props;

    const videoOptions = {
        src: Intro,
        ref: videoRef => {
          this.videoRef = videoRef;
          if (this.videoRef) {
            this.videoRef.autoplay = true;
          }
        },
      };

    return (

      <div className={classes.main_container}>
        <VideoCover
          videoOptions={videoOptions}
        />
      </div>

    );
  }
}

const styles = theme => ({
    main_container: {
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
    },
})

const mapStateToProps = (state) => {
    return {
      currentView: state.currentView
    }
  }

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Video)))