<template>
  <div>
    <div
      class="services-cover desktop"
      :style="{
        backgroundImage: `url(` + require(`~/static/services-${service}.png`),
      }"
    >
    </div>
    <div
      class="services-cover mobile"
      :style="{
        backgroundImage:
          `url(` + require(`~/static/services-${service}-mobile.png`),
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    service: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.mobile {
  display: none;
  @include breakpoint($xs) {
    display: block;
  }
}

.desktop {
  display: block;
  @include breakpoint($xs) {
    display: none;
  }
}
.services-cover {
  background-size: cover;
  height: 523px;
  &.mobile {
    height: 200px;
  }

  h2 {
    padding: 370px 0 100px 0;
    text-transform: uppercase;
  }
}
</style>