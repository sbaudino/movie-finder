<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import api from '@/api'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  async mounted() {
    const res = await api.searchByTitle({ s: 'superman', p: '2' })
    console.log(res)
  }
}
</script>
