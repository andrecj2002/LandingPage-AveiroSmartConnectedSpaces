<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
import ToggleMenu from "./ToggleMenu.vue";
import Logo from "@/layouts/shared/logo/index.vue";
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";

const isScrolled = ref(false);
const isPastBanner = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  // Assumindo que o banner tem cerca de 760px de altura
  isPastBanner.value = window.scrollY > 700;
};

// We now use the shared `Logo` component which picks the correct asset
// based on the active theme. This keeps branding consistent across the site.

const LIGHT = "LIGHT_THEME";
const DARK = "DARK_THEME";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === LIGHT ? DARK : LIGHT;
};

// ✅ Sync dark class with Vuetify theme
watch(
  () => theme.global.name.value,
  (newTheme) => {
    const html = document.documentElement;
    if (newTheme === DARK) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  },
  { immediate: true }
);

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
  <div><Logo v-show="isPastBanner" /></div>
        <div class="d-flex ga-6">
          <div class="flex items-center gap-4">
            <v-btn
              icon
              flat
              @click="toggleTheme"
              class="rounded-full bg-transparent"
            >
              <Icon
                :icon="
                  theme.global.name.value === LIGHT
                    ? 'solar:sun-bold'
                    : 'solar:moon-stars-bold'
                "
                width="40"
                height="40"
                :style="{ color: isScrolled ? '#ffffff' : '#0E0971' }"
              />
            </v-btn>
          </div>
          <ToggleMenu />
        </div>
      </div>
    </div>
  </header>
</template>
