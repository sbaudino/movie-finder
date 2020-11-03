<script>
import MovieSearchForm from '@/components/core/MovieSearchForm'

export default {
  name: 'MovieSearchSubheader',
  components: {
    MovieSearchForm
  }
}
</script>

<template>
  <div
    id="nav"
    class="shadow-sm fixed bg-lightGrey h-nav w-full z-10 border-t border-borderGrey"
  >
    <fw-wrapper>
      <div class="flex items-center justify-center h-full">
        <p class="text-orange mr-4">
          Movie<span class="text-blue">Finder</span>
        </p>
        <movie-search-form />
      </div>
    </fw-wrapper>
  </div>
</template>
