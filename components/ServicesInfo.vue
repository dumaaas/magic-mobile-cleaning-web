<template>
  <div class="services-bg">
    <div class="container">
      <div class="services-info">
        <div class="services-info__left">
          <p
            v-for="paragraph in service.paragraphs"
            :key="paragraph"
            v-html="paragraph"
          ></p>
        </div>
        <div class="services-info__right">
          <div class="">
            <img
              :src="require(`@/static/${service.name}1.png`)"
              alt="interior1"
            />
            <img
              class="mt-11"
              :src="require(`@/static/${service.name}3.png`)"
              alt="interior1"
            />
          </div>
          <div class="">
            <img
              :src="require(`@/static/${service.name}2.png`)"
              alt="interior1"
            />
            <img
              class="mt-11"
              :src="require(`@/static/${service.name}4.png`)"
              alt="interior1"
            />
          </div>
        </div>
      </div>
      <div class="services-btn">
        <nuxt-link class="btn btn-tertiary" to="/beforeafter"
          >Before&After gallery</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.services-bg {
  background-color: $tertiary-lighter;
}

.mt-11 {
  margin-top: 11px;
  @include breakpoint($xs) {
    margin-top: 2px;
  }
}

.services-info {
  display: flex;
  gap: 30px;
  @include breakpoint($small-only) {
    flex-direction: column;
  }
  @include breakpoint($xs) {
    flex-direction: column;
    gap: 39px;
  }
  &__left {
    width: 80%;

    @include breakpoint($small-only) {
      width: 100%;
    }
    @include breakpoint($xs) {
      width: 100%;
    }
  }
  &__right {
    background-color: $secondary;
    display: flex;
    gap: 15px;
    border: 30px solid $secondary;

    @include breakpoint($xs) {
      gap: 6px;
      border: 0 solid $secondary;
    }

    div:first-child {
      margin-top: 22px;
      @include breakpoint($xs) {
        margin-top: 0;
      }
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  p {
    color: $primary-darker;
    font-size: 22px;

    @include breakpoint($xs) {
      font-size: 17px;
    }

    &:first-child {
      padding-top: 170px;
      @include breakpoint($small-only) {
        padding-top: 70px;
      }
      @include breakpoint($xs) {
        padding-top: 39px;
      }
    }

    &:not(:first-child) {
      padding-top: 30px;
      @include breakpoint($xs) {
        padding-top: 20px;
      }
    }
  }
}

.primary-darker {
  color: $primary-darker;
}

.uppercase {
  text-transform: uppercase;
}

.services-btn {
  padding: 70px 0;
  display: inline-block;
  display: flex;
  align-items: center;
  @include breakpoint($xs) {
    padding: 42px 0 62px 0;
  }
  .btn {
    margin: 0 auto;
  }
}
</style>