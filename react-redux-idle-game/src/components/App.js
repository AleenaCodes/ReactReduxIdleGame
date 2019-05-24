import React from 'react';
import './App.css';
import Counter from '../containers/counter';
import Buttons from '../containers/buttons';
import MainPanel from '../components/MainPanel';
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
        <Counter />
        <Buttons />
        <MainPanel />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings //Change - don't really need anything?
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({updateTotal: updateTotal}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(App);
