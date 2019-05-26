import React from 'react';

function Building(props) {
  return (
    <div className="building">
      <img src={require('./pictures/nyancat.png')} alt="meme icon" id="buildingIcon"/>
      <span id="buildingOwned">{props.number}</span>
      <div>
        <h4 id="buildingName">{props.name}</h4>
        <p id="buildingCost">Cost: {props.cost}</p>
        <p id="buildingPower">Power: {props.power}</p>
      </div>
    </div>
  );
}

export default Building;
