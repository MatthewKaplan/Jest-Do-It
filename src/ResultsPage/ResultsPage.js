import React from "react";
import '../Styles/_WelcomePage.scss';

const ResultsPage = props => {
  return (
    <section className="welcomePage">
      <article className="backGround">
        <div className="welcomeContent">
          <span className="welcomeHeader">{props.correctQuestions.length >= 23 ? 'Good Job!' : 'You can do better!'}</span>
          <p className="welcomeHeader">
            <span>{`${Math.round(props.correctQuestions.length * 100 / props.questions.length)}%`}</span>
          </p>
          <input className="playAgain" 
              type='submit'
              onClick={props.playAgain}
              data-test='play-again-btn'
              value='Play Again!'
          />
        </div>
      </article>
    </section>
  );
};

export default ResultsPage;