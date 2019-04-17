import React, {Component} from 'react';
import '../Styles/_Header.scss';

export class Header extends Component {

  render() {
    return (
      <header className="mainHeader">
        <h1>Jest Do It <img src="https://i.imgur.com/h5hvEDt.png" alt="Jest logo" className="jestLogo"/></h1>
        {this.props.activePlayer ? 
          <input className="playAgain" 
                type='submit'
                onClick={this.props.restartGame}
                data-test="new-game-btn"
                value='New Game'
            /> : null}
            <input className="playAgain" 
                type='submit'
                onClick={this.props.leaderBoardScreen}
                data-test="leaderboard-btn"
                value={this.props.leaderboard ? 'Back to game' : 'Leaderboard'}
            /> 
      </header>
    );
  }
};

export default Header;