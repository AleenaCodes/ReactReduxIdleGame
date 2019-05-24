import React from 'react';

function Building(props) {
  return (
    <div className="building">
      <h2>{props.name}</h2>
      <p>{props.number}</p>
    </div>
  );
}

export default Building;
