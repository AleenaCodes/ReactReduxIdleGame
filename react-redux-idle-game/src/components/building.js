import React from 'react';

function Building(props) {
  return (
    <div className="building">
      <h2>{props.name}</h2>
      <p>Owned: {props.number}</p>
      <p>Cost: {props.cost}</p>
      <p>Power: {props.power}</p>
    </div>
  );
}

export default Building;
