import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Header from '../Header/Header.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Footer from '../Footer/Footer.js';
import Leaderboard from '../Leaderboard/Leaderboard.js';
import ResultsPage from '../ResultsPage/ResultsPage.js';
import '../Styles/Main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: false,
      playerName: '',
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      wrongQuestions: [],
      secondRound: false,
      activeButtons: false,
      answerResponse: '',
      leaderboard: false,
      leaderboardArr: []
    }
  }

  startQuiz = (e) => {
    e.preventDefault();
    this.setState({
      activePlayer: true,
    }, this.setLeaderboardArr())
  }

  setPlayer = (e) => {
    this.setState({
      playerName: e.target.value,
    })
  }

  setLeaderboardArr = () => {
    let leaderboardNewArr = this.state.leaderboardArr;
    let correctAnswers = this.state.correctQuestions;
    let score = correctAnswers.length;
    leaderboardNewArr.push({name: this.state.playerName, score: score})
    this.setState({
      leaderboardArr: leaderboardNewArr
    })
  }
  
  updateLeaderboard = () => {
    let leaderboardNewArr = this.state.leaderboardArr;
    leaderboardNewArr.forEach(leader => {
      if(leader.name === this.state.playerName) {
        leader.score = this.state.correctQuestions.length
      }
    })
    this.setState({
      leaderboardArr: leaderboardNewArr
    })
  }

  componentDidMount(){
    if(!localStorage.getItem('activePlayer')){
      this.fetchData();
    }
  }

  fetchData(){
    this.setState({isLoading: true})
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/matthewkaplan/jestquestions')
      .then(response => response.json())
      .then(questions => this.setState( {questions: questions.jestQuestions} ))
      .catch(err => console.log(err))
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('activePlayer', JSON.stringify(nextState.activePlayer));
    localStorage.setItem('playerName', JSON.stringify(nextState.playerName));
    localStorage.setItem('questions', JSON.stringify(nextState.questions));
    localStorage.setItem('currentQuestionIndex', JSON.stringify(nextState.currentQuestionIndex));
    localStorage.setItem('wrongQuestions', JSON.stringify(nextState.wrongQuestions));
    localStorage.setItem('correctQuestions', JSON.stringify(nextState.correctQuestions));
    localStorage.setItem('leaderboardArr', JSON.stringify(nextState.leaderboardArr));
  }

  componentWillMount() {
    localStorage.getItem('activePlayer') && this.setState({
      activePlayer: JSON.parse(localStorage.getItem('activePlayer'))
    })
    localStorage.getItem('playerName') && this.setState({
      playerName: JSON.parse(localStorage.getItem('playerName'))
    })
    localStorage.getItem('questions') && this.setState({
      questions: JSON.parse(localStorage.getItem('questions'))
    })
    localStorage.getItem('currentQuestionIndex') && this.setState({
      currentQuestionIndex: JSON.parse(localStorage.getItem('currentQuestionIndex'))
    })
    localStorage.getItem('wrongQuestions') && this.setState({
      wrongQuestions: JSON.parse(localStorage.getItem('wrongQuestions'))
    })
    localStorage.getItem('correctQuestions') && this.setState({
      correctQuestions: JSON.parse(localStorage.getItem('correctQuestions'))
    })
    localStorage.getItem('leaderboardArr') && this.setState({
      leaderboardArr: JSON.parse(localStorage.getItem('leaderboardArr'))
    })
  }

  checkAnswer = (clickedAnswer) => {
    const { questions } = this.state;
    const currentCard = questions[this.state.currentQuestionIndex];
    if(currentCard.correctAnswer === clickedAnswer) {
      this.state.correctQuestions.push(currentCard);
      this.setAnswerResponse(currentCard.onCorrectAnswer);
      this.updateLeaderboard();
    } else if(this.state.secondRound === false && currentCard.correctAnswer !== clickedAnswer) {
      this.state.wrongQuestions.push(currentCard);
      this.setAnswerResponse(currentCard.onIncorrectAnswer);
    } else {
      this.setAnswerResponse(currentCard.onIncorrectAnswer);
    }
  }

  toggleAnswerButtons = () => {
    this.setState({
      activeButtons: !this.state.activeButtons 
    })
  }

  nextCard = () => {
    this.setAnswerResponse('');
    this.toggleAnswerButtons()
    let currIndex = this.state.currentQuestionIndex;
    currIndex++;
    this.changeQuestionIndex(currIndex);
  }

  setAnswerResponse = (currentCard) => {
    this.setState({
      answerResponse: currentCard
    }, this.toggleAnswerButtons())
  }

  changeQuestionIndex = (currIndex) => {
    this.setState({
      currentQuestionIndex: currIndex
    })
  }

  toggleLeaderBoardScreen = () => {
    this.setState({
      leaderboard: !this.state.leaderboard
    })
  }

  switchSecondRound = () => {
    this.setState({
      secondRound: true,
      currentQuestionIndex: 0,
      questions: this.state.wrongQuestions,
      correctQuestions: []
    })
  }

  restartGame = () => {
    this.fetchData();
    this.setState({
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      secondRound: false,
      wrongQuestions: [],
      leaderboard: false
    })
  }

  playAgain = () => {
    this.fetchData();
    this.setState({
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      secondRound: false,
      wrongQuestions: []
    })
  }

  render() {
    const { answerResponse, activeButtons,  secondRound, correctQuestions, currentQuestionIndex, questions, playerName, activePlayer, leaderboard, leaderboardArr} = this.state;
    let toBeDisplayed;
    if(activePlayer === false && leaderboard === false) {
      toBeDisplayed = <WelcomePage startQuiz={this.startQuiz}
                                    playerName={playerName}
                                    setPlayer={this.setPlayer} />
    } else if(activePlayer === true && currentQuestionIndex < questions.length && leaderboard === false) {
      toBeDisplayed = <CardsContainer questions={questions}
                                       currentCard={questions[currentQuestionIndex]}
                                       checkAnswer={this.checkAnswer}
                                       answerResponse={answerResponse}
                                       nextCard={this.nextCard}
                                       activeButtons={activeButtons} /> 
    } else if(leaderboard === true) {
      toBeDisplayed = <Leaderboard leaderboardArr={leaderboardArr} />
    } else {
      toBeDisplayed = <ResultsPage correctQuestions={correctQuestions} 
                                    playAgain={this.playAgain} 
                                    switchSecondRound={this.switchSecondRound}
                                    secondRound={secondRound}
                                    questions={questions} />
    }
    return (
      <div className="App">
        <Header 
        restartGame={this.restartGame}
        activePlayer={activePlayer} 
        leaderBoardScreen={this.toggleLeaderBoardScreen}
        leaderboard={leaderboard} 
        />
          {toBeDisplayed}
        { activePlayer ? 
        <Footer 
          playerName={playerName}
          questions={questions}
          correctQuestions={correctQuestions} /> : null }
      </div>
    );
  }
}