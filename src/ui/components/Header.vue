<template>
    <header class="header">
        <div class="header-title">Temp acutal: <Weather :temp="10"/> </div>
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
    }

    .header-title {
        font-size: 1.5rem;
    }    
</style>