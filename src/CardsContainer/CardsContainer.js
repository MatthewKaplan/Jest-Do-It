import React, {Component} from 'react';
import '../Styles/_CardsContainer.scss';
import  Cards  from '../Cards/Cards.js';

export class CardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      answerResponse: '',
      wrongQuestions: []
    }
  }

  checkAnswer = (clickedAnswer) => {
    const currentCard = this.props.questions[this.props.currentQuestionIndex];
    if(currentCard.correctAnswer === clickedAnswer) {
      this.props.correctQuestions.push(currentCard);
      this.setAnswerResponse(currentCard.onCorrectAnswer);
    } else {
      this.state.wrongQuestions.push(currentCard);
      this.setAnswerResponse(currentCard.onIncorrectAnswer);
    }
  }

  nextCard = () => {
    this.setAnswerResponse('');
    let currIndex = this.props.currentQuestionIndex;
    currIndex++;
    this.props.changeQuestionIndex(currIndex);
  }

  setAnswerResponse = (currentCard) => {
    this.setState({
      answerResponse: currentCard
    })
  }

  render() {
    const currentCard = this.props.questions[this.props.currentQuestionIndex];
    let displayCard;

    this.props.questions.map( jest => 
      displayCard =
      <Cards 
        key={jest.id}
        id={jest.id}
        question={jest.question}
        potentialAnswers={jest.potentialAnswers}
        correctAnswer={jest.correctAnswer}
        onCorrectAnswer={jest.onCorrectAnswer}
        onIncorrectAnswer={jest.onIncorrectAnswer}
        currentCard={currentCard}
        checkAnswer={this.checkAnswer}
        answerResponse={this.state.answerResponse}
        nextCard={this.nextCard}
      />)
      
    return (
      <section className="CardsContainer">
        {displayCard}
      </section>
    );
  }
}

export default CardsContainer;
