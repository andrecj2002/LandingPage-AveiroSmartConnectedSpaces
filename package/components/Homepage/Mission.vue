<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="mission-section bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE -->
        <v-col cols="12" xl="4" class="position-relative">
          <SharedLeftSideDarkHeading number="02" title="Missão" />
        </v-col>

        <!-- RIGHT SIDE -->
        <v-col cols="12" xl="8">
          <div class="d-flex flex-column ga-8">
            <div>
              <h2 class="text-h2 text-dark mb-6">Reduzir o "vale da morte"</h2>
              <p class="text-h6 text-dark opacity-80 mb-8">
                Fornecendo infraestruturas, dados, competências e condições de teste em cenário real, para maturar produtos/serviços digitais e acelerar a sua adoção pelo mercado.
              </p>
            </div>

            <!-- Offer Cards -->
            <v-row>
              <v-col cols="12" md="4">
                <div class="offer-card pa-6 bg-primary h-100">
                  <div class="d-flex flex-column align-center text-center h-100">
                    <Icon icon="mdi:city-variant" height="48" class="text-white mb-4" />
                    <h4 class="text-h5 text-white mb-3">Ambiente Real Multi-Contexto</h4>
                    <p class="text-body-2 text-white opacity-90">
                      Cidade, corredor de mobilidade, porto, ria e mar, com conectividade, sensorização e computação
                    </p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="offer-card pa-6 bg-secondary h-100">
                  <div class="d-flex flex-column align-center text-center h-100">
                    <Icon icon="mdi:access-point-network" height="48" class="text-white mb-4" />
                    <h4 class="text-h5 text-white mb-3">Acesso End-to-End</h4>
                    <p class="text-body-2 text-white opacity-90">
                      Plataformas, dados e recursos técnicos para evoluir soluções TRL 4/5–9
                    </p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="offer-card pa-6 bg-primary h-100">
                  <div class="d-flex flex-column align-center text-center h-100">
                    <Icon icon="mdi:account-group" height="48" class="text-white mb-4" />
                    <h4 class="text-h5 text-white mb-3">Consórcio de Referência</h4>
                    <p class="text-body-2 text-white opacity-90">
                      Para reduzir risco e acelerar entrada no mercado
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- Call to Action -->
            <div class="cta-box pa-8 bg-surface text-center mt-4">
              <h3 class="text-h4 text-dark mb-4">
                <Icon icon="mdi:rocket-launch" class="me-2" height="32" />
                Traga o seu piloto
              </h3>
              <p class="text-h6 text-dark opacity-80 mb-6">
                Nós estruturamos o plano de teste, operacionalizamos o acesso às infraestruturas e entregamos evidência técnica de validação.
              </p>
              <v-btn color="primary" size="large" href="#contact" class="text-none px-8">
                Submeta o seu projeto
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
.mission-section {
  position: relative;
}

.offer-card {
  border-radius: 8px;
  min-height: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.cta-box {
  border-radius: 12px;
  border: 2px solid rgba(14, 9, 113, 0.1);
}

@media (max-width: 960px) {
  .offer-card {
    min-height: 240px;
  }
}
</style>
