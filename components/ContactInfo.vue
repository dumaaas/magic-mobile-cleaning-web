<template>
  <div class="contactus" :class="mode">
    <div class="contactus-info">
      <h4>Contact Us</h4>
      <div class="item" v-for="contact in contacts" :key="contact.name">
        <span class="item-icon">
          <fa :icon="['fa', `${contact.iconName}`]" />
        </span>
        <p class="item-data">
          {{ contact.name }}:
          <span v-if="contact.name === 'E-mail'">
            <a :class="contact.name" :href="`mailto: ${contact.content}`">{{
              contact.content
            }}</a>
          </span>
          <span v-else-if="contact.name === 'Phone'">
            <a href="tel:+1 773-209-3754">
              {{ contact.content }}
            </a>
          </span>
          <span v-else>
            <a
              href="http://maps.google.com/?q=Mobile Magic Cleaning"
              target="_blank"
            >
              {{ contact.content }}
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: String,
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
          name: "E-mail",
          content: "mobilemagicclearning33@gmail.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.contactus {
  display: flex;
  justify-content: flex-end;

  @include breakpoint($sm-only) {
    margin-top: 80px;
    justify-content: flex-start;
  }
  &.darker {
    h4 {
      color: $primary-darker;
    }
    @include breakpoint($sm-only) {
      margin-top: 0px;
    }
    svg {
      path {
        fill: $primary-darker;
      }
    }
    p {
      color: $primary-darker;
    }

    .item-data {
      a {
        color: $primary;

        &:hover {
          color: darken($color: $primary, $amount: 15%);
        }
      }
    }
  }
  h4 {
    text-transform: uppercase;
    font-size: 1.625rem;
    padding-bottom: 9px;
    letter-spacing: 1.2px;
    color: $secondary;
  }

  &-info {
    .item {
      padding-top: 39px;
      display: flex;
      align-items: center;
      gap: 9px;

      &-icon {
        width: 26px;
      }

      &-data {
        display: inline-block;

        a {
          color: #a1a1a1;
          &:hover {
            color: $secondary;
          }
        }

        .E-mail {
          color: $primary;
        }

        span {
          padding-left: 5px;
        }
      }

      &:nth-child(2) {
        svg {
          width: 18px;
          height: 23px;
        }

        .item-data {
          width: 64%;
        }
      }

      &:nth-child(3) {
        svg {
          width: 22px;
          height: 21px;
        }

        .item-data {
          width: 50%;
        }
      }

      &:nth-child(4) {
        svg {
          width: 23px;
          height: 22px;
        }
      }
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