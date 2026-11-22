export default function StatCard({ title, value, note, icon: Icon, tone }) {
  return (
    <div className="stat">
      <span className={`stat-icon ${tone}`}><Icon size={18} aria-hidden="true" /></span>
      <div>
        <p className="stat-title">{title}</p>
        <p className="stat-value">{value}</p>
        <p className="stat-note">{note}</p>
      </div>
    </div>
  )
}
