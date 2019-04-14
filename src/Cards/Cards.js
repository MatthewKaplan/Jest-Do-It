import React from 'react';
import '../Styles/_Cards.scss';
import { AnswerButtons } from '../AnswerButtons/AnswerButtons.js'

export const Cards = (props) => {

  const currentAnswers = props.currentCard.potentialAnswers;
  const currentQuestion = props.currentCard.question;

  const cardAnswers = currentAnswers.map(answer =>
    <AnswerButtons 
      key={answer}
      answer={answer}
    />)
  
  return (
    <article className="questionCard">
      <section className="cardQuestion">
        <h3>{currentQuestion}</h3>
      </section>
      <section className="cardAnswers">
        {cardAnswers}
      </section>
    </article>
  )
}

export default Cards;