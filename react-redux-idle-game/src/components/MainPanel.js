import React, {Component} from 'react';
import BuildingList from '../components/BuildingList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './MainPanel.css';

class MainPanel extends Component {

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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(MainPanel);
