<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Partner logos
const partners = [
  { name: 'PCI Creative Science Park', logo: new URL('~/assets/PCI.png', import.meta.url).href, url: 'https://www.pci.pt' },
  { name: 'Altice Labs', logo: new URL('~/assets/altice-labs.png', import.meta.url).href, url: 'https://www.alticelabs.com' },
  { name: 'Porto de Aveiro', logo: new URL('~/assets/porto-aveiro.png', import.meta.url).href, url: 'https://www.portodeaveiro.pt' },
  { name: 'Universidade de Aveiro', logo: new URL('~/assets/ua.avif', import.meta.url).href, url: 'https://www.ua.pt' },
  { name: 'Câmara Municipal de Aveiro', logo: new URL('~/assets/cm-aveiro.png', import.meta.url).href, url: 'https://www.cm-aveiro.pt' },
  { name: 'Instituto de Telecomunicações', logo: new URL('~/assets/it.png', import.meta.url).href, url: 'https://www.it.pt' },
  { name: 'TICE.PT', logo: new URL('~/assets/tice.png', import.meta.url).href, url: 'https://www.tice.pt' },
  { name: 'Forum Oceano', logo: new URL('~/assets/forum-oceano.png', import.meta.url).href, url: 'https://www.forumoceano.pt' },
  { name: 'Câmara Municipal de Ílhavo', logo: new URL('~/assets/cm-ilhavo.png', import.meta.url).href, url: 'https://www.cm-ilhavo.pt' },
];

// No script needed for static grid layout
</script>

<template>
  <div class="partners-section">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 class="text-h2 mb-4">Parceiros do Consórcio</h2>
          <p class="text-subtitle-1 opacity-70 mb-8">
            Ecossistema colaborativo de excelência para acelerar a inovação
          </p>
        </v-col>
      </v-row>
      
    <!-- Partners Grid -->
    <v-container>
      <v-row class="justify-center">
        <!-- First row: 5 partners -->
        <v-col 
          v-for="(partner, index) in partners.slice(0, 5)"
          :key="index"
          cols="6"
          sm="4"
          md="2"
          class="d-flex justify-center align-center"
        >
          <a 
            :href="partner.url" 
            target="_blank" 
            rel="noopener noreferrer"
            :title="partner.name"
            class="partner-link"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="partner-logo"
            />
          </a>
        </v-col>
      </v-row>
      
      <v-row class="justify-center mt-4">
        <!-- Second row: 4 partners centered with offset -->
        <v-col md="1" class="d-none d-md-block"></v-col>
        <v-col 
          v-for="(partner, index) in partners.slice(5, 9)"
          :key="index + 5"
          cols="6"
          sm="4"
          md="2"
          class="d-flex justify-center align-center"
        >
          <a 
            :href="partner.url" 
            target="_blank" 
            rel="noopener noreferrer"
            :title="partner.name"
            class="partner-link"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="partner-logo"
            />
          </a>
        </v-col>
      </v-row>
    </v-container>
    </div>
    <div style="padding: 20px 0;"></div>
  </div>
</template>

<style scoped lang="scss">
.partners-section {
  background-color: white !important;
}

.partner-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  text-decoration: none;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    
    .partner-logo {
      opacity: 0.8;
    }
  }
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

/* Dark mode - manter fundo branco */
html.dark {
  .partners-section {
    background-color: white !important;
  }
  
  h2, p {
    color: #1a1a1a !important;
  }
}
</style>
