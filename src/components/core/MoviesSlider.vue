<script>
import MovieCard from '@/components/core/MovieCard'
import MoviePlotModal from '@/components/core/MoviePlotModal'

export default {
  name: 'MoviesSlider',
  components: {
    MovieCard,
    MoviePlotModal
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      showPlotModal: false,
      movieClicked: {}
    }
  },
  methods: {
    handleMovieClicked(movie) {
      this.movieClicked = movie
      this.showPlotModal = true
    }
  }
}
</script>

<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="movie in movies" :key="movie.imdbId">
        <movie-card :movie="movie" @movieClicked="handleMovieClicked" />
      </swiper-slide>
    </swiper>
    <movie-plot-modal
      v-if="showPlotModal"
      :title="movieClicked.title"
      :plot="movieClicked.plot"
      @close="showPlotModal = false"
    />
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
  width: 300px;
}
</style>
