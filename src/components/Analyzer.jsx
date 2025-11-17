import React, { useState } from 'react'

export default function Analyzer() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleAnalyze = async () => {
    if (!text.trim()) return
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="analyse" className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold">AI Textanalyse</h3>
          <p className="text-white/70 mt-2">Füge eine Antwort oder Beschreibung ein und erhalte sofort Feedback.</p>
          <textarea value={text} onChange={(e)=>setText(e.target.value)} className="mt-4 w-full h-40 rounded-lg bg-white/5 border border-white/10 p-4 outline-none" placeholder="Schreibe hier..." />
          <button onClick={handleAnalyze} disabled={loading} className="mt-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3 disabled:opacity-50">{loading ? 'Analysiere...' : 'Analysieren'}</button>
        </div>
        <div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 min-h-[220px]">
            {!result && <p className="text-white/60">Ergebnisse erscheinen hier.</p>}
            {result && result.error && <p className="text-red-400">{result.error}</p>}
            {result && !result.error && (
              <div className="space-y-3">
                <p><span className="text-white/60">Sentiment:</span> <span className="font-medium">{result.sentiment}</span></p>
                <p><span className="text-white/60">Risiko:</span> <span className="font-medium">{Math.round(result.risk_score*100)}%</span></p>
                {result.key_themes?.length > 0 && (
                  <p><span className="text-white/60">Themen:</span> {result.key_themes.join(', ')}</p>
                )}
                <div>
                  <p className="text-white/60">Empfehlungen:</p>
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    {result.recommendations?.map((r,i)=>(<li key={i}>{r}</li>))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
