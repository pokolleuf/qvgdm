import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import { Slide } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import VideoCover from 'react-video-cover';

//REDUX
import { connect } from 'react-redux'

//CUSTOM COMPONENTS IMPORT
import SuperButton from './SuperButton';
import SuperAnswer from './SuperAnswer';

//RESOURCES
import Million from '../Videos/confetti.mp4';
import Tree from '../Images/game/tree.png';
import Diamond from '../Images/game/diamond.png';
import EuroOrange from '../Images/game/euro_orange.png';
import EuroWhite from '../Images/game/euro_white.png';
import EuroBlack from '../Images/game/euro_black.png';
import Losanges from '../Images/game/losanges.png';
import Background from '../Images/game/background.png';
import Light from '../Images/game/light.png';
import Money from '../Images/game/money.png';
import MoneyTotal from '../Images/game/total.png';
import BigEuro from '../Images/game/bigEuro.png';
import soundRules from "../Music/06 - Who Wants to Be a Millionaire - Fastest Finger Rules Explanation.mp3";
import soundJokers from "../Music/67 - Who Wants to Be a Millionaire - Lifelines Animate.mp3";
import soundGoodbye from "../Music/76 - Who Wants to Be a Millionaire - Say Goodbye to Contestant.mp3";
import soundQ_1_5 from "../Music/12 - Who Wants to Be a Millionaire - Questions 1-5.mp3";
import soundQ_1_5_wrong from "../Music/13 - Who Wants to Be a Millionaire - Questions 1-5 Wrong Answer.mp3";
import soundQ_1_4_correct from "../Music/14 - Who Wants to Be a Millionaire - Questions 1-4 Correct Answer.mp3";
import soundQ_6 from "../Music/17 - Who Wants to Be a Millionaire - Question 6.mp3";
import soundQ_7 from "../Music/22 - Who Wants to Be a Millionaire - Question 7.mp3";
import soundQ_8 from "../Music/27 - Who Wants to Be a Millionaire - Question 8.mp3";
import soundQ_9 from "../Music/32 - Who Wants to Be a Millionaire - Question 9.mp3";
import soundQ_10 from "../Music/37 - Who Wants to Be a Millionaire - Question 10.mp3";
import soundQ_11 from "../Music/42 - Who Wants to Be a Millionaire - Question 11.mp3";
import soundQ_12 from "../Music/47 - Who Wants to Be a Millionaire - Question 12.mp3";
import soundQ_13 from "../Music/52 - Who Wants to Be a Millionaire - Question 13.mp3";
import soundQ_14 from "../Music/57 - Who Wants to Be a Millionaire - Question 14.mp3";
import soundQ_15 from "../Music/62 - Who Wants to Be a Millionaire - Question 15.mp3";
import soundQ_6_final from "../Music/18 - Who Wants to Be a Millionaire - Question 6 Final Answer.mp3";
import soundQ_7_final from "../Music/23 - Who Wants to Be a Millionaire - Question 7 Final Answer.mp3";
import soundQ_8_final from "../Music/28 - Who Wants to Be a Millionaire - Question 8 Final Answer.mp3";
import soundQ_9_final from "../Music/33 - Who Wants to Be a Millionaire - Question 9 Final Answer.mp3";
import soundQ_10_final from "../Music/38 - Who Wants to Be a Millionaire - Question 10 Final Answer.mp3";
import soundQ_11_final from "../Music/43 - Who Wants to Be a Millionaire - Question 11 Final Answer.mp3";
import soundQ_12_final from "../Music/48 - Who Wants to Be a Millionaire - Question 12 Final Answer.mp3";
import soundQ_13_final from "../Music/53 - Who Wants to Be a Millionaire - Question 13 Final Answer.mp3";
import soundQ_14_final from "../Music/58 - Who Wants to Be a Millionaire - Question 14 Final Answer.mp3";
import soundQ_15_final from "../Music/63 - Who Wants to Be a Millionaire - Question 15 Final Answer.mp3";
import soundQ_6_wrong from "../Music/19 - Who Wants to Be a Millionaire - Question 6 Wrong Answer.mp3";
import soundQ_7_wrong from "../Music/24 - Who Wants to Be a Millionaire - Question 7 Wrong Answer.mp3";
import soundQ_8_wrong from "../Music/29 - Who Wants to Be a Millionaire - Question 8 Wrong Answer.mp3";
import soundQ_9_wrong from "../Music/34 - Who Wants to Be a Millionaire - Question 9 Wrong Answer.mp3";
import soundQ_10_wrong from "../Music/39 - Who Wants to Be a Millionaire - Question 10 Wrong Answer.mp3";
import soundQ_11_wrong from "../Music/44 - Who Wants to Be a Millionaire - Question 11 Wrong Answer.mp3";
import soundQ_12_wrong from "../Music/49 - Who Wants to Be a Millionaire - Question 12 Wrong Answer.mp3";
import soundQ_13_wrong from "../Music/54 - Who Wants to Be a Millionaire - Question 13 Wrong Answer.mp3";
import soundQ_14_wrong from "../Music/59 - Who Wants to Be a Millionaire - Question 14 Wrong Answer.mp3";
import soundQ_15_wrong from "../Music/64 - Who Wants to Be a Millionaire - Question 15 Wrong Answer.mp3";
import soundQ_5_correct from "../Music/15 - Who Wants to Be a Millionaire - Question 5 Correct Answer.mp3";
import soundQ_6_correct from "../Music/20 - Who Wants to Be a Millionaire - Question 6 Correct Answer.mp3";
import soundQ_7_correct from "../Music/25 - Who Wants to Be a Millionaire - Question 7 Correct Answer.mp3";
import soundQ_8_correct from "../Music/30 - Who Wants to Be a Millionaire - Question 8 Correct Answer.mp3";
import soundQ_9_correct from "../Music/35 - Who Wants to Be a Millionaire - Question 9 Correct Answer.mp3";
import soundQ_10_correct from "../Music/40 - Who Wants to Be a Millionaire - Question 10 Correct Answer.mp3";
import soundQ_11_correct from "../Music/45 - Who Wants to Be a Millionaire - Question 11 Correct Answer.mp3";
import soundQ_12_correct from "../Music/50 - Who Wants to Be a Millionaire - Question 12 Correct Answer.mp3";
import soundQ_13_correct from "../Music/55 - Who Wants to Be a Millionaire - Question 13 Correct Answer.mp3";
import soundQ_14_correct from "../Music/60 - Who Wants to Be a Millionaire - Question 14 Correct Answer.mp3";
import soundQ_15_correct from "../Music/65 - Who Wants to Be a Millionaire - Question 15 Correct Answer.mp3";
import soundQ_5_LD from "../Music/16 - Who Wants to Be a Millionaire - Question 5 LD.mp3";
import soundQ_6_LD from "../Music/21 - Who Wants to Be a Millionaire - Question 6 LD.mp3";
import soundQ_7_LD from "../Music/26 - Who Wants to Be a Millionaire - Question 7 LD.mp3";
import soundQ_8_LD from "../Music/31 - Who Wants to Be a Millionaire - Question 8 LD.mp3";
import soundQ_9_LD from "../Music/36 - Who Wants to Be a Millionaire - Question 9 LD.mp3";
import soundQ_10_LD from "../Music/41 - Who Wants to Be a Millionaire - Question 10 LD.mp3";
import soundQ_11_LD from "../Music/46 - Who Wants to Be a Millionaire - Question 11 LD.mp3";
import soundQ_12_LD from "../Music/51 - Who Wants to Be a Millionaire - Question 12 LD.mp3";
import soundQ_13_LD from "../Music/56 - Who Wants to Be a Millionaire - Question 13 LD.mp3";
import soundQ_14_LD from "../Music/61 - Who Wants to Be a Millionaire - Question 14 LD.mp3";

const questions = require('../assets/questions.json')

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: false,
      showButtons: false,
      FFActive: false,
      phoneActive: false,
      audienceActive: false,
      message: "",
      question: {
        oneLine: true,
        text: "Voilà une réponse qu'elle est...",
        answers: {a:{text: "Mauvaise", correct: false}, b:{text: "Bonne", correct: true}, c:{text: "Mauvaise", correct: false}, d:{text: "Mauvaise", correct: false}},
      },
      answerA: 0,
      answerB: 0,
      answerC: 0,
      answerD: 0,
      ready: false,
      finalAnswer: false,
      finalIndex: 0,
      playAnswerSound: false,
      answerSound: undefined,
      answerVolume: 0,
      jokerAnimate: false,
      showLosanges: false,
      gains: ["200", "300", "500", "800", "1 500", "3 000", "6 000", "12 000", "24 000", "48 000", "72 000", "100 000", "150 000", "300 000", "1 000 000"],
      questionsWinned: 7,
      showPrize: false,
      showTotal: false,
      showConfettis: false,
      backgroundSound: soundRules,
      backgroundOpacity: 0,
      lightOpacity: 0,
      lightRotate: 0,
    }
  }

  componentDidMount(){
    this.spinLight()
    this.setState({backgroundOpacity: 1})
    this.setState({lightOpacity: 0.5})
    this.lightTimer = setInterval(() => {this.spinLight()}, 18000)
    this.timeouts = [];

    // this.timeouts.push(setTimeout(() => {this.setState({message: "Bienvenue à Qui Veut Gagner des millions"})}, 3000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 8800))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Installez-vous et regardez la pyramide des gains qui vous attend..."})}, 9200))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 14800))
    // this.timeouts.push(setTimeout(() => {this.setState({drawer: true})}, 15000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "15 questions avec un 1er palier à 1 500 euros, puis un 2nd palier à 48 000 euros et enfin... le million d'euros !"})}, 15200))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 1})}, 15800))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 2})}, 16200))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 3})}, 16600))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 4})}, 17000))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 5})}, 17400))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 6})}, 17800))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 7})}, 18200))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 8})}, 18600))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 9})}, 19000))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 10})}, 19400))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 11})}, 19800))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 12})}, 20200))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 13})}, 20600))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 14})}, 21000))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 15})}, 21400))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 16})}, 21800))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 15})}, 22200))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 16})}, 22600))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 15})}, 23000))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 16})}, 23400))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 15})}, 23800))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 23200))
    // this.timeouts.push(setTimeout(() => {this.setState({questionsWinned: 0})}, 24800))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Pour vous accompagner, 3 jokers..."})}, 25000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 27200))
    // this.timeouts.push(setTimeout(() => {this.setState({jokerAnimate: true})}, 28000))
    // this.timeouts.push(setTimeout(() => {this.setState({FFActive: true})}, 28000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Le 50/50"})}, 28000))
    // this.timeouts.push(setTimeout(() => {this.setState({FFActive: false})}, 28900))
    // this.timeouts.push(setTimeout(() => {this.setState({phoneActive: true})}, 30000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "L'appel à un ami"})}, 29900))
    // this.timeouts.push(setTimeout(() => {this.setState({phoneActive: false})}, 30700))
    // this.timeouts.push(setTimeout(() => {this.setState({audienceActive: true})}, 31200))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Et l'avis du public"})}, 31000))
    // this.timeouts.push(setTimeout(() => {this.setState({audienceActive: false})}, 31900))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 32000))
    // this.timeouts.push(setTimeout(() => {this.setState({drawer: false})}, 34000))
    // this.timeouts.push(setTimeout(() => {this.setState({showButtons: true})}, 34400))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Je vous rappelle que vous avez aussi la possibilité de partir à tout moment avec la somme gagnée à la dernière question"})}, 34800))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 46000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Si vous échouez à une question, vous nous quitterez avec la somme gagnée au dernier palier"})}, 46400))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 50400))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "Allez, sans plus attendre, jouons..."})}, 52000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 54000))
    // this.timeouts.push(setTimeout(() => {this.setState({message: "à Qui Veut Gagner des millions !"})}, 54600))
    // this.timeouts.push(setTimeout(() => {this.setState({message: ""})}, 58600))
    // this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.5})}, 58600))
    // this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.25})}, 58600))
    // this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_5_LD})}, 58600))
    // this.timeouts.push(setTimeout(() => {this.startQuestion()}, 65000))
    // TEST
    this.timeouts.push(setTimeout(() => {this.setState({showButtons: true})}, 2600))
    this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.5})}, 2600))
    this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.25})}, 2600))
    this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_5_LD})}, 2600))
    this.timeouts.push(setTimeout(() => {this.startQuestion()}, 9000))
  }

  spinLight(){
    var newLight = this.state.lightRotate + 180
    this.setState({
      lightRotate: newLight,
    })
  }

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
      message: "",
      finalAnswer: false,
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

  playSound(sound, volume){
    return(
      <ReactAudioPlayer
            src={sound}
            volume={volume}
            autoPlay
        />
    )
  }

  startQuestion(){

    var questionName = `question${this.state.questionsWinned + 1}`
    var questionList = questions[questionName]
    var questionRndInt = Math.floor(Math.random() * questionList.length)
    var question = questionList[questionRndInt]
    this.setState({question: question})

    this.timeouts.map(timeout => {clearTimeout(timeout)})
    this.setState({playAnswerSound: false})
    this.setState({ready: false})
    this.setState({answerA: 0})
    this.setState({answerB: 0})
    this.setState({answerC: 0})
    this.setState({answerD: 0})
    this.timeouts.push(setTimeout(() => {this.setState({showLosanges: true})}, 1000))
    this.timeouts.push(setTimeout(() => {this.setState({showButtons: true})}, 1000))
    this.timeouts.push(setTimeout(() => {this.setState({answerA: 1})}, 4000))
    this.timeouts.push(setTimeout(() => {this.setState({answerB: 1})}, 5500))
    this.timeouts.push(setTimeout(() => {this.setState({answerC: 1})}, 7000))
    this.timeouts.push(setTimeout(() => {this.setState({answerD: 1})}, 8500))
    this.timeouts.push(setTimeout(() => {this.setState({ready: true})}, 9000))

    if(this.state.questionsWinned < 5){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_1_5})}, 1000))
    }
    else if(this.state.questionsWinned === 5){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_6})}, 1000))
    }
    else if(this.state.questionsWinned === 6){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_7})}, 1000))
    }
    else if(this.state.questionsWinned === 7){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_8})}, 1000))
    }
    else if(this.state.questionsWinned === 8){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_9})}, 1000))
    }
    else if(this.state.questionsWinned === 9){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_10})}, 1000))
    }
    else if(this.state.questionsWinned === 10){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_11})}, 1000))
    }
    else if(this.state.questionsWinned === 11){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_12})}, 1000))
    }
    else if(this.state.questionsWinned === 12){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_13})}, 1000))
    }
    else if(this.state.questionsWinned === 13){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_14})}, 1000))
    }
    else if(this.state.questionsWinned === 14){
      this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_15})}, 1000))
    }

  }

  handleFinalAnswer(index){
    if(!this.state.ready){
      return
    }
    this.setState({finalAnswer: true})
    this.setState({finalIndex: index})
    this.setState({message: "C'est votre dernier mot ?"})
  }

  cancelFinalAnswer(){
    this.setState({finalAnswer: false})
    this.setState({message: ""})
  }

  handleAnswer(index){
    this.setState({finalAnswer: false})
    this.setState({message: ""})

    if(!this.state.ready){
      return
    }
    this.timeouts.map(timeout => {clearTimeout(timeout)})
    if(index === 0){
      this.setState({answerA: 2})
    }
    else if(index === 1){
      this.setState({answerB: 2})
    }
    else if(index === 2){
      this.setState({answerC: 2})
    }
    else if(index === 3){
      this.setState({answerD: 2})
    }
    this.setState({
      ready: false,
      showButtons: false,
    })

    if(this.state.questionsWinned < 4){
      var suspense = 1000 + Math.floor(Math.random() * 1000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
    }
    else if(this.state.questionsWinned === 4){
      var suspense = 1000 + Math.floor(Math.random() * 1500);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
    }
    else if(this.state.questionsWinned === 5){
      var suspense = 4000 + Math.floor(Math.random() * 2000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_6_final})
    }
    else if(this.state.questionsWinned === 6){
      var suspense = 4000 + Math.floor(Math.random() * 2500);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_7_final})
    }
    else if(this.state.questionsWinned === 7){
      var suspense = 4000 + Math.floor(Math.random() * 3000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_8_final})
    }
    else if(this.state.questionsWinned === 8){
      var suspense = 4000 + Math.floor(Math.random() * 3000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_9_final})
    }
    else if(this.state.questionsWinned === 9){
      var suspense = 4000 + Math.floor(Math.random() * 3000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_10_final})
    }
    else if(this.state.questionsWinned === 10){
      var suspense = 6000 + Math.floor(Math.random() * 2000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_11_final})
    }
    else if(this.state.questionsWinned === 11){
      var suspense = 5000 + Math.floor(Math.random() * 3000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_12_final})
    }
    else if(this.state.questionsWinned === 12){
      var suspense = 7000 + Math.floor(Math.random() * 3500);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_13_final})
    }
    else if(this.state.questionsWinned === 13){
      var suspense = 7000 + Math.floor(Math.random() * 4000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_14_final})
    }
    else if(this.state.questionsWinned === 14){
      var suspense = 9000 + Math.floor(Math.random() * 3000);
      this.timeouts.push(setTimeout(() => {this.revealAnswer(index)}, suspense))
      this.setState({backgroundSound: soundQ_15_final})
    }

  }

  revealAnswer(index){
    this.timeouts.map(timeout => {clearTimeout(timeout)})
    var correctIndex = Object.values(this.state.question.answers).findIndex(answer => answer.correct)

    if(correctIndex === 0){
      const previous = this.state.answerA
      this.timeouts.push(setTimeout(() => {this.setState({answerA: 3})}, 200))
      this.timeouts.push(setTimeout(() => {this.setState({answerA: previous})}, 400))
      this.timeouts.push(setTimeout(() => {this.setState({answerA: 3})}, 600))
      this.timeouts.push(setTimeout(() => {this.setState({answerA: previous})}, 800))
      this.timeouts.push(setTimeout(() => {this.setState({answerA: 3})}, 1000))
    }
    else if(correctIndex === 1){
      const previous = this.state.answerB
      this.timeouts.push(setTimeout(() => {this.setState({answerB: 3})}, 200))
      this.timeouts.push(setTimeout(() => {this.setState({answerB: previous})}, 400))
      this.timeouts.push(setTimeout(() => {this.setState({answerB: 3})}, 600))
      this.timeouts.push(setTimeout(() => {this.setState({answerB: previous})}, 800))
      this.timeouts.push(setTimeout(() => {this.setState({answerB: 3})}, 1000))
    }
    else if(correctIndex === 2){
      const previous = this.state.answerC
      this.timeouts.push(setTimeout(() => {this.setState({answerC: 3})}, 200))
      this.timeouts.push(setTimeout(() => {this.setState({answerC: previous})}, 400))
      this.timeouts.push(setTimeout(() => {this.setState({answerC: 3})}, 600))
      this.timeouts.push(setTimeout(() => {this.setState({answerC: previous})}, 800))
      this.timeouts.push(setTimeout(() => {this.setState({answerC: 3})}, 1000))
    }
    else if(correctIndex === 3){
      const previous = this.state.answerD
      this.timeouts.push(setTimeout(() => {this.setState({answerD: 3})}, 200))
      this.timeouts.push(setTimeout(() => {this.setState({answerD: previous})}, 400))
      this.timeouts.push(setTimeout(() => {this.setState({answerD: 3})}, 600))
      this.timeouts.push(setTimeout(() => {this.setState({answerD: previous})}, 800))
      this.timeouts.push(setTimeout(() => {this.setState({answerD: 3})}, 1000))
    }

    if(index === correctIndex){

      var questionsWinned = this.state.questionsWinned
      this.setState({questionsWinned: questionsWinned + 1})

      if(this.state.questionsWinned < 5){
        this.setState({playAnswerSound: true})
        this.setState({answerSound: soundQ_1_4_correct})
        this.setState({answerVolume: 0.5})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 4000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 5500))
      }
      else if(this.state.questionsWinned === 5){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_5_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_5_LD})}, 7200))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.3})}, 7200))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.2})}, 7200))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 7200))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 13000))
      }
      else if(this.state.questionsWinned === 6){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_6_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_6_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.3})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 7){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_7_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_7_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.3})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 8){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_8_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_8_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.3})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 9){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_9_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_9_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.3})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 10){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_10_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_10_LD})}, 8200))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.2})}, 8200))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.1})}, 8200))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 8200))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 14000))
      }
      else if(this.state.questionsWinned === 11){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_11_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_11_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.1})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 12){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_12_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_12_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.1})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 13){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_13_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_13_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.2})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.1})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 14){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({backgroundSound: soundQ_14_correct})
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundSound: soundQ_14_LD})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 0.1})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.05})}, 5000))
        this.timeouts.push(setTimeout(() => {this.setState({showPrize: false})}, 5000))
        this.timeouts.push(setTimeout(() => {this.startQuestion()}, 11000))
      }
      else if(this.state.questionsWinned === 15){
        this.setState({backgroundOpacity: 1})
        this.setState({lightOpacity: 0.5})
        this.setState({answerSound: soundQ_15_correct})
        this.setState({backgroundSound: ""})
        this.setState({playAnswerSound: true})
        this.setState({answerVolume: 1})
        this.timeouts.push(setTimeout(() => {this.setState({showConfettis: true})}, 1500))
        this.timeouts.push(setTimeout(() => {this.setState({showTotal: true})}, 1500))
        this.timeouts.push(setTimeout(() => {window.location.reload()}, 24000))
      }

      this.timeouts.push(setTimeout(() => {this.setState({showLosanges: false})}, 1500))
      this.timeouts.push(setTimeout(() => {this.setState({answerA: 0})}, 1500))
      this.timeouts.push(setTimeout(() => {this.setState({answerB: 0})}, 1500))
      this.timeouts.push(setTimeout(() => {this.setState({answerC: 0})}, 1500))
      this.timeouts.push(setTimeout(() => {this.setState({answerD: 0})}, 1500))
    }
    else{

      if(this.state.questionsWinned < 5){
        this.setState({answerSound: soundQ_1_5_wrong})
      }
      else if(this.state.questionsWinned === 5){
        this.setState({answerSound: soundQ_6_wrong})
      }
      else if(this.state.questionsWinned === 6){
        this.setState({answerSound: soundQ_7_wrong})
      }
      else if(this.state.questionsWinned === 7){
        this.setState({answerSound: soundQ_8_wrong})
      }
      else if(this.state.questionsWinned === 8){
        this.setState({answerSound: soundQ_9_wrong})
      }
      else if(this.state.questionsWinned === 9){
        this.setState({answerSound: soundQ_10_wrong})
      }
      else if(this.state.questionsWinned === 10){
        this.setState({answerSound: soundQ_11_wrong})
      }
      else if(this.state.questionsWinned === 11){
        this.setState({answerSound: soundQ_12_wrong})
      }
      else if(this.state.questionsWinned === 12){
        this.setState({answerSound: soundQ_13_wrong})
      }
      else if(this.state.questionsWinned === 13){
        this.setState({answerSound: soundQ_14_wrong})
      }
      else if(this.state.questionsWinned === 14){
        this.setState({answerSound: soundQ_15_wrong})
      }

      this.setState({backgroundSound: ""})
      this.setState({playAnswerSound: true})
      this.setState({answerVolume: 0.5})
      this.timeouts.push(setTimeout(() => {this.setState({backgroundOpacity: 1})}, 400))
      this.timeouts.push(setTimeout(() => {this.setState({lightOpacity: 0.5})}, 400))

      if(this.state.questionsWinned === 14){
        this.timeouts.push(setTimeout(() => {this.setState({showLosanges: false})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({answerA: 0})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({answerB: 0})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({answerC: 0})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({answerD: 0})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({answerSound: soundGoodbye})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({answerVolume: 1})}, 9000))
        this.timeouts.push(setTimeout(() => {this.setState({showTotal: true})}, 9000))
        this.timeouts.push(setTimeout(() => {window.location.reload()}, 17000))
      }
      else{
        this.timeouts.push(setTimeout(() => {this.setState({showLosanges: false})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({answerA: 0})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({answerB: 0})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({answerC: 0})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({answerD: 0})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({answerSound: soundGoodbye})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({answerVolume: 1})}, 6000))
        this.timeouts.push(setTimeout(() => {this.setState({showTotal: true})}, 6000))
        this.timeouts.push(setTimeout(() => {window.location.reload()}, 14000))
      }

    }
  }

  render() {

    const { classes } = this.props;

    const videoOptions = {
      src: Million,
      ref: videoRef => {
        this.videoRef = videoRef;
        if (this.videoRef) {
          this.videoRef.autoplay = true;
        }
      },
    };

    return (

      <div className={classes.main_container}>

      {this.playSoundLoop(this.state.backgroundSound)}
      {this.state.jokerAnimate ? this.playSound(soundJokers, 1) : ""}
      {this.state.playAnswerSound ? this.playSound(this.state.answerSound, this.state.answerVolume) : ""}

      <Slide in={this.state.showButtons} direction="left">
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

      <Card className={this.state.finalAnswer ? classes.message2 : classes.hide} elevation={0}>
        <CardContent className={classes.card_content} elevation={0}>
            {this.state.finalIndex === 0 ? "Réponse A" : ""}
            {this.state.finalIndex === 1 ? "Réponse B" : ""}
            {this.state.finalIndex === 2 ? "Réponse C" : ""}
            {this.state.finalIndex === 3 ? "Réponse D" : ""}
        </CardContent>
      </Card>

      <Card className={this.state.message.length > 0 ? this.state.drawer ? classes.messageDrawer : classes.messageNormal : ""} elevation={0}>
        <CardContent className={classes.card_content} elevation={0}>
            {this.state.message}
        </CardContent>
        <Grid className={this.state.finalAnswer ? classes.final : classes.hide} container spacing={16} alignItems="center" direction="row" justify="center">
            <Grid item>
              <SuperButton type="back" onClick={() => {this.cancelFinalAnswer()}}/>
            </Grid>
            <Grid item>
              <SuperButton type="ok" onClick={() => {this.handleAnswer(this.state.finalIndex)}}/>
            </Grid>
          </Grid>
      </Card>

      <Card className={this.state.showLosanges ? classes.losanges : ""} elevation={0}>
        <CardContent className={classes.card_content} elevation={0}>
        </CardContent>
      </Card>

      <div style={{marginTop : this.state.question.oneLine ? "1.35vw" : "0vw"}} className={this.state.showLosanges ? classes.question : ""}>
        {this.state.question.text ? this.state.question.text : ""}
      </div>

      {/* FINGER - 0: none - 1: normal - 2: active - 3: correct*/}
      {this.state.answerA !== 0 ? <SuperAnswer type="a" onClick={this.state.questionsWinned < 5 ? () => {this.handleAnswer(0)} : () => {this.handleFinalAnswer(0)}} ready={this.state.ready} text={this.state.question.answers.a.text} finger={this.state.answerA}/> : ""}
      {this.state.answerB !== 0 ? <SuperAnswer type="b" onClick={this.state.questionsWinned < 5 ? () => {this.handleAnswer(1)} : () => {this.handleFinalAnswer(1)}} ready={this.state.ready} text={this.state.question.answers.b.text} finger={this.state.answerB}/> : ""}
      {this.state.answerC !== 0 ? <SuperAnswer type="c" onClick={this.state.questionsWinned < 5 ? () => {this.handleAnswer(2)} : () => {this.handleFinalAnswer(2)}} ready={this.state.ready} text={this.state.question.answers.c.text} finger={this.state.answerC}/> : ""}
      {this.state.answerD !== 0 ? <SuperAnswer type="d" onClick={this.state.questionsWinned < 5 ? () => {this.handleAnswer(3)} : () => {this.handleFinalAnswer(3)}} ready={this.state.ready} text={this.state.question.answers.d.text} finger={this.state.answerD}/> : ""}

      <Card className={classes.prize} style={{opacity: this.state.showPrize ? 1 : 0}} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
            {this.state.gains[this.state.questionsWinned - 1]}
            <div className={classes.bigEuro}></div>
          </CardContent>
      </Card>

      <Card className={classes.total} style={{opacity: this.state.showTotal ? 1 : 0}} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
            {this.state.questionsWinned < 5 ? "0" : ""}
            {this.state.questionsWinned >= 5 && this.state.questionsWinned < 10 ? this.state.gains[4] : ""}
            {this.state.questionsWinned >= 10 && this.state.questionsWinned < 15 ? this.state.gains[9] : ""}
            {this.state.questionsWinned === 15 ? "MILLIONAIRE" : ""}
            <div className={this.state.questionsWinned < 15 ? classes.bigEuro : ""}></div>
          </CardContent>
      </Card>

      <Card className={classes.background} style={{opacity: this.state.backgroundOpacity, transition: "opacity 2s linear"}} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
          </CardContent>
      </Card>

      <Card className={classes.light} style={{opacity: this.state.lightOpacity, transform: `rotate(${this.state.lightRotate}deg)`, transition: "opacity 2s linear, transform 18s linear"}} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
          </CardContent>
      </Card>

      <div className={classes.video_million}>
        {this.state.showConfettis ? <VideoCover videoOptions={videoOptions}/> : ""}
      </div>

      </div>
    );
  }
}

const styles = theme => ({
    hide: {
      display: "none",
    },
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
      width: "20vw",
      height: "6vw",
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
    prize: {
      position: 'absolute',
      width: "100vw",
      height: "10.57vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "36vw",
      left: 0,
      backgroundColor: "rgba(0,0,0,0)",
      backgroundImage: `url(${Money})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      paddingTop: "1vw",
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "5.6vw",
      letterSpacing: "0.5vw",
      textShadow: "7px 7px 14px #404040",
      color: "#f9af4b",
      overflow: "hidden",
      zIndex: 2,
    },
    total: {
      position: 'absolute',
      width: "100vw",
      height: "21.56vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "34.4vw",
      left: 0,
      backgroundColor: "rgba(0,0,0,0)",
      backgroundImage: `url(${MoneyTotal})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      paddingTop: "3.85vw",
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "5.6vw",
      letterSpacing: "0.5vw",
      textShadow: "7px 7px 14px #404040",
      color: "#f9af4b",
      overflow: "hidden",
      zIndex: 2,
    },
    bigEuro: {
      width: "4.94vw",
      height: "5.41vw",
      display: "inline-block",
      margin: "-1.1vw",
      marginLeft: "1.2vw",
      backgroundColor: "rgba(0,0,0,0)",
      backgroundImage: `url(${BigEuro})`,
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
      top: "31.6vw",
      left: "15vw",
      backgroundColor: "rgba(0,0,0,0)",
      fontFamily: "PT Sans",
      fontWeight: "bold",
      fontSize: "2.3vw",
      letterSpacing: "0.05vw",
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
    message2: {
      position: 'absolute',
      height: "30%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "15%",
      left: "10%",
      right: "10%",
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 100000,
      fontFamily: "Copperplate Gothic Bold",
      fontSize: "1.6vw",
      letterSpacing: "0.3vw",
      textShadow: "5px 5px 14px #000000",
      color: "#FFFFFF",
      overflow: "hidden",
    },
    jokers: {
      marginBottom: 20,
    },
    final: {
      width: "20vw",
      height: "6vw",
      zIndex: 3,
      backgroundColor: "rgba(0,0,0,0)",
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
      height: "56.25vw",
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
      left: "9%",
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
    video_million: {
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

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Game)))