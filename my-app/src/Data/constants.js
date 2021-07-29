export const emptyUserResponse = [
  {
    name: 'No Character Found',
    status: 'dead',
    location: { name: 'unknown' },
    gender: 'female',
    type: 'no type',
    image:
      'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png',
  },
];
export const livenessSelect = {
  name: 'status',
  labelText: ' Status :',
  options: [
    { value: '', text: 'All' },
    { value: 'alive', text: 'Living' },
    { value: 'dead', text: 'Dead' },
  ],
};
export const genderSelect = {
  name: 'gender',
  labelText: ' Choose gender :',
  options: [
    { value: '', text: 'all' },
    { value: 'male', text: 'male' },
    { value: 'female', text: 'female' },
    { value: 'unknown', text: 'unknown' },
  ],
};

export const loadingCharacters = [
  {
    name: 'looking',
    status: 'dead',
    location: { name: '' },
    gender: '',
    type: '',
    image: 'https://media.giphy.com/media/PkoBC2GlkLJ5yFIWtf/source.gif',
  },
  {
    name: 'for',
    status: 'dead',
    location: { name: '' },
    gender: '',
    type: '',
    image: 'https://media.giphy.com/media/PkoBC2GlkLJ5yFIWtf/source.gif',
  },
  {
    name: 'characters',
    status: 'dead',
    location: { name: '' },
    gender: '',
    type: '',
    image: 'https://media.giphy.com/media/PkoBC2GlkLJ5yFIWtf/source.gif',
  },
];
export const einsteinQueryResult = {
  id: 11,
  name: 'Albert Einstein',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/12'],
  url: 'https://rickandmortyapi.com/api/character/11',
  created: '2017-11-04T20:20:20.965Z',
};
