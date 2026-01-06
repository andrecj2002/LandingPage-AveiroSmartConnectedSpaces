<script setup lang="ts">
// Use the white PNG logo in the header for a clean, consistent appearance
import LightLogo from '~/assets/logobranco_png.png';

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
</script>
<template>
    <div class="logo lh-normal">
        <a href="#home" @click.prevent="scrollTo('#home')">
            <img :src="LightLogo" class="header-logo" alt="Aveiro Smart Connected Spaces" />
        </a>
        </div>
</template>

<style scoped>
/* Constrain header logo so it doesn't dominate the navbar */
.header-logo {
    height: 36px; /* comfortable desktop header height */
    width: auto;
    display: block;
}
@media (max-width: 768px) {
    .header-logo { height: 28px; }
}
</style>