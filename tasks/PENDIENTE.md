# Pendiente — Avanzio Web

Todo lo que requiere información real, assets o decisiones de negocio para completarse.
Lo técnico ya está implementado. Solo falta rellenar con datos reales.

---

## 🔴 CRÍTICO — Antes del lanzamiento

### 1. Número de WhatsApp real
**Dónde:** Todos los botones "Abrir WhatsApp" y "Escribinos por WhatsApp"
**Archivos:**
- `src/app/contacto/contacto-content.tsx` (línea con `wa.me/5491100000000`)
- `src/app/servicios/page.tsx`
- `src/app/nosotros/page.tsx`
- `src/components/footer.tsx`
- `src/components/whatsapp-fab.tsx`

**Qué poner:** `https://wa.me/549XXXXXXXXXX` con el número real (sin guiones ni espacios)

---

### 2. Email real
**Dónde:** Footer, página de contacto
**Archivos:**
- `src/components/footer.tsx`
- `src/app/contacto/contacto-content.tsx`

**Qué poner:** La dirección real de `hola@avanzio.com.ar` (verificar que el dominio tenga MX configurado)

---

### 3. Formulario de contacto funcional
**Dónde:** `src/app/contacto/contacto-content.tsx`
**Estado actual:** El formulario hace `setSubmitted(true)` pero no envía nada.
**Qué implementar:** Conectar a un servicio de formularios. Opciones:
- **Resend** (API de email, gratis hasta 3000/mes) — recomendado
- **Formspree** (sin backend, gratis hasta 50 envíos/mes)
- **EmailJS** (desde el cliente, no expone credenciales)

**Campos que llegan:** Nombre, Empresa, Email, Qué necesitás, Descripción del proyecto

---

## 🟡 IMPORTANTE — Para el lanzamiento ideal

### 4. Datos reales de TryHardware

**Página:** `/casos/tryhardware`
**Secciones marcadas con `[Placeholder]`:**

#### El problema (El problema → story)
- ¿Qué herramientas usaban antes del sistema? (Excel, WhatsApp, otro?)
- ¿Cuál era el mayor dolor operativo?

#### La solución (descripción real)
- Descripción real del TH Slider Builder
- Qué hace el panel interno exactamente

#### Resultados (números reales)
- ¿Cuántos pedidos procesa por mes aprox?
- ¿Hace cuántos años está en producción?
- Cualquier métrica relevante

#### Quote (línea 127 aprx.)
- Reemplazar o confirmar la quote actual de Iván

---

### 5. Datos reales de Santa Benedetta

**Página:** `/casos/santa-benedetta`
**Secciones marcadas con `[Placeholder]`:**

#### El cliente
- ¿Cómo se llama el dueño?
- ¿En qué barrio está la fiambrería?
- ¿Cuándo fue el proyecto?

#### La solución
- Descripción más concreta del trabajo realizado

#### Resultados
- ¿Cuántos productos tiene el catálogo?
- ¿En cuánto tiempo se lanzó?
- ¿Alguna métrica de ventas o tráfico que el cliente haya compartido?

#### Quote
- Quote real del dueño de Santa Benedetta (si la tiene Magalí)
- O confirmar la quote de Magalí

---

### 6. URL real de TryHardware
**Dónde:** `/casos/tryhardware/page.tsx` línea del botón "Ver sitio"
**Qué verificar:** Que `https://tryhardware.com.ar` sea la URL correcta

### 7. URL real de Santa Benedetta
**Dónde:** `/casos/santa-benedetta/page.tsx` línea del botón "Ver sitio"
**Qué verificar:** Que `https://santabenedetta.com.ar` sea la URL correcta

---

## 🟢 MEJORAS — Post lanzamiento

### 8. Screenshots reales de los sistemas
**Dónde:** Páginas de storytelling de cada caso
**Qué agregar:** Capturas de pantalla reales del panel de gestión y tienda de TryHardware, y de la tienda de Santa Benedetta
**Cómo:** Usar componentes `<Image>` de Next.js en `/public/assets/casos/`

---

### 9. Foto de perfil — Iván y Magalí
**Dónde:** `src/app/nosotros/page.tsx` — sección "El equipo"
**Estado actual:** Avatares con iniciales (IV / MA)
**Qué agregar:** Fotos reales en `/public/assets/equipo/ivan.jpg` y `magali.jpg`

---

### 10. Stats reales en Home y Casos
**Dónde:**
- `src/app/page.tsx` — sección de stats del hero (proyectos, clientes)
- `src/app/casos/page.tsx` — stats glassmorphism row (2 sistemas, 100%, 0 caídas)

**Qué actualizar cuando corresponda:** Los números de proyectos entregados, clientes satisfechos, etc.

---

### 11. Horarios reales de atención
**Dónde:** `src/app/contacto/contacto-content.tsx` — card "Disponibilidad"
**Estado actual:** Lun–Vie 9:00–20:00, Sáb 10:00–15:00
**Acción:** Confirmar que estos horarios son los reales

---

### 12. Links de redes sociales en Footer
**Dónde:** `src/components/footer.tsx`
**Estado actual:** Links placeholder a `#`
**Qué agregar:** URLs reales de Instagram, LinkedIn (si aplica), GitHub (si aplica)

---

### 13. Dominio y SEO
**Acciones antes del deploy:**
- Configurar `avanzio.com.ar` en Vercel
- Verificar que `src/app/layout.tsx` tenga el `metadataBase` correcto
- Crear `public/og-image.jpg` (1200×630px) para Open Graph
- Crear `public/favicon.ico` / `icon.png` con el logo de Avanzio

---

### 14. Google Analytics / Plausible
**Cuándo:** Una vez en producción
**Qué implementar:** Tracking básico de visitas y conversiones (clic en WhatsApp, submit del formulario)

---

## 📋 Checklist de deploy

- [ ] WhatsApp número real en todos los archivos
- [ ] Email real verificado
- [ ] Formulario de contacto conectado a backend real
- [ ] Datos reales de TryHardware completados
- [ ] Datos reales de Santa Benedetta completados
- [ ] URLs de los sitios verificadas
- [ ] Horarios de atención confirmados
- [ ] Links de redes sociales agregados
- [ ] Dominio configurado en Vercel
- [ ] metadataBase actualizado en layout.tsx
- [ ] og-image.jpg creada
- [ ] favicon actualizado con logo de Avanzio
- [ ] Lighthouse > 90 en todas las páginas
- [ ] Prueba en mobile (iOS Safari + Android Chrome)
