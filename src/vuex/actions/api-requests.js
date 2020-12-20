import axios from 'axios';
import routes from './routes';

const timeout = 10000;

export default {
  async GET_FILMS({ commit }) {
    commit('SET_LOADING_STATE', 'requested');
    try {
      const url = routes.filmsListUrl();
      const response = await axios.get(url, { timeout });
      commit('SET_LOADING_STATE', 'finished');
      commit('ADD_FILMS', response.data);
    } catch (err) {
      commit('SET_LOADING_STATE', 'failed');
    }
  },

  async GET_FILM_ITEM({ commit }, id) {
    commit('SET_LOADING_STATE', 'requested');
    try {
      const url = routes.filmItemUrl(id);
      const response = await axios.get(url, { timeout });
      commit('SET_LOADING_STATE', 'finished');
      commit('SET_CURRENT_FILM', response.data.data);
    } catch (err) {
      commit('SET_LOADING_STATE', 'failed');
    }
  },
};
