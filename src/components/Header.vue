<template>
  <div class="hello">
    <h1>Wake County Mutual Aid Collective</h1>
    <p>
      Are you sick, cold, tired, displaced, a survivor of domestic abuse or in need of aid?
      <br>Call us at (919)-438-2989 and leave us a message with how can help.
      <br>WE DO NOT CALL THE POLICE EVER! WE KEEP US SAFE!
    </p>
    <a href="https://www.gofundme.com/wake-county-mutual-aid-fund" target="_blank" rel="noopener">
      Please consider donating to our fund to help those facing emergency situations!
      <br>Click here to donate to our gofundme!
    </a>
    <br>
    <br>
    <Contact/>
    <h3>Links</h3>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/Wake-County-Mutual-Aid-Collective-390108055141422/"
          target="_blank"
          rel="noopener"
        >Facebook</a>
      </li>
      <li>
        <a href="https://twitter.com/WCMutualAid" target="_blank" rel="noopener">Twitter</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Contact from "./Contact.vue";

export default {
  name: "HelloWorld",
  components: {
    Contact
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
</style>

