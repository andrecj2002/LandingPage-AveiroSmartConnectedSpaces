<script setup lang="ts">
import { Icon } from "@iconify/vue";
import WhyImg from "/images/projects/whychoose.png";
import Profile from "/images/profile/user.svg";
import Overlay from "/images/background/bg-ellipse.svg";

import user1 from "/images/profile/avatar_1.jpg";
import user2 from "/images/profile/avatar_2.jpg";
import user3 from "/images/profile/avatar_3.jpg";
import user4 from "/images/profile/avatar_4.jpg";
import Logo from "@/layouts/shared/logo/index.vue";

const users = [
  { src: user1, alt: "User 1" },
  { src: user2, alt: "User 2" },
  { src: user3, alt: "User 3" },
  { src: user4, alt: "User 4" },
];
</script>
<template>
  <div class="why-choose bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE IMAGE -->
        <v-col cols="12" xl="4" class="position-relative">
          <SharedLeftSideDarkHeading number="02" title="Missão" />
          <div class="d-flex flex-column ga-6 mt-6 mw-xl-430">
            <h2 class="text-h2 text-dark">Missão e Âmbito</h2>
            <p class="text-subtitle-1 text-dark opacity-70">
              A ASCS oferece um laboratório urbano vivo onde o desenvolvimento de serviços ou produtos pode, desde a sua conceção até aos testes, ser validado num ambiente real com todos os seus requisitos e constrangimentos.
            </p>
          </div>
        </v-col>

        <!-- RIGHT SIDE TEXT LIST -->
        <v-col cols="12" xl="8">
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column ga-4">
              <div class="pa-7 bg-primary w-100 info-card">
                <h3 class="text-h3 text-white mb-3">
                  <Icon icon="mdi:map-marker-radius" class="me-2" height="24" />
                  Âmbito Geográfico
                </h3>
                <ul class="text-subtitle-1 ps-4">
                  <li class="mb-2">Espaços exteriores em Aveiro</li>
                  <li class="mb-2">Espaços interiores em Aveiro</li>
                  <li class="mb-2">Espaços marítimos (mar e laguna)</li>
                  <li class="mb-2">Zona Livre Tecnológica de Aveiro (ZLT-Aveiro)</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column ga-4">
              <div class="pa-7 bg-secondary w-100 info-card">
                <h3 class="text-h3 text-white mb-3">
                  <Icon icon="mdi:target" class="me-2" height="24" />
                  Para quem?
                </h3>
                <ul class="text-subtitle-1 text-white ps-4">
                  <li class="mb-2">PMEs</li>
                  <li class="mb-2">Startups</li>
                  <li class="mb-2">Empresas em fase de inovação</li>
                </ul>
                <p class="text-subtitle-2 text-white opacity-70 mt-4">
                  Ambiente de teste em contexto real para produtos e serviços ICT, marítimos e smart cities.
                </p>
              </div>
            </v-col>
          </v-row>
          
          <!-- Como? Section -->
          <v-row class="mt-4">
            <v-col cols="12" md="6" class="d-flex">
              <div class="pa-7 bg-surface w-100 info-card">
                <h3 class="text-h3 text-dark mb-4">
                  <Icon icon="mdi:lightbulb" class="me-2" height="24" />
                  Como funciona?
                </h3>
                <div class="d-flex align-start mb-3">
                  <Icon icon="mdi:check-circle" class="me-3 text-primary flex-shrink-0" height="24" />
                  <p class="text-subtitle-2 text-dark">
                    Acesso aberto e justo a serviços de experimentação, testes, demonstração e formação a preços abaixo do mercado
                  </p>
                </div>
                <div class="d-flex align-start mb-3">
                  <Icon icon="mdi:check-circle" class="me-3 text-primary flex-shrink-0" height="24" />
                  <p class="text-subtitle-2 text-dark">
                    Serviços de aceleração para reduzir riscos de entrada no mercado
                  </p>
                </div>
                <div class="d-flex align-start mb-3">
                  <Icon icon="mdi:check-circle" class="me-3 text-primary flex-shrink-0" height="24" />
                  <p class="text-subtitle-2 text-dark">
                    Partilha de conhecimento e histórias de sucesso
                  </p>
                </div>
                <div class="d-flex align-start">
                  <Icon icon="mdi:check-circle" class="me-3 text-primary flex-shrink-0" height="24" />
                  <p class="text-subtitle-2 text-dark">
                    Ecossistema colaborativo ligando test beds, hubs e zonas francas tecnológicas
                  </p>
                </div>
              </div>
            </v-col>

            <!-- Resultados Esperados Section -->
            <v-col cols="12" md="6" class="d-flex">
              <div class="pa-7 bg-primary w-100 info-card">
                <h3 class="text-h3 text-white mb-4">
                  <Icon icon="mdi:trophy" class="me-2" height="24" />
                  Resultados Esperados
                </h3>
                <div class="d-flex align-start mb-4">
                  <Icon icon="mdi:chart-line" class="me-3 text-white flex-shrink-0" height="24" />
                  <p class="text-subtitle-2">
                    Validação de pelo menos <strong>59 produtos/serviços piloto</strong> até ao final de 2025
                  </p>
                </div>
                <div class="d-flex align-start">
                  <Icon icon="mdi:medal" class="me-3 text-white flex-shrink-0" height="24" />
                  <p class="text-subtitle-2">
                    Posicionar Portugal como <strong>líder europeu</strong> no desenvolvimento de produtos piloto e apoio a PMEs/startups
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- CTA Button Row -->
          <v-row class="mt-6">
            <v-col cols="12" class="text-center">
              <v-btn color="secondary" size="x-large" href="#contact" class="text-none px-8">
                Submeta o seu projeto
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.info-card {
  min-height: 400px;
  display: flex;
  flex-direction: column;
}
</style>
