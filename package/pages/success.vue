<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

const countdown = ref(15);
let intervalId: NodeJS.Timeout;

// Countdown timer
onMounted(() => {
  intervalId = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(intervalId);
      navigateTo('/');
    }
  }, 1000);
});

const cancelRedirect = () => {
  clearInterval(intervalId);
  countdown.value = 0;
};
</script>

<template>
  <div class="success-page min-h-screen d-flex align-center justify-center bg-surface">
    <div class="container-lg">
      <v-row class="justify-center">
        <v-col cols="12" md="8" lg="6">
          <div class="success-card pa-12 text-center">
            <!-- Success Icon -->
            <div class="success-icon-wrapper mx-auto mb-6">
              <Icon icon="mdi:check-circle" height="120" class="text-primary" />
            </div>

            <!-- Success Message -->
            <h1 class="text-h2 text-dark mb-4">Mensagem Enviada com Sucesso!</h1>
            <p class="text-h6 text-dark opacity-80 mb-8">
              Obrigado por entrar em contacto connosco. A sua mensagem foi recebida e iremos responder o mais breve possível.
            </p>

            <!-- Info Box -->
            <div class="info-box pa-6 bg-primary mb-6">
              <div class="d-flex align-center justify-center ga-3 mb-3">
                <Icon icon="mdi:email-check" height="32" class="text-white" />
                <h3 class="text-h5 text-white mb-0">E-mail de Confirmação</h3>
              </div>
              <p class="text-body-1 text-white opacity-90 mb-0">
                Verifique a sua caixa de entrada. Enviámos um e-mail de confirmação com os detalhes da sua mensagem.
              </p>
            </div>

            <!-- Important Note for First Time -->
            <div class="alert-box pa-5 mb-6">
              <div class="d-flex align-start ga-3">
                <Icon icon="mdi:information-outline" height="28" class="text-warning flex-shrink-0 mt-1" />
                <div>
                  <h4 class="text-h6 text-dark mb-2">
                    <strong>Importante:</strong> Primeira submissão
                  </h4>
                  <p class="text-body-2 text-dark opacity-80 mb-3">
                    Se esta é a primeira vez que alguém submete o formulário, o administrador (techlab@pci.pt) 
                    receberá um <strong>e-mail de verificação do FormSubmit.co</strong>.
                  </p>
                  <p class="text-body-2 text-dark opacity-80 mb-0">
                    É necessário <strong>clicar no link de verificação</strong> nesse e-mail para ativar o serviço. 
                    Após a verificação, todos os formulários funcionarão normalmente.
                  </p>
                </div>
              </div>
            </div>

            <!-- Auto-redirect message -->
            <div v-if="countdown > 0" class="countdown-box pa-4 bg-darkgray rounded-lg mb-6">
              <p class="text-body-1 text-dark mb-2">
                <Icon icon="mdi:timer-sand" height="24" class="me-2" />
                Redirecionamento automático em <strong class="text-primary">{{ countdown }}</strong> segundos...
              </p>
              <v-btn 
                size="small" 
                variant="outlined" 
                color="secondary"
                class="text-none"
                @click="cancelRedirect"
              >
                Cancelar redirecionamento
              </v-btn>
            </div>

            <!-- Buttons -->
            <div class="d-flex flex-column flex-sm-row ga-4 justify-center">
              <v-btn 
                color="primary" 
                size="x-large" 
                href="/"
                class="text-none px-8"
              >
                <Icon icon="mdi:home" class="me-2" height="24" />
                Voltar à Página Inicial
              </v-btn>
              
              <v-btn 
                color="secondary" 
                size="x-large" 
                href="#contact"
                variant="outlined"
                class="text-none px-8"
              >
                <Icon icon="mdi:email" class="me-2" height="24" />
                Enviar Outra Mensagem
              </v-btn>
            </div>

            <!-- Additional Info -->
            <div class="mt-12 pa-6 bg-darkgray rounded-lg">
              <h4 class="text-h6 text-dark mb-3">
                <Icon icon="mdi:information" class="me-2" height="24" />
                O que acontece agora?
              </h4>
              <div class="text-left">
                <div class="d-flex ga-3 mb-3">
                  <Icon icon="mdi:numeric-1-circle" height="24" class="text-primary flex-shrink-0" />
                  <p class="text-body-2 text-dark opacity-80 mb-0">
                    A nossa equipa irá analisar a sua mensagem
                  </p>
                </div>
                <div class="d-flex ga-3 mb-3">
                  <Icon icon="mdi:numeric-2-circle" height="24" class="text-primary flex-shrink-0" />
                  <p class="text-body-2 text-dark opacity-80 mb-0">
                    Entraremos em contacto nas próximas 24-48 horas
                  </p>
                </div>
                <div class="d-flex ga-3">
                  <Icon icon="mdi:numeric-3-circle" height="24" class="text-primary flex-shrink-0" />
                  <p class="text-body-2 text-dark opacity-80 mb-0">
                    Vamos agendar uma reunião para discutir o seu projeto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.success-page {
  padding: 4rem 0;
}

.success-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.success-icon-wrapper {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.info-box {
  border-radius: 16px;
}

.alert-box {
  background: rgba(255, 193, 7, 0.1);
  border: 2px solid rgba(255, 193, 7, 0.3);
  border-radius: 12px;
}

.countdown-box {
  border: 2px solid rgba(14, 9, 113, 0.1);
  text-align: center;
}
</style>
