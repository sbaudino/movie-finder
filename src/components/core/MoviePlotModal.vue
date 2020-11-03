<script>
export default {
  name: 'MoviePlotModal',
  props: {
    title: {
      type: String,
      default: ''
    },
    plot: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <el-dialog
    :title="title"
    :width="$mq === 'desktop' ? '50%' : '100%'"
    :visible="true"
    @close="$emit('close')"
  >
    <p class="text-darkGrey">{{ plot }}</p>
  </el-dialog>
</template>
