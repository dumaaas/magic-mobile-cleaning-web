<template>
  <div class="contact-form" :class="mode">
    <h3>
      Want to Book?
      <span> Fill this form and we will contact you </span>
    </h3>

    <form
      id="form"
      autocomplete="off"
      spellcheck="false"
      v-on:submit="handleSubmit"
    >
      <div class="inputs">
        <div class="inputs-flex">
          <input
            type="text"
            v-model="formData.name"
            placeholder="name"
            name="name"
          />
          <input
            type="text"
            v-model="formData.email"
            placeholder="email"
            name="email"
          />
        </div>
        <div class="inputs-flex">
          <input
            type="text"
            v-model="formData.phone"
            placeholder="phone"
            name="phone"
          />
          <input
            type="text"
            v-model="formData.carBrand"
            placeholder="car model"
            name="carBrand"
          />
        </div>
      </div>
      <div class="errors">
        <span v-if="formError">{{ formError }}</span>
        <span v-if="error"> Email must be valid! </span>
      </div>
      <div>
        <button type="submit" class="btn btn-invert">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    mode: String,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        carBrand: "",
      },
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
      formError: "",
      error: null,
    };
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();
      if (!this.formData.name || !this.formData.email || !this.formData.phone) {
        this.formError = "Name, email and phone fields are reqired!";
        return;
      }
      this.formError = "";
      try {
        await this.$strapi.$contacts.create(this.formData);
        this.error = "";
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

.contact-form {
  width: 50%;

  @include breakpoint($sm-only) {
    width: 100%;
  }

  @include breakpoint($xs) {
    width: 100%;
  }

  &.darker {
    h3 {
      color: $primary-darker;
    }
  }

  h3 {
    text-transform: uppercase;
    color: $secondary;
    letter-spacing: 1.5px;
    line-height: 1.875rem;
  }
  span {
    font-size: 1.125rem;
    font-weight: 400;
    display: block;
  }
  form {
    padding-top: 60px;
    @include breakpoint($xs) {
      padding-top: 41px;
    }
    button {
      margin-top: 42px;
      @include breakpoint($xs) {
        margin-top: 7px;
      }
    }
  }
  .inputs-top {
    display: flex;
    gap: 30px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 34px;
    width: 100%;
    @include breakpoint($xs) {
      gap: 14px;
    }
  }
  .inputs-flex {
    display: flex;
    @include breakpoint($xs) {
      flex-direction: column;
    }
    width: 100%;
    gap: 34px;
    @include breakpoint($xs) {
      gap: 14px;
    }
    input {
      width: 50%;
      @include breakpoint($xs) {
        width: 100%;
      }
    }
  }
  .errors {
    padding-top: 20px;
    span {
      color: #ed4337;
      font-size: 16px;
    }
  }
}
</style>