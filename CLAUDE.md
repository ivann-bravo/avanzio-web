# Software House - Sitio Web Corporativo

## Sobre el Proyecto
Sitio web corporativo para una empresa de desarrollo de software a medida orientada a PyMEs argentinas con proyección LATAM. Fundada por Iván y Magalí, estudiantes avanzados de Sistemas ubicados en Banfield, Buenos Aires.

**Nombre de la empresa:** Avanzio

**Propuesta de valor central:** "Tu socio tecnológico, no un proveedor más." Cercanía real, sistemas que resuelven problemas concretos, acompañamiento continuo.

## Stack Tecnológico
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS 3.x
- **Lenguaje:** TypeScript
- **CMS (casos de éxito):** MDX o Contentlayer (contenido en archivos, sin base de datos)
- **Deployment:** Vercel (free tier)
- **Prototipado:** Google Stitch (vía MCP) → conversión a React/Next.js

## Arquitectura del Sitio

### Páginas principales
1. **Home** (`/`) — Landing principal con hero, servicios, preview de casos de éxito, testimonios, CTA
2. **Servicios** (`/servicios`) — Detalle de cada servicio, proceso de trabajo, FAQ
3. **Casos de Éxito** (`/casos`) — Blog/portafolio con listado de proyectos
4. **Caso Individual** (`/casos/[slug]`) — Detalle de cada proyecto (página dinámica)
5. **Nosotros** (`/nosotros`) — Historia, equipo, valores, stack tecnológico
6. **Contacto** (`/contacto`) — Formulario, WhatsApp, email, ubicación

### Componentes globales
- **Navbar:** Máximo 5 items. Mobile-first con hamburger menu.
- **Footer:** Links, redes sociales, email, disclaimer legal.
- **WhatsApp CTA:** Botón flotante siempre visible.
- **SEO:** Meta tags por página, Open Graph, schema markup para LocalBusiness.

## Casos de Éxito (contenido)

### Caso 1: TryHardware
- **Tipo:** Tienda online + Panel de gestión interno
- **Descripción:** Negocio de hardware informático en Banfield. Tienda WooCommerce con años de operación + panel de administración para gestión de precios y proveedores + plugin custom TH Slider Builder.
- **Mensaje:** "No solo creamos sistemas para otros, los usamos nosotros mismos todos los días."
- **Tecnologías:** WooCommerce, PHP, JavaScript, Node.js, TypeScript

### Caso 2: Santa Benedetta
- **Tipo:** E-commerce para fiambrería argentina
- **Descripción:** Tienda online completa para negocio de alimentos. Catálogo, envío local, pasarela de pago. Primer cliente externo.
- **Mensaje:** "Trabajamos codo a codo con el dueño para que la tienda refleje la identidad de su negocio."
- **Tecnologías:** E-commerce, integraciones argentinas

### Agregar nuevos casos
El portafolio se expande a medida que se sumen clientes. Agregar un nuevo caso = crear un nuevo archivo MDX en `src/content/casos/` siguiendo la misma estructura. No requiere cambios en código.

### Estructura de cada caso de éxito
Cada caso sigue este formato narrativo:
1. **El cliente:** Quién es, a qué se dedica
2. **El problema:** Qué dolor operativo tenía
3. **La solución:** Qué sistema se construyó y cómo
4. **El resultado:** Métricas, testimonios, impacto real
5. **Capturas/demo:** Screenshots del sistema

## Servicios ofrecidos
1. **Sistema a medida** — Desarrollo completo adaptado al negocio del cliente
2. **Tienda online** — E-commerce con integraciones argentinas (MercadoPago, ARCA)
3. **Panel de gestión** — Herramientas internas para operaciones del negocio

## Identidad Visual (directrices)
- **Tono:** Tecnológico pero cálido. Profesional sin ser frío ni corporativo.
- **Idioma:** Español (Argentina). Sin traducción al inglés por ahora.
- **Fotografía:** Fotos reales, no stock. Autenticidad sobre perfección.
- **Tipografía:** Elegir fonts que transmitan modernidad y cercanía (NO usar Inter, Roboto ni Arial).
- **Colores:** Definir durante la fase de prototipado en Stitch. Buscar paleta que combine tecnología + calidez.

## Flujo de Trabajo

### Fase 1: Prototipado con Stitch
1. Generar pantallas en Stitch para cada página del sitio
2. Extraer el Design DNA (colores, tipografía, estructura)
3. Iterar el diseño hasta tener aprobación
4. Documentar el sistema de diseño en DESIGN.md

### Fase 2: Conversión a código
1. Usar las pantallas de Stitch como referencia
2. Crear componentes React/Next.js basados en el HTML exportado
3. Implementar el routing y la estructura de páginas
4. Agregar interactividad y animaciones

### Fase 3: Contenido y deploy
1. Escribir el contenido de cada caso de éxito
2. Agregar screenshots y assets
3. Configurar SEO y meta tags
4. Deploy en Vercel

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests -> then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Reglas de Desarrollo

### Código
- TypeScript estricto. No usar `any`.
- Componentes funcionales con hooks.
- Nombres de archivos en kebab-case.
- Nombres de componentes en PascalCase.
- CSS con Tailwind. No usar CSS modules ni styled-components.
- Mobile-first. Diseñar primero para móvil, luego adaptar a desktop.

### Commits
- Mensajes en español.
- Formato: `tipo(alcance): descripción`
- Tipos: feat, fix, style, refactor, docs, chore

### Testing
- TDD cuando sea práctico.
- Tests unitarios para componentes con lógica.
- Tests e2e para flujos críticos (formulario de contacto).

### Performance
- Lighthouse score > 90 en todas las categorías.
- Imágenes optimizadas (WebP, lazy loading).
- Fonts preloaded.
- Minimal JavaScript bundle.

## Archivos de Referencia
- `docs/plan-estrategico.md` — Plan de negocio completo
- `docs/contenido-casos.md` — Contenido detallado de cada caso de éxito
- `DESIGN.md` — Sistema de diseño (se genera después del prototipado)
- `SITE.md` — Roadmap del sitio (tracking de páginas completadas)
