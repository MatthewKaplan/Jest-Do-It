import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import '../Styles/Main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestion: []
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
      <WelcomePage 
        startQuiz={this.startQuiz}
        playerName={this.state.playerName}
        setPlayer={this.setPlayer}
      />
        
      </div>
    );
  }
}