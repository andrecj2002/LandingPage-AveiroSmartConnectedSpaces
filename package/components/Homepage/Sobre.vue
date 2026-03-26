<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="about-section bg-surface">
    <SharedSectionSpacer />
    
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="01" title="Sobre" />
        </v-col>

        <!-- RIGHT SIDE -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <div>
              <h2 class="text-h3 text-dark mb-4">ASCS Testbed Aveiro</h2>
              <p class="text-body-1 text-dark opacity-80 mb-8">
                <strong>ASCS TB – Aveiro Smart Connected Spaces Testbed</strong> é uma infraestrutura de experimentação em ambiente real, que disponibiliza demonstração, experimentação, teste e capacitação para acelerar pilotos digitais em espaços urbanos, portuários e marinhos na região de Aveiro.
              </p>
              <h3 class="text-h5 text-dark mb-4">O que oferecemos:</h3>
            </div>

            <!-- What We Offer Cards -->
            <v-row>
              <v-col cols="12" md="4">
                <div class="offer-card pa-6 bg-primary h-100">
                  <div class="d-flex flex-column align-center text-center h-100">
                    <Icon icon="mdi:city-variant" height="48" class="text-white mb-4" />
                    <h4 class="text-h5 text-white mb-3">Ambiente Real Multi-Contexto</h4>
                    <ul class="text-body-2 text-white opacity-90 text-left bullet-list">
                      <li>Cidade</li>
                      <li>Corredor de mobilidade</li>
                      <li>Porto</li>
                      <li>Ria e mar</li>
                      <li>Conectividade, sensorização e computação</li>
                    </ul>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="offer-card pa-6 bg-secondary h-100">
                  <div class="d-flex flex-column align-center text-center h-100">
                    <Icon icon="mdi:access-point-network" height="48" class="text-white mb-4" />
                    <h4 class="text-h5 text-white mb-3">Acesso End-to-End</h4>
                    <ul class="text-body-2 text-white opacity-90 text-left bullet-list">
                      <li>Plataformas</li>
                      <li>Dados</li>
                      <li>Recursos técnicos</li>
                      <li>Evoluir soluções TRL 4/5–9</li>
                    </ul>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="offer-card pa-6 bg-primary h-100">
                  <div class="d-flex flex-column align-center text-center h-100">
                    <Icon icon="mdi:account-group" height="48" class="text-white mb-4" />
                    <h4 class="text-h5 text-white mb-3">Consórcio de Referência</h4>
                    <ul class="text-body-2 text-white opacity-90 text-left bullet-list">
                      <li>Reduzir risco</li>
                      <li>Acelerar entrada no mercado</li>
                    </ul>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- CTA -->
            <div class="cta-wrapper mt-8">
              <p class="text-body-1 text-dark opacity-80 mb-6">
                <strong>Traga o seu piloto</strong> - Nós estruturamos o plano de teste, operacionalizamos o acesso às infraestruturas e entregamos evidência técnica de validação.
              </p>
              <v-btn color="primary" size="x-large" href="#contact" class="text-none px-10">
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
.about-section {
  position: relative;
}

.offer-card {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
}

.bullet-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
  
  li {
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.cta-wrapper {
  max-width: 66.666%; // 2/3 da largura
  
  @media (max-width: 960px) {
    max-width: 100%; // Full width em tablets e mobile
  }
}
</style>
