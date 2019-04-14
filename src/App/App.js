import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Header from '../Header/Header.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Footer from '../Footer/Footer.js';
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
      correctQuestions: []
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

  render() {
    return (
      <div className="App">
      <Header />
      {this.state.activePlayer ? null :
      <WelcomePage
        startQuiz={this.startQuiz}
        playerName={this.state.playerName}
        setPlayer={this.setPlayer}
      />}
      {this.state.activePlayer ? 
      <CardsContainer 
        currentCard={this.state.questions[this.state.currentQuestionIndex]}
      /> : null }
      {this.state.activePlayer ? 
      <Footer 
        playerName={this.state.playerName}
        correctQuestions={this.state.correctQuestions}
      /> : null }
      </div>
    );
  }
}