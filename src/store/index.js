import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowPlayingData: [],
    searchData: [],
    searchMovieQuery: "",
  },
  getters: {
    nowPlayingData: (state) => state.nowPlayingData,
    searchData(state) {
      return `${state.searchMovieQuery}`;
    },
  },
  mutations: {
    SET_MOVIE_DATA(state, data) {
      state.nowPlayingData = data;
    },
    SET_SEARCH_MOVIE(state, data) {
      state.searchMovieQuery = data;
    },
  },
  actions: {
    async fetchMovieData({ commit }) {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=dd3b96ec11fae058854554b38e6c4b56&language=en-TR&page=1"
      );
      const data = await response.json();
      commit("SET_MOVIE_DATA", data);
    },
    async fetchSearchMovie({ commit }, searchMovieQuery) {
      const response = await fetch(
        `"https://api.themoviedb.org/3/search/movie?api_key=dd3b96ec11fae058854554b38e6c4b56&language=en-TR&query=${searchMovieQuery}page=1&include_adult=false"`
      );
      const data = await response.json();
      commit("SET_SEARCH_MOVIE", data);
    },
  },
  modules: {},
});
