<script>
import MovieSearchForm from '@/components/core/MovieSearchForm'

export default {
  name: 'TheNavbar',
  components: {
    MovieSearchForm
  }
}
</script>

<template>
  <nav id="nav" class="shadow-sm sticky bg-lightGrey h-nav top-0 w-full z-10">
    <fw-wrapper>
      <div class="flex justify-between items-center py-3 h-full">
        <span v-if="$mq === 'desktop'" class="font-medium text-darkGrey"
          >Movie finder app</span
        >
        <movie-search-form
          v-if="$route.meta.searchInHeader"
          class="mr-4 lg:mr-0"
        />
        <router-link to="/" class="text-orange"
          >Movie<span class="text-blue">Finder</span></router-link
        >
      </div>
    </fw-wrapper>
  </nav>
</template>
