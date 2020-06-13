<template>
  <div id="app" class="bg-red-300">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      message: 'Hello Vue1!' as string,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
