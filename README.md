# Team Task Manager

## Project Description

Team Task Manager is a full-stack web application developed using the MERN stack. It helps teams manage projects, assign tasks, and track progress with secure authentication and role-based access (Admin and Member).

---

## Features

- User Signup
- User Login
- JWT Authentication
- Role-Based Access (Admin / Member)
- Dashboard
- Project Management (Create, Read, Update, Delete)
- Task Management (Create, Read, Update, Delete)
- Team Members Management
- User Profile
- MongoDB Database Integration

---

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

---

## Project Structure

```
Team Task Manager
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── App.jsx
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Rajeshwari23v/Team-Task-Manager.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

```
PORT=5000

MONGO_URI=Your_MongoDB_Connection_String

JWT_SECRET=Your_JWT_Secret
```

---

## Future Enhancements

- Email Notifications
- File Uploads
- Task Comments
- Search and Filters
- Due Date Reminders

---

## Author

**Rajeshwari**

GitHub:
https://github.com/Rajeshwari23v