<script>
export default {
  name: 'NotFound'
}
</script>

<template>
  <fw-wrapper>
    <div class="flex flex-col items-center justify-center text-darkGrey h-full">
      <p class="font-medium text-5xl mb-2">Sorry!</p>
      <p class="text-2xl mb-2">We couldn't find that page</p>
      <div class="flex items-center">
        <p class="mr-1">Try searching or go to</p>
        <router-link class="text-orange" to="/">home page.</router-link>
      </div>
    </div>
  </fw-wrapper>
</template>
