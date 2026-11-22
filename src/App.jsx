import { useMemo, useState } from 'react'
import { ListChecks, Clock, Check, Plus } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import StatCard from './components/StatCard.jsx'
import FocusNotes from './components/FocusNotes.jsx'
import SearchBar from './components/SearchBar.jsx'
import FilterTabs from './components/FilterTabs.jsx'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import useLocalStorage from './hooks/useLocalStorage.js'
import { sampleTasks } from './data/sampleTasks.js'

const newId = () => (crypto.randomUUID ? crypto.randomUUID() : `t${Date.now()}`)
const PAGES = { overview: 'Overview', tasks: 'My tasks', calendar: 'Calendar', settings: 'Settings' }

export default function App() {
  const [tasks, setTasks] = useLocalStorage('focusboard.tasks', sampleTasks)
  const [page, setPage] = useState('overview')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [priority, setPriority] = useState('All')
  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [toDelete, setToDelete] = useState(null)

  // ---- derived values (never stored) ----
  const stats = useMemo(() => {
    const total = tasks.length
    const inProgress = tasks.filter((t) => t.status === 'In progress').length
    const completed = tasks.filter((t) => t.status === 'Completed').length
    const todo = total - inProgress - completed
    return { total, inProgress, completed, todo, pct: total === 0 ? 0 : Math.round((completed / total) * 100) }
  }, [tasks])

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    return tasks.filter((t) =>
      (status === 'All' || t.status === status) &&
      (priority === 'All' || t.priority === priority) &&
      t.title.toLowerCase().includes(q)
    )
  }, [tasks, search, status, priority])

  const counts = { All: stats.total, 'To do': stats.todo, 'In progress': stats.inProgress, Completed: stats.completed }

  // ---- immutable updates ----
  const saveTask = (data) => {
    if (editing) setTasks((prev) => prev.map((t) => (t.id === editing.id ? { ...t, ...data, id: t.id } : t)))
    else setTasks((prev) => [{ ...data, id: newId() }, ...prev])
    closeForm()
  }
  const changeStatus = (id, s) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: s } : t)))
  const confirmDelete = () => {
    setTasks((prev) => prev.filter((t) => t.id !== toDelete.id))
    setToDelete(null)
  }
  const openCreate = () => { setEditing(null); setFormOpen(true) }
  const openEdit = (t) => { setEditing(t); setFormOpen(true) }
  const closeForm = () => { setFormOpen(false); setEditing(null) }
  const resetFilters = () => { setStatus('All'); setPriority('All'); setSearch('') }

  return (
    <div className="app">
      <Sidebar active={page} onChange={setPage} />
      <div className="main">
        <Header page={PAGES[page]} />
        <main className="content">
          <div className="hero-row">
            <div>
              <h1>Your work, in focus.</h1>
              <p className="sub">Plan your day, stay organized, and celebrate small wins.</p>
            </div>
            <button className="btn primary new-btn" onClick={openCreate}><Plus size={18} aria-hidden="true" /><span>New task</span></button>
          </div>

          <FocusNotes />

          <section className="stats" aria-label="Overview statistics">
            <StatCard title="Total tasks" value={stats.total} note="Across all projects" icon={ListChecks} tone="purple" />
            <StatCard title="In progress" value={stats.inProgress} note="Keep the momentum" icon={Clock} tone="blue" />
            <StatCard title="Completed" value={stats.completed} note={`${stats.pct}% complete`} icon={Check} tone="green" />
          </section>

          <section className="tasks" aria-labelledby="tasks-h">
            <div className="tasks-head">
              <div><h2 id="tasks-h">My tasks</h2><p className="sub">Manage and track everything in one place.</p></div>
              <button className="btn soft" onClick={resetFilters}>View all tasks</button>
            </div>
            <div className="toolbar">
              <FilterTabs status={status} onStatus={setStatus} priority={priority} onPriority={setPriority} counts={counts}
                dirty={status !== 'All' || priority !== 'All' || search !== ''} onReset={resetFilters} />
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <TaskList tasks={visible} totalCount={tasks.length} onStatus={changeStatus} onEdit={openEdit} onDelete={setToDelete} />
          </section>
        </main>
      </div>

      {formOpen && <TaskForm task={editing} onSubmit={saveTask} onClose={closeForm} />}

      {toDelete && (
        <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && setToDelete(null)}>
          <div className="modal small" role="alertdialog" aria-modal="true" aria-labelledby="del-h">
            <h2 id="del-h">Delete task?</h2>
            <p className="sub">"{toDelete.title}" will be removed permanently.</p>
            <div className="actions">
              <button className="btn ghost" autoFocus onClick={() => setToDelete(null)}>Cancel</button>
              <button className="btn danger-solid" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
