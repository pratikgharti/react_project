# Task Manager

A simple, clean task manager built with React. Add, edit, organize, and complete your daily tasks, with everything saved in your browser so nothing is lost on refresh.

## Features

- Add, edit, delete, and mark tasks as complete
- Filter tasks by status: All, Active, Completed
- Organize tasks by category: Work, Personal, Urgent
- Filter tasks by category
- Tasks persist with localStorage
- Live count of remaining and completed tasks
- Clear all completed tasks in one click
- Empty states for no tasks and no filter matches
- Responsive layout for desktop and mobile

## Technologies

- React 18 (functional components and hooks only)
- Vite (build tool and dev server)
- ESLint (Vite React template configuration)
- Plain CSS

## Project Structure

```
src/
  components/   Header, TaskForm, FilterBar, TaskList, TaskItem
  hooks/        useLocalStorage.jsx
  constants.jsx Categories and status filters
  App.jsx       Main state and logic
  index.css     Styles
```

## Setup

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually http://localhost:5173).

To check the code with ESLint:

```bash
npm run lint
```

To create a production build:

```bash
npm run build
```

## Known Limitations

- Tasks are stored per browser, so they do not sync across devices
- No drag-and-drop reordering
- Categories are fixed and cannot be customized
