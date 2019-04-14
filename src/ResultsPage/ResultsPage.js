import React from "react";
import '../Styles/_WelcomePage.scss';

const ResultsPage = props => {
  return (
    <section className="welcomePage">
      <article className="backGround">
        <div className="welcomeContent">
          <span className="welcomeHeader">Good Job!</span>
          <p className="welcomeHeader">Correct Questions: <span>{props.correctQuestions.length}/31</span></p>
          <input className="playAgain" 
              type='submit'
              onClick={props.restartGame}
              value='Play Again!'
          />
        </div>
      </article>
    </section>
  );
};

export default ResultsPage;
