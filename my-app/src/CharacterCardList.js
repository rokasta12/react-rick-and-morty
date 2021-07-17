import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

import './index.css';

function CharacterCardList() {
  const [characterList, setCharacterList] = useState([]);

  const [characterQuery,setCharacterQuery] = useState('');
  /*   axios.get(`https://rickandmortyapi.com/api/character?page=1`).then((res) => {
    const characters = res.data.results;
    setCharacterList(characters);

    console.log('API CALLED');
  });
 */

  useEffect(() => {
    const getCharacters = async () => {
      const tasksFromServer = await fetchCharacters(characterQuery);

      setCharacterList(tasksFromServer);
    };
    getCharacters();
  }, [characterQuery]);

  const fetchCharacters = async (query) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${query}`
    );
    const data = await res.json();
    return data.results;
  };
  function filter(event){
    let queryQuestion= '?' ;

    const queryName = event.target.name;
    const queryValue = event.target.value;

    console.log(queryName,queryValue)
    let currentQuery = characterQuery;

    if (currentQuery[0]!=='?'){
      setCharacterQuery(queryQuestion + queryName + '=' + queryValue);
    }

    else {
      const queryItems = [];
      currentQuery = currentQuery.split('?')[1];
      console.log('currentQuery: ', currentQuery); //gender=male

      if(!currentQuery.includes(queryName)){
        currentQuery+= '&'+(queryName+'='+queryValue)
      }
      const queriesArray  = currentQuery.split('&');

      queriesArray.forEach(x => {
        const list = x.split('=')
        const name = list[0];
        const value = list[1];

        if(name === queryName){
          queryItems.push(queryName+'='+queryValue)
        }
        else{
          queryItems.push(name+'='+value)

        }
      })

      const queryString = queryQuestion + queryItems.join('&')
      setCharacterQuery(queryString)
    }

  }


  return (
    <div>
      <div className="filter-area">
        <h2>
          Filter Character
        </h2>
        <div className="filter-items">
            <label htmlFor="gender"> Choose gender :</label>
            <select name="gender" onChange={filter} >
              <option value="">all</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="unknown">unknown</option>
            </select>
            <label htmlFor="status"> Status :</label>
            <select name="status" onChange={filter}>
              <option value="" >All</option>
              <option value="alive">Living</option>
              <option value="dead">Dead</option>
            </select>
        </div>
      </div>
      <div className="car-list">
        {characterList.map((character) => {
          return (
            <CharacterCard
              key={character.name+'_'+character.image}
              imgSrc={character.image}
              name={character.name}
              alive={character.status}
              type={character.type}
              lastLocation={character.location.name}
              gender= {character.gender}
            ></CharacterCard>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterCardList;
