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

export default {
  data() {
    return {
      interior: {
        name: "interior",
        paragraphs: [
          "<span style='text-transform: uppercase; color: #0b4051; font-weight: 700;'>Interior Detailing</span> keeps the vehicle in it's best possible condition.. This is a complex operation that requires multiple steps. Interior detailing is taking care of everything inside the car.",
          "Detailing is more than a cleaning process to make a vehicle look good,but a systematic approach to help extend its life with methods and products that reduce damaging environmental elements such as dirt, sun, harsh winters.",
          "This is achieved by removing  both visible and invisible contaminants from the vehicle's interior. Basic interior detail options includean interior vacuuming, window cleaning and surface polishing.",
        ],
      },
      exterior: {
        name: "exterior",
        paragraphs: [
          "<span style='text-transform: uppercase; color: #0b4051; font-weight: 700;'>Exterior Detailing</span> starts with precelaner, and ends with polishing. In betwen, we are using specialized tools and car detailing supplies to give your car a much deeper cleaning. ",
          "Starting from weels, wich are the grubbiest area with hard-to-reach spots, we are carefully washing every exterior detail of the car. We continue with waxing and polishing of surfaces, lights and plastic details.",
          "Finally, once a highly detailed cleaning has been achieved, we will apply specialized products to enhance your car’s appearance and protect it from future dirt and damage. As a result, a detailed car can look and smell like a new car, even if it’s aged over a decade!",
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>