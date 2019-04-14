import React from 'react';
import '../Styles/_CardsContainer.scss';
import data from '../data.js';
import {Cards} from '../Cards/Cards.js';

export const CardsContainer = (props) => {

  return (
    <section className="CardsContainer">
    {data.jestQuestions.map( jest => 
      <Cards 
        id={jest.id}
        question={jest.question}
        potentialAnswers={jest.potentialAnswers}
        correctAnswer={jest.correctAnswer}
        onCorrectAnswer={jest.onCorrectAnswer}
        onIncorrectAnswer={jest.onIncorrectAnswer}
        linkName={jest.linkName}
        link={jest.link}
      />)
    }
  </section>
  );
}

export default CardsContainer;
