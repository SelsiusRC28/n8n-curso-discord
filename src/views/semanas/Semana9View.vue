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
  q2: 'workflow',
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
        Semana 9
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        n8n + voz - Agente que habla y responde en tiempo real
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        En esta semana construyes una de las piezas mas llamativas y diferenciadoras del curso: un agente que no solo procesa informacion, sino que tambien habla y responde en tiempo real. Aqui entras en el terreno de las experiencias multimodales, donde la utilidad tecnica se combina con una presentacion mucho mas impactante. El reto no esta solo en que "suene bien", sino en lograr una interaccion util, clara y suficientemente estable como para convertirse en una demo seria o incluso en una solucion aplicable.
      </p>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Entrada</p>
          <p class="mt-2 text-sm font-semibold text-white">Voz y tiempo real</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Infra</p>
          <p class="mt-2 text-sm font-semibold text-white">Webhook + despliegue</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Impacto</p>
          <p class="mt-2 text-sm font-semibold text-white">Demo seria y usable</p>
        </div>
      </div>
    </article>

    <div class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl border border-orange-500/15 bg-zinc-950/70 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Objetivo principal del aprendizaje
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Crear una experiencia multimodal con voz e interaccion en tiempo real. El objetivo de esta semana es que comprendas como unir la logica de un workflow con entrada y salida por voz, despliegue publico y una experiencia de uso mas cercana a una conversacion real.
        </p>
      </article>

      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Tiempo de estudio</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Entre 8 y 10 horas. Esta semana requiere no solo construir el sistema, sino tambien probar conversaciones, medir latencia, ajustar claridad y preparar una presentacion solida del resultado.
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
          ElevenLabs, webhook publico, Cloudflared, Gemini, Twilio, voz y publicacion web. Tambien debes entender una idea central: en un agente de voz no basta con generar respuestas correctas; importa mucho la velocidad, la claridad, la continuidad de la interaccion y la capacidad de manejar fallos de forma elegante.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">ElevenLabs</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Webhook publico</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Cloudflared</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Gemini</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Twilio</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Voz</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Publicacion web</span>
        </div>
      </article>

      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Que debes comprender al finalizar</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Debes comprender como conectar voz, logica y despliegue para crear una experiencia usable. Al terminar esta semana, debes ser capaz de visualizar todo el recorrido del sistema: desde la entrada del usuario, pasando por el procesamiento del flujo, hasta la salida por voz o llamada, con una experiencia lo bastante clara como para ser mostrada o probada en un contexto real.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Entrada</p>
            <p class="mt-2 text-sm font-semibold text-white">Voz del usuario</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Proceso</p>
            <p class="mt-2 text-sm font-semibold text-white">Workflow y modelo</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Salida</p>
            <p class="mt-2 text-sm font-semibold text-white">Respuesta hablada</p>
          </div>
        </div>
      </article>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Habilidades que desarrollaras</p>
        <div class="mt-4 grid gap-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Configuracion multimodal</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Configurar un agente de voz, publicar un webhook e integrar voz en una experiencia web o telefonica.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Evaluacion practica</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Medir latencia, claridad y coherencia para que el sistema no solo impresione, sino funcione bien.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Experiencia de uso</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Pensar en como se siente usar el agente, cuanto tarda, como responde y que ocurre cuando algo falla.</p>
          </div>
        </div>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Mini proyecto o ejercicio aplicado al mundo real
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-100">
          Construiras un asistente de voz de atencion inicial. Este ejercicio representa un caso de alto valor para demos y negocio, porque puede aplicarse a recepcion de consultas, atencion basica, calificacion inicial de clientes o acompanamiento en procesos simples. Bien resuelto, es una pieza que llama mucho la atencion y eleva el nivel percibido de tu portafolio.
        </p>
        <div class="mt-5 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Canal</p>
            <p class="mt-2 text-sm text-white">Web o llamada</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Interaccion</p>
            <p class="mt-2 text-sm text-white">Pregunta y respuesta</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Valor</p>
            <p class="mt-2 text-sm text-white">Demo y negocio</p>
          </div>
        </div>
      </article>
    </div>

    <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Errores comunes</p>
      <div class="mt-4 grid gap-3 md:grid-cols-2">
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Ignorar la latencia y centrarse solo en el efecto visual o auditivo.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Construir algo llamativo pero poco util para un caso real.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          No definir un fallback claro cuando el flujo no entiende la intencion del usuario.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Un agente de voz impresiona mas cuando es estable y util que cuando solo parece avanzado.
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
            En un agente de voz, la latencia y la claridad de respuesta importan tanto como la calidad del contenido generado.
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
            Cual de estas opciones describe mejor el reto principal de este modulo?
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'bonita')"
              @click="answers.q2 = 'bonita'"
            >
              A) Crear una interfaz bonita sin logica interna
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'workflow')"
              @click="answers.q2 = 'workflow'"
            >
              B) Unir voz, workflow y despliegue para una experiencia funcional y usable
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'reemplazar')"
              @click="answers.q2 = 'reemplazar'"
            >
              C) Reemplazar todos los canales escritos por llamadas obligatorias
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'sin-probar')"
              @click="answers.q2 = 'sin-probar'"
            >
              D) Usar voz sin necesidad de probar el flujo
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">3. Si o no</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Podrias adaptar este agente de voz para atencion inicial, soporte basico o calificacion de leads usando la misma logica base?
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
          <p><span class="font-semibold text-white">2.</span> B) Unir voz, workflow y despliegue para una experiencia funcional y usable.</p>
          <p><span class="font-semibold text-white">3.</span> Si.</p>
        </div>
      </div>
    </article>
  </section>
</template>
