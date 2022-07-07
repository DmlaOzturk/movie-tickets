<template>
  <div id="cards">
    <div id="card" v-for="(data, index) in nowPlayingData.results" :key="index">
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["nowPlayingData"]),
  },
  methods: {
    ...mapActions(["fetchMovieData"]),
  },
  mounted() {
    this.fetchMovieData();
  },
};
</script>

<style scoped>
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
