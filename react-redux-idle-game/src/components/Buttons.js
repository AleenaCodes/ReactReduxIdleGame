import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showLeaderboard} from '../actions';
import {showStats} from '../actions';
import './css/Buttons.css';

class Buttons extends Component {

  render() {
    return (
      <div className="buttonGroup">
        <button className="nes-btn is-primary" onClick={() => this.props.showStats()}>Stats</button>
        <button className="nes-btn is-primary" onClick={() => this.props.showLeaderboard()}>Leaderboard</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({showLeaderboard: showLeaderboard, showStats: showStats}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(Buttons);
