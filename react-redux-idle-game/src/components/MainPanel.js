import React, {Component} from 'react';
import BuildingList from '../components/BuildingList';
import {resetCounter} from '../actions';
import {addToLeaderboard} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './css/MainPanel.css';

class MainPanel extends Component {

  leaderboardEntries = []; //Will fill after sorting API call results

  getMinutes(seconds) {
    return Math.floor(seconds/60);
  }

  async fetchEntries(){
    var leaderboardCall = await fetch('/leaderboard')
      .then(res => res.json())
      .then(entries => {
        return (entries);
      });
    this.leaderboardEntries = this.makeLeaderboard(leaderboardCall);
  }

  makeLeaderboard(entries){
    var sortedArray = entries;

    sortedArray.sort(function(a,b){
      if(a.score === b.score) { return 0; }
      if(a.score > b.score) { return -1; }
      if(a.score < b.score) { return 1; }
    });

    return sortedArray.map((entry,index) => {
      return (
        <li className="leaderboardEntry" key={index}>
          {entry.username} {entry.score}
        </li>
      );
    });
  }

  render() {
    const display = this.props.display;
    switch (display) {
      case "B":
        return (
          <div className="mainPanel">
            <BuildingList />
          </div>
        )
      case "S":
        return (
          <div className="mainPanel">
            <h2>Stats</h2>
            <p>Total in bank: {this.props.stats.totalInBank}</p>
            <p>Total all time: {this.props.stats.totalAllTime}</p>
            <p>Total buildings: {this.props.stats.buildingsOwned}</p>
            <p>Minutes played: {this.getMinutes(this.props.stats.secondsPlayed)}</p>
            <button id="resetButton" className="nes-btn is-error" onClick={() => this.props.resetCounter()}>Reset</button>
            <p>{this.props.leaderboardUsername}</p>
          </div>
        )
      case "L":
        this.fetchEntries();
        return (
          <div className="mainPanel">
            <p>Leaderboard</p>
            {this.leaderboardEntries}
            <button className="leaderboardAddButton" onClick={() => this.props.addToLeaderboard("player3")}>Add to leaderboard</button>
          </div>
        )
    }
  }
}

function mapStateToProps(state) {
  return {
    display: state.mainPanel,
    stats: state.stats,
    leaderboardUsername: state.leaderboardUsername
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({resetCounter: resetCounter, addToLeaderboard: addToLeaderboard}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(MainPanel);
