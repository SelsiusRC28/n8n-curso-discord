<script setup>
import { toPng } from 'html-to-image'
import { computed, onMounted, ref } from 'vue'

const certificateStudentKey = 'curso_n8n_student_name'
const studentName = ref('')
const certificateRef = ref(null)
const isDownloading = ref(false)
const showNameModal = ref(false)
const pendingStudentName = ref('')

const completedModules = [
  'Semana 1-2: Fundamentos de agentes y Zapier',
  'Semana 3: Make y atencion en Telegram',
  'Semana 4: Relevance AI para reuniones',
  'Semana 5: n8n base y control de gastos',
  'Semana 6: n8n con IA en automatizaciones',
  'Semana 7: Agente con memoria y datos propios',
  'Semana 8: RAG con documentos y vectores',
  'Semana 9: Agente de voz en tiempo real',
  'Semana 10: Cierre, consolidacion y portafolio',
]

const issueDate = new Intl.DateTimeFormat('es-PE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date())

const certificateId = computed(() => {
  const normalizedName = (studentName.value || 'Estudiante del Curso')
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '')
    .slice(0, 6) || 'ALUMNO'

  return `NFL-${new Date().getFullYear()}-${normalizedName}`
})

onMounted(() => {
  const savedName = window.localStorage.getItem(certificateStudentKey)

  if (savedName?.trim()) {
    studentName.value = savedName.trim()
    return
  }

  pendingStudentName.value = ''
  showNameModal.value = true
})

function confirmStudentName() {
  const normalizedName = pendingStudentName.value.trim()

  if (!normalizedName) {
    return
  }

  studentName.value = normalizedName
  window.localStorage.setItem(certificateStudentKey, normalizedName)
  showNameModal.value = false
}

function downloadCertificate() {
  if (!certificateRef.value || isDownloading.value) {
    return
  }

  isDownloading.value = true

  toPng(certificateRef.value, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: '#0a0a0a',
  })
    .then((dataUrl) => {
      const safeName = (studentName.value || 'estudiante')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'estudiante'

      const link = document.createElement('a')
      link.download = `certificado-curso-n8n-${safeName}.png`
      link.href = dataUrl
      link.click()
    })
    .finally(() => {
      isDownloading.value = false
    })
}
</script>

<template>
  <section class="space-y-6 print:space-y-0">
    <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent p-6 sm:p-8 print:hidden">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
        Certificacion final
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        Certificado profesional de terminacion
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        Completa el nombre del alumno y descarga una version lista para guardar como PDF. El diseno esta pensado para verse como una certificacion profesional de academia.
      </p>

      <div class="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
        <label class="rounded-3xl border border-white/10 bg-black/25 p-4">
          <span class="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Nombre del alumno
          </span>
          <input
            v-model="studentName"
            type="text"
            class="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-400/40"
            placeholder="Escribe el nombre completo"
            @change="window.localStorage.setItem(certificateStudentKey, studentName.trim() || 'Estudiante del Curso')"
          >
        </label>

        <div class="flex items-end">
          <button
            type="button"
            class="rounded-2xl border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
            @click="downloadCertificate"
          >
            {{ isDownloading ? 'Generando descarga...' : 'Descargar certificado' }}
          </button>
        </div>
      </div>
    </article>

    <div
      v-if="showNameModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
    >
      <div class="w-full max-w-lg rounded-[28px] border border-orange-500/20 bg-[#0a0a0a] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
        <div class="flex items-start gap-4">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 font-black text-black shadow-[0_0_30px_rgba(249,115,22,0.35)]">
            n8n
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-orange-300">
              Certificado profesional
            </p>
            <h3 class="mt-2 text-2xl font-semibold text-white">
              Escribe el nombre del estudiante
            </h3>
            <p class="mt-3 text-sm leading-7 text-zinc-300">
              Lo usaremos para completar el certificado y dejarlo listo para descargar con el formato del curso.
            </p>
          </div>
        </div>

        <label class="mt-6 block rounded-3xl border border-white/10 bg-white/[0.02] p-4">
          <span class="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Nombre del estudiante
          </span>
          <input
            v-model="pendingStudentName"
            type="text"
            class="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-orange-400/40"
            placeholder="Escribe el nombre completo"
            @keydown.enter="confirmStudentName"
          >
        </label>

        <div class="mt-6 flex justify-end">
          <button
            type="button"
            class="rounded-2xl border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="!pendingStudentName.trim()"
            @click="confirmStudentName"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>

    <article
      ref="certificateRef"
      class="certificate-shell relative overflow-hidden rounded-[34px] border border-orange-500/20 bg-[#0a0a0a] shadow-[0_30px_90px_rgba(0,0,0,0.45)] print:rounded-none print:border print:border-zinc-300 print:bg-white print:shadow-none"
    >
      <div class="pointer-events-none absolute inset-0 opacity-80 print:hidden">
        <div class="absolute inset-6 rounded-[28px] border border-orange-500/10"></div>
        <div class="absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-500/8 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-500/8 blur-3xl"></div>
      </div>

      <div class="relative px-6 py-6 sm:px-10 sm:py-10 print:px-10 print:py-10">
        <div class="flex flex-col gap-6 border-b border-orange-500/15 pb-6 sm:flex-row sm:items-center sm:justify-between print:border-zinc-300">
          <div class="flex items-center gap-4">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 font-black text-black shadow-[0_0_30px_rgba(249,115,22,0.35)] print:shadow-none">
              n8n
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300 print:text-zinc-700">
                Curso n8n
              </p>
              <p class="mt-2 text-sm text-zinc-400 print:text-zinc-600">
                Certificacion profesional de finalizacion
              </p>
            </div>
          </div>

          <div class="grid gap-2 text-right">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500 print:text-zinc-600">
              Certificado
            </p>
            <p class="text-sm font-semibold text-orange-100 print:text-zinc-800">
              {{ certificateId }}
            </p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-sm uppercase tracking-[0.42em] text-zinc-500 print:text-zinc-600">
            Se otorga a
          </p>
          <h1 class="certificate-name mt-5 text-5xl text-white sm:text-6xl print:text-zinc-900">
            {{ studentName || 'Estudiante del Curso' }}
          </h1>
          <div class="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent print:via-zinc-400"></div>
          <p class="mx-auto mt-6 max-w-4xl text-base leading-8 text-zinc-300 print:text-zinc-700">
            por completar satisfactoriamente el programa intensivo de automatizacion y agentes de IA aplicado a casos reales de negocio, demostrando criterio tecnico, capacidad de implementacion y dominio progresivo de workflows, IA, RAG, voz y presentacion profesional de soluciones.
          </p>
        </div>

        <div class="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <section class="rounded-3xl border border-orange-500/15 bg-white/[0.02] p-6 print:border-zinc-300 print:bg-transparent">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 print:text-zinc-700">
              Modulos completados
            </p>
            <div class="mt-5 grid gap-3 md:grid-cols-2">
              <div
                v-for="module in completedModules"
                :key="module"
                class="rounded-2xl border border-white/8 bg-black/30 px-4 py-3 text-sm leading-6 text-zinc-200 print:border-zinc-300 print:bg-transparent print:text-zinc-800"
              >
                {{ module }}
              </div>
            </div>
          </section>

          <section class="grid gap-4">
            <div class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/12 to-transparent p-6 print:border-zinc-300 print:bg-transparent">
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 print:text-zinc-700">
                Alcance del programa
              </p>
              <p class="mt-4 text-sm leading-7 text-zinc-200 print:text-zinc-700">
                Formacion aplicada en automatizacion, agentes, productividad, n8n, RAG, voz en tiempo real y consolidacion de portafolio profesional.
              </p>
            </div>

            <div class="rounded-3xl border border-white/8 bg-black/30 p-6 print:border-zinc-300 print:bg-transparent">
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 print:text-zinc-600">
                Estado academico
              </p>
              <div class="mt-4 space-y-3 text-sm text-zinc-200 print:text-zinc-800">
                <p>Resultado: Completado</p>
                <p>Fecha de emision: {{ issueDate }}</p>
                <p>Tipo: Certificado de terminacion</p>
              </div>
            </div>

            <div class="certificate-seal rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 text-center print:border-zinc-300 print:bg-transparent">
              <div class="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-double border-orange-300 text-center print:border-zinc-500">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200 print:text-zinc-700">
                    Validado
                  </p>
                  <p class="mt-1 text-sm font-semibold text-white print:text-zinc-900">
                    2026
                  </p>
                </div>
              </div>
              <p class="mt-4 text-xs uppercase tracking-[0.28em] text-zinc-500 print:text-zinc-600">
                Reconocimiento academico
              </p>
            </div>
          </section>
        </div>

        <div class="mt-8 grid gap-6 border-t border-orange-500/15 pt-6 md:grid-cols-3 print:border-zinc-300">
          <div>
            <div class="h-px bg-white/15 print:bg-zinc-400"></div>
            <p class="mt-3 text-sm font-semibold text-white print:text-zinc-900">Direccion academica</p>
            <p class="mt-1 text-xs uppercase tracking-[0.28em] text-zinc-500 print:text-zinc-600">
              Curso n8n
            </p>
          </div>

          <div>
            <div class="h-px bg-white/15 print:bg-zinc-400"></div>
            <p class="mt-3 text-sm font-semibold text-white print:text-zinc-900">Firma autorizada</p>
            <p class="mt-1 text-xs uppercase tracking-[0.28em] text-zinc-500 print:text-zinc-600">
              Programa profesional
            </p>
          </div>

          <div>
            <div class="h-px bg-white/15 print:bg-zinc-400"></div>
            <p class="mt-3 text-sm font-semibold text-white print:text-zinc-900">Verificacion</p>
            <p class="mt-1 text-xs uppercase tracking-[0.28em] text-zinc-500 print:text-zinc-600">
              {{ certificateId }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap");

.certificate-name {
  font-family: "Cormorant Garamond", serif;
  letter-spacing: 0.01em;
  line-height: 0.95;
}

@media print {
  :global(body) {
    background: #fff !important;
    color: #111 !important;
  }

  .certificate-shell {
    break-inside: avoid;
  }
}
</style>
