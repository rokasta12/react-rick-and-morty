import React from 'react';

function CharacterCard({ imgSrc, name, alive, type, lastLocation, gender }) {
  function stringTrimmer(string) {
    return string.length > 20 ? string.slice(0, 18) + '..' : string;
  }

  return (
    <div
      className={`card ${alive === 'Alive' ? 'alive-border' : 'dead-border'}`}
    >
      <img alt="foto" width="300px" src={imgSrc} />
      <div className="card-content">
        <h2 style={{ color: 'darkblue' }}>{name}</h2>
        <p>
          <strong>Location : </strong>
          {lastLocation}
        </p>
        <p>
          <strong>Type: </strong>
          {type ? ' ' + type : ' Not specified.'}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
