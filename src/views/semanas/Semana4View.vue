<script setup>
import { computed, reactive, ref } from 'vue'

const answers = reactive({
  q1: '',
  q2: '',
  q3: '',
})

const checked = ref(false)

const correctAnswers = {
  q1: 'verdadero',
  q2: 'organizada',
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
        Semana 4
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        Relevance AI - Agente que transcribe, resume y traduce reuniones
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        En esta semana vas a trabajar una habilidad de altisimo valor practico: transformar informacion dispersa de una reunion en un resultado claro, util y accionable. Aqui el foco ya no esta solo en automatizar tareas, sino en convertir conversaciones en conocimiento organizado. Es una etapa especialmente valiosa porque te ensena a disenar agentes que ahorran tiempo, reducen friccion operativa y producen entregables que una persona o un equipo realmente puede usar.
      </p>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Entrada</p>
          <p class="mt-2 text-sm font-semibold text-white">Contenido de reuniones</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Motor</p>
          <p class="mt-2 text-sm font-semibold text-white">Relevance AI</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Salida</p>
          <p class="mt-2 text-sm font-semibold text-white">Resumen, acciones y traduccion</p>
        </div>
      </div>
    </article>

    <div class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl border border-orange-500/15 bg-zinc-950/70 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Objetivo principal del aprendizaje
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Aprender a crear agentes orientados a productividad y conocimiento usando Relevance AI. La meta es que comprendas como disenar una solucion capaz de procesar el contenido de una reunion y devolver resultados utiles, estructurados y listos para ser compartidos o ejecutados.
        </p>
      </article>

      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Tiempo de estudio</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Entre 5 y 7 horas. Aunque el modulo no es tan largo, conviene dedicar tiempo a probar distintos tipos de salida, comparar resultados y validar si la informacion final realmente sirve para un uso real.
        </p>
        <div class="mt-5 flex items-center gap-3">
          <div class="h-2 flex-1 rounded-full bg-white/5">
            <div class="h-2 w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
          </div>
          <span class="text-sm font-semibold text-orange-200">5-7h</span>
        </div>
      </article>
    </div>

    <div class="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Conceptos clave</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Tools, transcripcion, resumen, traduccion, agentes especializados, salida estructurada y automatizacion de conocimiento. Tambien debes empezar a pensar en la calidad de la salida como un criterio central: no basta con que el agente responda, debe entregar informacion con formato, claridad y utilidad real.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Tools</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Transcripcion</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Resumen</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Traduccion</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Agentes especializados</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Salida estructurada</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Automatizacion de conocimiento</span>
        </div>
      </article>

      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Que debes comprender al finalizar</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Debes entender como convertir una reunion en un resumen util, una minuta clara, una traduccion funcional o una lista concreta de acciones. Al terminar esta semana, debes ser capaz de distinguir entre una salida generica y una salida profesional que realmente sirva para trabajo, seguimiento o comunicacion entre personas.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Resumen</p>
            <p class="mt-2 text-sm font-semibold text-white">Sintesis util</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Minuta</p>
            <p class="mt-2 text-sm font-semibold text-white">Seguimiento claro</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Acciones</p>
            <p class="mt-2 text-sm font-semibold text-white">Trabajo ejecutable</p>
          </div>
        </div>
      </article>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Habilidades que desarrollaras</p>
        <div class="mt-4 grid gap-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Diseno de herramientas</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Crear una herramienta especializada, configurarla con intencion y probarla en escenarios reales.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Calidad de salida</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Convertir resultados en resenas, minutas, traducciones y listas de acciones verdaderamente utilizables.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Criterio profesional</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Disenar formatos de salida que no solo suenen bien, sino que sirvan en un contexto profesional real.</p>
          </div>
        </div>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Mini proyecto o ejercicio aplicado al mundo real
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-100">
          Construiras un asistente de actas automaticas que procese reuniones y entregue un resumen ejecutivo, una lista de acciones clave y una version traducida del contenido. Este ejercicio es especialmente util porque replica una necesidad real de equipos, negocios, consultores, docentes y profesionales que trabajan con reuniones frecuentes y necesitan claridad rapida.
        </p>
        <div class="mt-5 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Captura</p>
            <p class="mt-2 text-sm text-white">Transcripcion</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Sintesis</p>
            <p class="mt-2 text-sm text-white">Resumen y acciones</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Entrega</p>
            <p class="mt-2 text-sm text-white">Version compartible</p>
          </div>
        </div>
      </article>
    </div>

    <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Errores comunes</p>
      <div class="mt-4 grid gap-3 md:grid-cols-2">
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Pedir resultados vagos como "hazme un resumen" sin especificar estructura o enfoque.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          No definir el formato esperado antes de generar la salida.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          No revisar nombres, fechas o acuerdos importantes.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Confiar demasiado en la primera respuesta del agente sin validacion.
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
            Una salida estructurada suele ser mas util que una respuesta libre cuando el objetivo es generar actas o resumenes profesionales.
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
            Cual de estas opciones representa mejor el objetivo de este modulo?
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'dashboards')"
              @click="answers.q2 = 'dashboards'"
            >
              A) Crear disenos visuales para dashboards
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'organizada')"
              @click="answers.q2 = 'organizada'"
            >
              B) Convertir reuniones en informacion organizada y accionable
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'api')"
              @click="answers.q2 = 'api'"
            >
              C) Programar una API desde cero
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'equipo')"
              @click="answers.q2 = 'equipo'"
            >
              D) Reemplazar completamente a un equipo humano
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">3. Si o no</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Podrias adaptar este agente para procesar clases, entrevistas o sesiones de consultoria en lugar de reuniones?
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
          <p><span class="font-semibold text-white">1.</span> Verdadero.</p>
          <p><span class="font-semibold text-white">2.</span> B) Convertir reuniones en informacion organizada y accionable.</p>
          <p><span class="font-semibold text-white">3.</span> Si.</p>
        </div>
      </div>
    </article>
  </section>
</template>
