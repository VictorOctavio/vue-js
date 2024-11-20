<template>
    <div class="sidebar">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/tasks">Tasks</router-link>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .sidebar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
        gap: 20px;
    }
</style>