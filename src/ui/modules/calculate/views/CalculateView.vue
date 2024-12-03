<template>
    <div style="display: flex; flex-direction: column;">
        <h3>Computed Properties</h3>
        <input type="number" v-model="valor">
        {{ double }}
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    const valor = ref('');

    const double = computed(() => valor.value * 2);
</script>

<style scoped></style>