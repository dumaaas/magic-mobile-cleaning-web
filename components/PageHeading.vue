<template>
  <div class="heading">
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
.heading {
  padding: 60px 0 10px 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  h3 {
    color: $primary-darker;
    letter-spacing: 2.4px;
  }
}
</style>