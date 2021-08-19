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
  border-bottom: 2px solid #19a3a6;
  color: #19a3a6;
  padding-bottom: 20px;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

</style>

