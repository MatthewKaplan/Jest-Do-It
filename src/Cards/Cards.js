import React from 'react';
import '../Styles/_Cards.scss';
import { AnswerButtons } from '../AnswerButtons/AnswerButtons.js'

export const Cards = (props) => {

  const answerArray = props.currentCard.potentialAnswers;
  const cardQuestion = props.currentCard.question;

  const cardAnswers = answerArray.map(answer =>
    <AnswerButtons 
      key={answer}
      answer={answer}
    />)
  
  return (
    <article className="questionCard">
        <section className="cardQuestion">
          <h3>{cardQuestion}</h3>
        </section>
        <section className="cardAnswers">
          {cardAnswers}
        </section>
      </article>
  )
}

export default Cards;