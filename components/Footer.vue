<template>
  <footer>
    <div class="copyright">
      <div class="copyright-content container">
        <div class="">
          <p>Copyright© Mobile Magic Cleaning 2021</p>
        </div>
        <div class="">
          <SocialIcons mode="icon-lighter" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

footer {
  .copyright {
    background-color: $primary-darker;
    &-content {
      padding: 37px 20px 75px 20px;
      display: flex;
      justify-content: space-between;
      @include breakpoint($xs) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 20px;
        div:first-child {
          order: 2;
        }
      }
      p {
        display: inline-block;
        letter-spacing: 1.2px;
        color: #edf3f4;
        font-size: 1rem;
        @include breakpoint($xs) {
          padding-top: 27px;
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>