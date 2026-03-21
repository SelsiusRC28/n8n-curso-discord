<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const pages = [
  {
    to: '/bienvenida',
    title: 'Bienvenida',
    subtitle: 'Inicio del curso',
    badge: 'IN',
  },
  {
    to: '/semana-1',
    title: 'Semana 1-2',
    subtitle: 'Fundamentos de agentes y Zapier',
    badge: '01',
  },
  {
    to: '/semana-3',
    title: 'Semana 3',
    subtitle: 'Make y atencion en Telegram',
    badge: '03',
  },
  {
    to: '/semana-4',
    title: 'Semana 4',
    subtitle: 'Relevance AI para reuniones',
    badge: '04',
  },
  {
    to: '/semana-5',
    title: 'Semana 5',
    subtitle: 'n8n base y control de gastos',
    badge: '05',
  },
  {
    to: '/semana-6',
    title: 'Semana 6',
    subtitle: 'n8n con IA en automatizaciones',
    badge: '06',
  },
  {
    to: '/semana-7',
    title: 'Semana 7',
    subtitle: 'Agente con memoria y datos propios',
    badge: '07',
  },
  {
    to: '/semana-8',
    title: 'Semana 8',
    subtitle: 'RAG con documentos y vectores',
    badge: '08',
  },
  {
    to: '/semana-9',
    title: 'Semana 9',
    subtitle: 'Agente de voz en tiempo real',
    badge: '09',
  },
  {
    to: '/semana-10',
    title: 'Semana 10',
    subtitle: 'Cierre y portafolio profesional',
    badge: '10',
  },
]

const activePage = computed(
  () => pages.find((page) => route.path.startsWith(page.to)) ?? pages[0],
)
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),_transparent_25%)]"></div>

    <div class="relative flex min-h-screen flex-col lg:flex-row">
      <aside class="w-full border-b border-orange-500/10 bg-black/80 backdrop-blur lg:min-h-screen lg:w-[320px] lg:border-b-0 lg:border-r">
        <div class="border-b border-orange-500/10 p-6">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 font-black text-black shadow-[0_0_30px_rgba(249,115,22,0.35)]">
              n8n
            </div>

            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-orange-400/80">
                Curso
              </p>
              <h1 class="text-2xl font-semibold tracking-tight text-white">
                n8n Flow Lab
              </h1>
            </div>
          </div>

          <div class="mt-6 rounded-2xl border border-orange-500/15 bg-gradient-to-br from-orange-500/15 to-white/[0.03] p-4">
            <p class="text-xs uppercase tracking-[0.28em] text-zinc-400">
              Enfoque
            </p>
            <p class="mt-2 text-sm leading-6 text-zinc-200">
              Automatizaciones minimalistas, flujos claros y practica semana a semana.
            </p>
          </div>
        </div>

        <nav class="p-4">
          <p class="mb-3 px-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Navegacion del curso
          </p>

          <div class="space-y-2">
            <RouterLink
              v-for="page in pages"
              :key="page.to"
              :to="page.to"
              class="group flex items-center gap-4 rounded-2xl border px-4 py-3 transition-all duration-200"
              :class="route.path.startsWith(page.to)
                ? 'border-orange-400/40 bg-orange-500/12 shadow-[0_12px_30px_rgba(249,115,22,0.10)]'
                : 'border-white/5 bg-white/[0.02] hover:border-orange-500/20 hover:bg-orange-500/5'"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold transition-colors"
                :class="route.path.startsWith(page.to)
                  ? 'bg-orange-500 text-black'
                  : 'bg-zinc-900 text-orange-300 group-hover:bg-orange-500/15'"
              >
                {{ page.badge }}
              </div>

              <div class="min-w-0 flex-1">
                <p
                  class="truncate text-sm font-semibold"
                  :class="route.path.startsWith(page.to) ? 'text-white' : 'text-zinc-200'"
                >
                  {{ page.title }}
                </p>
                <p class="truncate text-xs text-zinc-500">
                  {{ page.subtitle }}
                </p>
              </div>
            </RouterLink>
          </div>
        </nav>
      </aside>

      <main class="flex-1 p-4 sm:p-6 lg:p-10">
        <section class="rounded-[28px] border border-orange-500/10 bg-zinc-950/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur sm:p-8">
          <div class="mb-8 flex flex-col gap-4 border-b border-white/5 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-orange-400/80">
                Curso de automatizacion
              </p>
              <h2 class="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {{ activePage.title }}
              </h2>
              <p class="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                Un espacio limpio para organizar tus clases de n8n con navegacion por semanas y una estetica naranja sobre negro.
              </p>
            </div>

            <div class="rounded-2xl border border-orange-500/15 bg-orange-500/10 px-4 py-3 text-sm text-orange-200">
              Ruta activa: <span class="font-semibold text-white">{{ activePage.subtitle }}</span>
            </div>
          </div>

          <RouterView />
        </section>
      </main>
    </div>
  </div>
</template>
