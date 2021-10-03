<template>
  <div>
    <transition name="modal">
      <section class="modal" v-show="showVideo" v-scroll-lock="showVideo">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-container__btn" @click="hideVideo">
                <div></div>
                <div></div>
              </div>
              <video
                ref="videoRef"
                :src="require(`@/static/${videoSrc}.mp4`)"
                id="video-container"
                width="100%"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>
    </transition>

    <transition name="modal">
      <section class="modal" v-show="showImage" v-scroll-lock="showImage">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-container__btn" @click="hideVideo">
                <div></div>
                <div></div>
              </div>
              <img :src="require(`@/static/${imgSrc}.png`)" width="100%" />
            </div>
          </div>
        </div>
      </section>
    </transition>

    <div class="container">
      <PageHeading>BEFORE & AFTER</PageHeading>
    </div>
    <div class="gallery">
      <div class="container">
        <div class="gallery-title">
          <p>
            We bring some photos of our work, so you can take a look and make
            sure we do a great job!
          </p>
        </div>
        <div class="gallery-pictures">
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openVideo(1)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img src="@/static/video1.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(1)">
            <img src="@/static/gallery_img1.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(2)">
            <img src="@/static/gallery_img2.png" alt="before" />
          </div>

          <div class="gallery-pictures__item" @click="openImage(3)">
            <img src="@/static/gallery_img3.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(4)">
            <img src="@/static/gallery_img4.png" alt="before" />
          </div>
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openVideo(2)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img src="@/static/video2.png" alt="before" />
          </div>

          <div class="gallery-pictures__item" @click="openImage(5)">
            <img src="@/static/gallery_img5.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(6)">
            <img src="@/static/gallery_img6.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(7)">
            <img src="@/static/gallery_img7.png" alt="before" />
          </div>

          <div class="gallery-pictures__item" @click="openImage(8)">
            <img src="@/static/gallery_img8.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(9)">
            <img src="@/static/gallery_img9.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(10)">
            <img src="@/static/gallery_img10.png" alt="before" />
          </div>

          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openVideo(3)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img src="@/static/video3.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(11)">
            <img src="@/static/gallery_img11.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(12)">
            <img src="@/static/gallery_img12.png" alt="before" />
          </div>
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openVideo(4)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img src="@/static/video4.png" alt="before" />
          </div>
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openVideo(5)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img src="@/static/video5.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(13)">
            <img src="@/static/gallery_img13.png" alt="before" />
          </div>

          <div class="gallery-pictures__item" @click="openImage(14)">
            <img src="@/static/gallery_img14.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(15)">
            <img src="@/static/gallery_img15.png" alt="before" />
          </div>
          <div class="gallery-pictures__item" @click="openImage(16)">
            <img src="@/static/gallery_img16.png" alt="before" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PageHeading from "@/components/PageHeading.vue";

export default {
  components: {
    PageHeading,
  },
  data() {
    return {
      videoSrc: "video1",
      imgSrc: "gallery_img1",
      showVideo: false,
      showImage: false,
    };
  },
  methods: {
    openVideo(i) {
      this.showVideo = true;
      this.videoSrc = "video" + i;
      this.$refs.videoRef.autoplay = true;
      this.$refs.videoRef.load();
    },
    hideVideo() {
      this.showVideo = false;
      this.showImage = false;
      this.$refs.videoRef.pause();
    },
    openImage(i) {
      this.showImage = true;
      this.imgSrc = "gallery_img" + i;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.flex {
  display: flex;
  gap: 12px;

  @include breakpoint($xs) {
    gap: 6px;
  }
}
.flex-col {
  display: flex;
  gap: 8px;
  @include breakpoint($xs) {
    gap: 3px;
  }
  flex-direction: column;
}
.gallery {
  background-color: $tertiary-lighter;
  padding: 70px 0 115px 0;
  img {
    object-fit: cover;
    width: 100%;
  }
  p {
    color: $secondary-darker;
    font-size: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #d8d8d8;
    @include breakpoint($xs) {
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      max-width: 330px;
      margin: 0 auto;
    }
  }

  &-pictures {
    padding-top: 90px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    &__item {
      flex-basis: 32.78%;
      @include breakpoint($xs) {
        flex-basis: 48.28%;
      }
    }
    @include breakpoint($xs) {
      padding-top: 51px;
    }
  }

  .video {
    position: relative;
  }

  .play-btn {
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    cursor: pointer;
    transition: all 0.2s ease-out;
    @include breakpoint($xs) {
      width: 52px;
      height: 52px;
    }
    &:hover {
      background: rgba(0, 0, 0, 1);
      transition: all 0.2s ease-in;
    }

    svg {
      width: 30px;
      height: 38px;

      @include breakpoint($xs) {
        width: 20px;
        height: 28px;
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
    background-color: rgba(0, 0, 0, 0.9);
    display: table;
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    position: relative;
    padding: 20px;
    max-width: 1000px;
    @include breakpoint($small-only) {
      max-width: 900px;
    }
    margin: 0 auto;
    transition: all 0.3s ease;

    &__btn {
      position: absolute;
      cursor: pointer;
      top: 0px;
      right: 20px;
      height: 44px;
      width: 44px;
      background: $primary-darker;
      border-radius: 50%;
      transition: all 0.3s ease-out;
      &:hover {
        background: $primary;
        transition: all 0.3s ease-in;
        div {
          background: $primary-darker;
        }
      }
      div {
        width: 25px;
        height: 5px;
        border-radius: 6px;
        background: $primary;
        margin-top: 20px;
        margin-left: 9px;
        transition: all 0.3s ease-out;

        &:first-child {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
          margin-top: -4px;
        }
      }
    }
  }

  video {
    border: 5px solid $primary;
    height: auto;
  }

  img {
    border: 5px solid $primary;
  }
}
</style>