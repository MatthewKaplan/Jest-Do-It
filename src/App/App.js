import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Header from '../Header/Header.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
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
    })
  }

  setPlayer = (e) => {
    this.setState({
      playerName: e.target.value
    })
  }

  render() {
    let displayedContent;

    if(this.state.activePlayer === false) {
      displayedContent = <WelcomePage
                          startQuiz={this.startQuiz}
                          playerName={this.state.playerName}
                          setPlayer={this.setPlayer}
                        /> 
    } else {
      displayedContent = <CardsContainer />

    }


    return (
      <div className="App">
      <Header 
        correctQuestions={this.state.correctQuestions}
      />
      <main className="main-content">
        {displayedContent}
      </main>
        
      </div>
    );
  }
}