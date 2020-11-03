<script>
import TheFooter from '@/components/common/TheFooter'
import MovieSearchForm from '@/components/core/MovieSearchForm'

export default {
  name: 'Home',
  components: {
    TheFooter,
    MovieSearchForm
  },
  data() {
    return {}
  }
}
</script>

<template>
  <fw-wrapper>
    <div class="flex flex-col items-center">
      <p class="font-medium text-6xl text-orange mt-40 mb-8">
        Movie<span class="text-blue">Finder</span>
      </p>
      <movie-search-form />
      <the-footer />
    </div>
  </fw-wrapper>
</template>
