<template>
    <h3>{{ weather.weather.temperature }}</h3>
</template>

<script setup lang="ts">
    import { useWeather } from '../composables/useWeather';
    import { onMounted } from 'vue';
    import { useWeatherStore } from '../stores/weatherStore';

    const weather = useWeatherStore();

    onMounted(() => {
        useWeather();
    });

</script>

<style scoped>
    
</style>