<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style>
a.nuxt-link-exact-active {
  border-bottom: 4px solid #19a3a6;
  color: #19a3a6;
  padding-bottom: 15px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}


</style>

