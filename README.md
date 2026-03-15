# Avanzio — Sitio Web Corporativo

Sitio web corporativo de **Avanzio**, empresa de desarrollo de software a medida orientada a PyMEs argentinas con proyección LATAM. Fundada por Iván y Magalí, desarrolladores de Banfield, Buenos Aires.

**Propuesta de valor:** *"Tu socio tecnológico, no un proveedor más."*

## Estado actual

Maqueta funcional completa con todas las páginas implementadas y navegación operativa. Listo para iterar sobre diseño, contenido real y deploy.

### Páginas implementadas

| Ruta | Estado | Descripción |
|------|--------|-------------|
| `/` | ✅ | Landing con hero, servicios (bento grid), casos de éxito, CTA |
| `/servicios` | ✅ | Detalle de los 3 servicios, proceso de trabajo, FAQ |
| `/casos` | ✅ | Portafolio con TryHardware y Santa Benedetta |
| `/nosotros` | ✅ | Historia, equipo, valores, stack tecnológico |
| `/contacto` | ✅ | Formulario (sin backend aún), sidebar con WhatsApp, email, horarios |

### Componentes globales

- **Navbar** — Sticky con backdrop blur, hamburger menu mobile, link activo resaltado
- **Footer** — Columnas con nav, contacto y legal
- **WhatsApp FAB** — Botón flotante siempre visible
- **TerminalHero** — Animación de terminal con staggered text reveal
- **TechTicker** — Ticker infinito con el stack tecnológico

## Stack

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS 4
- **Lenguaje:** TypeScript estricto
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Icons:** Material Symbols Outlined (Google Fonts CDN)
- **Deploy target:** Vercel

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Servicios ofrecidos

1. **Sistema a medida** — Desarrollo completo adaptado al negocio del cliente
2. **Tienda online** — E-commerce con MercadoPago, ARCA y logística local
3. **Panel de gestión** — Dashboards internos para operaciones del negocio

## Casos de éxito actuales

### TryHardware
Tienda de hardware informático en Banfield con WooCommerce personalizado + panel de gestión interno + plugin TH Slider Builder. Sistema propio en uso diario.

### Santa Benedetta
Tienda online para fiambrería artesanal con catálogo, envío local y MercadoPago. Primer cliente externo de Avanzio.

## Pendiente (próximas iteraciones)

- [ ] Conectar formulario de contacto a backend (Resend / Formspree)
- [ ] Implementar páginas de detalle por caso (`/casos/[slug]` con MDX)
- [ ] Agregar Open Graph images por página
- [ ] Pulir animaciones y microinteracciones
- [ ] Deploy en Vercel con dominio propio
- [ ] Páginas legales (Términos y Condiciones, Política de Privacidad)

## Diseño

- **Paleta:** Dark theme — fondo `#0f172a`, superficie `#1e293b`, borde `#334155`
- **Acento primario:** Indigo `#4f46e5`
- **Acentos secundarios:** Emerald, Amber, Orange
- **Tipografía:** Plus Jakarta Sans (400–800)
- **Principio:** Mobile-first, sin CSS modules, todo Tailwind

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Root layout: Navbar + Footer + WhatsApp FAB
│   ├── page.tsx            # Home / Landing
│   ├── globals.css         # Estilos globales + animaciones
│   ├── servicios/page.tsx
│   ├── casos/page.tsx
│   ├── nosotros/page.tsx
│   └── contacto/
│       ├── page.tsx
│       └── contacto-content.tsx
└── components/
    ├── navbar.tsx
    ├── footer.tsx
    ├── whatsapp-fab.tsx
    ├── terminal-hero.tsx
    └── tech-ticker.tsx
```

---

*Hecho con corazon en Argentina*
