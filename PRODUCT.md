# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Dueños y dueñas de PyMEs argentinas no técnicas (comercios, distribuidoras, talleres, concesionarias, servicios) que hoy operan con Excel, WhatsApp, Instagram y cuadernos. Llegan mayormente desde el celular. Compran confianza y resultados, no tecnología. Su trabajo: vender y operar sin perder pedidos, sin actualizar precios a mano y sin depender de que una sola persona sepa el stock.

## Product Purpose
Avanzio diseña, construye y mantiene software a medida para PyMEs: sistemas de gestión (stock, precios, pedidos), tiendas online y automatizaciones/integraciones (MercadoPago, facturación, avisos). El sitio existe para que ese dueño de PyME se reconozca, crea que es posible y escriba por WhatsApp. Éxito = conversaciones de WhatsApp iniciadas desde el sitio.

## Positioning
Los mismos tres fundadores que programan (Iván, Magalí, Julián) son quienes atienden al cliente, construyen con él y se quedan después de la entrega. "Tu socio tecnológico, no un proveedor más."

## Operating Context
Contacto principal por WhatsApp (+54 9 11 7063-0456), email hola@avanzio.ar, formulario web (Resend). Buenos Aires, Argentina. Español rioplatense (voseo).

## Capabilities and Constraints
- Next.js 16 + Tailwind 4 + TypeScript, deploy en Vercel. Lighthouse > 90.
- Se mantiene el logo (wordmark "avanzio") actual.
- Sin precios publicados: el rango se da en la primera charla.

## Brand Commitments
- Logo: `references/Logo.svg` (wordmark, no se modifica).
- Dirección visual aprobada por el usuario (2026-10-14): híbrido "Taller × Bloque". Spec: `../docs/superpowers/specs/2026-10-14-rediseno-marca-avanzio-design.md`.
- Voz: directa, cálida, sin tecnicismos, voseo.

## Evidence on Hand
- **TryHardware** (de Iván; tienda + panel de gestión, en producción, try.com.ar): capturas en `public/casos/tryhardware/`. Datos documentados: 13 proveedores conectados, 13.700+ productos, sync cada 15 min, antes +5 h/día de actualización manual.
- **Santa Benedetta** (fiambrería; tienda + gestión, en producción, santabenedetta.com): primera versión en 1 mes. Capturas en `../../santa-benedetta/` (landing, admin).
- **Troncone Motors** (concesionaria familiar, Burzaco; web + catálogo): página de caso existente.
- **G3D** (taller de impresión 3D; tienda + panel de pedidos): en pre-lanzamiento, no en producción. Sin métricas.
- **Motora** (SaaS propio para concesionarias, multi-tenant): en desarrollo; Troncone Motors es el tenant piloto con datos reales. Capturas de su landing en `../../concesionarias-saas/.claude/worktrees/app-redesign-screens-404445/.impeccable/review/`.
- **No existen**: testimonios, métricas de resultados de clientes, fotos del equipo. No inventarlos.

## Product Principles
1. Honestidad: estado real de cada proyecto, sin métricas ni testimonios inventados.
2. Todo camino lleva a WhatsApp.
3. Hablarle al dueño en su idioma: problemas concretos antes que tecnología.
4. Mobile primero.

## Accessibility & Inclusion
WCAG AA de contraste; respetar `prefers-reduced-motion`.
