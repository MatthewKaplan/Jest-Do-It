import React from 'react';
import '../Styles/_Footer.scss';

const Footer = (props) => {
  return (
    <header className="mainHeader">
      <h1>Welcome, {props.playerName}</h1>
      <h4>Correct Questions: <span>{props.correctQuestions.length}/30</span></h4>
    </header>
  );
}

export default Footer;
