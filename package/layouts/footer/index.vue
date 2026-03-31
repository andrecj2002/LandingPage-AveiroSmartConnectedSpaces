<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const footerLinks = ref([
  { title: "Política de Privacidade", url: "/privacy-policy" },
  { title: "Ficha de Projeto", url: "#" },
  { title: "Catálogo de serviços", url: "#" },
]);
</script>
<template>
  <div class="bg-darkprimary">
    <div class="container-lg py-10">
      <!-- Main Footer Content -->
      <v-row class="mb-8">
        <!-- Contact Section -->
        <v-col cols="12" md="6">
          <h3 class="text-h5 text-white mb-4">Contactos</h3>
          <div class="d-flex flex-column ga-3">
            <a
              href="mailto:techlab@pci.pt"
              class="d-flex ga-2 align-center text-white text-decoration-none text-body-2 hover-link"
            >
              <Icon icon="mdi:email" height="18" class="text-primary" />
              techlab@pci.pt
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
        </v-col>

        <!-- Footer Links -->
        <v-col cols="12" md="6">
          <h3 class="text-h6 text-white mb-4">Links</h3>
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in footerLinks" :key="i">
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
              Financiamento:
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Financing Logos -->
      <v-row class="mb-8">
        <v-col cols="12" class="text-center">
          <img src="@/assets/logos-financiamento.png" alt="Logos de Financiamento" class="financing-logos" />
        </v-col>
      </v-row>

      <!-- Bottom Footer -->
      <v-divider class="border-opacity-25 mb-6"></v-divider>
      
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-body-2 text-white opacity-70 mb-0">
            © {{ new Date().getFullYear() }} ASCS - Aveiro Smart Connected Spaces. Todos os direitos reservados.
          </p>
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

.financing-logos {
  max-width: 100%;
  height: auto;
  max-height: 120px;
  object-fit: contain;
}
</style>
