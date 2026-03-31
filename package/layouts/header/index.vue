<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRoute } from "vue-router";
import ToggleMenu from "./ToggleMenu.vue";
import Logo from "@/layouts/shared/logo/index.vue";

const isScrolled = ref(false);
const isPastBanner = ref(false);
const route = useRoute();

const shouldShowLogo = computed(() => {
  if (route.path !== "/") {
    return true;
  }

  return isPastBanner.value;
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  // Assumindo que o banner tem cerca de 760px de altura
  isPastBanner.value = window.scrollY > 700;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'header',
      isScrolled ? 'bg-primary sticky-header shadow-md' : 'bg-transparent ',
    ]"
  >
    <div class="container-lg">
      <div class="d-flex justify-space-between align-center">
        <div><Logo v-show="shouldShowLogo" /></div>
        <div class="d-flex ga-6">
          <ToggleMenu />
        </div>
      </div>
    </div>
  </header>
</template>
