import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live AI-Analysen für deine MPU
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              MPU Vorbereitung neu gedacht
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Interaktive Live-Trainings, persönliche Checklisten und intelligente Auswertungen – alles an einem Ort, vollanimiert und intuitiv.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#trainer" className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 transition-colors">Live Training starten</a>
              <a href="#analyse" className="rounded-lg bg-white/10 hover:bg-white/20 px-5 py-3">Text analysieren</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.15),transparent_35%)]" />
    </section>
  )
}
