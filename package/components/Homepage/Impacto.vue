<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ascsLines from '~/assets/backgroundless .svg';
</script>

<template>
  <div class="position-relative bg-surface overflow-hidden">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="07" title="Impacto" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <div>
              <h2 class="text-h3 text-dark mb-4">Impacto Esperado</h2>
              <p class="text-body-1 text-dark opacity-80 mb-6">
                A ASCS TB está orientada a resultados mensuráveis, alinhados com transição digital e competitividade:
              </p>
            </div>

            <!-- Impact Points -->
            <div class="impact-points">
              <div class="impact-item mb-4">
                <div class="d-flex ga-3">
                  <Icon icon="mdi:target" height="24" class="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="text-h5 text-dark mb-2">Meta de referência</h3>
                    <p class="text-body-1 text-dark opacity-80">
                      59 pilotos testados e validados
                    </p>
                  </div>
                </div>
              </div>

              <div class="impact-item mb-4">
                <div class="d-flex ga-3">
                  <Icon icon="mdi:trending-up" height="24" class="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="text-h5 text-dark mb-2">Competitividade empresarial</h3>
                    <p class="text-body-1 text-dark opacity-80">
                      Suporte à entrada em novos mercados/segmentos, aumento de internacionalização e reforço de equipas qualificadas.
                    </p>
                  </div>
                </div>
              </div>

              <div class="impact-item mb-4">
                <div class="d-flex ga-3">
                  <Icon icon="mdi:network" height="24" class="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="text-h5 text-dark mb-2">Criação de ecossistema e reputação</h3>
                    <p class="text-body-1 text-dark opacity-80">
                      Reforçar Aveiro como polo de experimentação em conectividade, sensorização e dados, com replicabilidade nacional e projeção internacional.
                    </p>
                  </div>
                </div>
              </div>

              <div class="impact-item">
                <div class="d-flex ga-3">
                  <Icon icon="mdi:leaf" height="24" class="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 class="text-h5 text-dark mb-2">Desenvolvimento Sustentável</h3>
                    <p class="text-body-1 text-dark opacity-80">
                      Apoia a criação de cidades inteligentes e territórios sustentáveis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    
    <!-- ASCS Lines Decoration -->
    <div class="ascs-lines-left">
      <img :src="ascsLines" alt="" class="lines-svg" />
    </div>

    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.impact-item {
  padding: 8px 0;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateX(8px);
  }
}

.ascs-lines-left {
  position: absolute;
  left: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 900px;
  height: 900px;
  opacity: 0.35;
  z-index: 1;
  pointer-events: none;
  
  @media (max-width: 960px) {
    left: -150px;
    width: 600px;
    height: 600px;
    opacity: 0.20;
  }
}

.lines-svg {
  width: 100%;
  height: 100%;
  filter: brightness(0) saturate(100%) invert(9%) sepia(78%) saturate(5487%) hue-rotate(245deg) brightness(92%) contrast(110%);
  object-fit: contain;
  object-position: left center;
}
</style>