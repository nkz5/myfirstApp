<script setup>
import { ref, onMounted } from "vue";
const inputFile = ref();

const input = (target) => {
    console.log(target.target.files);
}
</script>
<template>
    <h1>File Input Page</h1>
    <input type="file" @change="input($event)"/>
</template>
<style>
</style>