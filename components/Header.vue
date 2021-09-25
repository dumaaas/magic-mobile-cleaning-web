<template>
  <header class="header">
    <div class="header-bg">
      <div class="header-top desktop">
        <div class="header-top__social">
          <SocialIcons />
        </div>
        <div class="header-top__logo">
          <Logo />
        </div>
        <div class="header-top__contact">
          <p>
            <fa :icon="['fa', 'phone-alt']" /> (773) 209 3754 / (312) 200 2093
          </p>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main__links desktop">
        <ul>
          <li v-for="link in mainLinks" :key="link.name">
            <nuxt-link :to="`${link.url}`">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="header-main__mobile mobile">
        <div class="header-main__mobile-hamburger" @click="opened = true">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="header-main__mobile-logo">
          <Logo />
        </div>
        <div></div>
      </div>
      <div class="header-menu mobile" :class="{ opened: opened }" v-scroll-lock="opened">
        <div class="hamburger-close" @click="opened = false">
          <div></div>
          <div></div>
        </div>
        <div class="header-menu__links">
          <ul>
            <li
              @click="opened = false"
              v-for="link in mainLinks"
              :key="link.name"
            >
              <nuxt-link :to="`${link.url}`">{{ link.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";
import SocialIcons from "@/components/SocialIcons.vue";
import Logo from "@/components/Logo.vue";

export default {
  components: {
    NuxtLogo,
    SocialIcons,
    Logo,
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
      opened: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.mobile {
  display: none !important;
  @include breakpoint($xs) {
    display: flex !important;
  }
}
.header {
  font-weight: 600;
  background: $secondary;
  position: relative;
  z-index: 10;
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
    padding: 20px 80px 11px 80px;

    @include breakpoint($xs) {
      display: none;
    }

    @include breakpoint($small-only) {
      padding: 20px;
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
    position: relative;
    display: flex;
    justify-content: center;
    background-color: $primary-darker;
    padding: 0 80px;
    @include breakpoint($xs) {
      padding: 0 20px;
    }
    &__links {
      display: flex;
      align-items: flex-end;
      padding: 19px 0 21px 0;
      @include breakpoint($xs) {
        display: none;
      }
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

    &__mobile {
      padding: 14px 0;
      display: none;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      @include breakpoint($xs) {
        display: flex;
      }
      &-hamburger {
        cursor: pointer;
        &:hover {
          div {
            transition: all 0.3s ease-in;

            background: $primary;
          }
        }
        div {
          transition: all 0.3s ease-out;

          width: 34px;
          height: 5px;
          margin-top: 5px;
          border-radius: 6px;
          background: $secondary;
          &:first-child {
            margin-top: 0px;
          }
        }
      }
    }
  }
  &-menu {
    position: fixed;
    overflow: hidden;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transform-origin: left top;
    transform: translateY(calc(-100vh));
    width: 100vw;
    background: rgba(11, 64, 81, 0.95);
    backdrop-filter: blur(5px);
    transition: all 0.5s ease-out;
    .hamburger-close {
      position: absolute;
      cursor: pointer;
      top: 10px;
      left: 20px;
      height: 44px;
      width: 44px;
      transition: all 0.3s ease-out;
      &:hover {
        background: $primary;
        transition: all 0.3s ease-in;
        div {
          background: $primary-darker;
        }
      }
      div {
        width: 34px;
        height: 5px;
        border-radius: 6px;
        background: $secondary;
        margin-top: 20px;
        margin-left: 5px;
        transition: all 0.3s ease-out;

        &:first-child {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
          margin-top: -4px;
        }
      }
    }
    &.opened {
      transform: translateY(0);
      transition: all 0.3s ease-in;

    }
    &__links {
      display: flex;
      align-items: flex-end;
      padding: 19px 0 21px 0;
      ul {
        margin-top: -72px;
        flex-direction: column;
        text-align: center;
      }
      a {
        font-weight: 600;
        font-size: 1.125rem;
        letter-spacing: 0.081rem;
        padding-bottom: 10px;
      }

      a:hover {
        border-bottom: 4px solid $primary;
        color: $primary;
        padding-bottom: 10px;
      }
    }
  }
}
</style>