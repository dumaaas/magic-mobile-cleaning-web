<template>
  <div>
    <a
      v-for="icon in socialIcons"
      :key="icon.name"
      :href="`${icon.url}`"
      target="_blank"
      :class="`${icon.name} icon ${mode}`"
    >
      <fa :icon="['fab', `${icon.iconName}`]" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
        type: String,
    }  
  },
  data() {
    return {
      socialIcons: [
        {
          name: "instagram",
          url: "https://www.instagram.com/mobile.magic.cleaning/?hl=en",
          iconName: "instagram",
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/mobile.magic.cleaning.llc/",
          iconName: "facebook-f",
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/channel/UCK_FJlcU2ci-9bwq2YDSifQ",
          iconName: "youtube",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>