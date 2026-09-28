import { useState } from 'react'
import { CATEGORIES } from '../constants.jsx'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed, category)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to get done?"
        aria-label="New task"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Task category"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="submit" className="btn-primary">
        Add task
      </button>
    </form>
  )
}
