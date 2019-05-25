import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './Counter.css';

class Counter extends Component {

  render() {
    return (
      <div className="counter">
        <p>{this.props.counter}</p>
        <p>Per second : {this.props.perSecond}</p>
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
