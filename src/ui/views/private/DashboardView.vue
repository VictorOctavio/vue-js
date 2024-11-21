<template>
    <div>
        <h1>Dashboard</h1>
        <h3>Hola, {{ registerForm.nickname }}</h3>
        <h3>{{ registerForm.email }}</h3>
    </div>
</template>

<script setup lang="ts">
    import { useRegisterStore } from '../../modules/register/stores/registerStore';

    const { registerForm } = useRegisterStore();
</script>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
</style>