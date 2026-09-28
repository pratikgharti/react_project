import { CATEGORIES, STATUS_FILTERS } from '../constants.jsx'

export default function FilterBar({
  statusFilter,
  onStatusChange,
  categoryFilter,
  onCategoryChange,
}) {
  return (
    <div className="filter-bar">
      <div className="tabs" role="group" aria-label="Filter by status">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            className={status === statusFilter ? 'tab active' : 'tab'}
            onClick={() => onStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <select
        value={categoryFilter}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}
