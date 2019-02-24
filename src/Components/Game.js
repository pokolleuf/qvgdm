import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import { Slide } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
//REDUX
import { connect } from 'react-redux'

//CUSTOM COMPONENTS IMPORT
import SuperButton from './SuperButton';

//RESOURCES
import Tree from '../Images/game/tree.png';
import Diamond from '../Images/game/diamond.png';
import EuroOrange from '../Images/game/euro_orange.png';
import EuroWhite from '../Images/game/euro_white.png';
import EuroBlack from '../Images/game/euro_black.png';
import Losanges from '../Images/game/losanges.png';
import Background from '../Images/game/background.png';
import Light from '../Images/game/light.png';
import sound0 from "../Music/06 - Who Wants to Be a Millionaire - Fastest Finger Rules Explanation.mp3";
import sound1 from "../Music/67 - Who Wants to Be a Millionaire - Lifelines Animate.mp3";
import sound2 from "../Music/16 - Who Wants to Be a Millionaire - Question 5 LD.mp3";
import sound3 from "../Music/12 - Who Wants to Be a Millionaire - Questions 1-5.mp3";

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: false,
      displayButtons: true, // normally false
      FFActive: false,
      phoneActive: false,
      audienceActive: false,
      questionsWinned: 0,
      message: "",
      question: {
        oneLine: false,
        text: "A la TV, on peut souvent voir Pamela Anderson courir à moitié nue sur les plages de...",
        answers: {a:{text: "Calais", correct: false}, b:{text: "Dunkerque", correct: false}, c:{text: "Berck", correct: false}, d:{text: "Malibu", correct: true}},
      },
      jokerAnimate: false,
      showLosanges: false,
      gains: ["200", "300", "500", "800", "1 500", "3 000", "6 000", "12 000", "24 000", "48 000", "72 000", "100 000", "150 000", "300 000", "1 000 000"],
      backgroundSound: sound0,
      backgroundOpacity: 0,
      lightOpacity: 0,
      lightRotate: 0,
      minOpacity: 1,
      maxOpacity: undefined,
    }
  }

  componentDidMount(){
    this.tickTimer = setInterval(() => this.tick(), 10)
    // setTimeout(() => {this.setState({message: "Bienvenue à Qui Veut Gagner des millions"})}, 3000)
    // setTimeout(() => {this.setState({message: ""})}, 8800)
    // setTimeout(() => {this.setState({message: "Installez-vous et regardez la pyramide des gains qui vous attend..."})}, 9200)
    // setTimeout(() => {this.setState({message: ""})}, 14800)
    // setTimeout(() => {this.setState({drawer: true})}, 15000)
    // setTimeout(() => {this.setState({message: "15 questions avec un 1er palier à 1 500 euros, puis un 2nd palier à 48 000 euros et enfin... le million d'euros !"})}, 15200)
    // setTimeout(() => {this.setState({questionsWinned: 1})}, 15800)
    // setTimeout(() => {this.setState({questionsWinned: 2})}, 16200)
    // setTimeout(() => {this.setState({questionsWinned: 3})}, 16600)
    // setTimeout(() => {this.setState({questionsWinned: 4})}, 17000)
    // setTimeout(() => {this.setState({questionsWinned: 5})}, 17400)
    // setTimeout(() => {this.setState({questionsWinned: 6})}, 17800)
    // setTimeout(() => {this.setState({questionsWinned: 7})}, 18200)
    // setTimeout(() => {this.setState({questionsWinned: 8})}, 18600)
    // setTimeout(() => {this.setState({questionsWinned: 9})}, 19000)
    // setTimeout(() => {this.setState({questionsWinned: 10})}, 19400)
    // setTimeout(() => {this.setState({questionsWinned: 11})}, 19800)
    // setTimeout(() => {this.setState({questionsWinned: 12})}, 20200)
    // setTimeout(() => {this.setState({questionsWinned: 13})}, 20600)
    // setTimeout(() => {this.setState({questionsWinned: 14})}, 21000)
    // setTimeout(() => {this.setState({questionsWinned: 15})}, 21400)
    // setTimeout(() => {this.setState({questionsWinned: 16})}, 21800)
    // setTimeout(() => {this.setState({questionsWinned: 15})}, 22200)
    // setTimeout(() => {this.setState({questionsWinned: 16})}, 22600)
    // setTimeout(() => {this.setState({questionsWinned: 15})}, 23000)
    // setTimeout(() => {this.setState({questionsWinned: 16})}, 23400)
    // setTimeout(() => {this.setState({questionsWinned: 15})}, 23800)
    // setTimeout(() => {this.setState({message: ""})}, 23200)
    // setTimeout(() => {this.setState({questionsWinned: 0})}, 24800)
    // setTimeout(() => {this.setState({message: "Pour vous accompagner, 3 jokers..."})}, 25000)
    // setTimeout(() => {this.setState({message: ""})}, 27200)
    // setTimeout(() => {this.setState({jokerAnimate: true})}, 28000)
    // setTimeout(() => {this.setState({FFActive: true})}, 28000)
    // setTimeout(() => {this.setState({message: "Le 50/50"})}, 28000)
    // setTimeout(() => {this.setState({FFActive: false})}, 28900)
    // setTimeout(() => {this.setState({phoneActive: true})}, 30000)
    // setTimeout(() => {this.setState({message: "L'appel à un ami"})}, 29900)
    // setTimeout(() => {this.setState({phoneActive: false})}, 30700)
    // setTimeout(() => {this.setState({audienceActive: true})}, 31200)
    // setTimeout(() => {this.setState({message: "Et l'avis du public"})}, 31000)
    // setTimeout(() => {this.setState({audienceActive: false})}, 31900)
    // setTimeout(() => {this.setState({message: ""})}, 32000)
    // setTimeout(() => {this.setState({drawer: false})}, 34000)
    // setTimeout(() => {this.setState({displayButtons: true})}, 34400)
    // setTimeout(() => {this.setState({message: "Je vous rappelle que vous avez aussi la possibilité de partir à tout moment avec la somme gagnée à la dernière question"})}, 34800)
    // setTimeout(() => {this.setState({message: ""})}, 48000)
    // setTimeout(() => {this.setState({message: "Si vous échouez à une question, vous nous quitterez avec la somme gagnée au dernier palier"})}, 48400)
    // setTimeout(() => {this.setState({message: ""})}, 54400)
    // setTimeout(() => {this.setState({message: "Allez, sans plus attendre, jouons..."})}, 56000)
    // setTimeout(() => {this.setState({message: ""})}, 58000)
    // setTimeout(() => {this.setState({message: "à Qui Veut Gagner des millions !"})}, 58600)
    // setTimeout(() => {this.setState({message: ""})}, 62600)
    // ADD A 6
    setTimeout(() => {this.setState({minOpacity: undefined})}, 2600)
    setTimeout(() => {this.setState({maxOpacity: 0.5})}, 2600)
    setTimeout(() => {this.setState({backgroundSound: sound2})}, 2600)
    setTimeout(() => {this.setState({backgroundSound: sound3})}, 8000)
    setTimeout(() => {this.setState({showLosanges: true})}, 8000)
  }

  tick(){
    var minOpacity = this.state.minOpacity
    var maxOpacity = this.state.maxOpacity
    var backgroundOpacity = this.state.backgroundOpacity
    var lightOpacity = this.state.lightOpacity
    var lightRotate = this.state.lightRotate

    lightRotate += 0.1
    if(lightRotate === 360){
      lightRotate = 0
      this.setState({
        lightRotate: lightRotate,
      })
    }
    else{
      this.setState({
        lightRotate: lightRotate,
      })
    }

    if(minOpacity !== undefined && backgroundOpacity < minOpacity){
      this.setState({
        backgroundOpacity: backgroundOpacity + 0.006,
      })
    }
    if(minOpacity !== undefined && lightOpacity < minOpacity / 2){
      this.setState({
        lightOpacity: lightOpacity + 0.006,
      })
    }

    if(maxOpacity !== undefined && backgroundOpacity > maxOpacity){
      this.setState({
        backgroundOpacity: backgroundOpacity - 0.002,
      })
    }
    if(maxOpacity !== undefined && lightOpacity > maxOpacity / 2){
      this.setState({
        lightOpacity: lightOpacity - 0.002,
      })
    }
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
    });
  };

  playSoundLoop(sound){
    return(
      <ReactAudioPlayer
            src={sound}
            autoPlay
            loop
        />
    )
  }

  playSound(sound){
    return(
      <ReactAudioPlayer
            src={sound}
            autoPlay
        />
    )
  }

  render() {

    const { classes } = this.props;

    return (

      <div className={classes.main_container}>

      {this.playSoundLoop(this.state.backgroundSound)}
      {this.state.jokerAnimate ? this.playSound(sound1) : ""}

      <Slide in={this.state.displayButtons} direction="left">
        <Grid className={classes.buttons} container spacing={16} alignItems="center" direction="row" justify="center">
          <Grid item>
            <SuperButton type="leave"/>
          </Grid>
          <Grid item>
            <SuperButton type="menu" onClick={this.toggleDrawer(true)}/>
          </Grid>
        </Grid>
      </Slide>

        <Drawer
          anchor="right"
          open={this.state.drawer}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
          classes={{ paper: classes.drawer }}
        >
          <Grid className={classes.jokers} container spacing={16} alignItems="center" direction="row" justify="center">
            <Grid item>
              <SuperButton type="5050" isActive={this.state.FFActive}/>
            </Grid>
            <Grid item>
              <SuperButton type="phone" isActive={this.state.phoneActive}/>
            </Grid>
            <Grid item>
              <SuperButton type="audience" isActive={this.state.audienceActive}/>
            </Grid>
          </Grid>

          {Array.from(Array(15).keys()).reverse().map(index =>
            <Grid container className={(index + 1) === this.state.questionsWinned ? classes.treeItemActive : classes.treeItemNormal} spacing={16} alignItems="center" direction="row" justify="center">
              <Grid item className={(index + 1) === this.state.questionsWinned ? classes.treeTextWhite : ((index + 1) % 5) === 0 ? classes.treeTextWhite : classes.treeTextOrange}>{index + 1}</Grid>
              <Grid item className={(index + 1) <= this.state.questionsWinned ? classes.diamond : ""}></Grid>
              <Grid item className={classes.grow}></Grid>
              <Grid item className={(index + 1) === this.state.questionsWinned ? classes.treeTextBlack : ((index + 1) % 5) === 0 ? classes.treeTextWhite : classes.treeTextOrange}>{this.state.gains[index]}</Grid>
              <Grid item className={(index + 1) === this.state.questionsWinned ? classes.treeEuroBlack : ((index + 1) % 5) === 0 ? classes.treeEuroWhite : classes.treeEuroOrange}></Grid>
            </Grid>
          )}

        </Drawer>

      <Card className={this.state.message.length > 0 ? this.state.drawer ? classes.messageDrawer : classes.messageNormal : ""} elevation={0}>
        <CardContent className={classes.card_content} elevation={0}>
            {this.state.message}
        </CardContent>
      </Card>

      <Card className={this.state.showLosanges ? classes.losanges : ""} elevation={0}>
        <CardContent className={classes.card_content} elevation={0}>
        </CardContent>
      </Card>

      <div style={this.state.question.oneLine ? {marginTop : "1.3vw"} : {marginTop : "0vw"}} className={this.state.showLosanges ? classes.question : ""}>
        {this.state.question.text ? this.state.question.text : ""}
      </div>

      <Card className={classes.background} style={{opacity: this.state.backgroundOpacity}} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
          </CardContent>
      </Card>

      <Card className={classes.light} style={{opacity: this.state.lightOpacity, transform: `rotate(${this.state.lightRotate}deg)`}} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
          </CardContent>
      </Card>

      </div>
    );
  }
}

const styles = theme => ({
    main_container: {
        position: 'absolute',
        width: "100vw",
        height: "56.25vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000000",
        overflow: "hidden",
    },
    buttons: {
      position: 'absolute',
      width: 300,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: 15,
      right: 15,
      overflow: "hidden",
      zIndex: 3,
    },
    losanges: {
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
      backgroundColor: "rgba(0,0,0,0)",
      backgroundImage: `url(${Losanges})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      overflow: "hidden",
      zIndex: 2,
    },
    question: {
      position: 'absolute',
      width: "70vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      top: "31.7vw",
      left: "15vw",
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 100000,
      fontFamily: "PT Sans",
      fontWeight: "bold",
      fontSize: "2.1vw",
      color: "#FFFFFF",
      zIndex: 3,
    },
    messageNormal: {
      position: 'absolute',
      height: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "20%",
      left: "10%",
      right: "10%",
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 100000,
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "2vw",
      letterSpacing: "0.3vw",
      textShadow: "5px 5px 14px #000000",
      color: "#FFFFFF",
      overflow: "hidden",
    },
    messageDrawer: {
      position: 'absolute',
      height: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "20%",
      left: "10%",
      right: "44%",
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 100000,
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "2vw",
      letterSpacing: "0.3vw",
      textShadow: "5px 5px 14px #000000",
      color: "#FFFFFF",
      overflow: "hidden",
    },
    jokers: {
      marginBottom: 20,
    },
    grow: {
      flexGrow: 1,
    },
    treeItemNormal: {
      width: "90%",
      paddingLeft: "5%",
      paddingRight: "5%",
      marginTop: 0,
      backgroundColor: "rgba(0,0,0,0)",
    },
    treeItemActive: {
      width: "90%",
      paddingLeft: "5%",
      paddingRight: "5%",
      marginTop: 0,
      backgroundColor: "#F89B1C",
    },
    treeTextOrange: {
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "2vw",
      letterSpacing: "0.3vw",
      textShadow: "5px 5px 14px #000000",
      color: "#F89B1C",
    },
    treeTextWhite: {
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "2vw",
      letterSpacing: "0.3vw",
      textShadow: "5px 5px 14px #000000",
      color: "#FFFFFF",
    },
    treeTextBlack: {
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "2vw",
      letterSpacing: "0.3vw",
      textShadow: "5px 5px 14px #000000",
      color: "#000000",
    },
    diamond: {
      marginTop: "0.10vw",
      width: "1.77vw",
      height: "1.14vw",
      backgroundImage: `url(${Diamond})`,
      backgroundSize: 'cover',
    },
    treeEuroOrange: {
      marginTop: "0.10vw",
      width: "1.9vw",
      height: "1.9vw",
      backgroundImage: `url(${EuroOrange})`,
      backgroundSize: 'cover',
    },
    treeEuroWhite: {
      marginTop: "0.10vw",
      width: "1.9vw",
      height: "1.9vw",
      backgroundImage: `url(${EuroWhite})`,
      backgroundSize: 'cover',
    },
    treeEuroBlack: {
      marginTop: "0.10vw",
      width: "1.9vw",
      height: "1.9vw",
      backgroundImage: `url(${EuroBlack})`,
      backgroundSize: 'cover',
    },
    drawer:{
      width: "33.5vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${Tree})`,
      backgroundSize: 'cover',
      overflow: "hidden",
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
      backgroundImage: `url(${Background})`,
      backgroundColor: "rgba(0,0,0,0)",
      backgroundSize: 'cover',
      zIndex: 0,
    },
    light:{
      position: 'absolute',
      width: "81.1%",
      height: "149.7%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "-26.8%",
      left: "10.8%",
      backgroundImage: `url(${Light})`,
      backgroundColor: "rgba(0,0,0,0)",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: 1,
    },
    card_content:{
        margin: 0,
        padding: 0,
    },
})

const mapStateToProps = (state) => {
    return {
      currentView: state.currentView
    }
  }

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Game)))