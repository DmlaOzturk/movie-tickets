<template>
  <div id="detail">
    <div class="movie-detail">
      <div class="movie-detail_basic">
        <p class="movie-detail_title">{{ movieDetail[0]?.title }}</p>
        <img
          class="movie-detail_movieImg"
          :src="`https://image.tmdb.org/t/p/w500/${movieDetail[0]?.poster_path}`"
          alt=""
        />
      </div>
      <div class="movie-detail_information">
        <p>{{ movieDetail[0]?.overview }}</p>
        <button>buy ticket</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "detailModal",

  data() {
    return {
      url_id: null,
      movieDatas: {},
      movieDetail: "",
    };
  },
  computed: {
    ...mapGetters(["nowPlayingData"]),
  },

  methods: {
    ...mapActions(["fetchMovieData"]),

    getMovieDetail() {
      this.movieDatas = this.nowPlayingData.results;
      console.log(this.nowPlayingData);
      this.movieDetail = this.movieDatas?.filter(
        (movie) => movie.id == this.url_id
      );
    },
  },
  async mounted() {
    this.url_id = this.$route.params.id;
    await this.fetchMovieData();
    this.getMovieDetail();
  },
};
</script>

<style>
#detail {
  width: 100%;
  height: 94vh;
  background-color: rgb(29, 29, 29);
  display: flex;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.movie-detail {
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movie-detail_basic {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.movie-detail_movieImg {
  height: 450px;
}
.movie-detail_title {
  color: white;
  font-size: 30px;
  padding: 1rem;
}

.movie-detail_information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
  padding: 2rem;
}
</style>
