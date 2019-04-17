import React from 'react';
import '../Styles/_WelcomePage.scss';

const WelcomePage = (props) => {
  return (
    <section className="welcomePage">
      <article className="backGround">
        <div className="welcomeContent">
          <span className="welcomeHeader">Welcome to Jest Do It</span>
          <h2 className="subHeader">An online resource for learning the testing framework Jest along with the testing utility Enzyme.</h2>
          <img src="https://i.imgur.com/G1SZXAY.png" alt="Jest Icon" className="welcomeImg"/><br/>
          <form className="signInForm">
            <input
              type='text'
              placeholder='Enter your name to continue'
              value={props.playerName}
              onChange={props.setPlayer}
              className='nameInput'
              data-test='user-name-input'
              maxLength="15" 
            />
            <input className="startGame" 
              type='submit'
              disabled={!props.playerName}
              data-test='btn-start-quiz'
              onClick={props.startQuiz}
              value='Start Game'
            />
          </form>
        </div>
      </article>
    </section>
  )
}

export default WelcomePage;