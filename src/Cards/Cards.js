import React, { Component } from 'react';
import '../Styles/_Cards.scss';
import { AnswerButtons } from '../AnswerButtons/AnswerButtons.js'

export class Cards extends Component {

  render(){

    const displayButton = <button className="nextCard" onClick={this.props.nextCard}>Next Question</button>

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
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">Read more: {this.props.linkName}</a></section>
          {this.props.activeButtons ? displayButton : null}
      </article>
    )
  }
}

export default Cards;