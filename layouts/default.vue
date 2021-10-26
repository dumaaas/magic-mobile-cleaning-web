<template>
  <div>
    <LoadSpinner v-if="showHideSpinner" />
    <Header />
    <div class="all">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LoadSpinner from "@/components/LoadSpinner.vue";
export default {
  components: {
    Footer,
    Header,
    LoadSpinner
  },
  data() {
    return {
      showHideSpinner: true,
    };
  },
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    this.showHideSpinner = false;
  },
};
</script>

<style>
.all {
  padding-top: 241px;
}
@media only screen and (max-width: 767px) {
  .all {
    padding-top: 72px;
  }
}
a.nuxt-link-exact-active {
  border-bottom: 4px solid #19a3a6;
  color: #19a3a6;
  padding-bottom: 16px;
}

.container {
  max-width: 1402px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>

