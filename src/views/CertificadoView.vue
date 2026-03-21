<script setup>
const completedModules = [
  'Semana 1-2: Fundamentos de agentes y Zapier',
  'Semana 3: Make y atencion en Telegram',
  'Semana 4: Relevance AI para reuniones',
  'Semana 5: n8n base y control de gastos',
  'Semana 6: n8n con IA en automatizaciones',
  'Semana 7: Agente con memoria y datos propios',
  'Semana 8: RAG con documentos y vectores',
  'Semana 9: Agente de voz en tiempo real',
  'Semana 10: Cierre y portafolio profesional',
]

const issueDate = new Intl.DateTimeFormat('es-PE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date())

function downloadCertificate() {
  window.print()
}
</script>

<template>
  <section class="space-y-6 print:space-y-4">
    <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent p-6 sm:p-8 print:hidden">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
        Certificacion final
      </p>
      <h3 class="mt-3 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
        Certificado profesional de terminacion del curso
      </h3>
      <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
        Esta pagina esta pensada para descargar un certificado elegante y presentable. Usa el boton para guardarlo como PDF desde el navegador.
      </p>

      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          class="rounded-2xl border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
          @click="downloadCertificate"
        >
          Descargar certificado
        </button>
      </div>
    </article>

    <article class="certificate-shell overflow-hidden rounded-[32px] border border-orange-500/20 bg-[#0b0b0b] shadow-[0_30px_90px_rgba(0,0,0,0.45)] print:rounded-none print:border print:border-zinc-300 print:shadow-none">
      <div class="certificate-top flex items-center justify-between border-b border-orange-500/15 px-6 py-5 sm:px-8 print:border-zinc-300">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300 print:text-zinc-700">
            n8n Flow Lab
          </p>
          <p class="mt-2 text-sm text-zinc-400 print:text-zinc-600">Certificacion de finalizacion</p>
        </div>
        <div class="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-100 print:border-zinc-300 print:bg-transparent print:text-zinc-700">
          ID: NFL-2026-001
        </div>
      </div>

      <div class="certificate-body px-6 py-8 sm:px-8 sm:py-10 print:px-10 print:py-10">
        <div class="text-center">
          <p class="text-sm uppercase tracking-[0.4em] text-zinc-500 print:text-zinc-600">Se certifica que</p>
          <h1 class="mt-4 text-4xl font-semibold text-white sm:text-5xl print:text-zinc-900">
            Estudiante del Curso
          </h1>
          <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-300 print:text-zinc-700">
            ha completado satisfactoriamente el recorrido profesional de automatizacion y agentes de IA, demostrando comprension tecnica, criterio de implementacion y capacidad para construir soluciones aplicables en entornos reales.
          </p>
        </div>

        <div class="mt-8 rounded-3xl border border-orange-500/15 bg-white/[0.02] p-6 print:border-zinc-300 print:bg-transparent">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 print:text-zinc-700">
            Modulos terminados
          </p>
          <div class="mt-5 grid gap-3 md:grid-cols-2">
            <div
              v-for="module in completedModules"
              :key="module"
              class="rounded-2xl border border-white/8 bg-black/30 px-4 py-3 text-sm text-zinc-200 print:border-zinc-300 print:bg-transparent print:text-zinc-800"
            >
              {{ module }}
            </div>
          </div>
        </div>

        <div class="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div class="rounded-3xl border border-white/5 bg-black/30 p-6 print:border-zinc-300 print:bg-transparent">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 print:text-zinc-600">
              Alcance profesional
            </p>
            <p class="mt-4 text-sm leading-7 text-zinc-300 print:text-zinc-700">
              El programa incluyo fundamentos de agentes, automatizacion con Zapier, experiencias conversacionales en Make, productividad con Relevance AI, workflows base y avanzados en n8n, integracion de IA, RAG, voz en tiempo real y consolidacion de portafolio.
            </p>
          </div>

          <div class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/12 to-transparent p-6 print:border-zinc-300 print:bg-transparent">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 print:text-zinc-700">
              Emision
            </p>
            <p class="mt-4 text-sm leading-7 text-zinc-200 print:text-zinc-800">
              Fecha de emision: {{ issueDate }}
            </p>
            <p class="mt-2 text-sm leading-7 text-zinc-200 print:text-zinc-800">
              Estado: Completado
            </p>
            <div class="mt-8 border-t border-orange-500/15 pt-5 print:border-zinc-300">
              <p class="text-sm font-semibold text-white print:text-zinc-900">Direccion academica</p>
              <p class="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-500 print:text-zinc-600">n8n Flow Lab</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
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
