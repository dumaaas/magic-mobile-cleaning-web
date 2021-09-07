<template>
  <div>
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
            <div>
              <img src="@/static/before.png" alt="before" />
            </div>
            <div>
              <img src="@/static/after.png" alt="after" />
            </div>
          </div>
          <div class="gallery-pictures__second-row flex">
            <div class="">
              <img src="@/static/video1.png" alt="before" />
            </div>

            <div class="flex-col">
              <div>
                <img src="@/static/photo3.png" alt="before" />
              </div>
              <div>
                <img src="@/static/photo4.png" alt="before" />
              </div>
            </div>
          </div>
          <div class="gallery-pictures__third-row flex">
            <div>
              <img src="@/static/photo5.png" alt="before" />
            </div>
            <div>
              <img src="@/static/photo6.png" alt="after" />
            </div>
          </div>
          <div class="gallery-pictures__fourth-row flex">
              <div>
              <img src="@/static/video2.png" alt="before" />
            </div>
            <div>
              <img src="@/static/video3.png" alt="after" />
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";

.flex {
  display: flex;
  gap: 18px;
}
.flex-col {
  display: flex;
  gap: 14px;
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
  }

  &-pictures {
    padding-top: 70px;
  }
}
</style>