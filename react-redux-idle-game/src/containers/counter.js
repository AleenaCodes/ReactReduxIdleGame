import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {buyBuilding} from '../actions';
import Building from '../components/building';

class Counter extends Component {

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.props.counter}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings,
    counter: state.counter,
    perSecond : state.perSecond
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({buyBuilding: buyBuilding}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(Counter);
