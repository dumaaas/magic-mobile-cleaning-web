<template>
  <footer>
    <div class="footer container">
      <div class="footer-left">
        <div class="footer-left__contact">
          <h4>Contact Us</h4>
          <div class="item" v-for="contact in contacts" :key="contact.name">
            <span>
              <fa :icon="['fa', `${contact.iconName}`]" />
            </span>
            <p>
              {{ contact.name }}:
              <span>
                {{ contact.content }}
              </span>
            </p>
          </div>
        </div>
        <div class="footer-left__social">
          <SocialIcons mode="icon-darker" />
        </div>
      </div>
      <div class="footer-right">
        <h3>
          Want to Book?
          <span> Fill this form and we will contact you </span>
        </h3>
        <div v-if="error">
          {{ error }}
        </div>

        <form
          id="form"
          autocomplete="off"
          spellcheck="false"
          v-on:submit="handleSubmit"
          v-else
        >
          <div>
            <input
              type="text"
              v-model="formData.name"
              placeholder="Name*"
              name="name"
            />
            <input
              type="email"
              v-model="formData.email"
              placeholder="Email*"
              name="email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              v-model="formData.phone"
              placeholder="Phone*"
              name="phone"
            />
            <input
              type="text"
              v-model="formData.carBrand"
              placeholder="Car Brand"
              name="carBrand"
            />
          </div>
          <div>
            <button type="submit" class="btn btn-invert">Send</button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        carBrand: "",
      },
      contacts: [
        {
          iconName: "phone-alt",
          name: "Adress",
          content: "Yzhgast Streat 81A, Chicago Illanois",
        },
        {
          iconName: "map-marker-alt",
          name: "Phone",
          content: "(773) 209 3850 (312) 200 2093",
        },
        {
          iconName: "envelope",
          name: "Email",
          content: "mobilemagicclearning33@gmail.com",
        },
      ],
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
      error: null,
    };
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();
      try {
        await this.$strapi.$contacts.create(this.formData);
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";

footer {
  background-color: $tertiary-darker;
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;

    &-left {
      h4 {
        text-transform: uppercase;
        letter-spacing: 1.2px;
      }

      &__contact {
        .item {
          padding-top: 20px;
          display: flex;
          gap: 10px;
        }

        p:not(:last-child) {
          width: 62%;
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

    &-right {
      h3 {
        text-transform: uppercase;
      }
      span {
        font-size: 18px;
        display: block;
      }
    }
  }
}
</style>