<template>
  <div class="page">
    <div class="container page-header">
      <div class="row">
        <header class="col-12 header">
          <h1>Movies</h1>

          <form class="searchbox">
            <input type="text" placeholder="Search a movie title" v-model="search">
            <button class="searchbtn" @click.prevent="searchPrompt()">›</button>
          </form>
        </header>
      </div>
    </div>

    <div class="container">
      <div class="row g-4">
        <div
          v-for="(item, index) in movies"
          :key="`movie-${index}`"
          class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        >
          <movie-item
            :title="item.Title"
            :poster="item.Poster"
            :year="item.Year"
            :imdb-id="item.imdbID"
          />
        </div>
      </div>
    </div>

    <div v-if="totalResults > movies.length" class="loader">
      <button @click="carregarMais()">Load more</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import movieItem from "~/components/movieItem.vue"

export default {
  name: "listFilmes",

  components: { movieItem },

  data () {
    return {
      search: undefined,
      movies: [],
      page: 1,
      totalResults: 0
    }
  },

  async created () {
    const response = await this.getMovies()
    this.movies = response.Search
    this.totalResults = response.totalResults
  },

  methods: {
    async getMovies (params = {}) {
      let options = {
        params: {
          apikey: "477f8be0",
          s: 'Star Wars'
        }
      }

      Object.assign(options.params, params)

      const response = await axios.get("https://omdbapi.com/?", options)
      console.log(response)

      return response.data
    },

    carregarMais () {
      this.page += 1

      let params = {
        page: this.page
      }

      if (this.search) {
        params.s = this.search
      }

      this.getMovies(params)
        .then((response) => {
          console.log(response)

          this.movies = [...this.movies, ...response.Search]
          this.totalResults = response.totalResults
        })
    },

    searchPrompt () {
      if (!this.search) { return }
      this.page = 1

      this.getMovies({ s: this.search })
        .then((response) => {
          if (!response.Search) { return }
          this.movies = response.Search
          this.totalResults = response.totalResults
        })
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 150px;

  h1 {
    margin: 0;
    padding: 0;
    color: white;
  }
}

.loader {
  height: 100px;
  width: 100%;
  background: linear-gradient(transparent, rgba(0,0,0,.3));
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: none;
    flex: 1;
    height: 100%;
    color: white;
  }
}

.searchbox {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;

  &:hover, &:focus-within {
    input {
      width: 250px;
      visibility: visible;
      padding-right: 46px;
    }

    .searchbtn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  input {
    width: 1px;
    padding: 0 16px;
    margin: 0;
    border: none;
    border-radius: 8px;
    z-index: 0;
    right: -40px;
    position: relative;
    transition: .2s ease;
    visibility: hidden;
    z-index: 0;

    &:not(:placeholder-shown) {
      width: 250px;
      visibility: visible;
      padding-right: 46px;
    }

    &:not(:placeholder-shown) ~ .searchbtn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .searchbtn {
    border: none;
    padding: 0;
    height: 40px;
    width: 40px;
    background: rgba(0,0,0,1);
    color: white;
    border-radius: 8px;
    margin: 0;
    z-index: 1;
  }
}
</style>
