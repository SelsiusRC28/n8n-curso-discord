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
  q2: 'pinecone',
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
        Semana 8
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        n8n RAG - Respuestas personalizadas con documentos y bases vectoriales
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        En esta semana entras en una de las capacidades mas valiosas y mas demandadas dentro del mundo de agentes de IA: RAG. Aqui dejas de depender solo de lo que "sabe" un modelo y empiezas a construir sistemas que responden usando documentos reales, estructurados y consultables. Esta etapa es clave porque te ensena a crear agentes mas utiles, mas confiables y mucho mas aplicables a contextos de negocio, soporte, operaciones y gestion del conocimiento.
      </p>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Base</p>
          <p class="mt-2 text-sm font-semibold text-white">n8n + RAG</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Fuente</p>
          <p class="mt-2 text-sm font-semibold text-white">Documentos reales</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Meta</p>
          <p class="mt-2 text-sm font-semibold text-white">Respuestas con fundamento</p>
        </div>
      </div>
    </article>

    <div class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl border border-orange-500/15 bg-zinc-950/70 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Objetivo principal del aprendizaje
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Aprender a construir sistemas RAG en n8n para responder usando documentos y bases de datos vectoriales. El objetivo no es solo cargar archivos y hacer preguntas, sino comprender como convertir informacion estatica en una fuente de conocimiento utilizable por un agente de manera precisa y fundamentada.
        </p>
      </article>

      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Tiempo de estudio</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Entre 9 y 11 horas. Esta semana exige mas profundidad que otras, porque ademas de construir el sistema, necesitas probar diferentes preguntas, revisar la calidad de la recuperacion y entender por que ciertas respuestas si estan bien fundamentadas y otras no.
        </p>
        <div class="mt-5 flex items-center gap-3">
          <div class="h-2 flex-1 rounded-full bg-white/5">
            <div class="h-2 w-2/3 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
          </div>
          <span class="text-sm font-semibold text-orange-200">9-11h</span>
        </div>
      </article>
    </div>

    <div class="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Conceptos clave</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          RAG, OCR, PDFs, embeddings, Pinecone, chunking, retrieval, grounding y base vectorial. Tambien debes interiorizar una idea fundamental: un buen sistema RAG no depende unicamente del modelo, sino de la calidad del documento, de como fragmentas la informacion y de como recuperas el contexto correcto en el momento adecuado.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">RAG</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">OCR</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">PDFs</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Embeddings</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Pinecone</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Chunking</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Retrieval</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Grounding</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Base vectorial</span>
        </div>
      </article>

      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Que debes comprender al finalizar</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Debes comprender como transformar documentos en conocimiento consultable por un agente y como evaluar si la respuesta realmente esta fundamentada en la informacion recuperada. Al terminar esta semana, debes poder diferenciar una respuesta generada por intuicion del modelo de una respuesta respaldada por contenido documental real.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Origen</p>
            <p class="mt-2 text-sm font-semibold text-white">Documentos reales</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Recuperacion</p>
            <p class="mt-2 text-sm font-semibold text-white">Contexto relevante</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Respuesta</p>
            <p class="mt-2 text-sm font-semibold text-white">Fundamentada y util</p>
          </div>
        </div>
      </article>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Habilidades que desarrollaras</p>
        <div class="mt-4 grid gap-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Procesamiento documental</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Procesar PDFs, preparar documentos y generar embeddings listos para consulta.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Recuperacion con criterio</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Usar Pinecone, estructurar retrieval y probar preguntas reales para medir calidad.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Evaluacion de fundamento</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Pensar no solo en si el agente responde, sino en si responde con relevancia, contexto y respaldo suficiente.</p>
          </div>
        </div>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Mini proyecto o ejercicio aplicado al mundo real
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-100">
          Construiras un asistente documental que responda preguntas sobre contratos, manuales o politicas internas. Este ejercicio tiene un valor profesional muy alto porque replica una necesidad real en empresas, equipos y servicios: consultar rapidamente conocimiento interno sin depender de busquedas manuales o lectura completa de documentos extensos.
        </p>
        <div class="mt-5 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Ingesta</p>
            <p class="mt-2 text-sm text-white">PDFs y documentos</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Base</p>
            <p class="mt-2 text-sm text-white">Vectores y retrieval</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Uso</p>
            <p class="mt-2 text-sm text-white">Consultas internas rapidas</p>
          </div>
        </div>
      </article>
    </div>

    <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Errores comunes</p>
      <div class="mt-4 grid gap-3 md:grid-cols-2">
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Subir documentos mal preparados, con texto desordenado o poco util para recuperacion.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Hacer un chunking deficiente y no evaluar preguntas reales.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Confundir conocimiento general del modelo con recuperacion documental autentica.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Si no validas que parte del documento sostiene la respuesta, puedes creer que el sistema funciona bien cuando solo genera texto plausible.
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
            En un sistema RAG, la calidad del chunking influye directamente en la calidad de las respuestas recuperadas.
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
            Cual es el proposito principal de usar una base vectorial como Pinecone en este modulo?
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'diseno')"
              @click="answers.q2 = 'diseno'"
            >
              A) Disenar interfaces visuales para el agente
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'pinecone')"
              @click="answers.q2 = 'pinecone'"
            >
              B) Almacenar y recuperar fragmentos de conocimiento relevantes a partir de embeddings
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'reemplazar')"
              @click="answers.q2 = 'reemplazar'"
            >
              C) Reemplazar completamente los documentos originales
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'evitar')"
              @click="answers.q2 = 'evitar'"
            >
              D) Evitar que el agente haga preguntas al usuario
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">3. Si o no</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Podrias adaptar este tipo de sistema para responder sobre politicas internas, FAQs, manuales de uso o documentacion de una empresa?
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
          <p><span class="font-semibold text-white">2.</span> B) Almacenar y recuperar fragmentos de conocimiento relevantes a partir de embeddings.</p>
          <p><span class="font-semibold text-white">3.</span> Si.</p>
        </div>
      </div>
    </article>
  </section>
</template>
