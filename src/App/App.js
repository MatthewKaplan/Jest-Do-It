import React, { Component } from 'react';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import Header from '../Header/Header.js';
import CardsContainer from '../CardsContainer/CardsContainer.js';
import Footer from '../Footer/Footer.js';
import ResultsPage from '../ResultsPage/ResultsPage.js';
import '../Styles/Main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestionIndex: 30,
      correctQuestions: [],
      wrongQuestions: [],
      secondRound: false,
      activeButtons: false,
      answerResponse: '',
      link: '',
      linkName: '',
      isLoading: false
    }
  }

  startQuiz = (e) => {
    e.preventDefault();
    this.setState({
      activePlayer: true,
    })
  }

  setPlayer = (e) => {
    this.setState({
      playerName: e.target.value
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
      .then(questions => this.setState( {questions: questions.jestQuestions, isLoading: false} ))
      .catch(err => console.log(err))
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('activePlayer', JSON.stringify(nextState.activePlayer));
    localStorage.setItem('playerName', JSON.stringify(nextState.playerName));
    localStorage.setItem('questions', JSON.stringify(nextState.questions));
    localStorage.setItem('currentQuestionIndex', JSON.stringify(nextState.currentQuestionIndex));
    localStorage.setItem('wrongQuestions', JSON.stringify(nextState.wrongQuestions));
    localStorage.setItem('correctQuestions', JSON.stringify(nextState.correctQuestions));
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
  }

  checkAnswer = (clickedAnswer) => {
    const { questions } = this.state;
    const currentCard = questions[this.state.currentQuestionIndex];
    if(currentCard.correctAnswer === clickedAnswer) {
      this.state.correctQuestions.push(currentCard);
      this.setCurrentCardLink(currentCard)
      this.setAnswerResponse(currentCard.onCorrectAnswer);
    } else if(this.state.secondRound === false && currentCard.correctAnswer !== clickedAnswer) {
      this.state.wrongQuestions.push(currentCard);
      this.setCurrentCardLink(currentCard)
      this.setAnswerResponse(currentCard.onIncorrectAnswer);
    } else {
      this.setCurrentCardLink(currentCard)
      this.setAnswerResponse(currentCard.onIncorrectAnswer);
    }
  }

  toggleButtons = (bool) => {
    this.setState({
      activeButtons: bool 
    })
  }

  nextCard = () => {
    this.setAnswerResponse('');
    this.setCurrentCardLink('');
    this.toggleButtons(false)
    let currIndex = this.state.currentQuestionIndex;
    currIndex++;
    this.changeQuestionIndex(currIndex);
  }

  setAnswerResponse = (currentCard) => {
    this.setState({
      answerResponse: currentCard
    }, this.toggleButtons(true))
  }

  setCurrentCardLink = (currentCard) => {
    this.setState({
      link: currentCard.link,
      linkName: currentCard.linkName
    })
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
    this.fetchData();
    this.setState({
      activePlayer: false,
      playerName: "",
      questions: [],
      currentQuestionIndex: 0,
      correctQuestions: [],
      secondRound: false,
      wrongQuestions: []
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

  isLoading = () => {
  let displayloading;
  if(this.state.isLoading === true) {
    displayloading = <h4 className="isLoading">IS LOADING!!!!!</h4>
  }
    return displayloading;
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Header 
      restartGame={this.restartGame}
      activePlayer={this.state.activePlayer} 
      />
      {this.state.activePlayer ? null :
      <WelcomePage
        startQuiz={this.startQuiz}
        playerName={this.state.playerName}
        setPlayer={this.setPlayer}
      />}
      {this.state.activePlayer && this.state.currentQuestionIndex === this.state.questions.length ? 
        <ResultsPage 
        correctQuestions={this.state.correctQuestions} 
        playAgain={this.playAgain} 
        switchSecondRound={this.switchSecondRound}
        secondRound={this.state.secondRound}
        questions={this.state.questions}
        isLoadingFunction={this.isLoading}
        isLoading={this.state.isLoading}
        /> : null}
      {this.state.activePlayer && this.state.currentQuestionIndex < this.state.questions.length ?
      <CardsContainer 
        questions={this.state.questions}
        currentCard={this.state.questions[this.state.currentQuestionIndex]}
        checkAnswer={this.checkAnswer}
        answerResponse={this.state.answerResponse}
        link={this.state.link}
        linkName={this.state.linkName}
        nextCard={this.nextCard}
        activeButtons={this.state.activeButtons}
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