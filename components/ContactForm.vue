<template>
  <div class="contact-form" :class="mode">
    <h3>
      Want to Book?
      <span> Fill this form and we will contact you </span>
    </h3>

    <form
      ref="form"
      id="form"
      autocomplete="off"
      spellcheck="false"
      @submit.prevent="sendEmail"
    >
      <div class="inputs">
        <div class="inputs-flex">
          <input
            type="text"
            v-model="formData.name"
            placeholder="name"
            name="from_name"
          />
          <input
            type="text"
            v-model="formData.email"
            placeholder="email"
            name="from_email"
          />
        </div>
        <div class="inputs-flex">
          <input
            type="text"
            v-model="formData.phone"
            placeholder="phone"
            name="from_phone"
          />
          <input
            type="text"
            v-model="formData.carBrand"
            placeholder="car model"
            name="from_carBrand"
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
    sendEmail() {
      if (!this.formData.name || !this.formData.email || !this.formData.phone) {
        this.formError = "Name, email and phone fields are reqired!";
        return;
      }
      this.$axios.post("/api/send");
      // this.$mail.send({
      //   from: this.formData.email,
      //   subject: 'Kako si sta radis?',
      //   text: this.formData.phone
      // })
      // emailjs
      //   .sendForm(
      //     "magicmobile",
      //     "magicmobiletemplate",
      //     this.$refs.form,
      //     "user_z5NqmTk6lre9kzsXeLomX"
      //   )
      //   .then(
      //     (result) => {
      //       this.formError = "";
      //       this.$swal("Thanks for reaching us!", "We will contact you soon!", "success");
      //     },
      //     (error) => {
      //       this.$swal("Something went wrong!", "Please try again!", "error");
      //     }
      //   );
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
    @include breakpoint($xs) {
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
  }
  span {
    font-size: 1.125rem;
    font-weight: 400;
    display: block;
    @include breakpoint($xs) {
      font-size: 0.75rem;
    }
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
    @include breakpoint($xs) {
      padding: 10px 0 5px 0;
    }
    span {
      color: #ed4337;
      font-size: 16px;
    }
  }
}
</style>