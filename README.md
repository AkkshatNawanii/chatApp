## 💬 Real-Time Chat App

A simple real-time chat application built with React for the frontend and Node.js + Express + Socket.IO for the backend. Messages update instantly across users using WebSockets.

## 🔧 Tech Stack

**Frontend**

- React
- Tailwind CSS
- DaisyUI
- Zustand (for state management)

**Backend**

- Node.js
- Express.js
- Socket.IO

## 📁 Project Structure

```bash
socket-react-chat/
├── frontend/   # React app
└── server/     # Node.js backend
```

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/AkkshatNawanii/chatApp.git
cd chatApp
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

🏃‍♂️ Running the App
Start backend:

```bash
cd server
npm run server
```

Start frontend:

```bash
cd ../frontend
npm start
```

Visit: http://localhost:3000
You can open two tabs to test the chat in real-time.

📌 Notes
Zustand is used instead of Redux for global state.

Styling is done with Tailwind and DaisyUI.

You can expand this by adding auth, chat rooms, or message history.
