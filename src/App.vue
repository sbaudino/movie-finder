<script>
import TheNavbar from '@/components/common/TheNavbar'
import TheFooter from '@/components/common/TheFooter'

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<template>
  <div id="app">
    <the-navbar />
    <main class="py-4">
      <fw-wrapper>
        <router-view />
      </fw-wrapper>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$nav-height: 60px;

main {
  height: calc(100vh - #{$nav-height});
}
</style>
