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
              <p class="text-subtitle-1 text-dark mb-8" style="line-height: 1.8; font-size: 1.15rem;">
                <strong>ASCS TB – Aveiro Smart Connected Spaces Testbed</strong> é uma infraestrutura de experimentação em ambiente real, que disponibiliza demonstração, experimentação, teste e capacitação para acelerar pilotos digitais em espaços urbanos, portuários e marinhos na região de Aveiro.
              </p>
              <h3 class="text-h4 text-dark mb-4">O que oferecemos:</h3>
            </div>

            <!-- What We Offer Cards -->
            <v-row>
              <v-col cols="12" md="4">
                <div class="offer-box pa-6 bg-primary h-100">
                  <div class="d-flex flex-column align-center text-center">
                    <Icon icon="mdi:city-variant" height="60" class="text-white mb-4" />
                    <p class="text-body-1 text-white">
                      Ambiente real, multi-contexto: cidade, corredor de mobilidade, porto, ria e mar, com conectividade, sensorização e computação.
                    </p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="offer-box pa-6 bg-secondary h-100">
                  <div class="d-flex flex-column align-center text-center">
                    <Icon icon="mdi:rocket-launch" height="60" class="text-white mb-4" />
                    <p class="text-body-1 text-white">
                      Acesso end-to-end a plataformas, dados e recursos técnicos para evoluir soluções TRL 4/5–9.
                    </p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="offer-box pa-6 bg-primary h-100">
                  <div class="d-flex flex-column align-center text-center">
                    <Icon icon="mdi:account-group" height="60" class="text-white mb-4" />
                    <p class="text-body-1 text-white">
                      Consórcio de referência para reduzir risco e acelerar entrada no mercado.
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>

            <!-- CTA Box -->
            <div class="cta-highlight pa-8 bg-darkgray text-center mt-4">
              <p class="text-h5 text-dark mb-6" style="line-height: 1.6;">
                <Icon icon="mdi:lightbulb-on" class="me-2" height="32" />
                Traga o seu piloto — nós estruturamos o plano de teste, operacionalizamos o acesso às infraestruturas e entregamos evidência técnica de validação.
              </p>
              <v-btn color="primary" size="x-large" href="#contact" class="text-none px-10">
                <Icon icon="mdi:email-fast" class="me-2" height="24" />
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

.offer-box {
  border-radius: 16px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
}

.cta-highlight {
  border-radius: 16px;
  border: 3px solid rgba(14, 9, 113, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(14, 9, 113, 0.3);
    box-shadow: 0 8px 32px rgba(14, 9, 113, 0.1);
  }
}

@media (max-width: 960px) {
  .offer-box {
    min-height: 260px;
  }
}
</style>
