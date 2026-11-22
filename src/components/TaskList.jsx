import TaskCard from './TaskCard.jsx'

export default function TaskList({ tasks, totalCount, ...handlers }) {
  if (tasks.length === 0) {
    return (
      <div className="empty">
        <p><b>{totalCount === 0 ? 'No tasks yet' : 'No tasks match your search or filters'}</b></p>
        <p>{totalCount === 0 ? 'Click "New task" to add your first one.' : 'Try a different keyword or reset the filters.'}</p>
      </div>
    )
  }
  return (
    <ul className="task-list">
      {tasks.map((t) => <TaskCard key={t.id} task={t} {...handlers} />)}
    </ul>
  )
}
