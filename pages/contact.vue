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
          <ContactInfo mode="darker" />
          <div class="map">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  title="Magic Mobile Cleaning Map"
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=6071%20N%20Milwaukee%20Ave,%20Chicago,%20IL%2060646,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
export default {
  head: {
    title: "Contact & Book | Magic Mobile Cleaning",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Want to book? Visit our page and fill form so we can contact you.",
      },
      {
        hid: "robots",
        name: "robots",
        content: "index, follow",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://magic-mobile-cleaning-8df5a.web.app/contact",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Want to book? Visit our page and fill form so we can contact you.",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Contact & Book | Magic Mobile Cleaning",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://magic-mobile-cleaning-8df5a.web.app/contact",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Contact & Book | Magic Mobile Cleaning",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Want to book? Visit our page and fill form so we can contact you.",
      },
    ],
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