import { fetchCharacters } from '../Services/CharacterService';
import { livenessSelect, einsteinQueryResult } from '../Data/constants';
import { setCharacterQueryString } from '../Utils/QueryStringGenerator';
import { getMockEvent } from './QueryStringGenerator.test';
/* Test with constants */

describe('fetchCharacters service Test', () => {
  let response;

  beforeAll(async () => {
    response = await fetchCharacters();
  });

  test('must return must return info with count of items', async () => {
    const queryInfo = response.info;
    expect(queryInfo).toHaveProperty('count');
  });

  test('must return something even with empty query', async () => {
    const resultCharacters = response.results;
    expect(resultCharacters).toHaveLength(20);
  });
});

describe('fetchCharacters service with query', () => {
  it('should return only females', async () => {
    const queryValue = 'Female';
    const response = await fetchCharacters('?gender=' + queryValue);

    const characterResults = response.results;
    characterResults.forEach((element) => {
      expect(element.gender).toBe(queryValue);
    });
  });

  it('shoud  return only dead', async () => {
    const queryName = 'status';
    const queryValue = 'Dead';
    const response = await fetchCharacters('?' + queryName + '=' + queryValue);
    const characterResults = response.results;

    characterResults.forEach((element) => {
      expect(element[queryName]).toBe(queryValue);
    });
  });

  it('should work well with query generator', async () => {
    const event = getMockEvent('name', 'Einstein');

    let characterQuery = '';
    const query = setCharacterQueryString(event, characterQuery);

    const response = await fetchCharacters(query);

    const characterResults = response.results;
    expect(characterResults).toHaveLength(1);
    expect(characterResults[0]).toEqual(einsteinQueryResult);
  });

  it.only('should return searched', async () => {
    const event = getMockEvent('name', 'Rick');

    let characterQuery = '';
    const query = setCharacterQueryString(event, characterQuery);

    const response = await fetchCharacters(query);

    const characterResults = response.results;
    expect(characterResults.length).toBeGreaterThan(2);
    characterResults.forEach((character) => {
      expect(character.name).toContain(event.target.value);
    });
  });
  /* it.only('shoud  be true fror every livenesSelect option', async () => {
    const queryName = livenessSelect.name;

    livenessSelect.options.forEach(async (select) => {
      const queryValue = select.value;

      const queryString = '?' + queryName + '=' + queryValue;

      const response = await fetchCharacters(queryString);
      const characterResults = response.results;

      console.log(characterResults);

      characterResults.forEach(async (element) => {
        expect(element[queryName]).toBe(queryValue);
      });
    });
  }); */
});
