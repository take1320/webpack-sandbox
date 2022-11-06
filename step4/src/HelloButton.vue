<template>
  <button @click="hello()">🍣 hello🍺</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hello } from "./hello";

export default defineComponent({
  setup: () => {
    return { hello };
  },
});
</script>

<style scoped>
button {
  background-color: aqua;
}
</style>
