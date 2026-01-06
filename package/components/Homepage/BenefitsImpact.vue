<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ascsLines from '~/assets/toolkit-ASCS/assinatura horizontal/vectorial/negativo/ascs-horizontal-min15mm-negativo.svg';

const benefits = [
  {
    icon: "mdi:rocket-launch",
    title: "Aceleração de Entrada no Mercado",
    description: "Reduza riscos e tempo de lançamento com validação em ambiente real",
    color: "primary"
  },
  {
    icon: "mdi:account-voice",
    title: "Feedback de Utilizadores Reais",
    description: "Obtenha insights valiosos de utilizadores em contexto real de utilização",
    color: "secondary"
  },
  {
    icon: "mdi:chart-line",
    title: "Métricas de Performance Precisas",
    description: "Avalie o desempenho com dados concretos e métricas autênticas",
    color: "primary"
  },
  {
    icon: "mdi:shield-check",
    title: "Identificação de Problemas",
    description: "Detete questões de segurança, integração e usabilidade antes do lançamento",
    color: "secondary"
  },
  {
    icon: "mdi:cash-multiple",
    title: "Redução de Custos",
    description: "Minimize correções pós-lançamento com testes preventivos",
    color: "primary"
  },
  {
    icon: "mdi:refresh-circle",
    title: "Desenvolvimento Iterativo",
    description: "Ciclos de feedback contínuos para aperfeiçoamento constante",
    color: "secondary"
  },
  {
    icon: "mdi:trending-up",
    title: "Testes de Escalabilidade",
    description: "Valide a capacidade de crescimento e replicabilidade da solução",
    color: "primary"
  },
  {
    icon: "mdi:handshake",
    title: "Networking Qualificado",
    description: "Conecte-se com parceiros estratégicos e potenciais clientes",
    color: "secondary"
  }
];

const impacts = [
  {
    icon: "mdi:lightbulb-group",
    title: "Ecossistemas de Inovação",
    description: "Impulsiona o desenvolvimento local e regional de soluções inovadoras"
  },
  {
    icon: "mdi:leaf",
    title: "Desenvolvimento Sustentável",
    description: "Apoia a criação de cidades inteligentes e territórios sustentáveis"
  },
  {
    icon: "mdi:account-group",
    title: "Envolvimento Cívico",
    description: "Aumenta a participação cidadã e melhora a qualidade de vida urbana"
  }
];
</script>

<template>
  <div class="benefits-impact-section bg-primary">
    <SharedSectionSpacer />
    
    <div class="container-lg">
      <!-- Header -->
      <v-row class="mb-10">
        <v-col cols="12" class="text-center">
          <h2 class="text-h1 text-white mb-4 responsive-title">
            Benefícios do Ecossistema ASCS
          </h2>
          <p class="text-h5 text-white opacity-80 responsive-subtitle">
            Transforme a sua ideia em realidade com apoio especializado
          </p>
        </v-col>
      </v-row>

      <!-- Benefits Cards Grid -->
      <v-row class="mb-10">
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
              <h3 class="text-h6 mb-3">{{ benefit.title }}</h3>
              <p class="text-body-2 opacity-80">{{ benefit.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Impact Section -->
      <v-row class="mb-8 position-relative">
        <!-- Decorative ASCS Lines -->
        <div class="ascs-lines-decoration">
          <img :src="ascsLines" alt="" class="lines-image" />
        </div>
        
        <v-col cols="12">
          <div class="impact-header text-center mb-8">
            <h3 class="text-h2 text-white mb-3 responsive-impact-title">Impacto no Ecossistema</h3>
            <p class="text-h6 text-white opacity-80 responsive-subtitle">Contribuindo para um futuro mais inteligente e sustentável</p>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-8">
        <v-col
          v-for="(impact, index) in impacts"
          :key="index"
          cols="12"
          md="4"
        >
          <div class="impact-card pa-8 h-100">
            <div class="d-flex flex-column align-center text-center">
              <div class="impact-icon-wrapper mb-5 bg-primary">
                <Icon :icon="impact.icon" height="50" class="text-white" />
              </div>
              <h4 class="text-h4 text-white mb-4">{{ impact.title }}</h4>
              <p class="text-body-1 text-white opacity-90">{{ impact.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Call to Action -->
      <v-row class="mt-10">
        <v-col cols="12" class="text-center">
          <p class="text-h5 text-white mb-6">
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

.ascs-lines-decoration {
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 600px;
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  
  @media (max-width: 960px) {
    left: -250px;
    opacity: 0.08;
  }
}

.lines-image {
  width: 100%;
  height: auto;
  filter: brightness(0) invert(1);
  object-fit: contain;
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

.impact-card {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }
}

.impact-icon-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}

/* Dark mode */
html.dark {
  .benefit-card {
    background: rgba(26, 26, 26, 0.95);
    
    &:hover {
      background: #1a1a1a;
    }
    
    h3 {
      color: white;
    }
    
    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }
  
  .impact-card {
    background: rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
}

/* Responsive */
@media (max-width: 960px) {
  .benefit-card,
  .impact-card {
    margin-bottom: 1rem;
  }
  
  .responsive-title {
    font-size: clamp(28px, 6vw, 48px) !important;
    line-height: 1.2;
    padding: 0 16px;
  }
  
  .responsive-impact-title {
    font-size: clamp(24px, 5vw, 36px) !important;
    line-height: 1.2;
    padding: 0 16px;
  }
  
  .responsive-subtitle {
    font-size: clamp(16px, 3.5vw, 20px) !important;
    line-height: 1.4;
    padding: 0 16px;
  }
}

@media (max-width: 600px) {
  .responsive-title {
    font-size: clamp(24px, 7vw, 32px) !important;
  }
  
  .responsive-impact-title {
    font-size: clamp(20px, 6vw, 28px) !important;
  }
  
  .responsive-subtitle {
    font-size: clamp(14px, 4vw, 18px) !important;
  }
}
</style>
