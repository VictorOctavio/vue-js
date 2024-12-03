<template>
    <header class="header">
        <Weather />
    </header>
</template>

<script setup lang="ts">
    // @ts-ignore
    import Weather from './Weather.vue';
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        background-color: #333;
        padding: 10px 20px;
        position: sticky;
        top: 0;
        color: white;
        margin-bottom: 50px;
    }

    .header-title {
        font-size: 1.5rem;
    }    
</style>