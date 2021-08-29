<template>
  <div>
    <div class="container">
      <PageHeading>CONTACT & BOOK</PageHeading>
    </div>
    <div class="contact">
      <div class="contact-bg">
        <div class="container">
          <ContactForm />
        </div>
      </div>
      <div class="contact-info">
        <div class="container contact-info__content">
          <ContactInfo />
          <div class="map">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=834&amp;height=400&amp;hl=en&amp;q=5542 N Artesian Ave, Chicago, IL 60625, United States&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe
                ><a href="https://www.fnfgo.com/">FNF Go</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  components: {
    PageHeading,
    ContactForm,
    ContactInfo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";

.contact {
  &-bg {
    padding: 70px 0;
    background: url("~@/static/contact.png") no-repeat center center scroll;
  }

  &-info {
    background-color: $tertiary-lighter;
    padding: 70px 0;

    &__content {
      display: flex;
      justify-content: space-between;
    }
  }
}

.map {
  width: 60%;
  .mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 100%;
  }
  .gmap_iframe {
    height: 100% !important;
  }
}
</style>