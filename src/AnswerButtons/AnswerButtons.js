import React, { Component } from 'react';

import '../Styles/_AnswerButtons.scss';

export class AnswerButtons extends Component {

  handleChangeCard = () => {
    this.props.checkAnswer(this.props.answer);
  }

  render() {
    const cardAnswer = this.props.answer;
    return (
      <div className="answerButtons">
        <button onClick={this.handleChangeCard}>{cardAnswer}</button>
      </div>
    )
  }
}


export default AnswerButtons;
