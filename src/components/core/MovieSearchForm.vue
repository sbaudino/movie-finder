<script>
export default {
  name: 'MovieSearchForm',
  data() {
    return {
      search: ''
    }
  }
}
</script>

<template>
  <form
    class="max-w-block w-full"
    @submit.prevent.stop="$emit('search', search)"
  >
    <el-input
      v-model="search"
      clearable
      placeholder="Please input"
      class="input-with-select"
    >
      <el-button
        slot="append"
        class="test"
        icon="el-icon-search"
        native-type="submit"
      ></el-button>
    </el-input>
  </form>
</template>

<style lang="scss">
.el-input {
  input {
    border-radius: 25px 0 0 25px;
    height: 48px;
  }
  .el-input-group__append {
    background: #fff;
    border-radius: 0 25px 25px 0;
    button {
      &:focus {
        outline: none;
      }
      &:disabled {
      }
      .el-icon-search {
        @apply text-orange;
      }
    }
  }
}
</style>
