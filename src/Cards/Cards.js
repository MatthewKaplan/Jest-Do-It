import React, { Component } from 'react';
import '../Styles/_Cards.scss';
import { AnswerButtons } from '../AnswerButtons/AnswerButtons.js';

export class Cards extends Component {

  render(){
    const currentCardAnswers = this.props.currentCard.potentialAnswers;
    const currentCardQuestion = this.props.currentCard.question;

    const cardAnswers = currentCardAnswers.map(answer =>
      <AnswerButtons 
        key={answer}
        answer={answer}
        checkAnswer={this.props.checkAnswer}
      />)
    
    return (
      <article className="questionCard">
        {this.props.activeButtons ? null : <section className="cardQuestion"><h3>{currentCardQuestion}</h3></section>}
        <section className="cardAnswers">
          {this.props.activeButtons ? null : cardAnswers}
        </section>
        <section className="answerResponse"><h3>{this.props.answerResponse}</h3>
        </section>
          {this.props.activeButtons ? <button className="nextCard" data-test='next-card-btn' onClick={this.props.nextCard}>Next Question</button> : null}
      </article>
    )
  }
}

export default Cards;