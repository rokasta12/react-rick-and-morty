import React from 'react';
import './App.css';

function CharacterCard({ imgSrc, name }) {
  return (
    <div className="card">
      <img alt="foto" src={imgSrc} />
      <p>{name}</p>
    </div>
  );
}

export default CharacterCard;
