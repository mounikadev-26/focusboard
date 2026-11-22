import { Check, Calendar, Pencil, Trash2 } from 'lucide-react'

const fmt = (d) => (d ? new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—')

export default function TaskCard({ task, onStatus, onEdit, onDelete }) {
  const done = task.status === 'Completed'
  return (
    <li className="task">
      <button
        className={`check ${done ? 'done' : ''}`}
        aria-label={done ? `Mark "${task.title}" as to do` : `Mark "${task.title}" as completed`}
        onClick={() => onStatus(task.id, done ? 'To do' : 'Completed')}
      >
        {done && <Check size={14} />}
      </button>
      <div className="task-main">
        <h3 className={done ? 'struck' : ''}>{task.title}</h3>
        <p>{task.description || 'No description'}</p>
      </div>
      <div className="task-meta">
        <span className="pill cat">{task.category}</span>
        <span className={`pill prio ${task.priority.toLowerCase()}`}>{task.priority}</span>
        <span className="due"><Calendar size={14} aria-hidden="true" /> {fmt(task.dueDate)}</span>
        <select className={`status s-${task.status.replace(' ', '')}`} aria-label={`Status for ${task.title}`} value={task.status} onChange={(e) => onStatus(task.id, e.target.value)}>
          <option>To do</option>
          <option>In progress</option>
          <option>Completed</option>
        </select>
        <button className="icon-btn" aria-label={`Edit ${task.title}`} onClick={() => onEdit(task)}><Pencil size={16} /></button>
        <button className="icon-btn danger" aria-label={`Delete ${task.title}`} onClick={() => onDelete(task)}><Trash2 size={16} /></button>
      </div>
    </li>
  )
}
