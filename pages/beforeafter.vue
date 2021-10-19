<template>
  <div>
    <transition name="modal">
      <!-- -->
      <section class="modal" v-show="showSlide" v-scroll-lock="showSlide">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-wrapper__btn" @click="hideSlide">
              <div></div>
              <div></div>
            </div>
            <div class="modal-container">
              <div class="modal-container__slide">
                <div
                  class="left arrow desktop"
                  @click="openSlide(currentSlide - 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="59"
                    height="59"
                    viewBox="0 0 59 59"
                  >
                    <image
                      id="left"
                      width="59"
                      height="59"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                </div>
                <div
                  class="right arrow desktop"
                  @click="openSlide(currentSlide + 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="59"
                    height="59"
                    viewBox="0 0 59 59"
                  >
                    <image
                      id="right"
                      width="59"
                      height="59"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                </div>
                <div
                  class="left-mobile arrow mobile"
                  @click="openSlide(currentSlide - 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <image
                      id="left"
                      width="34"
                      height="34"
                      xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAFGklEQVRYha2Yb0iddRTHP/d59Oqd19uyedOZ22wspKLeaM2ytMsIU5gUNuqFFeyNNAg2Mgj3bjmoN1u9GLSW3Q0ZwWXEHY7QJdO7O6pF1P4U6+/mWiJqLnJ/7jT3xBnnBw+X++/ZOiCC5/x+v+/59z3n0Yd3qQAeAOqAe4EgYAPXgTngD+B34BcvN3sBsgpoAxqANQrADxSr/iawAKSAGeAUcBwY+7+AVAOvARuAe4BrwDzwL+Doj7nL/ASAu9TmDPApcPROgHQBPUAYmFJvC42iALSAFUAJMAy8C1zOZGznuOht4A19fEpD7yWVxvYKcBVoBFqA74HZbMbp0g88D1zQ8N5OUafLTU2zFPXrwA9uvZXhwFvAC1r5XkD4XAWbKXry1qSm6QNgZS4gHcCrwHmPqRC7RQEeDofL9exShvO2pnk58I77fTeQSuBNbT2vkZA6Wjp48GDj5OTkhng8/pjf73cUTLoImEvAeuAV9yVGpDhf1mhkSlk2EJJzhoaGmjs6OqqMorq6+ujU1NS8ck26CMgy/f2SFK95sAZ4VsPmCYRlWdbo6GiLG8SePXvOz8zMzLvILtPZq0oLL+J69Dklq5QXECUlJXYymWyNRCKVRrFr167ftmzZcnJpacnO45RPR4IQZamlDPi49nshdSE214LBoD+ZTD7T1NRUYRQ7d+78edu2bSe1M4pcrJtN5M1aGRsC5EGdHf8UCOJqKBQqSSQSLQ0NDcuNYseOHef6+vq+VXovLgAEaiOgHxHU9+sAkzDlA3ElHA4Hx8fHW+rr64NGsX379h/7+/tlyC0rMBJukXJYXaSj3J/n8K101NfX3z0yMvJUbW1twCi2bt16evfu3Wdd64AXECiQSgFSXoAX1xsbGysTicTTpaW36oq5ubmF3t7eswMDA+fuAATKNWWmqvMV6Y329vYaA0JkfHx8ZmBg4JTWxO2CMGLZ2jEP6Y6R1XB6ejrV2dlZHQqFbnHDunXrgrZtLxsbG7ukbZprkueSUlkNbAXxqDJkNq+KZmdnr0Sj0YlIJBKuqakJWJbla21tXREKhQIjIyMX7wCMpPWCrezWpEMrV3iLU6lUKhqNXmxubq6sq6uTDkF4pKqqquzIkSMTmuIij0CESL8SL6TYpjVEuURALltcXFyKRCKJ4eHhaWPb09NTt2/fvvW6Aizcxv7yk6VD7oyO5nwF52hxOm1tbYnDhw9PGcXmzZvXHDhw4AmN7I0CwfiVv06aLvjCtWPmE0ejZ3V2dh6PxWJ/Gvvu7u7aWCzWrPvIYh4wjqblO1kLzMMngNOq8ELN9qZNm04MDg5eNIqurq6V8Xj8yRz7iBFbgcZIi8AnuiMUugYYMMXd3d1f7t2794JRbNy4sbqioqJcF6xMIhGTtSEJfE1au0nVr9Jt+7KHgpMu8Q0NDU0EAgH/2rVry/bv3z9x6NChS47jFGW4x9GWFYd7gb/JYBQCBhXtpAde8GkaFnw+X6njODe0EK20VDv6d3G4D/jMKNIfkgtklLfrnjLvcWOzNezZIiEgVgMfAlG3MpPHf2neIvodYvaUQpcmK4PtTU2HfEJ8BLyffjBb6GWTP6b0/7CSVKHc4BZDCTV69j3g40yGuWpAIhFXELLF3acXLxQIwq+7TrnSg3wlJLIZF+qhhFS+/uTbVQpNCE0iJEuNaVHxXCazzCABLCmWNeFzYDTfA15DLY/I/0ckQlJ0MjDFYxEBJa0o3fYr8I1SQn4B/gPnXXOsu466EAAAAABJRU5ErkJggg=="
                    />
                  </svg>
                </div>
                <div
                  class="right-mobile arrow mobile"
                  @click="openSlide(currentSlide + 1)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <image
                      id="right"
                      width="34"
                      height="34"
                      xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAFLklEQVRYha2YXWyTZRTHf21Zt+7D6b5cGdtYYnah3ihWAYHFMUmZ40OzME3INEKI8cIQIibGKxK90GQJekEyZPFiWxB6ITVky6JuWiBmSnS4mGg0CAw2Am4MlHZrefeak5xnaWq79p2epGn7Puc5z/85H//nPK8L51IGNAINwINAMeABYsAMMAFcBH5zYtkJkDogCDwBrFYAXiBPxxeAODAH3AQuAGeAr/8vIH7gFaAFKAeiwF/APcDWj7FlPj6gVHXGgU+BL/4LkHbgNaAKuK67zdWLAtANVAD5wBDwPnArnbJnCUNvA2/o4tfV9U5CaXT/Bu4CAaAJGAP+zKScKu8BzwOX1L3LSepUWdAwS1K/DvycPO5OM+Et4AXN/FQQrqSkdOohWWtSw/QRsHIpIM8BLwN/pFlIflvyvKqqqkRBJhyC8WiY7wfeTV4/GUgl8KaWXrpwWHl5efapU6eenJycbOnv7w+onpMENmCuAmuBzuRdGpHkfEm9kS5k8erq6pKpqalnzYPTp09f37Zt21n960sq5WwiekX6/aIkr6maGuAgcEdDkk7csVgsVlFRURAIBB6Q8cbGxuJNmzZV9PX1Tdi2nUgit2zi0jyrUV46b4B0AM9oWWVys9u2bQYGBi6Xlpb61q1bJ1RPQ0NDUUtLS5WAsSwr7hCMqaTPPcqAr2oCxbJMFn3X0NDQZa/Xm79x40ZhWurq6gqDwaC/v79/IpFIzCn15yIJrZ5xMfy4coYYyBSWVDDu4eHhKx6PJ6+pqUmYk5qamoKtW7f6jx8/fjUej8ccgJHNXPUo223QWOWabDLPMzIyIuHwNDc3S8Xh9/sLduzYsTIUCk1Go9G7yhnZRHRmxaBUwWN6kDkRmbsiEolcuX37NsFgUFoCKisr83ft2rVqYGDgxvT09N0cckbszEuZCjmtcOANI7YaKT58+PD43r17f5iZmZFkpb6+vnBsbKxlzZo1FRrypURIssjwxXLPEgPG19PTcyESiSweZj6fz9Pa2royByAibrdWirVMMC7N/LlDhw6tb2trqzYDExMTsRMnTlxSolsShIRGQjKr5CJGnYRnEURXV1fgwIEDD5mB0dHRW8FgMDI7O5vIgXElh2ZXaI85v4xeQ8DPd3d3P7Vv374GMzA8PHxzy5YtZy3LknOoMIfcE51r4pZfgBtAgUMQ8WPHjq1NBjE4OHhj8+bNEcuyrBxBGPnVrYfcuDJrtoku9V6it7d3/Z49e1abgXA4PNXa2vqN/s31APRq5/+dqZovk3rMpUBIzBdCodCG3bt315qBkydPXtu5c+cZraCCHEHYyqo/CrOahc8BP+lAJiOW1+u1w+Hw0+3t7YvdVW9v75WOjo5zykX5DtlZNhcixQOfaI+QySv3ysrKSrZv3+43D44ePXqps7PzW818JyDkTJNSl15mlJQu/rJeogLa8qdWkTsajc6Xl5fn1dbWFh45cuTi/v37zysAr8OmqFg3fFDp41+L3Qf0KdrJFKCLjbPL5cq3bdsc9x6HILy64XeAzxZ3maJ4R/vWOQVjpRgRMF7bti31hHsZIOqB7mQQZLhgTWvcmrV7upPkEfPtdkiACxoOSfKPgQ9TFTLd9KSTHwEeAR41LLqM88hQQo3O/QDoSae41JVTPBFWEA8Dq9RwPEcQXn1tUaL0ILeESCblXHcoLpXbn3RzkmhCWuIhySU5U0Rk51LGhtolxPJqYhD4KtsCTl0ti8j7EfGQJJ28JZAdiwgoKUWptt+B75USsgvwD36ImwYz/KuiAAAAAElFTkSuQmCC"
                    />
                  </svg>
                </div>
                <video
                  loading="lazy"
                  v-show="showVideo"
                  ref="videoRef"
                  :src="require(`@/static/${videoSrc}.mp4`)"
                  id="video-container"
                  width="100%"
                  controls
                ></video>
                <img
                  loading="lazy"
                  v-show="showImage"
                  :src="require(`@/static/${imgSrc}.png`)"
                  width="100%"
                />
              </div>
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
            <div class="play-btn" @click="openSlide(1)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img loading=lazy src="@/static/video1.png" alt="before" />
          </div>
          <div class="gallery-pictures__item img-wrapper" @click="openSlide(2)">
            <img loading=lazy src="@/static/gallery_img2.png" alt="before" />
          </div>
          <div class="gallery-pictures__item img-wrapper" @click="openSlide(3)">
            <img loading=lazy src="@/static/gallery_img3.png" alt="before" />
          </div>

          <div class="gallery-pictures__item img-wrapper" @click="openSlide(4)">
            <img loading=lazy src="@/static/gallery_img4.png" alt="before" />
          </div>
          <div class="gallery-pictures__item img-wrapper" @click="openSlide(5)">
            <img loading=lazy src="@/static/gallery_img5.png" alt="before" />
          </div>
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openSlide(6)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img loading=lazy src="@/static/video6.png" alt="before" />
          </div>

          <div class="gallery-pictures__item img-wrapper" @click="openSlide(7)">
            <img loading=lazy src="@/static/gallery_img7.png" alt="before" />
          </div>
          <div class="gallery-pictures__item img-wrapper" @click="openSlide(8)">
            <img loading=lazy src="@/static/gallery_img8.png" alt="before" />
          </div>
          <div class="gallery-pictures__item img-wrapper" @click="openSlide(9)">
            <img loading=lazy src="@/static/gallery_img9.png" alt="before" />
          </div>

          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(10)"
          >
            <img loading=lazy src="@/static/gallery_img10.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(11)"
          >
            <img loading=lazy src="@/static/gallery_img11.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(12)"
          >
            <img loading=lazy src="@/static/gallery_img12.png" alt="before" />
          </div>

          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openSlide(13)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img loading=lazy src="@/static/video13.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(14)"
          >
            <img loading=lazy src="@/static/gallery_img14.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(15)"
          >
            <img loading=lazy src="@/static/gallery_img15.png" alt="before" />
          </div>
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openSlide(16)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img loading=lazy src="@/static/video16.png" alt="before" />
          </div>
          <div class="gallery-pictures__item video">
            <div class="play-btn" @click="openSlide(17)">
              <fa :icon="['fa', 'play']" />
            </div>
            <img loading=lazy src="@/static/video17.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(18)"
          >
            <img loading=lazy src="@/static/gallery_img18.png" alt="before" />
          </div>

          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(19)"
          >
            <img loading=lazy src="@/static/gallery_img19.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(20)"
          >
            <img loading=lazy src="@/static/gallery_img20.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item img-wrapper"
            @click="openSlide(21)"
          >
            <img loading=lazy src="@/static/gallery_img21.png" alt="before" />
          </div>
          <div
            class="gallery-pictures__item mobile img-wrapper"
            @click="openSlide(22)"
          >
            <img loading=lazy src="@/static/gallery_img22.png" alt="before" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      videoSrc: "video1",
      imgSrc: "gallery_img2",
      showVideo: false,
      showImage: false,
      showSlide: false,
      currentSlide: 1,
    };
  },
  methods: {
    hideSlide() {
      this.showVideo = false;
      this.showImage = false;
      this.showSlide = false;
      this.$refs.videoRef.pause();
    },
    openSlide(i) {
      this.hideSlide();

      switch (i) {
        case 0:
          this.currentSlide = 22;
          break;
        case 23:
          this.currentSlide = 1;
          break;
        default:
          this.currentSlide = i;
          break;
      }

      if (
        this.currentSlide == 1 ||
        this.currentSlide == 6 ||
        this.currentSlide == 13 ||
        this.currentSlide == 16 ||
        this.currentSlide == 17
      ) {
        this.showVideo = true;
        this.videoSrc = "video" + this.currentSlide;
        this.$refs.videoRef.autoplay = true;
        this.$refs.videoRef.load();
      } else {
        this.showImage = true;
        this.imgSrc = "gallery_img" + this.currentSlide;
      }
      this.showSlide = true;
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
.mobile {
  display: none !important;
  @include breakpoint($xs) {
    display: block !important;
  }
}

.desktop {
  display: block !important;
  @include breakpoint($xs) {
    display: none !important;
  }
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
    justify-content: center;
    gap: 10px;

    &__item {
      flex-basis: 32.4%;
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
</style>