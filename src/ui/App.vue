<template>
  <Count 
    :countValue=count  
    :decrement=decrement 
    :increment="increment" 
    :reset="reset"
  />
</template>

<script setup lang="ts">
  import Count from './components/Count.vue'
  import { ref } from 'vue'
 
  const count = ref(0) 
  const increment = () => count.value++
  const decrement = () => count.value > 0 && count.value--
  const reset = () => count.value = 0

</script>

<style scoped>
</style>
