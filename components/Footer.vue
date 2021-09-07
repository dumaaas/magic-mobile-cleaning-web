<template>
  <footer>
      <div class="copyright">
        <div class="copyright-content container">
          <div class="">
            <p>Terms of use</p>
            <p>Copyright</p>
          </div>
          <div class="">
            <SocialIcons mode="icon-lighter" />
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";

export default {
  components: {
    SocialIcons,
  },
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
      p {
        display: inline-block;
        letter-spacing: 1.2px;
        margin-right: 75px;
      }
    }
  }
}
</style>