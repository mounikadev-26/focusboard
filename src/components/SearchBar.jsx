import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search">
      <Search size={16} aria-hidden="true" />
      <input type="search" placeholder="Search tasks..." aria-label="Search tasks by title" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}
