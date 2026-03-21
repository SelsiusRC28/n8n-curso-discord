<script setup>
import courseVisual from '@/assets/logo.webp'

const mindset = [
  'Aprender haciendo',
  'Practicar cada semana',
  'Construir cosas reales',
  'Evaluar lo aprendido',
  'Convertir conocimiento en resultados',
]

const promises = [
  'Se como funciona esto',
  'Puedo construir mis propios flujos',
  'Puedo resolver problemas reales',
  'Tengo proyectos que mostrar',
  'Tengo una habilidad valiosa',
]

const outcomes = [
  {
    title: 'Trabajo y negocio',
    description: 'Aplicar automatizacion e IA en tareas reales, operaciones internas y crecimiento profesional.',
  },
  {
    title: 'Proyectos personales',
    description: 'Construir soluciones utiles con criterio, no solo ejercicios sueltos o experimentos sin enfoque.',
  },
  {
    title: 'Servicios y portafolio',
    description: 'Terminar con proyectos presentables que puedas mostrar a clientes, reclutadores o colaboradores.',
  },
]
</script>

<template>
  <section class="space-y-6">
    <article class="relative overflow-hidden rounded-[32px] border border-orange-500/15 bg-gradient-to-br from-orange-500/16 via-orange-500/6 to-transparent p-6 sm:p-8">
      <div class="absolute -right-12 top-0 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-orange-500/60 via-orange-500/10 to-transparent"></div>

      <div class="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-orange-300">
            Bienvenida al curso
          </p>
          <h3 class="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Bienvenidos al curso de automatizacion y agentes de IA
          </h3>
          <p class="mt-5 max-w-3xl text-base leading-8 text-zinc-100">
            Antes que nada, quiero felicitarte por estar aqui, porque entrar a este curso no es solo aprender una herramienta nueva. Es entrar a una habilidad con muchisimo valor real en el presente y todavia mas en el futuro.
          </p>
          <p class="mt-4 max-w-3xl text-base leading-8 text-zinc-200">
            Hoy las personas y empresas ya no solo buscan hacer mas cosas. Buscan hacerlas mas rapido, mejor y con menos esfuerzo. Y ahi es donde entran la automatizacion, los flujos inteligentes y los agentes de IA.
          </p>

          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-white/8 bg-black/25 p-4">
              <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Meta real</p>
              <p class="mt-2 text-sm font-semibold text-white">Aprender de verdad</p>
            </div>
            <div class="rounded-2xl border border-white/8 bg-black/25 p-4">
              <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Resultado</p>
              <p class="mt-2 text-sm font-semibold text-white">Construir soluciones utiles</p>
            </div>
            <div class="rounded-2xl border border-white/8 bg-black/25 p-4">
              <p class="text-xs uppercase tracking-[0.25em] text-zinc-500">Recorrido</p>
              <p class="mt-2 text-sm font-semibold text-white">Semana por semana</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 rounded-[28px] bg-gradient-to-br from-orange-500/10 to-transparent blur-2xl"></div>
          <div class="relative overflow-hidden rounded-[28px] border border-orange-500/15 bg-black/40 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <img
              :src="courseVisual"
              alt="Imagen del curso de automatizacion y agentes de IA"
              class="h-64 w-full rounded-[22px] object-cover"
            >

            <div class="mt-4 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-zinc-500">Enfoque</p>
                <p class="mt-2 text-sm font-semibold text-white">Estrategia, practica y criterio</p>
              </div>
              <div class="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-zinc-500">Camino</p>
                <p class="mt-2 text-sm font-semibold text-white">Automatizacion, IA y proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <div class="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          Lo que haremos aqui
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          En este curso no vas a venir solo a mirar videos ni a repetir pasos sin entender. La meta aqui es que aprendas de verdad, que comprendas como funcionan las herramientas, que construyas automatizaciones utiles y que termines con habilidades que puedas aplicar en tu trabajo, en tu negocio, en proyectos personales o incluso para ofrecer servicios.
        </p>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Mentalidad del recorrido
        </p>
        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <div
            v-for="item in mindset"
            :key="item"
            class="rounded-2xl border border-orange-500/15 bg-black/25 px-4 py-4 text-sm font-semibold text-orange-100"
          >
            {{ item }}
          </div>
        </div>
      </article>
    </div>

    <article class="rounded-3xl border border-white/5 bg-black/35 p-6">
      <div class="grid gap-4 lg:grid-cols-3">
        <div
          v-for="outcome in outcomes"
          :key="outcome.title"
          class="rounded-3xl border border-white/8 bg-white/[0.02] p-5"
        >
          <p class="text-sm font-semibold text-white">{{ outcome.title }}</p>
          <p class="mt-3 text-sm leading-7 text-zinc-300">
            {{ outcome.description }}
          </p>
        </div>
      </div>
    </article>

    <div class="grid gap-4 xl:grid-cols-[1fr_1fr]">
      <article class="rounded-3xl border border-white/5 bg-zinc-900/60 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          El verdadero objetivo
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Este curso esta organizado por semanas para que no te pierdas, para que avances con estructura y para que puedas medir tu progreso de manera realista. Cada semana tendra un enfoque concreto. No se trata de correr, sino de entender, aplicar y dominar.
        </p>
        <p class="mt-4 text-base leading-8 text-zinc-200">
          Durante el recorrido vas a aprender no solo herramientas como n8n, Make, Zapier o Relevance AI, sino algo todavia mas importante: vas a aprender a pensar como alguien que sabe disenar soluciones reales con automatizacion e IA. Ese es el verdadero objetivo.
        </p>
      </article>

      <article class="rounded-3xl border border-orange-500/15 bg-gradient-to-br from-orange-500/12 to-transparent p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
          Lo que quiero que puedas decir al final
        </p>
        <div class="mt-5 grid gap-3">
          <div
            v-for="promise in promises"
            :key="promise"
            class="rounded-2xl border border-orange-500/15 bg-black/25 px-4 py-4 text-base font-semibold text-white"
          >
            {{ promise }}
          </div>
        </div>
      </article>
    </div>

    <article class="relative overflow-hidden rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-500/14 via-black to-black p-6 sm:p-8">
      <div class="absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div class="relative">
        <p class="text-xs font-semibold uppercase tracking-[0.32em] text-orange-300">
          Mensaje final
        </p>
        <h4 class="mt-4 max-w-4xl text-3xl font-semibold text-white sm:text-4xl">
          No necesitas ser perfecto. Necesitas compromiso real con tu aprendizaje.
        </h4>
        <p class="mt-5 max-w-4xl text-base leading-8 text-zinc-100">
          No quiero estudiantes que solo terminen el curso. Quiero estudiantes que puedan usar esto para crecer, resolver problemas reales y construir algo que les abra puertas. Si practicas, si preguntas, si pruebas, si corriges y si construyes, este curso puede convertirse en una herramienta muy fuerte para tu crecimiento.
        </p>
        <p class="mt-4 max-w-4xl text-base leading-8 text-zinc-200">
          Vamos a avanzar paso a paso, semana por semana, con estrategia, practica y enfoque.
        </p>
        <div class="mt-6 inline-flex rounded-full border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(249,115,22,0.22)]">
          Bienvenido. Empezamos.
        </div>
      </div>
    </article>
  </section>
</template>
