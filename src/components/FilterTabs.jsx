const TABS = ['All', 'To do', 'In progress', 'Completed']

export default function FilterTabs({ status, onStatus, priority, onPriority, counts, onReset, dirty }) {
  return (
    <div className="tabs" role="tablist" aria-label="Filter by status">
      {TABS.map((t) => (
        <button key={t} role="tab" aria-selected={status === t} className={`tab ${status === t ? 'on' : ''}`} onClick={() => onStatus(t)}>
          {t} {t === 'All' || status === t ? counts[t] : ''}
        </button>
      ))}
      <select className="prio-select" aria-label="Filter by priority" value={priority} onChange={(e) => onPriority(e.target.value)}>
        <option value="All">Priority: All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      {dirty && <button className="link-btn" onClick={onReset}>Reset</button>}
    </div>
  )
}
