<script setup lang="ts">
import { ref, computed } from "vue";
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

const currentIndex = ref(1); // Começa com o segundo item como centro

const visibleServices = computed(() => {
  const result = [];
  for (let i = -1; i <= 1; i++) {
    const index = (currentIndex.value + i + services.length) % services.length;
    result.push({
      service: services[index],
      index: index,
      position: i // -1 = prev, 0 = current, 1 = next
    });
  }
  return result;
});

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % services.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + services.length) % services.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="position-relative bg-primary" id="services">
    <SharedSectionSpacer />

    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideLightHeading number="05" title="Serviços" />
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
            <!-- Navigation arrows -->
            <button class="carousel-nav prev" @click="prevSlide" aria-label="Previous">
              <Icon icon="mdi:chevron-left" height="32" />
            </button>
            <button class="carousel-nav next" @click="nextSlide" aria-label="Next">
              <Icon icon="mdi:chevron-right" height="32" />
            </button>

            <!-- Carousel wrapper -->
            <div class="carousel-track-wrapper">
              <transition-group name="slide" tag="div" class="carousel-track">
                <div
                  v-for="item in visibleServices"
                  :key="item.index"
                  class="carousel-item"
                  :class="{
                    'prev-position': item.position === -1,
                    'current-position': item.position === 0,
                    'next-position': item.position === 1
                  }"
                >
                  <!-- Preview card (prev/next) -->
                  <v-sheet 
                    v-if="item.position !== 0"
                    class="pa-6 service-card-preview elevation-4"
                  >
                    <div class="d-flex flex-column text-center">
                      <v-avatar size="50" class="mb-3 mx-auto bg-primary">
                        <Icon :icon="item.service.icon" height="26" class="text-white" />
                      </v-avatar>
                      <h3 class="text-h5 service-title mb-3">{{ item.service.title }}</h3>
                      <ul class="preview-list text-left">
                        <li
                          v-for="(serviceItem, i) in item.service.items.slice(0, 3)"
                          :key="i"
                          class="mb-2 text-body-2"
                        >
                          <Icon icon="mdi:check-circle" class="me-1 text-primary" height="16" />
                          {{ serviceItem.length > 50 ? serviceItem.substring(0, 50) + "..." : serviceItem }}
                        </li>
                      </ul>
                      <p v-if="item.service.items.length > 3" class="text-caption mt-2 opacity-70">
                        +{{ item.service.items.length - 3 }} mais
                      </p>
                    </div>
                  </v-sheet>

                  <!-- Current card -->
                  <v-sheet 
                    v-else
                    class="pa-10 service-card elevation-12"
                  >
                    <div class="d-flex flex-column align-center text-center h-100">
                      <v-avatar size="80" class="mb-5 bg-primary">
                        <Icon :icon="item.service.icon" height="40" class="text-white" />
                      </v-avatar>
                      <h2 class="text-h5 service-title mb-6">{{ item.service.title }}</h2>
                      <ul class="service-list text-left">
                        <li
                          v-for="(serviceItem, i) in item.service.items"
                          :key="i"
                          class="mb-3 text-body-2 service-item"
                        >
                          <Icon icon="mdi:check-circle" class="me-2 text-primary" height="20" />
                          {{ serviceItem }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </div>
              </transition-group>
            </div>

            <!-- Custom indicators below -->
            <div class="custom-indicators d-flex justify-center align-center ga-2 mt-6">
              <div
                v-for="(service, index) in services"
                :key="index"
                class="indicator-dot"
                :class="{ active: currentIndex === index }"
                @click="goToSlide(index)"
              ></div>
            </div>
          </div>
      </div>
    </div>

    <div class="container-lg">
      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn
            color="secondary"
            size="x-large"
            href="#contact"
            class="text-none px-10"
            elevation="8"
          >
            <Icon icon="mdi:rocket-launch" class="me-2" height="24" />
            Comece a testar hoje
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
  min-height: 600px;
}

.carousel-track-wrapper {
  position: relative;
  height: 580px;
  overflow: visible;
}

.carousel-track {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 40px;
  position: relative;

  @media (max-width: 960px) {
    padding: 0 20px;
  }
}

.carousel-item {
  position: absolute;
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, left, right;
  
  &.prev-position {
    left: 5%;
    opacity: 1;
    transform: scale(0.88);
    z-index: 1;
    width: 700px;
    filter: brightness(0.92);
    
    @media (max-width: 960px) {
      display: none;
    }
  }
  
  &.current-position {
    left: 50%;
    transform: translateX(-50%) scale(1);
    opacity: 1;
    z-index: 2;
    width: 850px;
    filter: brightness(1);
    
    @media (max-width: 960px) {
      width: 85%;
    }
  }
  
  &.next-position {
    right: 5%;
    opacity: 1;
    transform: scale(0.88);
    z-index: 1;
    width: 700px;
    filter: brightness(0.92);
    
    @media (max-width: 960px) {
      display: none;
    }
  }
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(14, 9, 113, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgb(14, 9, 113);
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
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

.service-list {
  list-style: none;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
}

// Slide transitions
.slide-enter-active {
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-leave-active {
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
