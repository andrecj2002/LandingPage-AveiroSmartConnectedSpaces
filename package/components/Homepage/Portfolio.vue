<script setup lang="ts">
import { Icon } from "@iconify/vue";

const steps = [
  {
    number: "01",
    title: "Manifestação de Interesse",
    description: "Envio de formulário ou email com descrição do projeto",
    icon: "mdi:email-send"
  },
  {
    number: "02",
    title: "Avaliação e Matching",
    description: "Análise da adequação e identificação de serviços/parceiros",
    icon: "mdi:account-search"
  },
  {
    number: "03",
    title: "Proposta Personalizada",
    description: "Plano de teste e cronograma adaptados ao seu projeto",
    icon: "mdi:file-document-edit"
  },
  {
    number: "04",
    title: "Execução do Piloto",
    description: "Implementação e testes em ambiente real",
    icon: "mdi:rocket-launch"
  },
  {
    number: "05",
    title: "Análise de Resultados",
    description: "Recolha de dados, feedback e relatório final",
    icon: "mdi:chart-line"
  }
];
</script>

<template>
  <div class="position-relative bg-darkgray" id="onboarding">
    <!-- Section Spacer -->
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="04" title="Onboarding" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-96">
            <SharedCommonHeading
              class="mw-md-670"
              title="Como começar?"
              subtitle="Processo simples e transparente para integração no ASCS Test Bed. Do primeiro contacto à análise de resultados."
            />
          </div>
        </v-col>
      </v-row>

      <!-- Onboarding Steps - Horizontal -->
      <v-row class="mt-12">
        <v-col cols="12">
          <div class="steps-container">
            <v-row class="justify-center">
              <v-col
                v-for="(step, index) in steps"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="2"
                class="d-flex"
              >
                <div class="step-card pa-6 d-flex flex-column align-center text-center w-100">
                  <div class="step-number text-h2 text-primary font-weight-bold mb-3">
                    {{ step.number }}
                  </div>
                  <v-avatar size="60" class="mb-4 bg-primary">
                    <Icon :icon="step.icon" height="30" class="text-white" />
                  </v-avatar>
                  <h3 class="text-h5 mb-2">{{ step.title }}</h3>
                  <p class="text-subtitle-2 text-dark opacity-70">{{ step.description }}</p>
                  
                  <!-- Arrow connector (except for last step) -->
                  <div v-if="index < steps.length - 1" class="arrow-connector d-none d-lg-block">
                    <Icon icon="mdi:arrow-right" height="32" class="text-primary" />
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn color="primary" size="x-large" href="#contact" class="text-none px-8">
            Submeta o seu projeto
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <!-- Section Spacer -->
    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.steps-container {
  position: relative;
}

.step-card {
  position: relative;
  border: 2px solid rgba(14, 9, 113, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 300px;
  
  &:hover {
    border-color: rgba(14, 9, 113, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(14, 9, 113, 0.1);
  }
}

.step-number {
  color: rgb(14, 9, 113);
}

/* Dark mode styles */
html.dark {
  .step-number {
    color: white !important;
  }
  
  .step-card {
    border-color: rgba(255, 255, 255, 0.2);
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
    }
  }
}

.arrow-connector {
  position: absolute;
  right: -24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

@media (max-width: 1264px) {
  .step-card {
    min-height: 280px;
  }
}
</style>
