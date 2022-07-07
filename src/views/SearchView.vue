<template>
  <div>
    <input :type="movieName" name="" id="" />
    <button>search</button>
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
    ...mapGetters(["searchData"]),
  },
  methods: {
    ...mapActions(["fetchSearchMovie"]),

    searchMovie() {
      this.searchMovieQuery = "dog";
      console.log(this.fetchSearchMovie);
    },
  },

  mounted() {
    this.searchMovie();
  },
};
</script>
