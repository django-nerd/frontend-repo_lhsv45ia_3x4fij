import React, { useEffect, useState } from 'react'

export default function Checklist() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const userId = 'demo'
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  const loadItems = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/checklist?user_id=${userId}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setItems([])
    }
  }

  const addItem = async () => {
    if (!text.trim()) return
    try {
      const res = await fetch(`${baseUrl}/api/checklist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, title: text })
      })
      const data = await res.json()
      setItems(prev => [...prev, data])
      setText('')
    } catch (e) {}
  }

  useEffect(() => { loadItems() }, [])

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold">Deine MPU Checkliste</h3>
        <p className="text-white/70 mt-2">Dokumente, Nachweise und Aufgaben – alles an einem Ort.</p>
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex gap-3">
            <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Neuer Punkt..." className="flex-1 rounded-md bg-transparent border border-white/10 px-3 py-2 outline-none" />
            <button onClick={addItem} className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5">Hinzufügen</button>
          </div>
          <ul className="mt-6 space-y-2">
            {items.map((it)=> (
              <li key={it.id} className="flex items-center gap-3 bg-white/5 rounded-md px-3 py-2">
                <div className={`size-2 rounded-full ${it.completed ? 'bg-emerald-400' : 'bg-white/30'}`} />
                <span className="flex-1">{it.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
