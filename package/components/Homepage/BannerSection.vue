<script setup lang="ts">
// Title image (negative horizontal ASCS logo) to be used as the hero title
import titleLogo from '~/assets/toolkit-ASCS/assinatura horizontal/vectorial/negativo/ascs-horizontal-min15mm-negativo.svg';
import TestbedMosaic from './TestbedMosaic.vue';
import pciBg from '~/assets/pci_edited_edited_min.jpg';
</script>
<template>
  <v-container fluid class="hero-container pa-0">
    <!-- Mosaic background with testbed areas -->
    <div class="hero-solid" :style="{ backgroundImage: `url(${pciBg})` }">
      <TestbedMosaic />
    </div>

    <!-- Content bottom-left -->
    <div class="container-lg hero-wrapper">
      <!-- Overlay copy: positioned absolutely on the right at logo level -->
      <div class="hero-overlay-copy" role="region" aria-label="Hero">
        <p class="hero-overlay-sublead">Infraestrutura de experimentação em ambiente real</p>
        <p class="hero-overlay-tagline">Demonstração, experimentação, teste e capacitação para acelerar pilotos digitais em espaços urbanos, portuários e marinhos</p>
        <div class="hero-overlay-ctas">
          <v-btn color="white" size="x-large" href="#contact" class="text-none">Fale connosco</v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.hero-solid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-color: #0E0971;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  
  /* Overlay azul sobre a imagem */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(14, 9, 113, 0.92);
    z-index: 1;
    pointer-events: none;
    
    @media (max-width: 960px) {
      background: rgba(14, 9, 113, 0.85);
    }
  }
  
  /* O mosaico fica acima do overlay */
  > * {
    position: relative;
    z-index: 2;
  }
}
.hero-container { 
  position: relative; 
  min-height: 760px;
  
  @media (max-width: 960px) {
    min-height: auto;
  }
  
  @media (max-width: 600px) {
    min-height: auto;
  }
}
.hero-wrapper {
  position: relative;
  height: 760px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 20px;
  padding-right: 60px;
  
  @media (max-width: 960px) {
    height: auto;
    min-height: 700px;
    padding: 30px 30px 40px 30px;
    align-items: flex-end;
    justify-content: flex-end;
  }
  
  @media (max-width: 600px) {
    min-height: 600px;
    padding: 20px 20px 40px 20px;
    align-items: flex-end;
    justify-content: flex-end;
  }
}

/* overlay copy shown on top of the hero image - readable but non-intrusive */
.hero-overlay-copy {
  position: relative;
  z-index: 12;
  max-width: 600px;
  width: 100%;
  text-align: right;
  color: #ffffff;
  padding: 32px 40px;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  
  @media (max-width: 960px) {
    max-width: 500px;
    padding: 24px 20px;
    text-align: right;
  }
  
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 20px 10px;
    text-align: right;
  }
}
.hero-overlay-lead {
  margin: 0 0 8px 0;
  font-size: clamp(18px, 2.4vw, 24px);
  opacity: 0.98;
  font-weight: 700;
}
.hero-overlay-sublead {
  margin: 0 0 12px 0;
  font-size: clamp(18px, 2.8vw, 28px);
  opacity: 0.98;
  font-weight: 600;
  line-height: 1.3;
}
.hero-overlay-tagline {
  margin: 0 0 24px 0;
  font-size: clamp(16px, 1.9vw, 19px);
  opacity: 0.90;
  font-style: italic;
  line-height: 1.4;
}
.hero-overlay-ctas {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  flex-wrap: wrap;
  
  @media (max-width: 960px) {
    justify-content: flex-end;
  }
  
  @media (max-width: 600px) {
    justify-content: flex-end;
  }
}

/* Hero title styling to match provided artwork */
.hero-title-wrap { display: flex; flex-direction: column; justify-content: center; }
.hero-main-title {
  color: #ffffff;
  text-transform: uppercase;
  line-height: 0.9;
  font-weight: 600; /* semibold */
  letter-spacing: 0.02em;
  margin: 0;
  font-size: clamp(32px, 8vw, 96px);
}
.hero-main-title div { display: block; }
.hero-title-image {
  /* Full-bleed title image: occupy full width of the hero */
  width: 45%;
  max-width: none;
  max-height: 100vh; /* allow it to fill the hero vertically as needed */
  height: auto;
  display: block;
  margin: 0 0 28px 0;
  position: relative;
  z-index: 10; /* sit above overlay and hero background */
  background: transparent;
  filter: drop-shadow(0 24px 48px rgba(0,0,0,0.65));
  object-fit: contain;
}

/* Title image overrides */
/* hero-title-image styles defined earlier */
/* hero-title-wrap kept for legacy but title is absolutely positioned via .hero-title-abs */
.hero-title-wrap { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }

/* Absolute wrapper for the title image: center horizontally and place above the bottom
   where the blue overlay begins. Tuned per breakpoint so it visually aligns with the
   gradient start on most screens. */
.hero-title-abs {
  position: absolute;
  left: 0;
  transform: none;
  z-index: 8; /* above overlay */
  width: 100%;
  display: flex;
  justify-content: flex-start; /* align the image to the left */
  pointer-events: none;
  /* small left gutter so it doesn't touch the viewport edge */
  padding-left: 6%;
  /* anchor near the bottom where the overlay begins */
  bottom: 3%; /* Moved lower to match overlay */
}

@media (max-width: 1200px) {
  .hero-title-abs { bottom: 2%; padding-left: 5%; }
  .hero-title-image { max-height: 75vh; }
  .hero-overlay-copy { right: 5%; width: 44%; bottom: 2%; }
}

@media (max-width: 768px) {
  .hero-title-abs { bottom: 2%; padding-left: 4%; }
  .hero-title-image { max-height: 42vh; width: 70%; }
  .hero-overlay-copy {
    position: relative;
    right: auto;
    bottom: auto;
    transform: none;
    margin-top: 18px;
    width: 100%;
    text-align: center;
    z-index: 12;
    padding: 12px 8px;
  }
}
</style>
