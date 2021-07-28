import { setCharacterQueryString } from '../Utils/QueryStringGenerator';
// Mimics only needed DOMEvent
export const getMockEvent = (name, query) => {
  return { target: { name, value: query } };
};

describe('setCharacterQueryString utility function Test', () => {
  let characterQuery = '';
  let event;
  test('if user search', async () => {
    event = getMockEvent('name', 'Ricky');

    const queryInfo = setCharacterQueryString(event, characterQuery);
    expect(queryInfo).toBe('?name=Ricky');
  });
  test('if user selects gender as female', async () => {
    event = getMockEvent('gender', 'female');
    const queryInfo = setCharacterQueryString(event, characterQuery);

    expect(queryInfo).toBe('?gender=female');
  });
  test('if user selects gender as male', async () => {
    event = { target: { name: 'gender', value: 'male' } };
    const queryInfo = setCharacterQueryString(event, characterQuery);

    expect(queryInfo).toBe('?gender=male');
  });
  test('if user selects gender as male and status as alive', async () => {
    // user first selects gender
    event = getMockEvent('gender', 'male');
    characterQuery = setCharacterQueryString(event, characterQuery);
    // user then selects status
    event = getMockEvent('status', 'alive');
    characterQuery = setCharacterQueryString(event, characterQuery);

    expect(characterQuery).toBe('?gender=male&status=alive');
  });
  test('if use changes the query when there is already multiquery', () => {
    event = { target: { name: 'gender', value: 'female' } };
    characterQuery = setCharacterQueryString(event, characterQuery);

    expect(characterQuery).toBe('?gender=female&status=alive');
  });
  test('if user deletes all queries', () => {
    event = getMockEvent('gender', '');
    characterQuery = setCharacterQueryString(event, characterQuery);
    event = getMockEvent('status', '');
    characterQuery = setCharacterQueryString(event, characterQuery);

    expect(characterQuery).toBe('?gender=&status=');
  });
  test('if user tries to query again after deleting queries', () => {
    event = getMockEvent('gender', 'female');
    characterQuery = setCharacterQueryString(event, characterQuery);
    event = getMockEvent('status', 'dead');
    characterQuery = setCharacterQueryString(event, characterQuery);

    expect(characterQuery).toBe('?gender=female&status=dead');
  });
  test('if user search when there are already query', async () => {
    event = getMockEvent('name', 'Morty');

    characterQuery = setCharacterQueryString(event, characterQuery);
    expect(characterQuery).toBe('?gender=female&status=dead&name=Morty');
  });
});
