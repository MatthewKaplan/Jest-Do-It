import React from 'react';
import '../Styles/_AnswerButtons.scss';

export const AnswerButtons = (props) => {

  return (
    <div className="answerButtons">
      <button>{props.answer}</button>
    </div>
  )
}

export default AnswerButtons;