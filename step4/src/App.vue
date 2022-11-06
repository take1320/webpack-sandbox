<template>
  <div class="app">
    <h1>Hello webpack & Vue.js</h1>
    <HelloButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloButton from "./HelloButton.vue";

export default defineComponent({
  components: {
    HelloButton,
  },
});
</script>

<style scoped>
.app {
  border: 3px green solid;
  padding: 3px;
}

h1 {
  color: blue;
  font-weight: bold;
}
</style>
