<template>
  <div>
    <video
      ref="videoRef"
      src=""
      id="video-container"
      width="100%"
      controls
    ></video>

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
        <div class="gallery-pictures flex-col">
          <div class="gallery-pictures__first-row flex">
            <div class="flex-col">
              <div @click="openVideo">
                <img src="@/static/before.png" alt="before" />
              </div>
              <div>
                <img src="@/static/video2.png" alt="before" />
              </div>
              <div>
                <img src="@/static/photo5.png" alt="after" />
              </div>
            </div>
            <div class="flex-col">
              <div>
                <img src="@/static/video1.png" alt="before" />
              </div>
              <div>
                <img src="@/static/video3.png" alt="before" />
              </div>
            </div>
          </div>
          <div class="gallery-pictures__second-row flex">
            <div class="">
              <img src="@/static/video4.png" alt="before" />
            </div>

            <div>
              <img src="@/static/video5.png" alt="before" />
            </div>
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
  methods: {
    openVideo() {
      this.$refs.videoRef.src =
        "http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4";
      this.$refs.videoRef.play();
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
  padding: 51px 0 96px 0;
  img {
    object-fit: cover;
    width: 100%;
  }
  p {
    color: $secondary-darker;
    font-size: 20px;
    @include breakpoint($xs) {
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      max-width: 330px;
      margin: 0 auto;
    }
  }

  &-pictures {
    padding-top: 70px;
    @include breakpoint($xs) {
      padding-top: 51px;
    }
  }
}
</style>