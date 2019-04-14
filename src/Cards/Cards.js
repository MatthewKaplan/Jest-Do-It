import React from 'react';
import '../Styles/_Cards.scss';
import { AnswerButtons } from '../AnswerButtons/AnswerButtons.js'

export const Cards = (props) => {

  const cardAnswers = props.potentialAnswers.map(answer =>
    <AnswerButtons key={answer}
               answer={answer}
    />)
  
  return (
    <article className="questionCard">
        <section className="cardQuestion">
          <h3>{props.question}</h3>
        </section>
        <section className="cardAnswers">
          {cardAnswers}
        </section>
      </article>
  )
}

export default Cards;