import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './css/Counter.css';

class Counter extends Component {

  render() {
    return (
      <div className="counter">
        <p id="bank">{this.props.counter}</p>
        <p id="perSecond">Making {this.props.perSecond} internet points per second</p>
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(Counter);
