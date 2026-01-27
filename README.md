# 🚀 Multi-Step Form (Full Stack)

A full-stack multi-step form application built with **React** and **Node.js** that allows users to fill a form step-by-step and submit the data to a backend API, where it is stored in **MongoDB**.

This project focuses on implementing a clean multi-step form flow and a proper frontend–backend integration using a real-world project structure.

---

## 📌 Project Overview

This application contains a multi-step form on the frontend where users can:

- Fill information step by step
- Navigate using Next and Back buttons
- Submit the final data to the backend

The backend exposes an API built with Express.js that receives the form data and stores it in MongoDB.

---

## ✨ Current Features

- Multi-step form UI
- Step navigation (Next / Back)
- Form state handling in React
- Backend API using Node.js & Express
- MongoDB database integration
- Data submission from frontend to backend
- Separate frontend and backend folders
- Environment variable support using `.env`

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure
  multi-step-form/
  │
  ├── frontend/ # React frontend
  ├── backend/ # Node.js + Express backend
  └── README.md

  
---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/subhajeetdey-dev/multi-step-form.git
cd multi-step-form
```
2️⃣ Backend Setup
```
cd backend
npm install
```


Create a .env file inside the backend folder:
```
MONGODB_URI=your_mongodb_connection_string
PORT=8000
```

Start the backend server:
```
npm run dev
# or
npm start
```

3️⃣ Frontend Setup

Open a new terminal:
```
cd frontend
npm install
npm run dev
```

Future Improvements<br>
 - Form validation<br>  
 - Progress indicator<br>
 - Better UI/UX<br>  
 - Error handling & success messages<br>  
 - Admin panel to view submitted data<br>

**👨‍💻 Author**<br>

Subhajeet Dey<br>
GitHub: https://github.com/subhajeetdey-dev<br>
LinkedIn: https://www.linkedin.com/in/subhajeetdey-dev<br>

⭐ Support

If you find this project useful, please consider giving it a star ⭐ on GitHub!


---

## ✅ Then Commit It

```bash
git add README.md
git commit -m "Add project README"
git push
```
