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
              <h2 class="text-h3 text-dark mb-4">Reduzir o "vale da morte"</h2>
              <p class="text-body-1 text-dark opacity-80 mb-8">
                Fornecendo infraestruturas, dados, competências e condições de teste em cenário real, para maturar produtos/serviços digitais e acelerar a sua adoção pelo mercado.
              </p>
            </div>

            <!-- Call to Action -->
            <div class="text-center mt-8">
              <p class="text-body-1 text-dark opacity-80 mb-6">
                <strong>Traga o seu piloto</strong> - Nós estruturamos o plano de teste, operacionalizamos o acesso às infraestruturas e entregamos evidência técnica de validação.
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
</style>
