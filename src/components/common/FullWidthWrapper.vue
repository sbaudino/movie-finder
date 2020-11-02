<template functional>
  <div class="fw-wrapper w-full h-full">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 100%;
  padding: 0 20px;

  @apply max-w-full mx-auto my-0 w-full h-full;

  @media (min-width: 1024px) {
    max-width: 1280px;
    padding: 0 80px;
  }
}
</style>
