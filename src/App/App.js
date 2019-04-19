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
      leaderboard: false
    }
  }

  startQuiz = (e) => {
    e.preventDefault();
    this.setState({
      activePlayer: true
    })
  }

  setPlayer = (e) => {
    this.setState({
      playerName: e.target.value,
    })
  }

  componentDidMount = () => {
    if(localStorage.length) {
      this.setState(this.getStateLocalStorage());
    } else {
      this.fetchData();
    }
  }

  fetchData = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/matthewkaplan/jestquestions')
      .then(response => response.json())
      .then(questions => { this.setState({ questions: questions.jestQuestions }) })
      .catch(error => {throw new Error(error)})
  }

  componentDidUpdate = () => {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  getStateLocalStorage = () => {
    return JSON.parse(localStorage.getItem('appState'));
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

  restartGame = () => {
    this.playAgain();
    this.setState({
      activePlayer: false,
      playerName: "",
      leaderboard: false
    })
  }

  playAgain = () => {
    this.fetchData();
    this.setState({
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: []
    })
  }

  render() {
    const { correctQuestions, currentQuestionIndex, questions, playerName, activePlayer, leaderboard} = this.state;
    let toBeDisplayed;
    if(activePlayer === false && leaderboard === false) {
      toBeDisplayed = <WelcomePage  startQuiz={this.startQuiz}
                                    playerName={playerName}
                                    setPlayer={this.setPlayer} />
    } else if(activePlayer === true && currentQuestionIndex < questions.length && leaderboard === false) {
      toBeDisplayed = <CardsContainer questions={questions}
                                      correctQuestions={correctQuestions}
                                      currentQuestionIndex={currentQuestionIndex}
                                      changeQuestionIndex={this.changeQuestionIndex} /> 
    } else if(leaderboard === true) {
      toBeDisplayed = <Leaderboard playerName={playerName}
                                   correctQuestions={correctQuestions} />
    } else {
      toBeDisplayed = <ResultsPage  correctQuestions={correctQuestions} 
                                    playAgain={this.playAgain} 
                                    questions={questions} />
    }
    return (
      <div className="App">
        <Header 
          restartGame={this.restartGame}
          activePlayer={activePlayer} 
          leaderBoardScreen={this.toggleLeaderBoardScreen}
          leaderboard={leaderboard} />
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