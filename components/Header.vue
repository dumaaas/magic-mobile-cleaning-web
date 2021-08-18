<template>
  <header class="header">
    <div class="header-bg">
      <div class="header-top">
        <div class="header-top__social">
          <a href=""> Facebook </a>
          <a href=""> Twitter </a>
          <a href=""> Instagram </a>
        </div>
        <div class="header-top__contact">
          <p>Phone: 067/234-234</p>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main__logo">
        <NuxtLogo />
      </div>
      <div class="header-main__links">
        <ul>
          <li><nuxt-link to="/aboutus">About us</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li>
            <nuxt-link exact to="/">Before&After</nuxt-link>
          </li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";

export default {
  components: {
    NuxtLogo,
  },
};
</script>

<style lang="scss" scoped>
.header {
  ul {
    list-style: none;
    li {
      display: inline-block;
      color: #6774ff;
      font-weight: 600;
      font-size: 18px;
      margin-left: 20px;
    }
  }
  &-bg {
    background: #6effff;
  }
  &-top {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 5px 0;
    gap: 30px;
  }
  &-main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    &__logo {
      padding: 20px 0;
    }

    &__links {
      display: flex;
      align-items: flex-end;
      padding: 20px 0;
    }
  }
}
</style>