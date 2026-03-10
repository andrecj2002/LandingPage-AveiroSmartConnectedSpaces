<script setup>
const props = defineProps({
  subtitle: String,
  title: String,
});
</script>
<template>
  <div class="d-flex flex-column ga-5">
    <h2 class="text-h3 text-dark">{{ title }}</h2>
    <p class="text-body-1 text-dark opacity-80">{{ subtitle }}</p>
  </div>
</template>
