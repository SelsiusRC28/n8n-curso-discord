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
  q2: 'airtable',
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
        Semana 7
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        n8n avanzado - Agente con memoria, tools y datos propios
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        En esta semana entras en una capa mucho mas seria de construccion: dejas atras el simple workflow con IA y empiezas a disenar un agente que realmente recuerda, consulta y actua. Aqui el valor ya no esta solo en generar respuestas, sino en crear un sistema con contexto, acceso a datos propios y capacidad de responder de manera util segun la situacion del usuario. Esta etapa es especialmente importante porque te acerca a soluciones mucho mas cercanas a producto, soporte interno y automatizacion de negocio.
      </p>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Capa</p>
          <p class="mt-2 text-sm font-semibold text-white">n8n avanzado</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Clave</p>
          <p class="mt-2 text-sm font-semibold text-white">Memoria + tools + datos</p>
        </div>
        <div class="rounded-2xl border border-white/8 bg-black/30 p-4">
          <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Meta</p>
          <p class="mt-2 text-sm font-semibold text-white">Responder con contexto real</p>
        </div>
      </div>
    </article>

    <div class="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <article class="rounded-3xl border border-orange-500/15 bg-zinc-950/70 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Objetivo principal del aprendizaje
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Pasar de workflows con IA a agentes mas completos, con memoria, herramientas y acceso a datos propios. El objetivo de esta semana es que comprendas como disenar un agente que no solo responda, sino que tenga estructura, consulte informacion real y mantenga coherencia durante la interaccion.
        </p>
      </article>

      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Tiempo de estudio</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Entre 8 y 10 horas. Esta semana requiere tiempo de construccion, pruebas y ajuste, especialmente en la forma en que disenas la memoria, organizas los datos y defines las instrucciones del agente.
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
          Chat model, memory, tools, Airtable, prompt de sistema, datos propios y contexto conversacional. Tambien debes entender una diferencia critica: un agente util no depende solo del modelo, sino de como gestionas el contexto, que herramientas conectas y que datos puede consultar con precision.
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Chat model</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Memory</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Tools</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Airtable</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Prompt de sistema</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Datos propios</span>
          <span class="rounded-full border border-orange-500/15 bg-orange-500/10 px-3 py-1 text-xs text-orange-100">Contexto conversacional</span>
        </div>
      </article>

      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Que debes comprender al finalizar</p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Debes comprender como construir un agente que recuerde contexto, consulte datos y responda con logica clara y util. Al terminar esta semana, debes ser capaz de distinguir entre un agente que "parece inteligente" y uno que realmente aporta valor porque usa memoria, accede a informacion concreta y mantiene consistencia en sus respuestas.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Memoria</p>
            <p class="mt-2 text-sm font-semibold text-white">Contexto util</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Consulta</p>
            <p class="mt-2 text-sm font-semibold text-white">Datos reales</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Coherencia</p>
            <p class="mt-2 text-sm font-semibold text-white">Respuestas consistentes</p>
          </div>
        </div>
      </article>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Habilidades que desarrollaras</p>
        <div class="mt-4 grid gap-3">
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Memoria estrategica</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Usar memoria de forma util para sostener contexto sin arrastrar ruido innecesario.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Conexion de tools y datos</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Conectar Airtable, tools y prompts de sistema para crear agentes mas robustos.</p>
          </div>
          <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            <p class="text-sm font-semibold text-white">Arquitectura confiable</p>
            <p class="mt-2 text-sm leading-7 text-zinc-300">Estructurar el sistema para que el agente se apoye en datos reales en lugar de depender solo de generacion libre.</p>
          </div>
        </div>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Mini proyecto o ejercicio aplicado al mundo real
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-100">
          Construiras un agente de consulta de pedidos, servicios o registros internos conectado a una base de datos. Este proyecto representa un caso muy aplicable al mundo real porque simula un asistente que puede responder preguntas sobre estado de pedidos, disponibilidad de servicios o informacion interna sin obligar al usuario a buscar manualmente en una tabla o sistema.
        </p>
        <div class="mt-5 grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Consulta</p>
            <p class="mt-2 text-sm text-white">Pregunta del usuario</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Base</p>
            <p class="mt-2 text-sm text-white">Airtable y registros</p>
          </div>
          <div class="rounded-2xl border border-orange-500/15 bg-black/25 p-4">
            <p class="text-xs uppercase tracking-[0.25em] text-orange-200/80">Respuesta</p>
            <p class="mt-2 text-sm text-white">Informacion util y precisa</p>
          </div>
        </div>
      </article>
    </div>

    <article class="rounded-3xl border border-white/5 bg-black/40 p-6">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">Errores comunes</p>
      <div class="mt-4 grid gap-3 md:grid-cols-2">
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Usar mal la memoria y arrastrar contexto innecesario o confuso.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Dar instrucciones ambiguas en el prompt del sistema.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Estructurar mal la base de datos y confiar demasiado en respuestas no verificadas.
        </div>
        <div class="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-7 text-zinc-300">
          Si el agente no esta bien limitado ni bien conectado a sus fuentes, puede sonar convincente pero ser poco confiable.
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
            Un agente con memoria siempre respondera mejor, aunque la memoria este mal disenada o contenga contexto irrelevante.
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
            Que componente es clave para que un agente consulte informacion real en lugar de responder solo con generacion libre?
          </p>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'interfaz')"
              @click="answers.q2 = 'interfaz'"
            >
              A) Un color de interfaz mas atractivo
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'airtable')"
              @click="answers.q2 = 'airtable'"
            >
              B) Una base de datos conectada, como Airtable
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'bienvenida')"
              @click="answers.q2 = 'bienvenida'"
            >
              C) Un mensaje de bienvenida mas largo
            </button>
            <button
              type="button"
              class="rounded-2xl border px-4 py-3 text-left text-sm transition-all"
              :class="optionClass('q2', 'sin-tools')"
              @click="answers.q2 = 'sin-tools'"
            >
              D) Un flujo sin tools ni contexto
            </button>
          </div>
        </div>

        <div class="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <p class="font-semibold text-white">3. Si o no</p>
          <p class="mt-2 text-sm leading-7 text-zinc-300">
            Podrias adaptar este tipo de agente para responder consultas sobre pedidos, reservas, alumnos o registros internos usando la misma logica base?
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
          <p><span class="font-semibold text-white">2.</span> B) Una base de datos conectada, como Airtable.</p>
          <p><span class="font-semibold text-white">3.</span> Si.</p>
        </div>
      </div>
    </article>
  </section>
</template>
