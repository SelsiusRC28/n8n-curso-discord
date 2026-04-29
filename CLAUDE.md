# CLAUDE.md — Sitio Web Curso n8n

Documentación de arquitectura y convenciones para el desarrollo de este proyecto.

## Propósito del Proyecto

Plataforma web estática para un curso de n8n. Los estudiantes acceden al contenido semana a semana. El acceso a cada semana se activa manualmente por el dueño del curso editando un archivo de configuración.

---

## Stack Tecnológico

| Herramienta | Versión | Rol |
|---|---|---|
| Vue 3 | 3.5.29 | Framework frontend (Composition API + `<script setup>`) |
| Vue Router | 5.0.3 | Routing client-side con lazy loading |
| Pinia | 3.0.4 | State management (actualmente sin uso real) |
| Vite | 7.3.1 | Build tool y dev server |
| Tailwind CSS | 4.2.2 | Estilos (via `@tailwindcss/vite`) |
| html-to-image | 1.11.13 | Generación de certificados PNG |
| html2canvas | 1.4.1 | Renderizado HTML a canvas |

Node requerido: `^20.19.0 || >=22.12.0`

---

## Arquitectura General

### Tipo de Aplicación

**SPA completamente estática.** No hay backend, no hay API calls, no hay autenticación real, no hay base de datos. Se puede deployar en cualquier hosting estático (Vercel, Netlify, GitHub Pages).

### Flujo de Navegación

```
Usuario visita URL
  ↓
router.beforeEach — verifica courseAccess.js
  ↓ bloqueado → redirige a /bienvenida
  ↓ libre → continúa
App.vue (solo <RouterView>)
  └── SidebarLayout.vue (layout principal)
      ├── Sidebar: navegación + badges de estado
      └── Área principal: vista activa según ruta
```

### Jerarquía de Componentes

```
App.vue
  └── SidebarLayout.vue
      ├── BienvenidaView.vue
      ├── Semana1View.vue ... Semana10View.vue
      └── CertificadoView.vue
```

---

## Estructura de Directorios

```
src/
├── main.js                        # Bootstrap: Vue + Pinia + Router
├── App.vue                        # Raíz — solo <RouterView>
├── router/
│   └── index.js                   # Todas las rutas + guard global
├── config/
│   └── courseAccess.js            # Control de acceso a semanas (editar aquí)
├── stores/
│   └── counter.js                 # Store de ejemplo — no se usa actualmente
├── layouts/
│   └── SidebarLayout.vue          # Layout principal con sidebar
├── views/
│   ├── BienvenidaView.vue         # Página de bienvenida
│   ├── CertificadoView.vue        # Generación y descarga de certificado
│   └── semanas/
│       ├── Semana1View.vue        # Semanas 1 y 2 (combinadas)
│       ├── Semana3View.vue
│       ├── Semana4View.vue
│       ├── Semana5View.vue
│       ├── Semana6View.vue
│       ├── Semana7View.vue
│       ├── Semana8View.vue
│       ├── Semana9View.vue
│       └── Semana10View.vue
├── components/                    # Vacío — no hay componentes reutilizables aún
└── assets/
    ├── main.css                   # Tailwind imports + definición de fuentes
    ├── base.css                   # Vacío
    └── logo.webp                  # Logo del curso
```

---

## Control de Acceso al Curso

**Archivo:** `src/config/courseAccess.js`

Este es el único mecanismo de acceso. Para desbloquear una semana, cambiar `false` a `true` y hacer rebuild.

```js
export const courseRouteAccess = {
  '/bienvenida': true,
  '/semana-1': true,
  '/semana-2': true,   // redirige a /semana-1 (semanas 1 y 2 son la misma vista)
  '/semana-3': true,
  '/semana-4': true,
  '/semana-5': true,
  '/semana-6': true,
  '/semana-7': false,  // bloqueada
  '/semana-8': false,
  '/semana-9': false,
  '/semana-10': false,
  '/certificado': false,
}
```

El guard global en `router/index.js` redirige a `/bienvenida` cualquier ruta bloqueada.

---

## Rutas

| Ruta | Vista | Estado actual |
|---|---|---|
| `/` | redirect | → `/bienvenida` |
| `/bienvenida` | BienvenidaView | Abierta |
| `/semana-1` | Semana1View | Abierta |
| `/semana-2` | redirect | → `/semana-1` |
| `/semana-3` | Semana3View | Abierta |
| `/semana-4` | Semana4View | Abierta |
| `/semana-5` | Semana5View | Abierta |
| `/semana-6` | Semana6View | Abierta |
| `/semana-7` | Semana7View | Bloqueada |
| `/semana-8` | Semana8View | Bloqueada |
| `/semana-9` | Semana9View | Bloqueada |
| `/semana-10` | Semana10View | Bloqueada |
| `/certificado` | CertificadoView | Bloqueada |

Todas las rutas usan lazy loading (`() => import(...)`).

---

## Persistencia de Datos

No hay base de datos ni backend. El único dato persistido es:

- **Clave:** `curso_n8n_student_name` en `localStorage`
- **Qué guarda:** nombre del estudiante para el certificado
- **Dónde se usa:** `CertificadoView.vue`

---

## Funcionalidades Implementadas

### Quiz Interactivo (en cada Semana View)
- 3 preguntas por semana
- Estado reactivo con `ref`
- Colores de feedback: naranja (seleccionado), verde (correcto), rojo (incorrecto)

### Certificado
- Modal con input para nombre del estudiante
- Guarda nombre en `localStorage`
- Descarga PNG via `html-to-image`
- Nombre de archivo: `certificado-curso-n8n-{nombre}.png`
- ID de certificado: formato `NFL-{AÑO}-{INICIALES}`
- Fecha en español (`toLocaleDateString('es-MX', ...)`)

### Sidebar
- Muestra todas las semanas con badges (IN, 01–10, OK)
- Item activo resaltado en naranja
- Rutas bloqueadas visualmente diferenciadas
- Botón de certificado al final

---

## Sistema de Diseño

Ver `DESIGN.md` para la guía visual completa. Resumen:

### Paleta Aprobada
- Fondo: `#050505` y `#000000`
- Paneles: `zinc-950` con transparencias
- Acento principal: `orange-500`
- Acento secundario: `orange-400`
- Texto: blanco, `zinc-300`, `zinc-400`, `zinc-500`
- Bordes: naranja con baja opacidad

### Reglas Inamovibles
- Tema siempre oscuro, nunca claro
- Acento naranja, nunca reemplazar la paleta
- `rounded-2xl` a `rounded-3xl` para tarjetas y paneles
- Sin colores saturados fuera del sistema (morado, azul, verde)
- Sidebar siempre oscuro y limpio

### Tipografía
- Títulos: Sora (semibold)
- Cuerpo: Manrope
- Certificado: Cormorant Garamond
- Labels en uppercase con tracking amplio

### Tailwind
- Usar Tailwind CSS v4 para todo
- Import via `@import "tailwindcss"` en `main.css`
- Plugin: `@tailwindcss/vite`

---

## Convenciones de Código

- **Composition API** con `<script setup>` en todos los componentes
- **Sin comentarios** excepto cuando el "por qué" no es obvio
- **Sin componentes genéricos** en `src/components/` por ahora — las vistas son standalone
- **Sin abstracciones prematuras** — agregar solo lo que la tarea requiere
- **Sin variables de entorno** — todo es configuración estática

---

## Al Agregar una Nueva Semana

1. Crear `src/views/semanas/SemanaXView.vue` siguiendo el mismo patrón visual
2. Agregar la ruta en `src/router/index.js` como lazy import
3. Agregar la entrada en `src/config/courseAccess.js` con `false`
4. Agregar el link en el sidebar de `SidebarLayout.vue`
5. Verificar que el diseño respeta `DESIGN.md`

---

## Lo que No Existe (Todavía)

- No hay backend ni API
- No hay integración real con Discord (el nombre "discord" es del canal del curso)
- No hay pagos ni autenticación
- No hay analytics
- No hay variables de entorno (`.env`)
- No hay componentes reutilizables en `src/components/`
- El store de Pinia (`counter.js`) es un placeholder sin uso real

---

## Scripts de Desarrollo

```bash
npm run dev       # Dev server
npm run build     # Build de producción → /dist
npm run preview   # Preview del build
```
