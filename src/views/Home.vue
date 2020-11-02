<script>
import TheFooter from '@/components/common/TheFooter'
import MovieSearchForm from '@/components/core/MovieSearchForm'
import DOMPurify from 'dompurify'

export default {
  name: 'Home',
  components: {
    TheFooter,
    MovieSearchForm
  },
  data() {
    return {}
  },
  methods: {
    handleSearch(search) {
      const sanitizedSearch = DOMPurify.sanitize(search.trim())
      if (sanitizedSearch) {
        this.$router.push({
          name: 'Search',
          query: { title: encodeURI(sanitizedSearch) }
        })
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="font-medium text-6xl text-orange mt-40 mb-8">
      Movie<span class="text-blue">Finder</span>
    </p>
    <movie-search-form @search="handleSearch" />
    <the-footer />
  </div>
</template>
