export const palette = {
  paper: "#F3EEE4",
  bone: "#FBF8F2",
  sand: "#D9CFBF",
  "before-card": "#E9E3D8",
  ink: "#16130F",
  "ink-soft": "#5A5248",
  "ink-muted": "#6B6155",
  "ink-raised": "#2A251F",
  violet: "#5B2EFF",
  "violet-deep": "#2A1580",
  "violet-tint": "#E4DDFF",
  mustard: "#FFB224",
  "bone-on-ink": "#B5AB9C",
  danger: "#B42318",
  whatsapp: "#25D366",
} as const;

export type PaletteToken = keyof typeof palette;
