<template>
  <div class="page movie">
    <div class="container page-header">
      <div class="row">
        <header class="col-12 header-movie">
          <router-link to="/"><h1>Movies</h1></router-link>
          <div class="slash"> / </div>
          <h2>{{ movieDetails.Title }}</h2>
        </header>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <img class="poster" :src="movieDetails.Poster" alt="poster">
        </div>

        <div class="col-12 col-sm">
          <div class="content-block">
            <h4>Plot</h4>
            <p>{{ movieDetails.Plot }}</p>
          </div>

          <div class="content-block">
            <h4>Actors</h4>
            <p>{{ movieDetails.Actors }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "movie",

  data() {
    return {
      movieDetails: {
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
      }
    }
  },

  mounted() {
    const options = {
      params: {
        apikey: "477f8be0",
        i: this.$route.params.movieId,
        plot: 'full'
      }
    }

    axios.get("https://omdbapi.com/?", options)
      .then((response) => {
        this.movieDetails = { ...response.data }
      })
  }
}
</script>

<style lang="scss">
.movie {
  .header-movie {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    min-height: 150px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 40px;
    color: white;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
        text-decoration: underline;
      }
    }

    h1, h2 {
      font-size: inherit;
      margin: 0;
      padding: 0;
      color: inherit;
    }

    .slash {
      padding: 0 10px;
    }
  }

  .poster {
    width: 100%;
    height: auto;
    box-shadow: 0px 100px 63px rgba(0, 0, 0, 0.07),
                0px 46px 29px rgba(0, 0, 0, 0.05),
                0px 26px 16px rgba(0, 0, 0, 0.04),
                0px 16px 10px rgba(0, 0, 0, 0.04),
                0px 10px 61px rgba(0, 0, 0, 0.03),
                0px 5px 3px rgba(0, 0, 0, 0.03),
                0px 2px 1px rgba(0, 0, 0, 0.02);
    margin-bottom: 32px;
  }

  .content-block {
    margin-bottom: 16px;

    h4 {
      color: white;
    }

    p {
      color: rgba(255,255,255,.8);
    }
  }
}
</style>
