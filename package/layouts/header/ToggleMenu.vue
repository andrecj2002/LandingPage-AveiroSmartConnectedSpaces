<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const menuOpen = ref(false); // Controls the v-menu open state
interface Item {
  title: string;
  url: string;
}

const items: Item[] = [
  { title: "Início", url: "#home" },
  { title: "Estatísticas", url: "#stats" },
  { title: "Missão", url: "#about" },
  { title: "Serviços", url: "#services" },
  { title: "Onboarding", url: "#onboarding" },
  { title: "Benefícios", url: "#benefits" },
  { title: "Parceiros", url: "#partners" },
  { title: "Contactos", url: "#contact" },
];

// Smooth scroll helper for single-page navigation
const onNavigate = (hash: string) => {
  menuOpen.value = false;
  // small delay to allow menu to close for smoother UX
  setTimeout(() => {
    try {
      const el = document.querySelector(hash);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
      } else {
        // fallback set location hash
        window.location.hash = hash;
      }
    } catch (e) {
      // noop
    }
  }, 120);
};
</script>

<template>
  <v-menu v-model="menuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn
        class="custom-hover-primary"
        rounded="pill"
        variant="text"
        v-bind="props"
        icon
      >
        <v-avatar size="50" color="white">
          <Icon icon="tabler:menu" height="30" />
        </v-avatar>
      </v-btn>
    </template>
    <v-sheet rounded="lg" width="380" elevation="10" class="pa-6 mt-n12 bg-white">
      <div class="d-flex align-center justify-space-between border-b pb-4 ">
        <p class="text-subtitle-1 text-dark">Menu</p>
        <v-btn
          size="35"
          color="dark"
          icon
          variant="text"
          @click="menuOpen = false"
          ><Icon icon="tabler:x" height="26"
        /></v-btn>
      </div>
      <ul class="menu-list d-flex flex-column ga-2 py-4">
        <li v-for="(item, index) in items" :key="index">
          <a
            :href="item.url"
            class="menu-link text-dark font-weight-bold text-h5 text-decoration-none"
            @click.prevent="onNavigate(item.url)"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
      <v-row>
        <v-col cols="12">
          <v-btn
            class="rounded-pill w-100"
            variant="flat"
            size="large"
            color="primary"
            elevation="0"
            @click="onNavigate('#contact')"
          >
            Contacte-nos
          </v-btn>
        </v-col>
      </v-row>
      <div class="d-flex flex-column pt-6">
        <a
          href="tel:+351-234-370-200"
          class="text-dark text-decoration-none text-h6 hover-opacity-70"
          >+351 234 370 200</a
        >
      </div>
    </v-sheet>
  </v-menu>
</template>

<style scoped lang="scss">
.menu-link {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
  
  &:hover {
    transform: translateX(8px);
    color: rgb(var(--v-theme-primary)) !important;
  }
}

.hover-opacity-70:hover {
  opacity: 0.7;
}
</style>