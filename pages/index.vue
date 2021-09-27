<template>
  <main>
    <section class="main">
      <div class="main-cover container">
        <div class="main-cover__title">
          <h1>
            {{ main.heading }}
            <span> {{ main.span }} </span>
          </h1>
          <p class="desktop">
            {{ main.paragraph }}
          </p>
          <p class="mobile">
            {{ main.mobileParagraph }}
          </p>
        </div>
        <nuxt-link to="/contact" class="btn">{{ main.button }}</nuxt-link>
      </div>
    </section>
    <Track class="desktop">{{ track }}</Track>
    <Track class="mobile">{{ trackMobile }}</Track>
    <section class="offers container">
      <div class="offers-heading">
        <h2>
          <span> If you love your car </span>
          we will make it shine!
        </h2>
      </div>
      <div class="offers-cards">
        <div
          class="offers-cards__card"
          v-for="offer in offerCards"
          :key="offer.title"
        >
          <img
            :src="require(`@/static/${offer.src}`)"
            :alt="`${offer.title}`"
          />
          <h4>{{ offer.title }}</h4>
          <p class="desktop">{{ offer.description }}</p>
          <p class="mobile">{{ offer.descriptionMobile }}</p>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="services-cards container">
        <div class="services-cards__card">
          <div class="services-cards__card-left">
            <img src="@/static/interior.png" alt="Interior" />
          </div>
          <div class="services-cards__card-right">
            <div class="title">
              <h4>Interior</h4>
              <nuxt-link class="mobile" to="/services">
                <i class="arrow"></i>
              </nuxt-link>
            </div>

            <p>
              This procedures keep the vehicle in its bestpossible condition.
              This is a complex operation that requires multiple steps. Interior
              detailing is taking care of everything inside the car.
            </p>
            <div class="desktop">
              <nuxt-link class="btn ml-auto btn-primary" to="/services"
                >SEE MORE</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="services-cards__card">
          <div class="services-cards__card-left revert">
            <img src="@/static/exterior.png" alt="" />
          </div>
          <div class="services-cards__card-right revert">
            <div class="title">
              <h4>Exterior</h4>
              <nuxt-link class="mobile" to="/services">
                <i class="arrow"></i>
              </nuxt-link>
            </div>
            <p>
              Applying specialized products will enhance your car’s appearance
              and protect it from future dirt and damage. As a result, a
              detailed car can look and smell like a new car, even if it’s aged
              over a decade!
            </p>
            <div class="desktop">
              <nuxt-link class="btn btn-secondary" to="/services"
                >SEE MORE</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery desktop">
      <div class="gallery-container container">
        <div class="gallery-cards">
          <div class="card">
            <img src="@/static/before.png" alt="Before" />
          </div>
          <div class="card">
            <img src="@/static/after.png" alt="" />
          </div>
        </div>
        <div class="gallery-bottom">
          <div class="gallery-bottom__title">
            <p>Before and After</p>
          </div>
          <div class="gallery-bottom__line"></div>
          <div class="gallery-bottom__btn">
            <button
              id="show-modal"
              @click="openGallery"
              class="btn btn-tertiary"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="contact-bg">
        <div class="contact-main container">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>

    <transition name="modal">
      <section class="modal" v-if="showGallery">
        >
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container" v-click-outside="closeGallery">
              <VueSlickCarousel
                v-bind="settings"
                ref="carousel"
                v-for="images in gallery"
                :key="images"
              >
                <div v-for="image in images.images" :key="image">
                  <img
                    :src="`https://cleaning-cms.herokuapp.com${image.url}`"
                    alt="Flowers"
                  />
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </section>
    </transition>
  </main>
</template>

<script>
import Track from "@/components/Track.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import VueSlickCarousel from "vue-slick-carousel";
import vClickOutside from "v-click-outside";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    Track,
    VueSlickCarousel,
    ContactForm,
    ContactInfo,
  },
  data() {
    return {
      main: {
        heading: "Proffesional",
        span: "Car Detailing Services",
        paragraph: "Your car deserves it. Give them the best treatment",
        mobileParagraph: "Your car deserves it.",
        button: "Book Now",
      },
      track: "We are open / Monday - Saturday / 8:00 AM - 20:00 PM",
      trackMobile: "Monday - Saturday / 8:00 AM - 20:00 PM",
      showGallery: false,
      gallery: [],
      offerCards: [
        {
          title: "Vacuuming",
          description:
            "indoor vacuming and deep wet cleaning is the basic of a good detailing",
          descriptionMobile:
            "indoor vacuming and deep wet cleaning is the basic of a good detailing",
          src: "vacuum.png",
        },
        {
          title: "Cleaning",
          description:
            "detailing is more than a cleaning process to keep a vehicle it's best condition",
          descriptionMobile:
            "through cleaning process the vehicle will reach the pinnacle of purity",
          src: "clean.png",
        },
        {
          title: "Shining",
          description:
            "shine finish will make every single indoor and outdoor detail clean and shine",
          descriptionMobile:
            "shining finish will make every single indoor and outdoor detail gloss",
          src: "shine.png",
        },
        {
          title: "Polishing",
          description:
            "exterior polishing will make color to expression and vehicle will looks newer",
          descriptionMobile:
            "exterior polishing makes color to expression and vehicle to looks newer",
          src: "polish.png",
        },
      ],
      galleryCards: [
        {
          title: "Plastic polish",
          src: "polish.png",
        },
        {
          title: "Vacum cleaning",
          src: "cleaning.png",
        },
        {
          title: "Exterior detailing",
          src: "detailing.png",
        },
      ],
      settings: {
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  async mounted() {
    try {
      this.gallery = await this.$strapi.$galleries.find();
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    openGallery() {
      this.showGallery = true;
      document.body.style.overflow = "hidden";
    },
    closeGallery() {
      this.showGallery = false;
      document.body.style.overflow = "visible";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.ml-auto {
  margin-left: auto;
}

.mobile {
  display: none !important;
  @include breakpoint($xs) {
    display: block !important;
  }
}

.desktop {
  display: block;
  @include breakpoint($xs) {
    display: none;
  }
}

.main {
  background: url("~@/static/cover.png") no-repeat center center scroll;
  background-size: cover;
  @include breakpoint($xs) {
    background: url("~@/static/cover-mobile.png") no-repeat center center scroll;
    background-size: cover;
  }
  &-cover {
    padding: 142px 20px 172px 20px;
    @include breakpoint($xs) {
      padding: 37px 20px 39px 20px;
    }

    a {
      display: inline-block;
      margin-top: 2.875rem;
      @include breakpoint($xs) {
        margin-top: 1.813rem;
      }
    }

    h1 {
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
      text-transform: uppercase;
      @include breakpoint($xs) {
        font-size: 2.2rem;
        line-height: 38px;
      }
    }

    p {
      font-size: 1.563rem;
      padding-top: 1.25rem;
      letter-spacing: 0.019rem;
      @include breakpoint($xs) {
        font-size: 1.1rem;
        padding-top: 0.7rem;
      }
    }

    span {
      display: block;
      font-size: 2.938rem;
      @include breakpoint($xs) {
        font-size: 1.2rem;
        line-height: 25px;
      }
    }
  }
}

.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    padding: 20px 0;
    width: 1200px;
    margin: 0 auto;
    transition: all 0.3s ease;
  }

  img {
    width: 100%;
    height: 80vh;
  }
}

.offers {
  padding-top: 64px;

  @include breakpoint($xs) {
    padding-top: 55px;
  }
  &-heading {
    h2 {
      color: $primary-darker;
      text-transform: uppercase;
      text-align: center;

      @include breakpoint($xs) {
        font-size: 1.25rem;
        line-height: 25px;
      }
      span {
        display: block;
        font-weight: 500;
      }
    }
  }
  &-cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    padding: 70px 0;

    @include breakpoint($xs) {
      padding: 29px 0;
    }

    &__card {
      flex: 1 1 22%;
      padding: 40px 57px;

      @include breakpoint($sm-only) {
        flex: 1 1 50%;
      }

      @include breakpoint($xs) {
        flex: 1 1 49%;
        padding: 28px 0;
      }

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }

    img {
      width: 153px;
      @include breakpoint($xs) {
        width: 95px;
      }
    }

    h4 {
      padding-top: 43px;
      @include breakpoint($xs) {
        padding-top: 21px;
        font-size: 1.313rem;
      }
    }

    p {
      color: #154455;
      padding-top: 22px;
      font-size: 1.125rem;
      letter-spacing: 0;
      font-weight: normal;
      @include breakpoint($xs) {
        padding-top: 11px;
        max-width: 180px;
        text-align: center;
        margin: 0 auto;
        font-size: 1.063rem;
      }
    }
  }
}

.services {
  background-color: $primary-darker;
  &-cards {
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @include breakpoint($xs) {
      padding: 60px 20px;
      gap: 60px;
    }
    &__card {
      display: flex;
      justify-content: flex-start;
      height: 473px;
      width: 100%;

      @include breakpoint($xs) {
        flex-direction: column;
        height: auto;
        border: 1px solid #829da6;
        border-radius: 10px;
      }
      &-right {
        text-align: right;
        background-color: $secondary;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 66px 73px 50px 85px;
        order: 2;
        width: 38%;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .arrow {
            margin-top: 2px;
            border: solid $secondary;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 6px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);

            &:hover {
              border-color: $primary;
              transition: all 0.2s ease-in;
            }
          }
        }

        @include breakpoint($xs) {
          padding: 22px 33px;
        }
        @include breakpoint($small-only) {
          padding: 66px 37px 50px 37px;
        }
        @include breakpoint($md-only) {
          padding: 66px 60px 50px 60px;
        }

        @include breakpoint($xs) {
          width: 100%;
          background-color: transparent;
          text-align: left;
        }
        &.revert {
          background-color: transparent;
          border: 1px solid $secondary;
          border-right: 0;
          text-align: left;
          order: 1;
          padding: 66px 85px 50px 73px;
          @include breakpoint($xs) {
            order: 2;
            border: 0;
            padding: 22px 33px;
          }
          @include breakpoint($small-only) {
            padding: 66px 37px 50px 37px;
          }
          @include breakpoint($md-only) {
            padding: 66px 60px 50px 60px;
          }
          h4 {
            color: $secondary;
          }
          p {
            color: $secondary;
          }
        }
        h4 {
          color: $primary-darker;
          text-transform: uppercase;
          @include breakpoint($xs) {
            color: $secondary;
            font-size: 1.313rem;
          }
        }
        p {
          color: $primary-darker;
          font-size: 1.375rem;
          @include breakpoint($xs) {
            color: $secondary;
            font-size: 1rem;
            padding-top: 11px;
          }
          @include breakpoint($small-only) {
            font-size: 1.188rem;
          }
          @include breakpoint($md-only) {
            font-size: 1.25rem;
          }
        }
        a {
          display: inline-block;
        }
      }
      &-left {
        width: 62%;
        @include breakpoint($xs) {
          width: 100%;
          height: 196px;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          @include breakpoint($xs) {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        }
        order: 1;
        &.revert {
          order: 2;
        }
      }
    }
  }
}

.gallery {
  background-color: $primary-lighter;

  &-container {
    padding: 78px 20px 89px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 30px;
    .card {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border: 6px solid $secondary;
      img {
        width: 100%;
      }
    }
  }

  &-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    @include breakpoint($sm-only) {
      gap: 25px;
    }
    padding-top: 51px;
    p {
      font-size: 2rem;
      color: $primary-darker;
      text-transform: uppercase;
      font-weight: bold;
    }

    &__line {
      flex-grow: 1;
      border-bottom: 1px solid $primary;
    }
  }
}

.contact {
  &-bg {
    background: url("~@/static/footer.png") no-repeat center center scroll;
    background-size: cover;
  }
  &-main {
    display: flex;
    justify-content: space-between;
    padding: 144px 20px;

    @include breakpoint($xs) {
      flex-direction: column;
      padding: 71px 20px;
      width: 100%;
    }

    @include breakpoint($sm-only) {
      flex-direction: column;
      padding: 80px 20px;
    }
  }
}
</style>
