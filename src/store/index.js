import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowPlayingData: [],
    searchMovieData: [],
    searchMovieQuery: "",
    login_mail: "",
    login_password: "",
  },
  getters: {
    nowPlayingData: (state) => state.nowPlayingData,
    searchMovieData: (state) => state.searchMovieData,
    getMovie(state) {
      return `${state.searchMovieQuery}`;
    },
  },
  mutations: {
    SET_MOVIE_DATA(state, data) {
      state.nowPlayingData = data;
    },
    SET_SEARCH_DATA(state, searchData) {
      state.searchMovieData = searchData;
    },
    SET_SEARCH_MOVIE(state, movieName) {
      state.searchMovieQuery = movieName;
    },
  },
  actions: {
    updateMovieName({ commit }, movieName) {
      commit("SET_SEARCH_MOVIE", movieName);
    },

    async fetchMovieData({ commit }) {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=dd3b96ec11fae058854554b38e6c4b56&language=en-TR&page=1"
      );
      const data = await response.json();
      commit("SET_MOVIE_DATA", data);
    },

    async fetchSearchMovie({ commit, state }) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=dd3b96ec11fae058854554b38e6c4b56&language=en-US&query=${state.searchMovieQuery}&page=1&include_adult=false`
      );
      const searchData = await response.json();
      commit("SET_SEARCH_DATA", searchData);
    },
  },
  modules: {},
});
