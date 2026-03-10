<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

// Partner logos with descriptions
const partners = [
  { 
    name: 'PCI – Parque de Ciência e Inovação', 
    shortName: 'PCI – Parque de Ciência e Inovação (líder)',
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
    shortName: 'Administração do Porto de Aveiro (APA)',
    logo: new URL('~/assets/porto-aveiro.png', import.meta.url).href, 
    url: 'https://www.portodeaveiro.pt',
    description: 'Contexto operacional portuário, dados e infraestruturas para pilotos em logística, energia e segurança.'
  },
  { 
    name: 'Universidade de Aveiro', 
    shortName: 'Universidade de Aveiro (UA)',
    logo: new URL('~/assets/ua.avif', import.meta.url).href, 
    url: 'https://www.ua.pt',
    description: 'Competências científicas e infraestruturas, incluindo capacidades de simulação, prototipagem e ambiente marinho.'
  },
  { 
    name: 'Instituto de Telecomunicações', 
    shortName: 'Instituto de Telecomunicações (IT)',
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
    name: 'Municípios de Aveiro e Ílhavo', 
    shortName: 'Municípios de Aveiro e Ílhavo (colaboração)',
    logo: new URL('~/assets/cm-aveiro.png', import.meta.url).href, 
    url: 'https://www.cm-aveiro.pt',
    description: 'Acesso a território e infraestruturas para testes em contexto real.'
  },
];

const openPanel = ref<number | undefined>(undefined);
</script>

<template>
  <div class="partners-section bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="08" title="Parceiros" />
        </v-col>

        <!-- RIGHT SIDE -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <div>
              <h2 class="text-h3 text-dark mb-4">Parceiros do Consórcio</h2>
              <p class="text-body-1 text-dark opacity-80 mb-8">
                Ecossistema colaborativo de excelência para acelerar a inovação
              </p>
            </div>
      
            <!-- Partners Accordion -->
            <v-expansion-panels v-model="openPanel" variant="accordion">
              <v-expansion-panel
                v-for="(partner, index) in partners"
                :key="index"
                :value="index"
                class="partner-panel mb-3"
              >
                <v-expansion-panel-title class="partner-header">
                  <div class="d-flex align-center ga-4">
                    <div class="partner-logo-container">
                      <img 
                        :src="partner.logo" 
                        :alt="partner.name"
                        class="partner-logo-small"
                      />
                    </div>
                    <h3 class="text-h5 text-dark mb-0">{{ partner.shortName }}</h3>
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p class="text-body-1 text-dark opacity-80 mt-2">
                    {{ partner.description }}
                  </p>
                  <v-btn
                    :href="partner.url"
                    target="_blank"
                    variant="text"
                    color="primary"
                    class="text-none mt-2 px-0"
                    size="small"
                  >
                    Visitar website
                    <Icon icon="mdi:open-in-new" class="ml-1" height="16" />
                  </v-btn>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.partners-section {
  position: relative;
}

.partner-panel {
  border: 2px solid rgba(14, 9, 113, 0.1);
  border-radius: 12px;
  overflow: hidden;
  
  &:hover {
    border-color: rgba(14, 9, 113, 0.3);
  }
}

.partner-header {
  padding: 20px;
  
  &:hover {
    background-color: rgba(14, 9, 113, 0.02);
  }
}

.partner-logo-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 8px;
  padding: 8px;
}

.partner-logo-small {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
</style>
