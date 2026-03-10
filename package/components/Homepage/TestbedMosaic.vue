<script setup lang="ts">
import { Icon } from '@iconify/vue';
import logo from '~/assets/toolkit-ASCS/assinatura horizontal/vectorial/negativo/ascs-horizontal-min15mm-negativo.svg';

// Mosaico com layout escalonado baseado na imagem original
const tiles = [
  // Linha 1 - 4 tiles
  { icon: 'mdi:shield-check', color: '#2c4a8f', iconColor: '#fbbf24' }, // Azul escuro + ícone amarelo
  { icon: 'mdi:brain', color: '#fbbf24', iconColor: '#2c4a8f' }, // Amarelo + ícone azul
  { icon: 'mdi:waves', color: '#d1d5db', iconColor: '#5b7fb8' }, // Cinzento claro + ícone azul
  { icon: 'mdi:code-tags', color: '#d1d5db', iconColor: '#5b7fb8' }, // Cinzento claro + ícone azul
  
  // Linha 2 - 3 tiles
  { logo: true, color: '#2c4a8f' }, // Logo ASCS - Azul escuro
  { icon: 'mdi:database', color: '#5b7fb8', iconColor: '#fbbf24' }, // Azul médio + ícone amarelo
  { icon: 'mdi:cloud-outline', color: '#fbbf24', iconColor: '#5b7fb8' }, // Amarelo + ícone azul
  
  // Linha 3 - 2 tiles
  { icon: 'mdi:wifi', color: '#fbbf24', iconColor: '#5b7fb8' }, // Amarelo + ícone azul
  { icon: 'mdi:crane', color: '#d1d5db', iconColor: '#5b7fb8' }, // Cinzento claro + ícone azul (grua/guindaste)
];
</script>

<template>
  <div class="testbed-mosaic">
    <div
      v-for="(tile, index) in tiles"
      :key="index"
      class="mosaic-tile"
      :class="{ 
        'tile-logo': tile.logo,
        [`tile-${index}`]: true
      }"
      :style="{ backgroundColor: tile.color }"
    >
      <Icon v-if="tile.icon" :icon="tile.icon" class="tile-icon" :style="{ color: tile.iconColor }" />
      <img v-if="tile.logo" :src="logo" alt="ASCS Logo" class="logo-in-mosaic" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.testbed-mosaic {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 675px;
  display: grid;
  grid-template-columns: repeat(4, 225px);
  grid-template-rows: repeat(3, 225px);
  opacity: 0.95;
  pointer-events: none;
  z-index: 2;
  gap: 0;
}

.mosaic-tile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

// Layout escalonado
// Linha 1: tiles 0-3 (4 colunas)
.tile-0, .tile-1, .tile-2, .tile-3 {
  grid-row: 1;
}
.tile-0 { grid-column: 1; }
.tile-1 { grid-column: 2; }
.tile-2 { grid-column: 3; }
.tile-3 { grid-column: 4; }

// Linha 2: tiles 4-6 (3 colunas)
.tile-4, .tile-5, .tile-6 {
  grid-row: 2;
}
.tile-4 { grid-column: 1; }
.tile-5 { grid-column: 2; }
.tile-6 { grid-column: 3; }

// Linha 3: tiles 7-8 (2 colunas)
.tile-7, .tile-8 {
  grid-row: 3;
}
.tile-7 { grid-column: 1; }
.tile-8 { grid-column: 2; }

.tile-icon {
  font-size: 7rem;
  opacity: 1;
}

.tile-logo {
  padding: 2rem;
}

.logo-in-mosaic {
  width: 90%;
  height: auto;
  filter: brightness(0) invert(1);
  opacity: 1;
}

@media (max-width: 1600px) {
  .testbed-mosaic {
    width: 800px;
    height: 600px;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(3, 200px);
  }
  
  .tile-icon {
    font-size: 6.5rem;
  }
}

@media (max-width: 1280px) {
  .testbed-mosaic {
    width: 700px;
    height: 525px;
    grid-template-columns: repeat(4, 175px);
    grid-template-rows: repeat(3, 175px);
  }
  
  .tile-icon {
    font-size: 5.5rem;
  }
}

@media (max-width: 960px) {
  .testbed-mosaic {
    width: 600px;
    height: 450px;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(3, 150px);
  }
  
  .tile-icon {
    font-size: 4.5rem;
  }
}

@media (max-width: 600px) {
  .testbed-mosaic {
    width: 440px;
    height: 330px;
    grid-template-columns: repeat(4, 110px);
    grid-template-rows: repeat(3, 110px);
    opacity: 0.85;
  }
  
  .tile-icon {
    font-size: 3.2rem;
  }
}
</style>
