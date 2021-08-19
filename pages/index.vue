<template>
  <div>
    <main id="modal">
      <section class="main">
        <div class="main-cover">
          <h1>
            {{ main.heading }}
            <span> {{ main.span }} </span>
          </h1>
          <button class="btn">{{ main.button }}</button>
        </div>
      </section>
      <Track>{{ track }}</Track>
      <section class="offers container">
        <div class="offers-heading">
          <h3>
            <span> If you love your care </span>
            we will make it shine!
          </h3>
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
      <section class="gallery">
        <div class="gallery-container">
          <div class="gallery-cards">
            <div v-for="card in galleryCards" :key="card" class="card">
              <img
                :src="require(`@/static/${card.src}`)"
                :alt="`${card.title}`"
              />
              <p>{{ card.title }}</p>
            </div>
          </div>
          <button id="show-modal" @click="openGallery" class="btn btn-invert">
            Show Gallery
          </button>
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
  </div>
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
        button: "Book Now",
      },
      track: "We are open / Monday - Saturday / 8:00 AM - 20:00 PM",
      showGallery: false,
      gallery: [],
      offerCards: [
        {
          title: "Deep cleaning",
          description: "Lorem ipsum sit amet, consectetur adipisicing...",
          src: "offer.png",
        },
        {
          title: "Shining",
          description: "Lorem ipsum sit amet, consectetur adipisicing...",
          src: "offer.png",
        },
        {
          title: "Refreshing",
          description: "Lorem ipsum sit amet, consectetur adipisicing...",
          src: "offer.png",
        },
        {
          title: "Polishing",
          description: "Lorem ipsum sit amet, consectetur adipisicing...",
          src: "offer.png",
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

.main {
  background: url("~@/assets/cover.jpg") no-repeat center center scroll;
  height: 66vh;
  &-cover {
    padding: 20px 0;
    width: 1200px;
    margin: 0 auto;

    h1 {
      margin-top: 110px;
      text-transform: uppercase;
      color: white;
      font-weight: 800;
      font-size: 60px;
      padding: 0 5px;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
      display: inline-block;
    }

    span {
      display: block;
      font-size: 35px;
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
    h3 {
      color: $primary-darker;
      text-transform: uppercase;
      font-weight: 900;
      text-align: center;
      span {
        display: block;
        font-weight: 500;
        font-size: 35px;
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
      padding: 40px 0;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: all 0.5s ease;
        cursor: pointer;
      }
    }

    h4 {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1.2px;
      color: $primary;
      padding-top: 25px;
    }
    p {
      color: $primary-darker;
      padding-top: 10px;
      font-weight: 500;
      width: 70%;
      margin: 0 auto;
      letter-spacing: 1.2px;
      line-height: 20px;
    }
  }
}

.gallery {
  background-color: $primary-lighter;
  &-container {
    padding: 50px 0;
    width: 1200px;
    margin: 0 auto;
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
      padding-bottom: 40px;
      img {
        border-radius: 20px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }
      p {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 1.2px;
        color: $primary;
        padding-top: 10px;
      }
    }
  }
}
</style>
