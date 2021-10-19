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
export default {};
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