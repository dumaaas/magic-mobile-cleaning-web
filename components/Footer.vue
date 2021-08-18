<template>
  <footer>
    <div class="footer">
      <div class="footer-left">
        <h4>Contact Us</h4>
        <p>Adress: <span>Yzhgast Streat 81A, Chicago Illanois </span></p>
        <p>Phone: <span>(773) 209 3850 (312) 200 2093</span></p>
        <p>Email: <span>mobilemagicclearning33@gmail.com </span></p>
        <div class="footer-left__social">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
        </div>
      </div>
      <div class="footer-right">
        <h2>
          Want to Book?
          <span> Fill this form and we will contact you </span>
        </h2>
        <div v-if="error">
          {{ error }}
        </div>

        <form id="form" v-on:submit="handleSubmit" v-else>
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
            <button type="submit">Send</button>
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
footer {
  background-color: #111827;
  .footer {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    color: white;
    span {
      color: gray;
    }
    &-left {
      h4 {
        text-transform: uppercase;
        font-size: 19px;
        letter-spacing: 1.2px;
      }
      p {
        padding-top: 20px;
      }
      &__social {
        p {
          display: inline-block;
        }
      }
    }

    &-right {
      h2 {
        text-transform: uppercase;
        font-size: 27px;
      }
      span {
        font-size: 18px;
        display: block;
      }
      input {
        background-color: transparent;
        border: 1px solid gray;
        border-radius: 20px;
        height: 38px;
        width: 220px;
        margin: 20px 20px 20px 0;
      }

      button {
        border: 0px;
        background-color: #6774ff;
        padding: 10px 40px;
        text-transform: uppercase;
        color: white;
        border-radius: 20px;
      }
    }
  }
}
</style>