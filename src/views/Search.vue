<script>
import api from '@/api'
import Movie from '@/models/Movie'
import DOMPurify from 'dompurify'
import MoviesSlider from '@/components/core/MoviesSlider'
import MovieSearchSubheader from '@/components/core/MovieSearchSubheader'

export default {
  name: 'Search',
  components: {
    MoviesSlider,
    MovieSearchSubheader
  },
  data() {
    return {
      loading: false,
      title: null,
      page: 1,
      totalMovies: null,
      moviesByPage: {}
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.title = DOMPurify.sanitize(decodeURI(this.$route.query.title))
        this.moviesByPage = {}
        this.page = 1
        this.searchMovies()
      }
    }
  },
  methods: {
    async searchMovies() {
      // This is for not doing the same request if the page was already requested.
      if (this.moviesByPage[this.page]) {
        return
      }

      this.loading = true
      try {
        const response = await api
          .search()
          .getMoviesByTitle(this.title, this.page)
        // Handle movie not found
        if (response.Response === 'False') {
          this.totalMovies = 0
          this.moviesByPage = {}
          return
        }

        this.totalMovies = response.totalResults

        const promises = response.Search.map(movie =>
          api.search().getMovieById(movie.imdbID)
        )
        const movies = await Promise.all(promises)
        this.moviesByPage[this.page] = movies.map(movie => new Movie(movie))
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    handlePageChange(page) {
      this.page = page
      this.searchMovies()
    }
  }
}
</script>

<template>
  <div>
    <movie-search-subheader />
    <fw-wrapper>
      <div v-loading="loading" class="w-full h-full pt-60">
        <template v-if="totalMovies">
          <p class="font-medium text-2xl text-black my-4">
            {{ totalMovies }} movies for: {{ title }}
          </p>
          <div v-if="moviesByPage[page]" data-test="slider-wrapper">
            <movies-slider
              :movies="moviesByPage[page]"
              :total-movies="parseInt(totalMovies)"
            />
            <div class="flex items-center justify-center mt-4">
              <el-pagination
                :page-size="10"
                layout="prev, pager, next"
                :total="parseInt(totalMovies)"
                :current-page="page"
                hide-on-single-page
                @current-change="handlePageChange"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <p
            class="font-medium text-center text-darkGrey mt-12"
            data-test="no-movies"
          >
            We couldn't find movies with that title. Please search other movie.
          </p>
        </template>
      </div>
    </fw-wrapper>
  </div>
</template>

<style lang="scss">
.el-loading-spinner {
  left: 50%;
}
</style>
