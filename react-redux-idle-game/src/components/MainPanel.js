import React, {Component} from 'react';
import BuildingList from '../containers/building-list';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateTotal} from '../actions';

class MainPanel extends Component {

  render() {
    const display = this.props.display;
    switch (display) {
      case "B":
        return (
          <div>
            <BuildingList />
          </div>
        )
      case "S":
        return (
          <div><p>Stats</p></div>
        )
      case "L":
        return (
          <div><p>Leaderboard</p></div>
        )
    }
  }
}

function mapStateToProps(state) {
  return {
    display: state.mainPanel
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({updateTotal: updateTotal}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(MainPanel);
