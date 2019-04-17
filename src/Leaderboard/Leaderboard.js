import React, {Component} from 'react';
import '../Styles/_Leaderboard.scss';

export class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      list: [] 
    }
  }

  componentDidMount() {
    let sortedLoaderboardArr = this.props.leaderboardArr.map(player => player).sort((a,b) => b.score - a.score);
    this.setState({
      list: sortedLoaderboardArr
    })
  }

  render() {
    let userlist = this.state.list.map((user, i) => <User name={  user.name } rank={ i + 1 } answeredCorrectly={ user.score } />);
    return (
      <div className="container">
        <div className="leadheader">
          <h2>Leaderboard</h2>
        </div>
        <div className="row colheader">
        <div className="col-xs-1">
          <h4>#</h4>
        </div>
        <div className="col-xs-5">
          <h4>Name</h4>
        </div>
        <div className="col-xs-3 recent">
          <h4>Answered Correctly</h4>
        </div>
      </div>
        { userlist }
      </div>
    )
  }
}

const User = ({ rank, answeredCorrectly, name }) => {
  return (
    <div className="row users  vcenter">
      <div className="col-xs-1 rank">
        <h4>{ rank }</h4>
      </div>
      <div className="col-xs-5 name">
        <h4>{ name }</h4>
      </div>
      <div className="col-xs-3">
        <h4>{ answeredCorrectly }</h4>
      </div>
    </div>
  )
}

export default Leaderboard;