<template>
  <div
    class="error"
    :style="{
      backgroundImage: `url('cover.png')`,
    }"
  >
    <div class="error-block">
      <div v-if="error.statusCode === 404">
        <h1>404</h1>
        <p>We couldn't find the page you're looking for.</p>
        <p>Visit the <nuxt-link to="/">Homepage</nuxt-link>  or <nuxt-link to="/contact">Contact us</nuxt-link></p>
      </div>
      <div v-else>
        <h1>An error occurred</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";
.error {
  height: 59.4vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  &-block {
    max-width: 1402px;
    padding: 80px 20px;
    margin: 0 auto;

    h1 {
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
      text-transform: uppercase;
      padding-bottom: 20px;

    }
    p {
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
      font-size: 1.5rem;
      text-transform: uppercase;
      padding-bottom: 20px;
    }
    a {
        text-decoration: underline;
    }
  }
}
</style>