import React from "react";
import '../Styles/_WelcomePage.scss';

const ResultsPage = props => {
  let displayBtn = props.secondRound === false ? <input className="playAgain" type='submit' data-test='wrong-answers-btn' onClick={props.switchSecondRound} value='Practice the ones you got wrong' /> : null;
  return (
    <section className="welcomePage">
      <article className="backGround">
        <div className="welcomeContent">
          <span className="welcomeHeader">{props.secondRound === false ? props.correctQuestions.length >= 23 ? 'Good Job!' : 'You can do better!' : 'Thats Better!'}</span>
          <p className="welcomeHeader"><span>{props.isLoading ? props.isLoadingFunction : `${Math.round(props.correctQuestions.length * 100 / props.questions.length)}%`}</span></p>
          <input className="playAgain" 
              type='submit'
              onClick={props.playAgain}
              data-test='play-again-btn'
              value='Play Again!'
          /><br/><br/><br/>
          {displayBtn}
        </div>
      </article>
    </section>
  );
};

export default ResultsPage;