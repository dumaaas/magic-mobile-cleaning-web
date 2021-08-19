<template>
  <header class="header">
    <div class="header-bg">
      <div class="header-top container">
        <div class="header-top__social">
          <SocialIcons/>
        </div>
        <div class="header-top__contact">
          <p>
            <fa :icon="['fa', 'phone-alt']" /> (773) 209 3754 / (312) 200 2093
          </p>
        </div>
      </div>
    </div>
    <div class="header-main container">
      <div class="header-main__logo">
        <NuxtLogo />
      </div>
      <div class="header-main__links">
        <ul>
          <li v-for="link in mainLinks" :key="link.name">
            <nuxt-link :to="`${link.url}`">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";
import SocialIcons from "@/components/SocialIcons.vue";

export default {
  components: {
    NuxtLogo,
    SocialIcons
  },
  data() {
    return {
      mainLinks: [
        {
          name: "About us",
          url: "/aboutus",
        },
        {
          name: "Services",
          url: "/services",
        },
        {
          name: "Before&After",
          url: "/",
        },
        {
          name: "Contact",
          url: "/contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";

.header {
  font-weight: 600;
  background: $secondary;
  li {
    display: inline-block;
    margin-left: 30px;
  }

  &-bg {
    background: $primary;
  }
  &-top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 0;
    gap: 30px;

    &__contact {
      svg {
        margin-right: 7px;
      }
    }
  }
  &-main {
    display: flex;
    justify-content: space-between;

    &__logo {
      padding: 20px 0;
    }

    &__links {
      display: flex;
      align-items: flex-end;
      padding: 20px 0;

      a:hover {
        border-bottom: 2px solid #19a3a6;
        color: #19a3a6;
        padding-bottom: 20px;
      }
    }
  }
}
</style>