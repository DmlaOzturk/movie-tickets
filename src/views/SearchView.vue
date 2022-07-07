<template>
  <div>
    <nav>
      <input v-model="movieName" type="text" name="" id="" />
      <button @click="searchMovie(), fetchSearchMovie()">search</button>
      <p>{{ getMovie }}</p>
    </nav>
    <movieCard
    <div id="cards">
      <div
        id="card"
        v-for="(data, index) in searchMovieData.results"
        :key="index"
      >
        <router-link :to="`/movie/${data.id}`">
          <img
            class="movieImg"
            :src="`https://image.tmdb.org/t/p/w500/${data.poster_path}`"
            alt=""
          />
        </router-link>
        <p class="movie-title">{{ data.title }}</p>
        <p class="movie-information">{{ data.overview }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      movieName: "",
    };
  },

  computed: {
    ...mapState(["searchMovieQuery"]),
    ...mapGetters(["getMovie", "searchMovieData"]),
  },
  methods: {
    searchMovie() {
      this.updateMovieName(this.movieName);
      console.log(this.getMovie);
      console.log(this.searchMovieData);
    },
    ...mapActions(["updateMovieName", "fetchSearchMovie"]),
  },
  mounted() {
    this.fetchSearchMovie();
  },
};
</script>
