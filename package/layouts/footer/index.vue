<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const quickLinks = ref([
  { title: "Home", url: "#home" },
  { title: "Missão", url: "#about" },
  { title: "Serviços", url: "#services" },
  { title: "Parceiros", url: "#partners" },
  { title: "Contacto", url: "#contact" },
]);

const usefulLinks = ref([
  { title: "PRR - Plano de Recuperação e Resiliência", url: "https://www.portugal.gov.pt/pt/gc23/comunicacao/noticia?i=portugal-ja-recebeu-mais-de-metade-dos-fundos-do-prr" },
  { title: "Agendas Mobilizadoras", url: "https://www.compete2020.gov.pt/admin/images/Avisos_PRR_Agendas_mobilizadoras.pdf" },
  { title: "IAPMEI", url: "https://www.iapmei.pt/" },
  { title: "ANI - Agência Nacional de Inovação", url: "https://www.ani.pt/" },
]);

const documentation = ref([
  { title: "Manual de Utilizador", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "Guia de Boas Práticas", url: "#" },
]);

const legalLinks = ref([
  { title: "Política de Privacidade", url: "/privacy-policy" },
  { title: "Política de Cookies", url: "/privacy-policy#cookies" },
  { title: "Termos e Condições", url: "/terms-conditions" },
]);

const scrollTo = (hash: string) => {
  if (hash.startsWith('#')) {
    try {
      const el = document.querySelector(hash);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
<template>
  <div class="bg-darkprimary">
    <div class="container-lg py-10">
      <!-- Main Footer Content -->
      <v-row class="mb-8">
        <!-- Contact Section -->
        <v-col cols="12" md="4">
          <h3 class="text-h5 text-white mb-4">Contactos</h3>
          <div class="d-flex flex-column ga-3">
            <a
              href="mailto:ascs@ua.pt"
              class="d-flex ga-2 align-center text-white text-decoration-none text-body-2 hover-link"
            >
              <Icon icon="mdi:email" height="18" class="text-primary" />
              ascs@ua.pt
            </a>
            <a
              href="https://www.ua.pt"
              target="_blank"
              class="d-flex ga-2 align-center text-white text-decoration-none text-body-2 hover-link"
            >
              <Icon icon="mdi:web" height="18" class="text-primary" />
              Universidade de Aveiro
            </a>
            <a
              href="https://goo.gl/maps/aveiro"
              target="_blank"
              class="d-flex ga-2 align-center text-white text-decoration-none text-body-2 hover-link"
            >
              <Icon icon="mdi:map-marker" height="18" class="text-primary" />
              Aveiro, Portugal
            </a>
          </div>
          <p class="text-body-2 text-white opacity-70 mt-6">
            Tell us about your challenges and let us know how we can improve your journey
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" sm="6" md="2">
          <h3 class="text-h6 text-white mb-4">Links Rápidos</h3>
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in quickLinks" :key="i">
              <a
                :href="item.url"
                class="text-body-2 text-white text-decoration-none hover-link"
                @click.prevent="scrollTo(item.url)"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </v-col>

        <!-- Useful Links -->
        <v-col cols="12" sm="6" md="3">
          <h3 class="text-h6 text-white mb-4">Links Úteis</h3>
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in usefulLinks" :key="i">
              <a
                :href="item.url"
                target="_blank"
                class="text-body-2 text-white text-decoration-none hover-link"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </v-col>

        <!-- Documentation -->
        <v-col cols="12" sm="6" md="3">
          <h3 class="text-h6 text-white mb-4">Documentação</h3>
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in documentation" :key="i">
              <a
                :href="item.url"
                class="text-body-2 text-white text-decoration-none hover-link"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>

      <!-- Funding Bar -->
      <v-row class="my-8">
        <v-col cols="12">
          <div class="funding-bar pa-4">
            <p class="text-body-2 text-white text-center mb-0">
              <Icon icon="mdi:cash-multiple" height="16" class="me-2" />
              Projeto financiado pelo Plano de Recuperação e Resiliência (PRR) através das Agendas Mobilizadoras
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Bottom Footer -->
      <v-divider class="border-opacity-25 mb-6"></v-divider>
      
      <v-row>
        <v-col cols="12" md="6" class="text-center text-md-left">
          <p class="text-body-2 text-white opacity-70 mb-0">
            © {{ new Date().getFullYear() }} ASCS - Aveiro Smart Connected Spaces. Todos os direitos reservados.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex justify-center justify-md-end ga-4 flex-wrap">
            <a
              v-for="(item, i) in legalLinks"
              :key="i"
              :href="item.url"
              class="text-body-2 text-white text-decoration-none hover-link"
            >
              {{ item.title }}
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <ScrollToTop/>
</template>

<style scoped lang="scss">
.bg-darkprimary {
  background-color: rgb(10, 7, 80);
}

.hover-link {
  transition: all 0.2s ease;
  
  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
    opacity: 1 !important;
  }
}

.funding-bar {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
