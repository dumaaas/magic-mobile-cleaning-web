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
            <img
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
              :src="require(`@/static/${service.name}4.png`)"
              alt="interior1"
            />
          </div>
        </div>
      </div>
      <div class="services-btn">
        <a class="btn btn-tertiary"> View Before&After Photos </a>
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

.services-bg {
  background-color: $tertiary-lighter;
}

.services-info {
  display: flex;
  gap: 30px;
  &__right {
    background-color: $secondary;
    display: flex;
    gap: 15px;
    border: 30px solid $secondary;
    div:first-child {
      margin-top: 22px;
    }
  }
  p {
    color: $primary-darker;
    font-size: 22px;
    &:first-child {
      padding-top: 170px;
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