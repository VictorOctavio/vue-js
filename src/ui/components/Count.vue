<template>
    <h1>Hello world, mi contador {{ count }}</h1>
    <div class="wrapper">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const count = ref(0) 
    const increment = () => count.value++
    const decrement = () => count.value > 0 && count.value--
    const reset = () => count.value = 0
</script>

<style scoped>
    .wrapper {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
</style>
