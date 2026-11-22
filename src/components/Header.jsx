import { LayoutGrid, ChevronDown } from 'lucide-react'

export default function Header({ page }) {
  return (
    <header className="header">
      <div className="mobile-brand brand">
        <span className="logo"><LayoutGrid size={18} /></span> FocusBoard
      </div>
      <p className="crumbs">Workspace <span>/</span> <strong>{page}</strong></p>
      <button className="avatar-btn" aria-label="Profile menu">
        <span className="avatar">JD</span>
        <ChevronDown size={14} className="chev" aria-hidden="true" />
      </button>
    </header>
  )
}
