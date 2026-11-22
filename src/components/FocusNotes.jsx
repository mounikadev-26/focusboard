import { useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

// Slide content taken from the three Figma frames
const slides = [
  { title: 'Make today count.', text: 'A little focus goes a long way.', label: 'NEXT UP', task: 'Design landing page', pct: 62 },
  { title: 'Small steps, big progress.', text: 'Keep your priorities in view.', label: 'IN PROGRESS', task: 'Fix navigation', pct: 67 },
  { title: 'Celebrate the wins.', text: 'Every completed task moves you forward.', label: 'COMPLETED', task: 'Onboarding copy', pct: 100 },
]

export default function FocusNotes() {
  const [index, setIndex] = useState(0)
  const total = slides.length
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const s = slides[index]

  return (
    <section className="notes" aria-roledescription="carousel" aria-label="Focus notes">
      <div className="notes-text" aria-live="polite">
        <p className="notes-meta">FOCUS NOTES <span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></p>
        <h2>{s.title}</h2>
        <p>{s.text}</p>
        <div className="dots" role="group" aria-label="Choose slide">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === index ? 'on' : ''}`} aria-label={`Go to slide ${i + 1}`} aria-current={i === index} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
      <div className="notes-card" aria-hidden="true">
        <span className="tick"><Check size={14} /></span>
        <div>
          <small>{s.label}</small>
          <b>{s.task}</b>
          <div className="bar"><i style={{ width: `${s.pct}%` }} /><em>{s.pct}%</em></div>
        </div>
      </div>
      <div className="notes-nav">
        <button className="round" onClick={prev} aria-label="Previous slide"><ChevronLeft size={18} /></button>
        <button className="round white" onClick={next} aria-label="Next slide"><ChevronRight size={18} /></button>
      </div>
    </section>
  )
}
