<template>
  <div class="bg-darkgray" id="privacy-policy">
    <SharedSectionSpacer />

    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="09" title="Privacidade" />
        </v-col>

        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <SharedCommonHeading
              class="mw-md-670"
              title="Política de Privacidade"
              subtitle="Testbed Aveiro Smart Connected Spaces"
            />

            <div class="policy-card pa-6 pa-md-8">
              <p class="text-body-1 text-dark opacity-90 mb-0">
                A Testbed Aveiro Smart Connected Spaces, sediada no PCI · Creative Science Park Aveiro Region, valoriza a privacidade dos seus utilizadores e assume o compromisso de proteger os dados pessoais partilhados connosco, em estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
              </p>
            </div>

            <div class="policy-sections d-flex flex-column ga-5">
              <section class="policy-card pa-6 pa-md-8">
                <h3 class="text-h5 text-dark mb-4">1. Recolha e Tratamento de Dados</h3>
                <p class="text-body-1 text-dark opacity-90 mb-4">
                  O presente website foi desenhado para ser informativo e não intrusivo. A única forma de recolha de dados pessoais ocorre através do preenchimento voluntário do Formulário de Contacto.
                </p>
                <p class="text-body-1 text-dark opacity-90 mb-3">
                  Os dados recolhidos (nome, e-mail e eventuais informações incluídas na mensagem) destinam-se exclusivamente a:
                </p>
                <ul class="policy-list mb-0">
                  <li>Responder a pedidos de informação;</li>
                  <li>Analisar propostas de colaboração ou submissão de projetos à Testbed.</li>
                </ul>
              </section>

              <section class="policy-card pa-6 pa-md-8">
                <h3 class="text-h5 text-dark mb-4">2. Armazenamento e Segurança</h3>
                <p class="text-body-1 text-dark opacity-90 mb-0">
                  Os dados inseridos no formulário não são armazenados em base de dados no servidor do website. O formulário atua apenas como um canal de comunicação, enviando a informação diretamente via correio eletrónico para o endereço oficial: <strong>techlab@pci.pt</strong>.
                </p>
              </section>

              <section class="policy-card pa-6 pa-md-8">
                <h3 class="text-h5 text-dark mb-4">3. Cookies e Rastreio</h3>
                <p class="text-body-1 text-dark opacity-90 mb-0">
                  Informamos que este website não utiliza cookies, scripts de rastreamento ou qualquer outra ferramenta de análise de comportamento (como Google Analytics) para recolher ou arquivar dados dos seus visitantes.
                </p>
              </section>

              <section class="policy-card pa-6 pa-md-8">
                <h3 class="text-h5 text-dark mb-4">4. Partilha de Dados com Terceiros</h3>
                <p class="text-body-1 text-dark opacity-90 mb-0">
                  A Testbed Aveiro não partilha, vende ou cede os dados recebidos via e-mail a entidades terceiras, salvo se tal for estritamente necessário para o cumprimento de obrigações legais ou sob pedido explícito do utilizador no âmbito da gestão do seu projeto.
                </p>
              </section>

              <section class="policy-card pa-6 pa-md-8">
                <h3 class="text-h5 text-dark mb-4">5. Direitos do Utilizador</h3>
                <p class="text-body-1 text-dark opacity-90 mb-4">
                  Nos termos da legislação em vigor, o utilizador tem o direito de aceder, retificar, limitar ou solicitar a eliminação dos seus dados pessoais. Para exercer estes direitos, ou para qualquer esclarecimento adicional sobre as nossas práticas de privacidade, poderá contactar-nos através de:
                </p>
                <p class="text-body-1 text-dark opacity-90 mb-2">
                  <strong>E-mail:</strong> techlab@pci.pt
                </p>
                <p class="text-body-1 text-dark opacity-90 mb-0">
                  <strong>Morada:</strong> Via do Conhecimento, Edifício Central, 3830-352 Ílhavo, Portugal.
                </p>
              </section>

              <section class="policy-card pa-6 pa-md-8">
                <h3 class="text-h5 text-dark mb-4">6. Atualizações</h3>
                <p class="text-body-1 text-dark opacity-90 mb-4">
                  Esta política de privacidade pode ser atualizada sempre que se justificar, sendo a versão mais recente sempre a que se encontra publicada nesta página.
                </p>
                <p class="text-body-2 text-dark opacity-70 mb-0">
                  Data da última atualização: 31 de março de 2026.
                </p>
              </section>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.policy-card {
  background: #ffffff;
  border: 1px solid rgba(14, 9, 113, 0.12);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(14, 9, 113, 0.06);
}

.policy-list {
  margin: 0;
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;
    color: rgba(0, 0, 0, 0.85);
    font-size: 1rem;
    line-height: 1.6;
  }

  li:last-child {
    margin-bottom: 0;
  }
}
</style>
