import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Header from '../Header/Header.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Footer from '../Footer/Footer.js';
import ResultsPage from '../ResultsPage/ResultsPage.js';
import data from '../data.js';
import '../Styles/Main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      wrongQuestions: [],
      secondRound: false
    }
  }

  startQuiz = (e) => {
    e.preventDefault();
    this.setState({
      activePlayer: true,
      questions: data.jestQuestions
    })
  }

  setPlayer = (e) => {
    this.setState({
      playerName: e.target.value
    })
  }

  checkAnswer = (clickedAnswer) => {
    const { questions } = this.state;
    const currentCard = questions[this.state.currentQuestionIndex];
    let currIndex = this.state.currentQuestionIndex;
    if(currentCard.correctAnswer === clickedAnswer) {
      this.state.correctQuestions.push(currentCard);
    } 
    if(this.state.secondRound === false && currentCard.correctAnswer !== clickedAnswer) {
      this.state.wrongQuestions.push(currentCard);
    }
    currIndex++;
    this.changeQuestionIndex(currIndex);
  }
  
  changeQuestionIndex = (currIndex) => {
    this.setState({
      currentQuestionIndex: currIndex
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
    this.setState({
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      secondRound: false
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Header />
      {this.state.activePlayer ? null :
      <WelcomePage
        startQuiz={this.startQuiz}
        playerName={this.state.playerName}
        setPlayer={this.setPlayer}
      />}
      {this.state.activePlayer && this.state.currentQuestionIndex === this.state.questions.length ? 
        <ResultsPage 
        correctQuestions={this.state.correctQuestions} 
        restartGame={this.restartGame} 
        switchSecondRound={this.switchSecondRound}
        secondRound={this.state.secondRound}
        questions={this.state.questions}
        /> : null}
      {this.state.activePlayer && this.state.currentQuestionIndex < this.state.questions.length ?
      <CardsContainer 
        currentCard={this.state.questions[this.state.currentQuestionIndex]}
        checkAnswer={this.checkAnswer}
      /> : null }
      {this.state.activePlayer ? 
      <Footer 
        playerName={this.state.playerName}
        questions={this.state.questions}
        correctQuestions={this.state.correctQuestions}
      /> : null }
      </div>
    );
  }
}