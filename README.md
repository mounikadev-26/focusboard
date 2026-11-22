# FocusBoard – Task Management Dashboard

FocusBoard is a modern, responsive task management dashboard built with React. It helps users organize daily tasks, manage priorities, track progress, and stay focused through a clean and intuitive interface.

🌐 **Live Demo:** [https://focusboard-phi-beryl.vercel.app/](https://focusboard-phi-beryl.vercel.app/)

💻 **GitHub Repository:** [https://github.com/mounikadev-26/focusboard/](https://github.com/mounikadev-26/focusboard/)

---

## 📌 Project Overview

FocusBoard is a frontend task management application designed to make everyday task tracking simple and efficient. Users can create, edit, delete, search, and filter tasks while monitoring their progress through an interactive dashboard.

The dashboard includes task statistics, priority management, status tracking, a Focus Notes carousel, and LocalStorage persistence to retain tasks across browser refreshes.

---

## ✨ Features

- **Dashboard Overview** – View tasks and progress from a centralized dashboard.
- **Create Tasks** – Add new tasks with relevant details.
- **Edit Tasks** – Update task information whenever needed.
- **Delete Tasks** – Remove tasks with a confirmation step.
- **Task Status Management** – Track tasks as To Do, In Progress, or Completed.
- **Search Tasks** – Search tasks by title using case-insensitive matching.
- **Status Filtering** – Filter tasks based on their current status.
- **Priority Filtering** – Filter tasks by priority.
- **Dynamic Statistics** – View total tasks, in-progress tasks, completed tasks, and completion percentage.
- **Focus Notes Carousel** – Navigate through motivational focus notes.
- **LocalStorage Persistence** – Retain task data after refreshing the browser.
- **Responsive UI** – Designed to adapt to different screen sizes.

---

## 🛠️ Tech Stack

- React.js
- JavaScript
- CSS3
- Vite
- LocalStorage
- Lucide Icons

---

## 📂 Project Structure

```text
focusboard/
│
├── public/
│
├── screenshots/
│
├── src/
│   ├── components/
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── AI_USAGE.md
├── index.html
├── index-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/mounikadev-26/focusboard.git
```

**2. Navigate to the project folder**

```bash
cd focusboard
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL provided by Vite in your browser.

---

## 📖 How to Use

1. Open the FocusBoard dashboard.
2. Click **New Task** to create a task.
3. Enter the required task information and save it.
4. Edit tasks using the edit option.
5. Change task status as work progresses.
6. Search tasks by their title.
7. Filter tasks by status or priority.
8. Delete tasks when they are no longer required.
9. Track your productivity through dashboard statistics.
10. Refresh the browser to verify that tasks are retained.

---

## 💾 Data Persistence

FocusBoard uses browser LocalStorage for storing task information.

- Task data is saved locally in the browser.
- Data persists across page refreshes.
- No backend or database is required.
- Data is specific to the browser and device where the application is used.

---

## 🤖 AI Usage

AI tools were used during development to assist with project planning, UI development, code generation, styling, understanding React concepts, and implementation guidance.

AI-generated code served as a starting point for development. AI tool usage, prompts, contributions, and verification details are documented in [`AI_USAGE.md`](./AI_USAGE.md).

---

## 📌 Project Scope

- Frontend-only application.
- No backend integration.
- Task data stored locally using LocalStorage.
- No authentication system.
- No cross-device data synchronization.

---

## 👩‍💻 Author

**Mounika**

GitHub: [mounikadev-26](https://github.com/mounikadev-26)

---

## 📄 License

Developed as a frontend development assignment and learning project.

