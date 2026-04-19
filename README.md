# Govora RelGov — Deck Animado com Remotion

Apresentação 1920×1080 animada em React/Remotion. 6 slides, 60fps, design system Govora completo.

## Início rápido

```bash
npm install
npm start          # abre Remotion Studio no browser
```

## Renderizar vídeo

```bash
# MP4 (recomendado para upload)
npm run build

# WebM (web-optimized)
npm run render:webm

# GIF (compartilhamento rápido)
npm run render:gif
```

Saída em `out/`.

## Estrutura

```
src/
├── tokens.ts                  # Design system: cores, fontes, timing
├── index.ts                   # Entry point Remotion
├── Root.tsx                   # Registra compositions
├── GovDeck.tsx                # Sequência principal (Series)
├── components/
│   ├── Animated.tsx           # Hooks
│   ├── Background.tsx         # SlideBackground
│   └── Transition.tsx         # Transitions
└── compositions/
    ├── Slide1Hero.tsx
    Slide2ValueProps.tsx
    Slide3Modules.tsx
    Slide4Stack.tsx
    Slide5Users.tsx
    Slide6CTA.tsx
```

**Total: ~33 segundos @ 60fps**
