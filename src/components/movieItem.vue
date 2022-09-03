<template>
  <router-link class="movie-route" :to="{ path: `/${imdbId}` }">
    <div class="movie-item">
      <div class="poster-wrapper">
        <img :src="poster" alt="poster" />
      </div>

      <div class="info">
        <h2 class="title" v-if="title">{{ title }}</h2>
        <span class="year" v-if="year">{{ year }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'movieItem',

  props: {
    title: {
      type: String,
      default: undefined
    },

    poster: {
      type: String,
      default: undefined
    },

    year: {
      type: String,
      default: undefined
    },

    imdbId: {
      type: String,
      default: undefined
    }
  },
};
</script>

<style lang="scss">
.movie-route {
  text-decoration: none;
}

.movie-item {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover .poster-wrapper {
    scale: 1.04;
    z-index: 1;
    box-shadow: 0px 100px 63px rgba(0, 0, 0, 0.07),
                0px 46px 29px rgba(0, 0, 0, 0.05),
                0px 26px 16px rgba(0, 0, 0, 0.04),
                0px 16px 10px rgba(0, 0, 0, 0.04),
                0px 10px 61px rgba(0, 0, 0, 0.03),
                0px 5px 3px rgba(0, 0, 0, 0.03),
                0px 2px 1px rgba(0, 0, 0, 0.02);
  }

  .poster-wrapper {
    overflow: hidden;
    width: 100%;
    padding-top: calc(100% / 0.675);
    position: relative;
    transition: .2s ease;

    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 16px;
    margin-bottom: 5px;
    color: white;
  }

  .year {
    display: block;
    font-size: 14px;
    color: rgba(255,255,255, .6);
  }
}
</style>
