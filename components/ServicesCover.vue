<template>
  <div
    class="services-cover"
    :style="{
      backgroundImage: `url(` + require(`~/static/services-${service}.png`)}"
  >
    <div class="container">
      <h2>{{ service }} detailing</h2>
    </div>
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
.services-cover {
  h2 {
    padding: 370px 0 100px 0;
    text-transform: uppercase;
  }
}
</style>