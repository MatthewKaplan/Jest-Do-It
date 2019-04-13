import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Header from '../Header/Header.js'
import '../Styles/Main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestion: [],
      correctQuestions: []
    }
  }

  startQuiz = (e) => {
    e.preventDefault();
    this.setState({
      activePlayer: true
    }, console.log(this.state.activePlayer))
  }

  setPlayer = (e) => {
    this.setState({
      playerName: e.target.value
    }, console.log(this.state.playerName))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Header 
        correctQuestions={this.state.correctQuestions}
      />
      <main className="main-content">
        <WelcomePage 
          startQuiz={this.startQuiz}
          playerName={this.state.playerName}
          setPlayer={this.setPlayer}
        />
      </main>
        
      </div>
    );
  }
}