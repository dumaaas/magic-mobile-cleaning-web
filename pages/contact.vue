<template>
  <div>
    <div class="container">
      <PageHeading>CONTACT & BOOK</PageHeading>
    </div>
    <div class="contact">
      <div class="contact-bg">
        <div class="container">
          <ContactForm mode="darker" />
        </div>
      </div>
      <div class="contact-info">
        <div class="container contact-info__content">
          <div class="open-hours mobile">
            <h4>Open Hours</h4>
            <div class="item">
              <span class="item-icon">
                <fa :icon="['far', 'clock']" />
              </span>
              <p class="item-data">
                Monday - Saturday
                <span> 8:00 AM - 6:00 AM </span>
              </p>
            </div>
          </div>
          <ContactInfo mode="darker" />
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
@import "@/assets/sass/abstracts/_mixins.scss";

.mobile {
  display: none;
  @include breakpoint($xs) {
    display: block;
  }
}
.contact {
  &-bg {
    padding: 70px 0;
    background: url("~@/static/contact.png") no-repeat center center scroll;
    @include breakpoint($xs) {
      padding: 20px 0;
      background: url("~@/static/contact-mobile.png") no-repeat center center
        scroll;
      background-size: cover;
    }
  }

  &-info {
    background-color: $tertiary-lighter;
    padding: 140px 0;

    @include breakpoint($xs) {
      padding: 73px 0;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      @include breakpoint($xs) {
        flex-direction: column;
        gap: 60px;
      }
    }

    .open-hours {
      h4 {
        text-transform: uppercase;
        font-size: 1.313rem;
        padding-bottom: 28px;
        letter-spacing: 1.2px;
        color: $primary-darker;
      }

      .item {
        display: flex;

        svg {
          width: 19px;
          height: 19px;
          path {
            fill: $primary-darker;
          }
        }

        p {
          padding-left: 5px;
          color: $primary-darker;
        }
        span {
          display: block;
          color: $primary;
          font-weight: 700;
          letter-spacing: 1.2px;
        }
      }
    }
  }
}

.map {
  width: 50%;
  @include breakpoint($xs) {
    width: 100%;
    height: 195px;
  }
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