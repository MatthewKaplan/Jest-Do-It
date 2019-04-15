import React from 'react';
import '../Styles/_CardsContainer.scss';
import {Cards} from '../Cards/Cards.js';

export const CardsContainer = (props) => {
  const { currentCard } = props;
  let displayCard;

  props.questions.map( jest => 
    displayCard =
    <Cards 
      key={currentCard.id}
      id={jest.id}
      question={jest.question}
      potentialAnswers={jest.potentialAnswers}
      correctAnswer={jest.correctAnswer}
      onCorrectAnswer={jest.onCorrectAnswer}
      onIncorrectAnswer={jest.onIncorrectAnswer}
      linkName={jest.linkName}
      link={jest.link}
      currentCard={currentCard}
      checkAnswer={props.checkAnswer}
      answerResponse={props.answerResponse}
      nextCard={props.nextCard}
      activeButtons={props.activeButtons}
      link={props.link}
      linkName={props.linkName}
    />)
    
  return (
    <section className="CardsContainer">
      {displayCard}
    </section>
  );
}

export default CardsContainer;
