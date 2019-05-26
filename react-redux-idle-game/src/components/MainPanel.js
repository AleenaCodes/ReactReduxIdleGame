import React, {Component} from 'react';
import BuildingList from '../components/BuildingList';
import {resetCounter} from '../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './css/MainPanel.css';

class MainPanel extends Component {

  getMinutes(seconds) {
    console.log(seconds);
    return Math.floor(seconds/60);
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
          </div>
        )
      case "L":
        return (
          <div className="mainPanel"><p>Leaderboard</p></div>
        )
    }
  }
}

function mapStateToProps(state) {
  return {
    display: state.mainPanel,
    stats: state.stats
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({resetCounter: resetCounter}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(MainPanel);
