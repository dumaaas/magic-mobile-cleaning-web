<template>
  <div class="contact" :class="mode">
    <div class="contact-info">
      <h4>Contact Us</h4>
      <div class="item" v-for="contact in contacts" :key="contact.name">
        <span>
          <fa :icon="['fa', `${contact.iconName}`]" />
        </span>
        <p class="item-data">
          {{ contact.name }}:
          <span>
            {{ contact.content }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: String
  },
  data() {
    return {
      contacts: [
        {
          iconName: "map-marker-alt",
          name: "Adress",
          content: "Yzhgast Streat 81A, Chicago Illanois",
        },
        {
          iconName: "phone-alt",
          name: "Phone",
          content: "(773) 209 3850 (312) 200 2093",
        },
        {
          iconName: "envelope",
          name: "Email",
          content: "mobilemagicclearning33@gmail.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";

.contact {
  width: 30%;

  &.darker {
    h4 {
      color: $primary-darker;
    }
    svg {
      path {
        fill: $primary-darker;
      }
    }
    p {
      color: $primary-darker;
    }
    span {
      color: $primary;
    }
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: $secondary
  }

  &-info {
    .item {
      padding-top: 20px;
      display: flex;
      gap: 10px;
    }
    svg {
      width: 12px;
    }
  }
  &__social {
    padding-top: 20px;
    p {
      display: inline-block;
    }
  }
}
</style>