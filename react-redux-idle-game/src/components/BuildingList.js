import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {buyBuilding} from '../actions';
import Building from '../components/Building';

class BuildingList extends Component {

  createListItems() {
    return (this.props.buildings).map((building,index) => {
      return (
        <div onClick={() => this.props.buyBuilding(index)}>
          <Building
            key={index}
            id={index}
            name={building.name}
            number={building.number}
            cost={building.cost}
            power={building.power}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.createListItems()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    buildings: state.buildings
  }
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({buyBuilding: buyBuilding}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(BuildingList);
