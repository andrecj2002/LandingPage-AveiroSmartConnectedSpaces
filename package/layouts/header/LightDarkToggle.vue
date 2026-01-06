<script setup lang="ts">
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';

const LIGHT = "LIGHT_THEME";
const DARK = "DARK_THEME";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === LIGHT ? DARK : LIGHT;
};

// track scroll so we can make the icon navy when the header/background is light
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = (window.scrollY ?? 0) > 50;
};
onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <div class="flex items-center gap-4">
    <v-btn
      icon flat
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
</template>
