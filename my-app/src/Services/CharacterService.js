export const fetchCharacters = async (query = '') => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${query}`);
  const data = await res.json();
  return data;
};
