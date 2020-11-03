<script>
import TheNavbar from '@/components/common/TheNavbar'

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
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
$nav-height: 60px;

main {
  height: calc(100vh - #{$nav-height});
}
</style>
