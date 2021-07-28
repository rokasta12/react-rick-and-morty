import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import Select from './Select';
import { fetchCharacters } from '../Services/CharacterService';
import { setCharacterQueryString } from '../Utils/QueryStringGenerator.js';
import {
  emptyUserResponse,
  livenessSelect,
  genderSelect,
  loadingCharacters,
} from '../Data/constants.js';

function CharacterCardList() {
  const [characterList, setCharacterList] = useState([]);
  const [characterQuery, setCharacterQuery] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetchCharacters(characterQuery);
      const tasksFromServer = response.results;
      setCharacterList(tasksFromServer || emptyUserResponse);
    };
    getCharacters();
  }, [characterQuery]);

  function filter(event) {
    // this utility function  abstracted and sets,updates query string
    // Listens change event  at  select or input
    const queryString = setCharacterQueryString(event, characterQuery);
    setCharacterQuery(queryString);
  }
  let timeout = null;

  const search = (event) => {
    setCharacterList(loadingCharacters);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      filter(event);
    }, 2000);
  };

  return (
    <div>
      <div className="filter-area">
        <h2>Filter Character</h2>
        <div className="filter-items">
          <label htmlFor="name"> Search</label>
          <input type="text" name="name" onInput={search}></input>
          <Select
            select={genderSelect}
            changeFilter={(e) => filter(e)}
          ></Select>
          <Select
            select={livenessSelect}
            changeFilter={(e) => filter(e)}
          ></Select>
        </div>
      </div>

      <div className="car-list">
        {characterList.map((character) => {
          return (
            <CharacterCard
              key={character.name + '_' + character.image}
              imgSrc={character.image}
              name={character.name}
              alive={character.status}
              type={character.type}
              lastLocation={character.location.name}
              gender={character.gender}
            ></CharacterCard>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterCardList;
