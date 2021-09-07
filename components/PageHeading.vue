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
  padding: 94px 0 24px 0;
    box-shadow: 0px 15px 10px -15px #111;    
  h3 {
    color: $primary-darker;
    letter-spacing: 2.4px;
    font-weight: 600;
    font-size: 1.625rem;
  }
}
</style>