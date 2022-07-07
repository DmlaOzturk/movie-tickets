<template>
  <div class="movies">
    <div class="movieContainer">
      <movieCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import movieCard from "@/components/movieCard.vue";

export default {
  name: "HomePageView",
  components: {
    movieCard,
  },
};
</script>

<style>
.movies {
  background-color: rgb(29, 29, 29);
}
</style>
