import React from "react";
import '../Styles/_WelcomePage.scss';

const ResultsPage = props => {
  return (
    <section className="welcomePage">
      <article className="backGround">
        <div className="welcomeContent">
          <span className="welcomeHeader">Good Job!</span>
          <h2>Here are the results of your quiz</h2>
          <p className="welcomeHeader">Correct Cards: <span>{props.correctQuestions.length}/31</span></p>
        </div>
      </article>
    </section>
  );
};

export default ResultsPage;
