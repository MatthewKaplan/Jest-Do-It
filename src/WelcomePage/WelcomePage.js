import React from 'react';
import '../Styles/_WelcomePage.scss';

const WelcomePage = (props) => {
  return (
    <section className="welcomePage">
      <article className="backGroundImg">
        <h1 className="welcomeHeader">Welcome to Jest Do It.</h1>
        <h2 className="subHeader">An online resource for learning the testing framework Jest along with the testing utility Enzyme.</h2>
        <form className="signInForm" onSubmit={props.startQuiz}>
          <input
            type='text'
            placeholder='Enter your name'
            value={props.playerName}
            onChange={props.setPlayer}
            className='nameInput'
            data-test='userNameInput' 
          />
        </form>
      </article>
    </section>
  )
}

export default WelcomePage;