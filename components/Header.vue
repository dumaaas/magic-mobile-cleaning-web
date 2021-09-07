<template>
  <header class="header">
    <div class="header-bg">
      <div class="header-top">
        <div class="header-top__social">
          <SocialIcons />
        </div>
        <div class="header-top__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="224"
            height="112"
            viewBox="0 0 224 112"
          >
            <image
              id="logo"
              width="224"
              height="112"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
        </div>
        <div class="header-top__contact">
          <p>
            <fa :icon="['fa', 'phone-alt']" /> (773) 209 3754 / (312) 200 2093
          </p>
        </div>
      </div>
    </div>
    <div class="header-main">
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
    SocialIcons,
  },
  data() {
    return {
      mainLinks: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Services",
          url: "/services",
        },
        {
          name: "Before&After",
          url: "/beforeafter",
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
@import "@/assets/sass/abstracts/_mixins.scss";

.header {
  font-weight: 600;
  background: $secondary;
  ul {
    display: flex;
    gap: 2.5rem;
  }
  li {
    display: inline-block;
  }

  &-bg {
    background: $secondary;
  }
  &-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 80px;

    @include breakpoint($small-only) {
      padding: 20px;
    }

    &__logo {
      vertical-align: middle;
      padding: 13px 0;
    }

    &__social {
      width: 282px;
    }

    &__contact {
      width: 282px;

      text-align: right;
      p {
        color: $primary-darker;
        font-weight: bold;

        @include breakpoint($sm-only) {
          font-size: 1rem;
        }
      }

      svg {
        margin-right: 7px;
        path {
          fill: $primary-darker;
        }
      }
    }
  }
  &-main {
    display: flex;
    justify-content: center;
    background-color: $primary-darker;
    padding: 0 80px;
    &__links {
      display: flex;
      align-items: flex-end;
      padding: 19px 0 21px 0;
      a {
        font-weight: 600;
        font-size: 1.125rem;
        letter-spacing: 0.081rem;
      }

      a:hover {
        border-bottom: 4px solid $primary;
        color: $primary;
        padding-bottom: 16px;
      }
    }
  }
}
</style>