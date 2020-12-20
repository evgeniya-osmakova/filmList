export default {
  DELETE_DATA: (state) => {
    state.currentFilm = {};
    state.error = '';
    state.loadingState = 'notRequested';
    state.films = [];
    state.currentSort = '';
  },
  SET_LOADING_STATE: (state, value) => {
    state.loadingState = value;
  },
  SET_CURRENT_FILM: (state, value) => {
    state.currentFilm = value;
  },
  ADD_FILMS: (state, value) => {
    state.films = value.data;
  },
  ADD_SORTING_TYPE: (state, value) => {
    if (state.currentSort === value) {
      state.currentSort = '';
    } else {
      state.currentSort = value;
    }
  },
};
