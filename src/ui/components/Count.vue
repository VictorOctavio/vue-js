<template>
    <h1>Hello world, mi contador {{ countValue }}</h1>
    <div class="wrapper">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script setup lang="ts">
   
    defineProps<{
        increment: () => Number,
        decrement: () => Number | false,
        reset: () => Number,
        countValue: Number
    }>()
    
</script>

<style scoped>
    .wrapper {
        display: flex;
        gap: 10px;
        justify-content: center;
    }
</style>
