# 🎨 Guia de Estilo - ASCS TB Landing Page

## 📐 Layout (Grid)
```vue
<v-col cols="12" lg="4">  <!-- LEFT: sempre lg="4" -->
<v-col cols="12" lg="8">  <!-- RIGHT: sempre lg="8" -->
<div class="d-flex flex-column ga-8">  <!-- Spacing vertical: sempre ga-8 -->
```

## 📝 Hierarquia de Texto
```vue
<h2 class="text-h3 text-dark mb-4">Título Principal</h2>
<p class="text-body-1 text-dark opacity-80 mb-8">Introdução...</p>
<h3 class="text-h5 text-dark mb-3">Subtítulo</h3>
<p class="text-body-2 text-dark opacity-90">Descrição...</p>
```

## 🔘 Botões CTA
```vue
<!-- Primary (azul) -->
<v-btn color="primary" size="x-large" href="#contact" 
       class="text-none px-10" elevation="0">
  <Icon icon="mdi:nome" class="me-2" height="24" />
  Texto do Botão
</v-btn>

<!-- Secondary (laranja) -->
<v-btn color="secondary" size="x-large" href="#contact" 
       class="text-none px-10" elevation="8">
  <Icon icon="mdi:nome" class="me-2" height="24" />
  Texto do Botão
</v-btn>
```
**Regra:** Sempre `size="x-large"` + `class="text-none px-10"`

## 🎴 Cards
```vue
<div class="card-name pa-6 h-100">
  <!-- Conteúdo -->
</div>
```
```scss
.card-name {
  border-radius: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
}
```

## 🎨 Ícones - Tamanhos por Contexto
| Contexto | height |
|----------|--------|
| Cards coloridos (grandes) | `48px` |
| Icon wrapper circular | `40px` |
| Steps/Timeline | `30px` |
| Botões e listas | `24px` |
| Links pequenos | `16px` |

## 🎯 Backgrounds de Secções
Alternância: `bg-surface` → `bg-darkgray` → `bg-primary` → repete

## ✅ Checklist Rápida
- [ ] Colunas: `lg="4"` e `lg="8"` (nunca xl)
- [ ] Botões: `size="x-large"` + `px-10`
- [ ] Spacing: `ga-8` consistente
- [ ] Cards: `pa-6` + `h-100`
- [ ] Texto: `text-h3` → `text-h5` → `text-body-1/2`
- [ ] `SharedSectionSpacer` no início e fim de cada secção
