<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Partner logos with descriptions
const partners = [
  { 
    name: 'PCI Creative Science Park', 
    shortName: 'PCI (líder)',
    logo: new URL('~/assets/PCI.png', import.meta.url).href, 
    url: 'https://www.pci.pt',
    description: 'Coordenação, operação e ligação ao ecossistema; incubação/aceleração e capacidades de design e desenvolvimento de negócio.'
  },
  { 
    name: 'Altice Labs', 
    shortName: 'Altice Labs',
    logo: new URL('~/assets/altice-labs.png', import.meta.url).href, 
    url: 'https://www.alticelabs.com',
    description: 'Plataformas de serviço, integração de verticais, APIs, comunicações e suporte tecnológico.'
  },
  { 
    name: 'Administração do Porto de Aveiro', 
    shortName: 'Porto de Aveiro',
    logo: new URL('~/assets/porto-aveiro.png', import.meta.url).href, 
    url: 'https://www.portodeaveiro.pt',
    description: 'Contexto operacional portuário, dados e infraestruturas para pilotos em logística, energia e segurança.'
  },
  { 
    name: 'Universidade de Aveiro', 
    shortName: 'Universidade de Aveiro',
    logo: new URL('~/assets/ua.avif', import.meta.url).href, 
    url: 'https://www.ua.pt',
    description: 'Competências científicas e infraestruturas, incluindo capacidades de simulação, prototipagem e ambiente marinho.'
  },
  { 
    name: 'Câmara Municipal de Aveiro', 
    shortName: 'CM Aveiro',
    logo: new URL('~/assets/cm-aveiro.png', import.meta.url).href, 
    url: 'https://www.cm-aveiro.pt',
    description: 'Acesso a território e infraestruturas para testes em contexto real.'
  },
  { 
    name: 'Instituto de Telecomunicações', 
    shortName: 'Instituto de Telecomunicações',
    logo: new URL('~/assets/it.png', import.meta.url).href, 
    url: 'https://www.it.pt',
    description: 'I&D aplicada e suporte técnico em conectividade, IoT, edge/cloud, IA, cibersegurança e redes.'
  },
  { 
    name: 'TICE.PT', 
    shortName: 'TICE.PT',
    logo: new URL('~/assets/tice.png', import.meta.url).href, 
    url: 'https://www.tice.pt',
    description: 'Mobilização e ligação ao tecido empresarial e redes de inovação digital.'
  },
  { 
    name: 'Fórum Oceano', 
    shortName: 'Fórum Oceano',
    logo: new URL('~/assets/forum-oceano.png', import.meta.url).href, 
    url: 'https://www.forumoceano.pt',
    description: 'Ligação à economia do mar e cadeias de valor Blue-Tech, com capacidade de ativação de mercado.'
  },
  { 
    name: 'Câmara Municipal de Ílhavo', 
    shortName: 'CM Ílhavo',
    logo: new URL('~/assets/cm-ilhavo.png', import.meta.url).href, 
    url: 'https://www.cm-ilhavo.pt',
    description: 'Acesso a território e infraestruturas para testes em contexto real.'
  },
];
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
          <div class="partner-container">
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
            <div class="partner-overlay">
              <h4 class="text-h6 mb-2 text-white">{{ partner.shortName }}</h4>
              <p class="text-body-2 text-white">{{ partner.description }}</p>
            </div>
          </div>
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
          <div class="partner-container">
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
            <div class="partner-overlay">
              <h4 class="text-h6 mb-2 text-white">{{ partner.shortName }}</h4>
              <p class="text-body-2 text-white">{{ partner.description }}</p>
            </div>
          </div>
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

.partner-container {
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

.partner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(14, 9, 113, 0.95), rgba(14, 9, 113, 0.85));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border-radius: 8px;
  z-index: 2;
  text-align: center;
  overflow-y: auto;
  
  h4 {
    font-size: 0.75rem !important;
    line-height: 1.2;
    margin-bottom: 4px !important;
    font-weight: 600;
  }
  
  p {
    font-size: 0.65rem !important;
    line-height: 1.3;
    margin: 0;
  }
}

.partner-container:hover {
  .partner-overlay {
    opacity: 1;
    visibility: visible;
  }
  
  .partner-link {
    transform: scale(1.05);
  }
}
</style>
