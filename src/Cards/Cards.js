import React, { Component } from 'react';
import '../Styles/_Cards.scss';
import  AnswerButtons  from '../AnswerButtons/AnswerButtons.js';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButtons: true
    }
  }

  toggleAnswerButtons = () => {
    this.setState({
      activeButtons: !this.state.activeButtons 
    })
  }

  render(){
    const currentCardAnswers = this.props.currentCard.potentialAnswers;
    const currentCardQuestion = this.props.currentCard.question;

    const cardAnswers = currentCardAnswers.map(answer =>
      <AnswerButtons key={answer} answer={answer} checkAnswer={this.props.checkAnswer} />)
    
    return (
      <article className="questionCard">
        {this.state.activeButtons ? <section className="cardQuestion"><h3>{currentCardQuestion}</h3></section> : null}
        <section className="cardAnswers" onClick={this.toggleAnswerButtons}>
          {this.state.activeButtons ? cardAnswers : null}
        </section>
        <section className="answerResponse"><h3>{this.props.answerResponse}</h3>
        </section>
          {this.state.activeButtons ? null : <button className="nextCard" data-test='next-card-btn'  onClick={()=>{this.props.nextCard(); this.toggleAnswerButtons()}}>Next Question</button>}
      </article>
    )
  }
}