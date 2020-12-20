const url = 'https://floating-sierra-20135.herokuapp.com/api';

export default {
  filmsListUrl: () => [url, 'movies'].join('/'),
  filmItemUrl: (id) => [url, 'movie', id].join('/'),
};
