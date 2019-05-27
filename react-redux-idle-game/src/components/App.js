import React from 'react';
import './css/App.css';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';
import MainPanel from '../components/MainPanel';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateTotal} from '../actions';

class App extends React.Component {

  // leaderboardIDgenerated = "nothing yet"; //take out

  componentDidMount() {
    this.props.updateTotal();
    this.interval = setInterval(() => this.props.updateTotal(), 1000);
    // this.generateLeaderboardId(); // take out
  }

  // async generateLeaderboardId() { //take out
  //   console.log("getting leaderboard ID");
  //
  //   var data = {
  //     "username" : "PlayerOne",
  //     "score": 52529
  //   }
  //   var leaderboardAddCall = await fetch('/leaderboard', {
  //     method: 'POST',
  //     headers: {
  //           'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.createdEntry);
  //     this.props.addLeaderboardId(res.createdEntry.username);
  //   });
  //
  // }

  render() {
    return (
      <div className="app">
        <Counter />
        <Buttons />
        <MainPanel />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    leaderboardID: state.leaderboardID
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({updateTotal: updateTotal}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(App);
