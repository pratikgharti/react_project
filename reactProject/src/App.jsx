import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage.jsx'
import Header from './components/Header.jsx'
import TaskForm from './components/TaskForm.jsx'
import FilterBar from './components/FilterBar.jsx'
import TaskList from './components/TaskList.jsx'

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [statusFilter, setStatusFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const addTask = (text, category) => {
    const task = { id: crypto.randomUUID(), text, category, completed: false }
    setTasks((prev) => [task, ...prev])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const editTask = (id, text) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)))
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed))
  }

  const visibleTasks = tasks.filter((t) => {
    const matchesStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Active' && !t.completed) ||
      (statusFilter === 'Completed' && t.completed)
    const matchesCategory =
      categoryFilter === 'All' || t.category === categoryFilter
    return matchesStatus && matchesCategory
  })

  const completedCount = tasks.filter((t) => t.completed).length

  return (
    <main className="app">
      <Header
        remaining={tasks.length - completedCount}
        completed={completedCount}
        onClearCompleted={clearCompleted}
      />
      <TaskForm onAdd={addTask} />
      <FilterBar
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
      />
      <TaskList
        tasks={visibleTasks}
        hasTasks={tasks.length > 0}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </main>
  )
}
