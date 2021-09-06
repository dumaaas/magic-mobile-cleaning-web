<template>
  <div>
    <div class="container">
      <PageHeading>SERVICES</PageHeading>
    </div>
    <div class="services">
      <div class="service-interior">
        <ServicesCover service="interior" />
        <ServicesInfo :service="interior" />
      </div>
      <div class="service-exterior">
        <ServicesCover service="exterior" />
        <ServicesInfo :service="exterior" />
      </div>
    </div>
  </div>
</template>
<script>
import PageHeading from "@/components/PageHeading.vue";
import ServicesCover from "@/components/ServicesCover.vue";
import ServicesInfo from "@/components/ServicesInfo.vue";

export default {
  components: {
    PageHeading,
    ServicesCover,
    ServicesInfo,
  },
  data() {
    return {
      interior: {
        name: "interior",
        paragraphs: [
          "This procedures keep the vehicle in its bestpossible condition. This is a complex operat-ion that requires multiple steps. Interior detailing is taking care of everything inside the car.",
          "Detailing is more than a cleaningprocess to make a vehicle look good,but a systematic approach to help extend its life with methods and products that reduce damaging environmental elements such as dirt, sun, harsh winters.",
          "This is achieved by removing  bothvisible and invisible contaminants from the vehicle's interior. Basic interior detail options includean interior vacuuming, window cleaning and surface polishing.",
        ],
      },
      exterior: {
        name: "exterior",
        paragraphs: [
          "Exterior detailing starts with pre-celaner, and ends with polishing. In betwen, we are using specialized tools and car detailing supplies to give your car a much deeper cleaning. ",
          "Starting from weels, wich are the grubbiestarea with hard-to-reach spots, we are carefullywashing every exterior detail of the car.We continue with waxing and polishingof surfaces, lights and plastic details.",
          "Finally, once a highly detailed cleaning has been achieved, we will apply specialized products to enhance your car’s appearance and protect it from future dirt and damage. As a result, a detailed car can look and smell like a new car, even if it’s aged over a decade!",
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>