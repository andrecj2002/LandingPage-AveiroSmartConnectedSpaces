<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const services = [
  {
    title: "Demonstração",
    icon: "mdi:presentation",
    items: [
      "Demonstração de funcionalidades de Plataformas de Serviço em Smart Cities e Blue-Tech",
      "Oferta de APIs a entidades externas",
      "Desenvolvimento de casos de uso nas áreas temáticas ASCS",
    ],
  },
  {
    title: "Capacitação",
    icon: "mdi:rocket-launch-outline",
    items: [
      "Incubação e aceleração (modelo de negócio, financiamento, go-to-market, networking)",
      "Consultoria em Design (user research, cenários de utilização, roadmap funcional, marca)",
      "Consultoria em gestão estratégica de I&D e estruturação de planos de capacitação",
    ],
  },
  {
    title: "Experimentação",
    icon: "mdi:flask",
    items: [
      "Simulação de cenários urbanos em ambientes imersivos (V&AR)",
      "Fabrico Aditivo",
      "Integração de novas fontes de dados",
      "Experimentação com sensores e comunicações em Smart Cities/Territórios e Economia Azul",
      "Criação de Digital Twins em cenários urbanos inteligentes",
      "Materialização de protótipos físicos para cenários de mobilidade",
    ],
  },
  {
    title: "Teste",
    icon: "mdi:test-tube",
    items: [
      "Testes avançados de usabilidade com IA para produtos digitais e não digitais",
      "Acesso a área de testes para serviços marítimos (mar e laguna)",
      "Acesso a Plataformas de Serviço",
      "Acesso à Zona Livre Tecnológica (ZLT) para experimentação com serviços smart city",
      "Acesso a infraestruturas de parceiros públicos (ex: redes 4G/5G/B5G)",
      "Ambiente Edge e Cloud",
      "Soluções AI e IoT",
    ],
  },
];

const currentSlide = ref(0);
</script>

<template>
  <div class="position-relative bg-primary" id="services">
    <SharedSectionSpacer />

    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideLightHeading number="04" title="Serviços" />
        </v-col>

        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeadingWhite
              class="mw-670"
              title="O que fazemos"
              subtitle="Acesso aberto e justo a serviços de experimentação, testes, demonstração e formação a preços abaixo do mercado. Ecossistema colaborativo ligando test beds, hubs e zonas francas tecnológicas."
            />
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Services Carousel -->
    <div class="mt-12">
      <div class="full-width-carousel">
          <div class="carousel-container">
            <v-carousel
              v-model="currentSlide"
              height="580"
              show-arrows="hover"
              :cycle="false"
              class="services-carousel"
              hide-delimiters
            >
              <v-carousel-item
                v-for="(service, index) in services"
                :key="index"
              >
                <div class="carousel-slide-wrapper">
                  <!-- Previous card preview -->
                  <div class="preview-card prev-card">
                    <v-sheet class="pa-6 service-card-preview elevation-4">
                      <div class="d-flex flex-column text-center">
                        <v-avatar size="50" class="mb-3 mx-auto bg-primary">
                          <Icon
                            :icon="
                              services[
                                (index - 1 + services.length) % services.length
                              ].icon
                            "
                            height="26"
                            class="text-white"
                          />
                        </v-avatar>
                        <h3 class="text-h5 service-title mb-3">
                          {{
                            services[
                              (index - 1 + services.length) % services.length
                            ].title
                          }}
                        </h3>
                        <ul class="preview-list text-left">
                          <li
                            v-for="(item, i) in services[
                              (index - 1 + services.length) % services.length
                            ].items.slice(0, 3)"
                            :key="i"
                            class="mb-2 text-body-2"
                          >
                            <Icon
                              icon="mdi:check-circle"
                              class="me-1 text-primary"
                              height="16"
                            />
                            {{
                              item.length > 50
                                ? item.substring(0, 50) + "..."
                                : item
                            }}
                          </li>
                        </ul>
                        <p
                          v-if="
                            services[
                              (index - 1 + services.length) % services.length
                            ].items.length > 3
                          "
                          class="text-caption mt-2 opacity-70"
                        >
                          +{{
                            services[
                              (index - 1 + services.length) % services.length
                            ].items.length - 3
                          }}
                          mais
                        </p>
                      </div>
                    </v-sheet>
                  </div>

                  <!-- Current card -->
                  <div class="current-card">
                    <v-sheet class="pa-10 service-card elevation-12">
                      <div
                        class="d-flex flex-column align-center text-center h-100"
                      >
                        <v-avatar size="80" class="mb-5 bg-primary">
                          <Icon
                            :icon="service.icon"
                            height="40"
                            class="text-white"
                          />
                        </v-avatar>
                        <h2 class="text-h3 service-title mb-6">
                          {{ service.title }}
                        </h2>
                        <ul class="service-list text-left">
                          <li
                            v-for="(item, i) in service.items"
                            :key="i"
                            class="mb-3 text-body-1 service-item"
                          >
                            <Icon
                              icon="mdi:check-circle"
                              class="me-2 text-primary"
                              height="20"
                            />
                            {{ item }}
                          </li>
                        </ul>
                      </div>
                    </v-sheet>
                  </div>

                  <!-- Next card preview -->
                  <div class="preview-card next-card">
                    <v-sheet class="pa-6 service-card-preview elevation-4">
                      <div class="d-flex flex-column text-center">
                        <v-avatar size="50" class="mb-3 mx-auto bg-primary">
                          <Icon
                            :icon="services[(index + 1) % services.length].icon"
                            height="26"
                            class="text-white"
                          />
                        </v-avatar>
                        <h3 class="text-h5 service-title mb-3">
                          {{ services[(index + 1) % services.length].title }}
                        </h3>
                        <ul class="preview-list text-left">
                          <li
                            v-for="(item, i) in services[
                              (index + 1) % services.length
                            ].items.slice(0, 3)"
                            :key="i"
                            class="mb-2 text-body-2"
                          >
                            <Icon
                              icon="mdi:check-circle"
                              class="me-1 text-primary"
                              height="16"
                            />
                            {{
                              item.length > 50
                                ? item.substring(0, 50) + "..."
                                : item
                            }}
                          </li>
                        </ul>
                        <p
                          v-if="
                            services[(index + 1) % services.length].items
                              .length > 3
                          "
                          class="text-caption mt-2 opacity-70"
                        >
                          +{{
                            services[(index + 1) % services.length].items
                              .length - 3
                          }}
                          mais
                        </p>
                      </div>
                    </v-sheet>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>

            <!-- Custom indicators below -->
            <div
              class="custom-indicators d-flex justify-center align-center ga-2 mt-6"
            >
              <div
                v-for="(service, index) in services"
                :key="index"
                class="indicator-dot"
                :class="{ active: currentSlide === index }"
                @click="currentSlide = index"
              ></div>
            </div>
          </div>
      </div>
    </div>

    <div class="container-lg">
      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn class="interactive-button" href="#contact" size="lg" flat>
            <span class="label">Comece a testar hoje</span>
            <v-avatar size="45" class="icon bg-white">
              <Icon
                icon="material-symbols:arrow-outward"
                class="text-primary"
                height="20"
              />
            </v-avatar>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.full-width-carousel {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  overflow: visible;
  padding: 0;
}

.services-carousel {
  :deep(.v-carousel__controls) {
    display: none;
  }
  
  :deep(.v-window__container) {
    overflow: visible !important;
  }
}

.carousel-slide-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 40px;
  padding: 0;

  @media (max-width: 960px) {
    padding: 0 20px;
  }
}

.current-card {
  flex: 0 0 auto;
  max-width: 850px;
  width: 850px;
  z-index: 2;

  @media (max-width: 960px) {
    width: 85%;
  }
}

.preview-card {
  flex: 0 0 auto;
  width: 700px;
  max-width: 700px;
  opacity: 0.4;
  transition: opacity 0.3s ease;

  @media (max-width: 960px) {
    display: none;
  }

  &:hover {
    opacity: 0.6;
  }

  .service-card-preview {
    border-radius: 20px;
    overflow: hidden;
  }

  &.prev-card {
    margin-right: -500px;
  }

  &.next-card {
    margin-left: -500px;
  }
}

.service-card-preview {
  background-color: white;
  border-radius: 20px;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;

  li {
    display: flex;
    align-items: flex-start;
    line-height: 1.4;
  }
}

.custom-indicators {
  padding: 16px 0;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.2);
  }

  &.active {
    background-color: white;
    width: 32px;
    border-radius: 6px;
  }
}

.service-card {
  min-height: 500px;
  overflow-y: auto;
  background-color: white;
  border: none;
  border-radius: 20px;

  @media (max-width: 960px) {
    min-height: 480px;
    padding: 2rem !important;
  }
}

.service-title {
  color: rgb(14, 9, 113);
}

.service-item {
  color: #1a1a1a;
}

/* Estilo das setas do carrossel - mais visíveis */
.services-carousel :deep(.v-btn) {
  color: white !important;
  background-color: rgba(14, 9, 113, 0.7) !important;
  z-index: 3;

  &:hover {
    background-color: rgb(14, 9, 113) !important;
  }
}

.services-carousel :deep(.v-btn--icon) {
  background-color: rgba(14, 9, 113, 0.7) !important;

  &:hover {
    background-color: rgb(14, 9, 113) !important;
  }
}

.service-list {
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
}
</style>
