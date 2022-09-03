<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-link to="/">
            <h1>Movies</h1>
          </router-link>

          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router"

export default {
  name: "movie",

  data() {
    return {
      filmeDetalhes: {
        Title: undefined,
        Year: undefined,
        Rated: undefined,
        Released: undefined,
        Runtime: undefined,
        Genre: undefined,
        Director: undefined,
        Writer: undefined,
        Actors: undefined,
        Plot: undefined,
        Language: undefined,
        Country: undefined,
        Awards: undefined,
        Poster: undefined,
        Ratings: undefined,
        Metascore: undefined,
        imdbRating: undefined,
        imdbVotes: undefined,
        imdbID: undefined,
        Type: undefined,
        DVD: undefined,
        BoxOffice: undefined,
        Production: undefined,
        Website: undefined,
        Response: undefined
      },
    };
  },

  mounted() {
    const options = {
      params: {
        apikey: "477f8be0",
        i: this.$route.params.movieId,
      },
    };

    axios.get("https://omdbapi.com/?", options).then((response) => {
      this.filmeDetalhes = { ...response.data };
    });
  },
};
</script>

<style>
</style>
