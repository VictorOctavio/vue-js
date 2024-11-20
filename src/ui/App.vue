<template>
  <div class="wrapper">
    <Sidebar v-if="token" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue';
  import { ref } from 'vue';

  const token = ref<string | null>('asdas');
</script>

<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 1fr;
}
</style>
