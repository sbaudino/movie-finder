<script>
import Movie from '@/models/Movie'

export default {
  name: 'MovieCard',
  props: {
    movie: Movie,
    default: () => new Movie()
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.movie.poster})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '420px'
      }
    }
  }
}
</script>

<template>
  <div
    class="shadow-md hover:shadow-lg border rounded border border-borderGrey h-movieCard max-h-movieCard cursor-pointer"
    @click="$emit('movieClicked', movie)"
  >
    <div v-if="movie.hasPoster()" :style="imageStyle" />
    <div
      v-else
      class="flex items-center justify-center bg-lightGrey h-emptyImage"
    >
      <img src="@/assets/img/movie-icon.svg" alt="movie icon" />
    </div>
    <div class="px-4 pt-5 pb-4">
      <p class="font-medium text-xl text-black mb-3 truncate">
        {{ movie.title }}
      </p>
      <p class="text-sm text-darkGrey mb-2 truncate">
        Director: {{ movie.director }}
      </p>
      <p class="text-sm text-darkGrey">Year: {{ movie.year }}</p>
    </div>
  </div>
</template>
