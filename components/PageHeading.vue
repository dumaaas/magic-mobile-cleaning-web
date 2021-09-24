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
@import "@/assets/sass/abstracts/_mixins.scss";

.heading {
  padding: 94px 0 24px 0;
  @include breakpoint($xs) {
    padding: 17px 0;
  }
  h3 {
    color: $primary-darker;
    letter-spacing: 2.4px;
    font-weight: 600;
    font-size: 1.625rem;
    @include breakpoint($xs) {
      font-size: 1rem;
    }
  }
}
</style>