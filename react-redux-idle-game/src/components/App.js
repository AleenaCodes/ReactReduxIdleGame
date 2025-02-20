import React from 'react';
import './css/App.css';
import Counter from '../components/Counter';
import Buttons from '../components/Buttons';
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
      <div className="app">
        <Counter />
        <Buttons />
        <MainPanel />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    leaderboardID: state.leaderboardID
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({updateTotal: updateTotal}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(App);
