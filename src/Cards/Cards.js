import React, { Component } from 'react';
import '../Styles/_Cards.scss';
import { AnswerButtons } from '../AnswerButtons/AnswerButtons.js'

export class Cards extends Component {

  switchCardHandler = () => {
    this.props.nextCard();
  }

  render(){

    const currentAnswers = this.props.currentCard.potentialAnswers;
    const currentQuestion = this.props.currentCard.question;

    const cardAnswers = currentAnswers.map(answer =>
      <AnswerButtons 
        key={answer}
        answer={answer}
        checkAnswer={this.props.checkAnswer}
        nextCard={this.props.nextCard}
      />)
    
    return (
      <article className="questionCard">
        <section className="cardQuestion">
          <h3>{currentQuestion}</h3>
        </section>
        <section className="cardAnswers">
          {cardAnswers}
        </section>
        <p>{this.props.answerResponse}</p>
        <button className="answerButtons" onClick={this.switchCardHandler}>next card</button>
      </article>
    )
  }
}

export default Cards;