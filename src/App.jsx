import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Analyzer from './components/Analyzer'
import Trainer from './components/Trainer'
import Checklist from './components/Checklist'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Analyzer />
      <Trainer />
      <Checklist />
      <footer className="bg-black/90 border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} MPU Plattform</p>
          <a href="/test" className="hover:text-white">Systemstatus</a>
        </div>
      </footer>
    </div>
  )
}

export default App
