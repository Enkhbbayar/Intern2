<template>
  <span class="text-blue-accent-2">
    <v-btn 
      append-icon="mdi-cart-plus" 
      block 
      rounded 
      class="glassy-button button-margin">
      <p class="button-text" style="font-weight: 700; text-transform: uppercase; font-size: 16px;">худалдаж авах</p>
    </v-btn>
  </span>
</template>

<script>
export default {
  methods: {
    scrollToMiddle() {
      const middlePosition = document.body.scrollHeight / 1;
      window.scrollTo({
        top: middlePosition,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.button-margin {
  margin-top: 15%;
  padding: 30px 0;
  /* font-size: large; */
}
.glassy-button {
  background: rgba(24, 130, 210, 0.429);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(68, 138, 255, 0.3); /* Border with a slight blue tint */
  color: white; /* Blue text color */
  transition: all 0.3s ease;
  filter: drop-shadow(5px 3px 17px #0d00ff);
}

.glassy-button:hover {
  background: rgba(68, 138, 255, 0.3); /* Slightly more opaque on hover */
  border-color: rgba(68, 138, 255, 0.5); /* More defined border on hover */
}

.button-margin {
  margin: 10px 0;
}

.button-text {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
}
</style>