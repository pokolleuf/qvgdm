import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
//REDUX
import { connect } from 'react-redux'

//RESOURCES
import Loading from '../Images/loading.png';
import Intro from '../Videos/classic.mp4';
import OkNormal from '../Images/buttons/ok_normal.png';
import OkActive from '../Images/buttons/ok_active.png';
import BackNormal from '../Images/buttons/back_normal.png';
import BackActive from '../Images/buttons/back_active.png';
import LeaveNormal from '../Images/buttons/leave_normal.png';
import LeaveActive from '../Images/buttons/leave_active.png';
import MenuNormal from '../Images/buttons/menu_normal.png';
import MenuActive from '../Images/buttons/menu_active.png';
import FFNormal from '../Images/buttons/5050_normal.png';
import FFActive from '../Images/buttons/5050_active.png';
import PhoneNormal from '../Images/buttons/phone_normal.png';
import PhoneActive from '../Images/buttons/phone_active.png';
import AudienceNormal from '../Images/buttons/audience_normal.png';
import AudienceActive from '../Images/buttons/audience_active.png';
import EuroOrange from '../Images/game/euro_orange.png';
import EuroBlack from '../Images/game/euro_black.png';
import EuroWhite from '../Images/game/euro_white.png';
import Diamond from '../Images/game/diamond.png';
import Losanges from '../Images/game/losanges.png';
import HomeBackground from '../Images/background.png';
import Logo from '../Images/logo.png';
import Tree from '../Images/game/tree.png';
import Background from '../Images/game/background.png';
import Light from '../Images/game/light.png';
import sound0 from "../Music/06 - Who Wants to Be a Millionaire - Fastest Finger Rules Explanation.mp3";
import sound1 from "../Music/67 - Who Wants to Be a Millionaire - Lifelines Animate.mp3";
import sound2 from "../Music/16 - Who Wants to Be a Millionaire - Question 5 LD.mp3";
import sound3 from "../Music/12 - Who Wants to Be a Millionaire - Questions 1-5.mp3";

class Load extends React.Component {

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
      },
    };

    var Preload = require('react-preload').Preload;

    return (

      <div className={classes.main_container}>

        <Card className={classes.background} elevation={0}>
            <CardContent className={classes.card_content} elevation={0}>
              <Grid container spacing={16} alignItems="center" direction="column" justify="center">
                    <Grid item>
                        <Preload
                          loadingIndicator={<div className={classes.loading}></div>}
                          images={[Intro, OkNormal, OkActive, BackNormal, BackActive, LeaveNormal, LeaveActive, MenuNormal, MenuActive, FFNormal, FFActive, PhoneNormal, PhoneActive, AudienceNormal, AudienceActive, EuroOrange, EuroBlack, EuroWhite, Diamond, Losanges, HomeBackground, Logo, Tree, Background, Light, sound0, sound1, sound2, sound3]}
                          autoResolveDelay={10000}
                          onError={() => {}}
                          onSuccess={() => {setTimeout(() => this._toggleView(1), 3000)}}
                          mountChildren={false}
                        >
                        </Preload>
                    </Grid>
                </Grid>
          </CardContent>
        </Card>

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
        backgroundColor: "#000000",
    },
    video: {
      position: 'absolute',
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.5,
    },
    background:{
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
      backgroundColor: "#000000",
      zIndex: 0,
    },
    loading:{
      width: 306,
      height: 171,
      backgroundImage: `url(${Loading})`,
      backgroundColor: "rgba(0,0,0,0)",
      backgroundSize: 'cover',
      zIndex: 1,
    },
    card_content:{
      margin: 5,
      padding: 0,
    },
})

const mapStateToProps = (state) => {
    return {
      currentView: state.currentView
    }
  }

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Load)))