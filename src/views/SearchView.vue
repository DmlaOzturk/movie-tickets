<template>
  <div id="searchPage">
    <nav class="searchNav">
      <input class="searchNav_input" v-model="movieName" type="text" name="" />
      <button
        class="searchNav_button"
        @click="searchMovie(), fetchSearchMovie()"
      >
        search
      </button>
    </nav>
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
        <p class="movie-title">{{ data?.title }}</p>
        <p class="movie-information">{{ data?.overview }}</p>
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
    },
    ...mapActions(["updateMovieName", "fetchSearchMovie"]),
  },
  mounted() {
    this.fetchSearchMovie();
  },
};
</script>
<style>
#searchPage {
  height: 100vh;
  width: 100%;
}
.searchNav {
  background-color: rgb(39, 38, 38);
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchNav_input {
  padding: 0.5rem;
  margin: 0.5rem;
  width: 15rem;
}
.searchNav_button {
  padding: 0.5rem;
}

#cards {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 2fr)
  );
  justify-items: center;
  grid-gap: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
#card {
  margin: 1rem;
  background-color: rgb(245, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.movieImg {
  height: 440px;
}
.movie-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-transform: uppercase;
  text-align: center;
}

.movie-information {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 1rem;
  font-size: 15px;
}
</style>
