export default function Header({ remaining, completed, onClearCompleted }) {
  return (
    <header className="header">
      <div>
        <h1>Tasks</h1>
        <p className="counts">
          {remaining} remaining, {completed} completed
        </p>
      </div>
      {completed > 0 && (
        <button className="btn-text" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </header>
  )
}
