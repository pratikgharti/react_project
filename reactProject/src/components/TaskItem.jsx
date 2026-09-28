import { useState } from 'react'

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(task.text)

  const startEditing = () => {
    setDraft(task.text)
    setIsEditing(true)
  }

  const handleSave = (e) => {
    e.preventDefault()
    const trimmed = draft.trim()
    if (trimmed) onEdit(task.id, trimmed)
    setIsEditing(false)
  }

  return (
    <li className={task.completed ? 'task done' : 'task'}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.text}" as complete`}
      />

      {isEditing ? (
        <form className="edit-form" onSubmit={handleSave}>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="Edit task"
            autoFocus
          />
          <button type="submit" className="btn-text">
            Save
          </button>
          <button
            type="button"
            className="btn-text"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className="task-text">{task.text}</span>
          <span className="tag">{task.category}</span>
          <div className="task-actions">
            <button className="btn-text" onClick={startEditing}>
              Edit
            </button>
            <button className="btn-text" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  )
}
