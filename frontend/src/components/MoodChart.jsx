import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function MoodChart({ entries }){
  const sorted = [...entries].sort((a,b)=> new Date(a.date) - new Date(b.date));
  const labels = sorted.map(e => new Date(e.date).toLocaleDateString());
  const data = {
    labels,
    datasets: [{ label: 'Mood', data: sorted.map(e=>e.mood), tension: 0.3 }]
  };
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Mood over time</h3>
      <div style={{height:300}}>
        <Line data={data}/>
      </div>
    </div>
  )
}
