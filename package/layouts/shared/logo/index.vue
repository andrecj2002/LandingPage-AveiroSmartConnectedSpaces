<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
// static imports for the two header variants
import whiteLogo from '~/assets/logobranco_png.png';
import positiveLogo from '~/assets/toolkit-ASCS/assinatura horizontal/vectorial/positivo/ascs-horizontal-min5mm--positivo.svg';

const isAtTop = ref(true);
const SCROLL_THRESHOLD = 24; // px from top considered "at top"
const route = useRoute();
const router = useRouter();

const onScroll = () => {
  isAtTop.value = (window.scrollY ?? 0) <= SCROLL_THRESHOLD;
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const logoSrc = computed(() => {
  if (route.path === '/privacy-policy') {
    return isAtTop.value ? positiveLogo : whiteLogo;
  }

  if (route.path !== '/') {
    return whiteLogo;
  }

  return isAtTop.value ? positiveLogo : whiteLogo;
});

const scrollTo = (hash: string) => {
  try {
    const el = document.querySelector(hash);
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  } catch (e) {
    // noop
  }
};

const onLogoClick = () => {
  if (route.path === '/') {
    scrollTo('#home');
    return;
  }

  router.push('/');
};
</script>

<template>
  <div class="logo lh-normal">
    <a href="/" @click.prevent="onLogoClick">
      <img :src="logoSrc" class="header-logo" alt="Aveiro Smart Connected Spaces" />
    </a>
  </div>
</template>

<style scoped>
/* Slightly larger header logo (user requested bigger than previous) */
.header-logo {
  height: 80px; /* slightly larger for visibility */
  width: auto;
  display: block;
}
@media (max-width: 1024px) {
  .header-logo { height: 72px; }
}
@media (max-width: 768px) {
  .header-logo { height: 64px; }
}
</style>
