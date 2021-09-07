<template>
  <div class="services-bg">
    <div class="container">
      <div class="services-info">
        <div class="services-info__left">
          <p v-for="paragraph in service.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
        <div class="services-info__right">
          <div class="">
            <img
              :src="require(`@/static/${service.name}1.png`)"
              alt="interior1"
            />
            <img class="mt-11"
              :src="require(`@/static/${service.name}3.png`)"
              alt="interior1"
            />
          </div>
          <div class="">
            <img
              :src="require(`@/static/${service.name}2.png`)"
              alt="interior1"
            />
            <img class="mt-11"
              :src="require(`@/static/${service.name}4.png`)"
              alt="interior1"
            />
          </div>
        </div>
      </div>
      <div class="services-btn">
        <nuxt-link class="btn btn-tertiary" to="/beforeafter"
          >View Before&After Photos</nuxt-link
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
}

.services-info {
  display: flex;
  gap: 30px;
  @include breakpoint($small-only) {
    flex-direction: column;
  }
  &__left {
    width: 80%;

    @include breakpoint($small-only) {
      width: 100%;
    }
  }
  &__right {
    background-color: $secondary;
    display: flex;
    gap: 15px;
    border: 30px solid $secondary;

    div:first-child {
      margin-top: 22px;
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
    &:first-child {
      padding-top: 170px;
      @include breakpoint($small-only) {
        padding-top: 70px;
      }
    }

    &:not(:first-child) {
      padding-top: 30px;
    }
  }
}

.services-btn {
  padding: 70px 0;
  display: inline-block;
  display: flex;
  align-items: center;
  .btn {
    margin: 0 auto;
  }
}
</style>