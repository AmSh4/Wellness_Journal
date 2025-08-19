import React, { useState } from 'react';

export default function JournalForm({ onAdd }){
  const [mood, setMood] = useState(5);
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  function submit(e){
    e.preventDefault();
    if(!mood && mood !== 0) return alert('Provide mood');
    onAdd({ date: date || new Date(), mood: Number(mood), note });
    setNote('');
  }

  return (
    <form onSubmit={submit} className="mb-6 space-y-3">
      <div>
        <label className="block text-sm">Mood (0-10)</label>
        <input type="range" min="0" max="10" value={mood} onChange={e=>setMood(e.target.value)} />
        <div>Selected: {mood}</div>
      </div>
      <div>
        <label className="block text-sm">Note</label>
        <textarea value={note} onChange={e=>setNote(e.target.value)} className="w-full border p-2" rows="3"/>
      </div>
      <div>
        <label className="block text-sm">Date (optional)</label>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border p-2"/>
      </div>
      <button className="px-4 py-2 bg-green-600 text-white rounded">Add Entry</button>
    </form>
  )
}
