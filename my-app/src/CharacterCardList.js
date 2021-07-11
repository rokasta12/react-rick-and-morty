import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

import './index.css';

function CharacterCardList() {
  const [characterList, setCharacterList] = useState([]);

  axios.get(`https://rickandmortyapi.com/api/character?page=1`).then((res) => {
    const characters = res.data.results;
    setCharacterList(characters);
    console.log(characterList);
  });
  console.log(characterList);

  return characterList.map((x) => {
    return <CharacterCard imgSrc={x.image} name={x.name}></CharacterCard>;
  });
}

export default CharacterCardList;
