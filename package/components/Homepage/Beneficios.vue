<script setup lang="ts">
import { Icon } from "@iconify/vue";

const benefits = [
  {
    icon: "mdi:shield-check",
    title: "Redução de Risco e Custo",
    description: "Acesso a infraestruturas e competências que tipicamente exigiriam investimento avultado",
    color: "primary"
  },
  {
    icon: "mdi:rocket-launch",
    title: "Time-to-Market Acelerado",
    description: "Validação em contexto real + iteração rápida suportada por dados",
    color: "secondary"
  },
  {
    icon: "mdi:certificate",
    title: "Evidência Técnica Credível",
    description: "Testes e relatórios para clientes, investidores e parceiros",
    color: "primary"
  },
  {
    icon: "mdi:network",
    title: "Acesso a Ecossistema",
    description: "Indústria, academia, clusters e território com capacidade de escalar pilotos",
    color: "secondary"
  },
  {
    icon: "mdi:handshake",
    title: "Networking Qualificado",
    description: "Conecte-se com parceiros estratégicos e potenciais clientes",
    color: "primary"
  },
  {
    icon: "mdi:cash-multiple",
    title: "Redução de Custos",
    description: "Minimize correções pós-lançamento com testes preventivos",
    color: "secondary"
  },
  {
    icon: "mdi:account-voice",
    title: "Feedback de Utilizadores Reais",
    description: "Obtenha insights valiosos de utilizadores em contexto real de utilização",
    color: "primary"
  },
  {
    icon: "mdi:chart-line",
    title: "Métricas de Performance Precisas",
    description: "Avalie o desempenho com dados concretos e métricas autênticas",
    color: "secondary"
  }
];
</script>

<template>
  <div class="benefits-impact-section bg-primary">
    <SharedSectionSpacer />
    
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideLightHeading number="03" title="Benefícios" />
        </v-col>

        <!-- RIGHT SIDE -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <div>
              <h2 class="text-h3 text-white mb-4">Benefícios</h2>
              <p class="text-body-1 text-white opacity-80 mb-8">
                Transforme a sua ideia em realidade com apoio especializado
              </p>
            </div>

            <!-- Benefits Cards Grid -->
            <v-row class="mb-6">
              <v-col
                v-for="(benefit, index) in benefits"
                :key="index"
                cols="12"
                sm="6"
                lg="3"
              >
          <div class="benefit-card pa-6 h-100">
            <div class="d-flex flex-column align-center text-center h-100">
              <div class="icon-wrapper mb-4" :class="`bg-${benefit.color}`">
                <Icon :icon="benefit.icon" height="40" class="text-white" />
              </div>
              <h3 class="text-h5 mb-3">{{ benefit.title }}</h3>
              <p class="text-body-2 opacity-90">{{ benefit.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Call to Action -->
      <div class="text-center mt-8">
        <p class="text-body-1 text-white opacity-80 mb-6">
          Pronto para fazer parte desta transformação?
        </p>
        <v-btn
          color="secondary"
          size="x-large"
          href="#contact"
          class="text-none px-10"
          elevation="8"
        >
          <Icon icon="mdi:email-send" class="me-2" height="24" />
          Entre em Contacto
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
.benefits-impact-section {
  position: relative;
  overflow: hidden;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    background: white;
  }
  
  h3 {
    color: rgb(14, 9, 113);
  }
  
  p {
    color: #1a1a1a;
  }
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 960px) {
  .benefit-card {
    margin-bottom: 1rem;
  }
}
</style>
