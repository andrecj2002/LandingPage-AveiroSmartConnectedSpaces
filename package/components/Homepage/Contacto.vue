<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-darkgray" id="contact">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="09" title="Contacto" />
          <div class="mw-430 mt-lg-16 mt-8">
            <p class="text-body-1 text-dark opacity-80 pt-lg-8">
              Pronto para testar a sua inovação num ambiente real? Entre em contacto connosco e descubra como podemos acelerar o seu projeto.
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Entre em contacto"
              subtitle="Feedback de utilizadores reais | Métricas de performance precisas | Identificação de problemas de segurança | Redução de custos | Desenvolvimento iterativo | Testes de escalabilidade"
            />
          </div>

          <div class="mt-8">
            <form
              class="d-flex flex-column ga-2"
              action="https://formsubmit.co/joaoajorge@ua.pt"
              method="POST"
            >
              <!-- FormSubmit.co configuration -->
              <input type="hidden" name="_subject" value="Novo contacto - ASCS TB Landing Page">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <input type="hidden" name="_next" value="http://localhost:3000/success">
              <input type="text" name="_honey" style="display:none">
              
              <v-text-field
                name="name"
                label="Nome"
                variant="underlined"
                required
              ></v-text-field>

              <v-text-field
                name="email"
                label="Email"
                type="email"
                variant="underlined"
                required
              ></v-text-field>

              <v-text-field
                name="company"
                label="Empresa/Organização"
                variant="underlined"
              ></v-text-field>

              <v-textarea
                name="message"
                label="Descreva o seu projeto"
                variant="underlined"
                rows="4"
                required
              ></v-textarea>

              <v-btn
                color="secondary"
                size="x-large"
                type="submit"
                class="text-none px-10"
                elevation="8"
              >
                <Icon icon="mdi:email-send" class="me-2" height="24" />
                Enviar Mensagem
              </v-btn>
            </form>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>
