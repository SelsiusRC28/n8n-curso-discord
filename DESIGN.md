# DESIGN.md

## Objetivo

Este proyecto usa una identidad visual fija para el curso de n8n. El diseno no debe cambiar sin una decision explicita del propietario del proyecto.

La meta es mantener una interfaz:

- moderna
- minimalista
- oscura
- elegante
- enfocada en naranja y negro
- limpia para contenido educativo

## Regla Principal

No cambiar el lenguaje visual base del proyecto.

Esto significa:

- no reemplazar la paleta naranja/negro por otro tema
- no convertir la interfaz a un estilo generico blanco
- no agregar colores chillones fuera del sistema visual
- no redisenar componentes existentes sin conservar su esencia
- no cambiar el estilo minimalista por algo recargado

Si se agregan nuevas vistas o componentes, deben heredar este mismo sistema visual.

## Identidad Visual

### Paleta

Colores principales aprobados:

- fondo principal: `#050505`
- fondo secundario: `#000000`
- panel principal: `zinc-950` con transparencias oscuras
- borde tenue: naranja con baja opacidad
- color acento principal: `orange-500`
- color acento secundario: `orange-400`
- texto principal: blanco
- texto secundario: `zinc-300`
- texto terciario: `zinc-400`
- texto sutil: `zinc-500`

Colores a evitar:

- morado como color dominante
- azul como color dominante
- verdes saturados como base del layout
- fondos blancos o grises claros dominantes

## Estilo General

La interfaz debe transmitir:

- sensacion premium
- alto contraste
- bloques bien definidos
- jerarquia tipografica clara
- espacio negativo generoso
- poca saturacion visual

El estilo visual debe seguir estos principios:

- fondos oscuros con profundidad
- acentos naranjas solo para enfasis
- bordes suaves con opacidad baja
- sombras grandes pero sutiles
- esquinas redondeadas amplias
- tarjetas simples y bien respiradas

## Layout

### Sidebar

El sidebar es una pieza central del proyecto y debe mantenerse con estas caracteristicas:

- fondo negro u oscuro semitransparente
- navegacion vertical
- links en tarjetas redondeadas
- item activo resaltado en naranja
- look limpio y moderno
- comportamiento responsivo

No hacer el sidebar:

- claro
- plano sin contraste
- lleno de iconos innecesarios
- excesivamente decorado

### Contenido Principal

La zona principal debe mantenerse como una superficie:

- oscura
- amplia
- con padding generoso
- con tarjetas internas del mismo sistema visual
- con encabezados claros y buen aire

## Tipografia

Usar una jerarquia sobria y moderna:

- titulos grandes, limpios y con peso medio o semibold
- labels pequenos en uppercase con tracking amplio
- parrafos cortos y faciles de leer
- evitar fuentes visualmente infantiles o decorativas

Si no se cambia la fuente del proyecto, mantener el look actual apoyado en:

- pesos medios
- tracking amplio en etiquetas
- contraste entre titulos y textos secundarios

## Componentes

Todo componente nuevo debe respetar estas reglas:

- bordes redondeados grandes: `rounded-2xl` a `rounded-3xl`
- fondos oscuros o negros transluidos
- bordes con opacidad baja
- hover discreto
- acento naranja solo donde agrega jerarquia

Botones, tarjetas, paneles y bloques de navegacion deben sentirse parte del mismo sistema.

## Tailwind

El proyecto usa Tailwind CSS v4 via:

- `@tailwindcss/vite`
- `@import "tailwindcss";`

Se debe priorizar Tailwind para mantener consistencia visual.

## Que si se puede cambiar

Se puede:

- agregar nuevas vistas
- agregar nuevas cards
- agregar nuevas secciones
- mejorar responsive
- mejorar espaciados
- mejorar accesibilidad
- agregar microinteracciones discretas

Siempre que no rompa la identidad visual definida aqui.

## Que no se debe hacer sin permiso

- cambiar la paleta principal
- redisenar el sidebar desde cero
- pasar a tema claro
- cambiar el estilo minimalista oscuro
- reemplazar rounded cards por cajas rigidas
- cambiar el proyecto a una estetica distinta

## Guia Rapida Para Futuras Ediciones

Antes de tocar UI, validar:

1. Sigue siendo naranja y negro.
2. Sigue viendose minimalista.
3. Sigue sintiendose moderno y premium.
4. El nuevo componente parece parte del mismo sistema.
5. No rompe el sidebar ni el layout principal.

Si alguna respuesta es "no", ajustar antes de cerrar el cambio.
