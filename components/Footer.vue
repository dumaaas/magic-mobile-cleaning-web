<template>
  <footer>
    <div class="footer-bg">
      <div class="footer container">
        <ContactForm />
        <ContactInfo />
      </div>
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
    </div>
  </footer>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  components: {
    SocialIcons,
    ContactForm,
    ContactInfo
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";

footer {
  .footer-bg {
    background: url("~@/static/footer.png") no-repeat center center scroll;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
  }
  .copyright {
    background-color: $primary-darker;
    &-content {
      padding: 25px 0 50px 0;
      display: flex;
      justify-content: space-between;
      p {
        display: inline-block;
        margin-right: 50px;
      }
    }
  }
}
</style>