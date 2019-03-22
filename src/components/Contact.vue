<template>
  <div class="contact">
    <h3>Contact us!</h3>
    <div v-if="error">
      <p>There was an error sending your message.
        <br>Please call us at 919-438-2989 or email us at wakecountymutualaidcollective@gmail.com
      </p>
      <button @click="resetStatus" class="btn btn-primary">Try again</button>
    </div>
    <div v-else-if="messageSent">
      <h4>Message Sent!</h4>
      <button @click="resetForm" class="btn btn-primary">Send Another</button>
    </div>
    <form v-else onsubmit="return false;">
      <div class="form-group">
        <label for="contactEmail">Email</label>
        <input
          v-model="email"
          @input="contactError=false"
          type="email"
          class="form-control 100%"
          id="contactEmail"
          aria-describedby="emailHelp"
        >
        <small
          v-if="contactError"
          class="form-text text-danger"
        >Please provide either a phone number or email so that we can contact you!</small>
      </div>
      <div class="form-group">
        <label for="contactPhoneNum">Phone</label>
        <input
          v-model="phone"
          @input="contactError=false"
          type="tel"
          class="form-control mx-auto"
          id="contactPhoneNum"
          aria-describedby="contactPhoneNumHelp"
        >
        <small class="form-text text-muted">Please include at least phone or email</small>
      </div>
      <div class="form-group">
        <label for="contactMessage">Message</label>
        <textarea
          v-model="message"
          @input="messageError=false"
          class="form-control mx-auto"
          id="contactMessage"
          rows="3"
        ></textarea>
        <small
          v-if="messageError"
          class="form-text text-danger"
        >Please provide a message so that we can help you!</small>
      </div>
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <button v-else @click="sendMessage" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => {
    return {
      email: "",
      phone: "",
      message: "",
      contactError: false,
      messageError: false,
      loading: false,
      messageSent: false,
      error: false
    };
  },
  methods: {
    resetForm() {
      this.email = "";
      this.phone = "";
      this.message = "";
      this.resetStatus();
    },
    resetStatus() {
      this.contactError = false;
      this.messageError = false;
      this.loading = false;
      this.messageSent = false;
      this.error = false;
    },
    async sendMessage() {
      if (this.message.trim().length < 3) {
        return (this.messageError = true);
      }
      if (this.email.trim().length < 4 && this.phone.trim().length < 4) {
        return (this.contactError = true);
      }
      try {
        this.loading = true;
        await this.$fireFunctions.sendMail({ ...this.$data });
        this.messageSent = true;
        this.loading = false;
      } catch (err) {
        console.log(err);
        this.loading = false;
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.contact {
  margin: 0 auto;
  max-width: 400px;
}
</style>