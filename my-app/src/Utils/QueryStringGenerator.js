/*

gets form input/select elements change/input events

=> (events name , events value)

=> returns  updated query string

*/

export const setCharacterQueryString = function (event, characterQuery) {
  let queryQuestion = '?';

  const queryName = event.target.name;
  const queryValue = event.target.value;

  let currentQuery = characterQuery;

  if (currentQuery[0] !== '?') {
    return queryQuestion + queryName + '=' + queryValue;
  } else {
    const queryItems = [];
    currentQuery = currentQuery.split('?')[1];

    if (!currentQuery.includes(queryName)) {
      currentQuery += '&' + (queryName + '=' + queryValue);
    }
    const queriesArray = currentQuery.split('&');

    queriesArray.forEach((x) => {
      const list = x.split('=');
      const name = list[0];
      const value = list[1];

      if (name === queryName) {
        queryItems.push(queryName + '=' + queryValue);
      } else {
        queryItems.push(name + '=' + value);
      }
    });

    const queryString = queryQuestion + queryItems.join('&');
    return queryString;
  }
};
