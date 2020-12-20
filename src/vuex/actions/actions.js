export default {
  CLEAR_DATA({ commit }) {
    commit('DELETE_DATA');
  },
  ADD_CURRENT_FILM({ commit }, film) {
    commit('SET_CURRENT_FILM', film);
  },
  ADD_SORTING({ commit }, type) {
    commit('ADD_SORTING_TYPE', type);
  },
};
