<script setup lang="ts">
import { Icon } from "@iconify/vue";
import logo from '~/assets/toolkit-ASCS/assinatura horizontal/vectorial/negativo/ascs-horizontal-min15mm-negativo.svg';

const tiles = [
  { icon: 'mdi:shield-check-outline', color: 'blue' },
  { icon: 'mdi:brain', color: 'yellow' },
  { icon: 'mdi:wave', color: 'white' },
  { icon: 'mdi:code-tags', color: 'white' },
  { logo: true, color: 'blue' },
  { icon: 'mdi:database', color: 'blue' },
  { icon: 'mdi:cloud-outline', color: 'yellow' },
  { icon: 'mdi:wifi', color: 'yellow' },
  { icon: 'mdi:robot-industrial-outline', color: 'white' },
];
</script>

<template>
  <div class="testbed-mosaic">
    <div class="mosaic-grid">
      <div 
        v-for="(tile, index) in tiles" 
        :key="index"
        :class="[
          'mosaic-tile',
          `tile-${tile.color}`,
          { 'tile-logo': tile.logo, 'tile-accent': tile.accent }
        ]"
      >
        <div v-if="tile.logo" class="tile-logo-content">
          <img :src="logo" alt="ASCS Testbed" class="logo-img" />
        </div>
        <div v-else class="tile-content">
          <Icon :icon="tile.icon" class="tile-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testbed-mosaic {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.mosaic-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 4 / 3;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;

  @media (max-width: 960px) {
    max-width: 500px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    aspect-ratio: 3 / 4;
  }

  @media (max-width: 600px) {
    max-width: 350px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    aspect-ratio: 2 / 5;
  }
}

.mosaic-tile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.05);
    z-index: 10;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
}

.tile-blue {
  background: linear-gradient(135deg, #4A6FA5 0%, #3B5A87 100%);
}

.tile-yellow {
  background: linear-gradient(135deg, #F5C842 0%, #E8B42E 100%);
}

.tile-white {
  background: linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%);
}

.tile-logo {
  background: linear-gradient(135deg, #2E4272 0%, #1E2E5A 100%);
  grid-column: span 2;

  @media (max-width: 960px) {
    grid-column: span 1;
  }
}

.tile-accent {
  background: linear-gradient(135deg, #1E2E5A 0%, #0E1A3A 100%);
}

.tile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.tile-icon {
  font-size: clamp(64px, 10vw, 120px);
  
  .tile-blue & {
    color: #F5C842;
  }
  
  .tile-yellow & {
    color: #2E4272;
  }
  
  .tile-white & {
    color: #4A6FA5;
  }

  .tile-accent & {
    color: #F5C842;
  }

  @media (max-width: 600px) {
    font-size: clamp(48px, 12vw, 64px);
  }
}

.tile-title {
  font-size: clamp(11px, 1.2vw, 14px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  .tile-blue & {
    color: rgba(255, 255, 255, 0.9);
  }
  
  .tile-yellow & {
    color: #2E4272;
  }
  
  .tile-white & {
    color: #2E4272;
  }

  @media (max-width: 600px) {
    display: none;
  }
}

.tile-logo-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.logo-img {
  width: 100%;
  height: auto;
  max-width: 280px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));

  @media (max-width: 960px) {
    max-width: 140px;
  }
}
</style>
