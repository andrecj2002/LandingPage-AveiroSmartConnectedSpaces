<script setup lang="ts">
import { Icon } from "@iconify/vue";

const targetGroups = [
  {
    icon: "mdi:factory",
    title: "PME e Startups",
    description: "Com pilotos em evolução a partir de TRL 4",
    color: "primary"
  },
  {
    icon: "mdi:chart-timeline-variant",
    title: "Scaleups e Unidades de I&D",
    description: "Incluindo consórcios nacionais/internacionais que necessitem de prova em ambiente real",
    color: "secondary"
  }
];

const sectors = [
  {
    icon: "mdi:network-outline",
    name: "Telecomunicações e TICE"
  },
  {
    icon: "mdi:city",
    name: "Smart Cities"
  },
  {
    icon: "mdi:car-multiple",
    name: "Mobilidade e Logística"
  },
  {
    icon: "mdi:leaf",
    name: "Ambiente e Energia"
  },
  {
    icon: "mdi:shield-account",
    name: "Segurança"
  },
  {
    icon: "mdi:waves",
    name: "Economia Azul (Blue-Tech)"
  }
];
</script>

<template>
  <div class="target-audience-section bg-surface">
    <SharedSectionSpacer />
    
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="04" title="Para quem?" />
        </v-col>

        <!-- RIGHT SIDE -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <div>
              <h2 class="text-h3 text-dark mb-4">Destinatários</h2>
              <p class="text-body-1 text-dark opacity-80 mb-8">
                A ASCS TB está desenhada para organizações que precisam de validar tecnologia em contexto operacional
              </p>
            </div>

            <!-- Target Group Cards -->
            <v-row class="mb-6">
              <v-col
                v-for="(group, index) in targetGroups"
                :key="index"
                cols="12"
                md="6"
              >
                <div class="target-card pa-8 h-100" :class="`border-${group.color}`">
                  <div class="d-flex flex-column align-center text-center">
                    <v-avatar size="80" :class="`bg-${group.color} mb-4`">
                      <Icon :icon="group.icon" height="40" class="text-white" />
                    </v-avatar>
                    <h3 class="text-h5 text-dark mb-4">{{ group.title }}</h3>
                    <p class="text-body-2 text-dark opacity-90">{{ group.description }}</p>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- Sectors Section -->
            <div class="sectors-container pa-8 bg-primary mx-auto" style="max-width: 900px;">
              <h3 class="text-h5 text-white text-center mb-4">
                <Icon icon="mdi:domain" class="me-2" height="28" />
                Setores e Verticais
              </h3>
              <p class="text-body-1 text-white text-center opacity-80 mb-8">
                Com forte componente digital
              </p>
              
              <v-row>
                <v-col
                  v-for="(sector, index) in sectors"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <div class="sector-item pa-4 d-flex align-center">
                    <v-avatar size="50" class="bg-white me-4 flex-shrink-0">
                      <Icon :icon="sector.icon" height="28" class="text-primary" />
                    </v-avatar>
                    <p class="text-body-1 text-white font-weight-medium mb-0">
                      {{ sector.name }}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>

            <!-- CTA -->
            <div class="text-center mt-8">
              <h3 class="text-h5 text-dark mb-4">
                Quer saber mais sobre como beneficiar da ASCS testbed?
              </h3>
              <v-btn color="primary" size="x-large" href="#contact" class="text-none px-10">
                <Icon icon="mdi:email" class="me-2" height="24" />
                Fale connosco
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    
    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.target-audience-section {
  position: relative;
}

.target-card {
  background: white;
  border-radius: 16px;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  min-height: 300px;
  
  &.border-primary {
    border-color: rgba(14, 9, 113, 0.2);
    
    &:hover {
      border-color: rgb(14, 9, 113);
      box-shadow: 0 8px 32px rgba(14, 9, 113, 0.15);
      transform: translateY(-4px);
    }
  }
  
  &.border-secondary {
    border-color: rgba(255, 87, 34, 0.2);
    
    &:hover {
      border-color: rgb(255, 87, 34);
      box-shadow: 0 8px 32px rgba(255, 87, 34, 0.15);
      transform: translateY(-4px);
    }
  }
}

.sectors-container {
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.sector-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-height: 80px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateX(4px);
  }
}

@media (max-width: 960px) {
  .target-card {
    min-height: 260px;
  }
  
  .sector-item {
    margin-bottom: 0.5rem;
  }
}
</style>
