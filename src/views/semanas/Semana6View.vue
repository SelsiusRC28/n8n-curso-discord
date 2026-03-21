<script setup>
import { computed, reactive, ref } from 'vue'

const answers = reactive({
  q1: '',
  q2: '',
  q3: '',
})

const checked = ref(false)

const correctAnswers = {
  q1: 'falso',
  q2: 'validar',
  q3: 'si',
}

const score = computed(() => {
  return Object.entries(correctAnswers).filter(([key, value]) => answers[key] === value).length
})

function checkAnswers() {
  checked.value = true
}

function resetAnswers() {
  answers.q1 = ''
  answers.q2 = ''
  answers.q3 = ''
  checked.value = false
}

function optionClass(questionKey, optionValue) {
  if (!checked.value) {
    return answers[questionKey] === optionValue
      ? 'border-orange-400/40 bg-orange-500/10 text-white'
      : 'border-white/8 bg-white/[0.02] text-zinc-300 hover:border-orange-500/20 hover:bg-orange-500/5'
  }

  if (correctAnswers[questionKey] === optionValue) {
    return 'border-emerald-400/40 bg-emerald-500/10 text-emerald-100'
  }

  if (answers[questionKey] === optionValue) {
    return 'border-rose-400/40 bg-rose-500/10 text-rose-100'
  }

  return 'border-white/8 bg-white/[0.02] text-zinc-400'
}
</script>

<template>
  <section class="space-y-6">
    <article class="relative overflow-hidden rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent p-6 sm:p-8">
      <div class="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-orange-500/50 via-orange-500/10 to-transparent"></div>

      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
        Semana 6
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        n8n + IA - Introduce IA en tus automatizaciones
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        En esta semana das un salto importante: pasas de construir workflows funcionales a disenar automatizaciones que incorporan IA con intencion. La clave no es "meter inteligencia artificial" porque si, sino aprender a usarla donde realmente aporta valor. Aqui empiezas a desarrollar criterio tecnico y practico: cuando usar IA, como controlar su comportamiento y como evitar que convierta un flujo solido en un sistema inestable.
      </p>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Base</p>
          <p class="mt-2 text-sm font-semibold text-white">n8n + workflows reales</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">IA</p>
          <p class="mt-2 text-sm font-semibold text-white">Ollama y DeepSeek</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Meta</p>
          <p class="mt-2 text-sm font-semibold text-white">Usarla con criterio y control</p>
        </div>
      </div>
    </article>

    <div class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl border border-orange-500/15 bg-zinc-950/70 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Objetivo principal del aprendizaje
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Aprender a integrar IA de forma util dentro de workflows reales en n8n. El enfoque de esta semana no es impresionar con respuestas generadas, sino construir procesos donde la IA aporte claridad, velocidad o automatizacion inteligente sin romper la confiabilidad del flujo.
        </p>
      </article>

      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Tiempo de estudio</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Entre 8 y 10 horas. Conviene distribuir este tiempo entre construccion, comparacion de salidas, ajuste de prompts y validacion del comportamiento del flujo en diferentes escenarios.
        </p>
        <div class="mt-5 flex items-center gap-3">
          <div class="h-2 flex-1 rounded-full bg-white/5">
            <div class="h-2 w-3/5 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
          </div>
          <span class="text-sm font-semibold text-orange-200">8-10h</span>
        </div>
      </article>
    </div>

    <div class="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Conceptos clave</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Ollama, DeepSeek, modelos locales, generacion de texto, limpieza de salida, validacion de respuestas y automatizacion asistida por IA. Tambien debes comprender una idea central: una salida generada por IA no debe asumirse como correcta solo porque suena bien; debe ser evaluada, limpiada y, cuando sea necesario, validada antes de usarse en un proceso real.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Ollama</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">DeepSeek</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Modelos locales</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Generacion de texto</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Limpieza de salida</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Validacion</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Automatizacion asistida</span>
        </div>
      </article>

      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Que debes comprender al finalizar</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Debes comprender cuando conviene usar IA dentro de un workflow, como controlar la calidad de su salida y como integrarla sin volver fragil el proceso. Al terminar esta semana, debes ser capaz de distinguir entre un uso util de IA y un uso innecesario o riesgoso dentro de una automatizacion.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Uso</p>
            <p class="mt-2 text-sm font-semibold text-white">Cuando aporta valor</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Control</p>
            <p class="mt-2 text-sm font-semibold text-white">Calidad de salida</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Riesgo</p>
            <p class="mt-2 text-sm font-semibold text-white">Evitar fragilidad</p>
          </div>
        </div>
      </article>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Habilidades que desarrollaras</p>
        <div class="mt-4 grid gap-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Conexion de modelos</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Conectar modelos, generar texto dentro de un flujo y automatizar correos con ayuda de IA.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Calidad y limpieza</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Limpiar respuestas, evaluar calidad y revisar si la salida realmente sirve para su proposito.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Diseno confiable</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Pensar como alguien que construye sistemas utiles, claros y seguros, no solo respuestas llamativas.</p>
          </div>
        </div>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Mini proyecto o ejercicio aplicado al mundo real
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-100">
          Construiras un redactor automatico de correos para aprobaciones, revisiones o solicitudes internas. Este ejercicio es muy valioso porque representa un caso comun en empresas y equipos: transformar informacion operativa en mensajes claros y listos para enviar, con apoyo de IA, pero sin perder control sobre el resultado final.
        </p>
        <div class="mt-5 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Entrada</p>
            <p class="mt-2 text-sm text-white">Datos operativos</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">IA</p>
            <p class="mt-2 text-sm text-white">Redaccion asistida</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Control</p>
            <p class="mt-2 text-sm text-white">Validacion antes de enviar</p>
          </div>
        </div>
      </article>
    </div>

    <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Errores comunes</p>
      <div class="mt-4 grid gap-3 md:grid-cols-2">
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Usar IA sin necesidad real cuando una regla fija o una plantilla seria suficiente.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Enviar respuestas sin validarlas y depender demasiado del prompt.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          No comparar la calidad entre distintas salidas o configuraciones.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Un flujo con IA mal evaluada puede parecer potente, pero ser poco confiable en la practica.
        </div>
      </div>
    </article>

    <article class="rounded-3xl border border-orange-500/15 bg-zinc-950/70 p-6">
      <div class="flex flex-col gap-4 border-b border-white/5 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            Examen: 3 preguntas cerradas del modulo
          </p>
          <p class="mt-3 text-sm leading-7 text-zinc-300">
            Responde y luego usa el boton para revisar tu puntaje y ver las respuestas correctas.
          </p>
        </div>
        <div class="rounded-2xl border border-orange-500/15 bg-orange-500/10 px-4 py-3 text-sm text-orange-100">
          Puntaje: <span class="font-semibold text-white">{{ checked ? `${score}/3` : 'Pendiente' }}</span>
        </div>
      </div>

      <div class="mt-6 space-y-5">
        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">1. Verdadero o falso</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Integrar IA en un workflow siempre mejora el proceso, aunque no se valide la salida generada.
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q1', 'verdadero')"
              @click="answers.q1 = 'verdadero'"
            >
              Verdadero
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q1', 'falso')"
              @click="answers.q1 = 'falso'"
            >
              Falso
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">2. Opcion multiple</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Cual es una buena practica al usar IA dentro de n8n?
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'automatico')"
              @click="answers.q2 = 'automatico'"
            >
              A) Enviar automaticamente cualquier respuesta del modelo
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'ahorrar')"
              @click="answers.q2 = 'ahorrar'"
            >
              B) Evitar probar diferentes prompts para ahorrar tiempo
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'validar')"
              @click="answers.q2 = 'validar'"
            >
              C) Limpiar y validar la salida antes de usarla en el flujo
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'reemplazar')"
              @click="answers.q2 = 'reemplazar'"
            >
              D) Reemplazar toda logica del workflow por IA
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">3. Si o no</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Podrias decidir en que casos conviene usar IA y en cuales seria mejor una automatizacion tradicional dentro de n8n?
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q3', 'si')"
              @click="answers.q3 = 'si'"
            >
              Si
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q3', 'no')"
              @click="answers.q3 = 'no'"
            >
              No
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          class="rounded-2xl border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
          @click="checkAnswers"
        >
          Checkear respuestas
        </button>
        <button
          type="button"
          class="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-orange-500/20 hover:bg-orange-500/5"
          @click="resetAnswers"
        >
          Reiniciar
        </button>
      </div>

      <div
        v-if="checked"
        class="mt-6 rounded-3xl border border-emerald-400/20 bg-emerald-500/8 p-6"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Respuestas correctas
        </p>
        <div class="mt-4 space-y-3 text-sm leading-7 text-zinc-100">
          <p><span class="font-semibold text-white">1.</span> Falso.</p>
          <p><span class="font-semibold text-white">2.</span> C) Limpiar y validar la salida antes de usarla en el flujo.</p>
          <p><span class="font-semibold text-white">3.</span> Si.</p>
        </div>
      </div>
    </article>
  </section>
</template>
