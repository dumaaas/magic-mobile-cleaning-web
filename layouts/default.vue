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
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: none;
}

.container {
  padding: 20px 0;
  width: 1200px;
  margin: 0 auto;
  background-color: #6effff;
}

a.nuxt-link-exact-active {
  border-bottom: 2px solid #6737ff;
  color: #6737ff !important;
  padding-bottom: 20px;
}

.main {
  background-color: red;
  background-image: url("~@/assets/cover.jpg") no-repeat center center scroll;
  height: 100vh;
}
</style>

