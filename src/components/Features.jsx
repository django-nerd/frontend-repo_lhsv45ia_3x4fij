import React from 'react'
import { Brain, LineChart, CheckCircle2, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Analysen',
    desc: 'Erhalte sofortige, verständliche Auswertungen mit konkreten Empfehlungen.'
  },
  {
    icon: LineChart,
    title: 'Live-Training',
    desc: 'Trainiere typische MPU-Fragen im Interviewstil – mit direktem Feedback.'
  },
  {
    icon: CheckCircle2,
    title: 'Persönliche Checkliste',
    desc: 'Behalte alle Nachweise, Dokumente und Aufgaben im Blick.'
  },
  {
    icon: Sparkles,
    title: 'Voll animiert',
    desc: 'Sanfte Mikrointeraktionen für ein fokussiertes Lernerlebnis.'
  },
]

export default function Features() {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">Alles für deine erfolgreiche MPU</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">Strukturiert, verständlich und auf deine Situation angepasst.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <f.icon className="h-8 w-8 text-emerald-400" />
              <h3 className="mt-4 text-xl font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
