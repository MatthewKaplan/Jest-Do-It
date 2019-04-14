import React from 'react';
import '../Styles/_Cards.scss';

export const Cards = (props) => {
  console.log(props.potentialAnswers)

  //const cardAnswers =
  
  return (
    <article className="Card">
        <section className="Card-question">
          <h3>{props.question}</h3>
        </section>
        <section className="Card-answers">
          {props.potentialAnswers}
        </section>
      </article>
  )
}

export default Cards;