<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import ascsLines from '~/assets/backgroundless .svg';

interface CounterItem {
  value: number;
  suffix: string;
  caption: string;
}

const items = ref<CounterItem[]>([
  {
    value: 59,
    suffix: "",
    caption: "Produtos/serviços piloto validados até 2025",
  },
  {
    value: 100,
    suffix: "%",
    caption: "Testes em ambiente real",
  },
  {
    value: 1,
    suffix: "#",
    caption: "Líder europeu em apoio a PMEs/startups",
  },
]);

// Animated values
const animatedValues = ref<number[]>(items.value.map(() => 0));

onMounted(() => {
  items.value.forEach((item, index) => {
    animateCounter(item.value, index);
  });
});

function animateCounter(target: number, index: number) {
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const counterInterval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const current = Math.floor(target * progress);
    animatedValues.value[index] = current;

    if (frame === totalFrames) {
      animatedValues.value[index] = target;
      clearInterval(counterInterval);
    }
  }, frameDuration);
}

function formatNumber(value: number, suffix: string) {
  if (suffix === "K") {
    return `${Math.floor(value / 1000)}K`;
  } else if (suffix === "M") {
    const millions = value / 1_000_000;
    return Number.isInteger(millions)
      ? `${millions}M`
      : `${millions.toFixed(1)}M`;
  } else if (suffix === "%") {
    return `${value}%`;
  } else if (suffix === "#") {
    return `#${value}`;
  } else {
    return `${value}`;
  }
}

const scrollTo = (hash: string) => {
  try {
    const el = document.querySelector(hash);
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = hash;
    }
  } catch (e) {
    // noop
  }
};
</script>

<template>
  <div class="position-relative bg-surface overflow-hidden">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="06" title="Impacto" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-md-575"
              title="Impacto Esperado"
              subtitle="A ASCS TB está orientada a resultados mensuráveis, alinhados com transição digital e competitividade empresarial."
            />

            <div class="d-flex flex-sm-row flex-column ga-8">
              <div
                class="d-flex flex-column ga-3 flex-grow-1 border-t "
                v-for="(item, index) in items"
                :key="index"
              >
                <h3 class="text-60 text-dark pt-6">
                  {{ formatNumber(animatedValues[index], item.suffix) }}+
                </h3>
                <p
                  class="text-subtitle-2 text-dark opacity-70 font-weight-regular"
                >
                  {{ item.caption }}
                </p>
              </div>
            </div>

            <v-btn class="interactive-button" size="lg" flat @click.prevent="scrollTo('#about')">
              <span class="label">Saiba mais sobre o nosso impacto</span>
              <v-avatar size="45" class="icon bg-white">
                <Icon icon="material-symbols:arrow-outward" height="20" />
              </v-avatar>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    
    <!-- ASCS Lines Decoration -->
    <div class="ascs-lines-left">
      <img :src="ascsLines" alt="" class="lines-svg" />
    </div>

    <SharedSectionSpacer />
  </div>
</template>

<style scoped lang="scss">
.ascs-lines-left {
  position: absolute;
  left: -100px;
  top: 50%;
  transform: translateY(-50%);
  width: 900px;
  height: 900px;
  opacity: 0.35;
  z-index: 1;
  pointer-events: none;
  
  @media (max-width: 960px) {
    left: -150px;
    width: 600px;
    height: 600px;
    opacity: 0.20;
  }
}

.lines-svg {
  width: 100%;
  height: 100%;
  filter: brightness(0) saturate(100%) invert(9%) sepia(78%) saturate(5487%) hue-rotate(245deg) brightness(92%) contrast(110%);
  object-fit: contain;
  object-position: left center;
}
</style>