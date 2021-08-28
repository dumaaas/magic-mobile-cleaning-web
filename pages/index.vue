<template>
  <main>
    <section class="main">
      <div class="main-cover">
        <div class="main-cover__title">
          <h1>
            {{ main.heading }}
            <span> {{ main.span }} </span>
          </h1>
          <p>
            {{ main.paragraph }}
          </p>
        </div>
        <nuxt-link to="/contact" class="btn">{{ main.button }}</nuxt-link>
      </div>
    </section>
    <Track>{{ track }}</Track>
    <section class="offers container">
      <div class="offers-heading">
        <h2>
          <span> If you love your care </span>
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
          <p>{{ offer.description }}</p>
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
            <h4>Interior</h4>
            <p>
              This procedures keep the vehicle in its bestpossible condition.
              This is a complex operation that requires multiple steps. Interior
              detailing is taking care of everything inside the car.
            </p>
            <div>
              <button class="btn ml-auto btn-primary">SEE MORE</button>
            </div>
          </div>
        </div>
        <div class="services-cards__card">
          <div class="services-cards__card-left revert">
            <img src="@/static/exterior.png" alt="" />
          </div>
          <div class="services-cards__card-right revert">
            <h4>Exterior</h4>
            <p>
              Applying specialized products will enhance your car’s appearance
              and protect it from future dirt and damage. As a result, a
              detailed car can look and smell like a new car, even if it’s aged
              over a decade!
            </p>
            <div>
              <button class="btn btn-secondary">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery">
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
          <div class="gallery-bottom__line">
            <hr />
          </div>
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
                    :src="`http://localhost:1337${image.url}`"
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
  },
  data() {
    return {
      main: {
        heading: "Proffesional",
        span: "Car Detailing Services",
        paragraph: "Your car deserves it. Give them the best tretman.",
        button: "Book Now",
      },
      track: "We are open / Monday - Saturday / 8:00 AM - 20:00 PM",
      showGallery: false,
      gallery: [],
      offerCards: [
        {
          title: "Vacuuming",
          description:
            "indoor vacuming and deep wet cleaning is the basis of a good detailing",
          src: "vacuum.png",
        },
        {
          title: "Cleaning",
          description:
            "detailing is more than a cleaning process to keep a vehicle it's best condition",
          src: "clean.png",
        },
        {
          title: "Shining",
          description:
            "shine finish will make every single indoor and outdoor detail clean and shine",
          src: "shine.png",
        },
        {
          title: "Polishing",
          description:
            "exterior polishing will make color to expression and vehicle will looks newer",
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

.ml-auto {
  margin-left: auto;
}

.main {
  background: url("~@/static/cover.png") no-repeat center center scroll;
  height: 66vh;
  &-cover {
    padding: 1.25rem 0;
    width: 75rem;
    margin: 0 auto;

    &__title {
      float: left;
    }

    a {
      margin-top: 1.875rem;
      float: left;
      clear: both;
    }

    h1 {
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
      margin-top: 8.188rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.563rem;
      padding-top: 1.25rem;
      letter-spacing: 0.019rem;
    }

    span {
      display: block;
      font-size: 2.938rem;
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
  padding: 50px 0;
  &-heading {
    h2 {
      color: $primary-darker;
      text-transform: uppercase;
      text-align: center;
      span {
        display: block;
        font-weight: 500;
      }
    }
  }
  &-cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    padding: 40px 0 20px 0;

    &__card {
      padding: 40px 57px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }

    img {
      width: 153px;
    }

    h4 {
      padding-top: 25px;
    }
    p {
      color: #154455;
      padding-top: 10px;
      font-size: 1.25rem;
      letter-spacing: 0;
      font-weight: normal;
    }
  }
}

.services {
  background-color: $primary-darker;
  &-cards {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    &__card {
      display: flex;
      justify-content: flex-start;
      height: 473px;
      width: 100%;
      &-right {
        text-align: right;
        background-color: $secondary;
        display: flex;
        flex-direction: column;
        gap: 73px;
        padding: 66px 73px 50px 85px;
        order: 2;
        width: 38%;
        &.revert {
          background-color: transparent;
          border: 1px solid $secondary;
          border-right: 0;
          text-align: left;
          order: 1;
          padding: 66px 85px 50px 73px;
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
        }
        p {
          color: $primary-darker;
          font-size: 1.375rem;
        }
      }
      &-left {
        width: 62%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
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
  padding: 50px 0;

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .card {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border: 6px solid $secondary;
    }
  }

  &-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    p {
      font-size: 2rem;
      color: $primary-darker;
      text-transform: uppercase;
      font-weight: bold;
    }
    &__line {
      width: 55%;
    }
    hr {
      border: 1px solid $primary;
    }
  }
}
</style>
