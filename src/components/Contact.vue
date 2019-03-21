<template>
  <div class="contact px-3">
    <h3>Contact us!</h3>
    <form>
      <div class="form-group">
        <label for="contactEmail">Email (optional)</label>
        <input
          v-model="email"
          type="email"
          class="form-control  100%"
          id="contactEmail"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="form-group">
        <label for="contactPhoneNum">Phone (optional)</label>
        <input
          v-model="phone"
          type="phone"
          class="form-control mx-auto"
          id="contactPhoneNum"
          aria-describedby="contactPhoneNumHelp"
        >
      </div>
      <div class="form-group">
        <label for="contactMessage">Message</label>
        <textarea v-model="message" class="form-control mx-auto" id="contactMessage" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
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
      message: ""
    };
  }
};
</script>

<style scoped>
.contact {
  margin: 0 auto;
  max-width: 400px;
}
</style>