import { useEffect, useState } from 'react'
import { X, Calendar } from 'lucide-react'

const empty = { title: '', description: '', category: 'Development', status: 'To do', priority: 'Medium', dueDate: '' }

// One form for both Create and Edit: if `task` is passed, we are editing.
export default function TaskForm({ task, onSubmit, onClose }) {
  const editing = Boolean(task)
  const [form, setForm] = useState(task ? { ...task } : empty)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = form.title.trim()
    const errs = {}
    if (!title) errs.title = 'Task title is required.'
    if (!form.dueDate) errs.dueDate = 'Please choose a due date.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    onSubmit({ ...form, title, description: form.description.trim() })
  }

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="modal" role="dialog" aria-modal="true" aria-labelledby="form-title" onSubmit={handleSubmit} noValidate>
        <div className="modal-head">
          <div>
            <h2 id="form-title">{editing ? 'Edit task' : 'Create new task'}</h2>
            <p>{editing ? 'Update the details of your task.' : 'Add your task details to stay on top of your work.'}</p>
          </div>
          <button type="button" className="close" aria-label="Close form" onClick={onClose}><X size={16} /></button>
        </div>

        <label className="field">Task title *
          <input autoFocus value={form.title} onChange={set('title')} placeholder="e.g. Update pricing page" aria-invalid={!!errors.title} aria-describedby={errors.title ? 'err-title' : undefined} />
          {errors.title && <span id="err-title" className="err" role="alert">{errors.title}</span>}
        </label>

        <label className="field">Description
          <textarea rows="3" value={form.description} onChange={set('description')} placeholder="Add notes about this task..." />
        </label>

        <div className="row2">
          <label className="field">Status
            <select value={form.status} onChange={set('status')}>
              <option>To do</option><option>In progress</option><option>Completed</option>
            </select>
          </label>
          <label className="field">Priority
            <select value={form.priority} onChange={set('priority')}>
              <option>Low</option><option>Medium</option><option>High</option>
            </select>
          </label>
        </div>

        <label className="field">Due date *
          <span className="date-wrap"><Calendar size={16} aria-hidden="true" />
            <input type="date" value={form.dueDate} onChange={set('dueDate')} aria-invalid={!!errors.dueDate} />
          </span>
          {errors.dueDate && <span className="err" role="alert">{errors.dueDate}</span>}
        </label>

        <p className="req">* Required field</p>
        <div className="actions">
          <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn primary">{editing ? 'Save changes' : 'Create task'}</button>
        </div>
      </form>
    </div>
  )
}
