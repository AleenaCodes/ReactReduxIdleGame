import React from 'react';

function Building(props) {
  return (
    <div className="building">
      <h4>{props.name}</h4>
      <span>Owned: {props.number} </span>
      <span>Cost: {props.cost} </span>
      <span>Power: {props.power} </span>
    </div>
  );
}

export default Building;
