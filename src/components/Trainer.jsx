import React, { useState } from 'react'

export default function Trainer() {
  const [stage, setStage] = useState('intro')
  const [answers, setAnswers] = useState([
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
  ])
  const [result, setResult] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const start = async () => {
    setStage('questions')
  }

  const submit = async () => {
    const payload = { user_id: 'demo', answers }
    try {
      const res = await fetch(`${baseUrl}/api/session/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setResult(data)
      setStage('result')
    } catch (e) {
      setResult({ error: e.message })
      setStage('result')
    }
  }

  return (
    <section id="trainer" className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold">Live Training</h3>
        <p className="text-white/70 mt-2">Beantworte typische Fragen und erhalte eine kurze Auswertung.</p>
        {stage === 'intro' && (
          <button onClick={start} className="mt-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3">Starten</button>
        )}
        {stage === 'questions' && (
          <div className="mt-6 space-y-4">
            {answers.map((a, idx) => (
              <div key={a.id} className="rounded-lg bg-white/5 border border-white/10 p-4">
                <p className="text-white/80 mb-2">Frage {a.id}</p>
                <textarea value={a.text} onChange={(e)=>{
                  const next = [...answers]
                  next[idx].text = e.target.value
                  setAnswers(next)
                }} className="w-full h-28 rounded-md bg-transparent outline-none" placeholder="Deine Antwort..." />
              </div>
            ))}
            <button onClick={submit} className="rounded-lg bg-white/10 hover:bg-white/20 px-5 py-3">Abschicken</button>
          </div>
        )}
        {stage === 'result' && (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            {!result && <p>Wird geladen...</p>}
            {result?.error && <p className="text-red-400">{result.error}</p>}
            {!result?.error && result && (
              <div className="space-y-2">
                <p><span className="text-white/60">Score:</span> <span className="font-medium">{result.score}</span></p>
                <p><span className="text-white/60">Feedback:</span> {result.feedback}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
