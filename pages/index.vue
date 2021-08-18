<template>
  <div>
    <main id="modal">
      <section class="main">
        <div class="main-cover">
          <h1>
            {{ main.heading }}
            <span> {{ main.span }} </span>
          </h1>
          <button>{{ main.button }}</button>
        </div>
      </section>
      <Track>{{ track }}</Track>
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
          <button id="show-modal" @click="openGallery">Show Gallery</button>
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

    button {
      display: block;
      margin-top: 90px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      background-color: white;
      padding: 12px 50px;
      font-size: 16px;
      border-radius: 20px;
      font-weight: 700;
      border: 0px;
      color: #6774ff;
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

.gallery {
  button {
    border: 0px;
    background-color: #6774ff;
    padding: 10px 40px;
    text-transform: uppercase;
    color: white;
    border-radius: 20px;
  }

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
        color: #6774ff;
        padding-top: 10px;
      }
    }
  }
}
</style>
