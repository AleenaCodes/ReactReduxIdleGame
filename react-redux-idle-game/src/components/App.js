import React from 'react';
import './App.css';
import Counter from '../containers/counter';
import BuildingList from '../containers/building-list';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateTotal} from '../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.updateTotal();
    this.interval = setInterval(() => this.props.updateTotal(), 1000);
  }

  render() {
    return (
      <div className="App">
        <h2>Buildings</h2>
        <Counter />
        <BuildingList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings //Change
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({updateTotal: updateTotal}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(App);
