🚀 Multi-Step Form (Full Stack)

A full-stack multi-step form application built with React and Node.js, featuring a step-based user flow and seamless backend integration with MongoDB. This project demonstrates a real-world full-stack architecture and a professional Git/GitHub workflow.

📌 Overview

This project implements a multi-step form where users can fill data step-by-step, navigate between steps, and finally submit the form. The frontend handles the UI and state management, while the backend exposes APIs to validate and store the submitted data in the database.

✨ Features

Multi-step form flow (Next / Back navigation)

Centralized form state management

REST API integration

Data persistence using MongoDB

Clean separation of frontend and backend

Environment-based configuration using .env

Professional Git workflow using main and develop branches

🛠️ Tech Stack
Frontend

React

JavaScript

Vite

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

📁 Project Structure
multi-step-form/
│
├── frontend/    # React frontend application
├── backend/     # Node.js + Express backend
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/subhajeetdey-dev/multi-step-form.git
cd multi-step-form

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside the backend folder:

MONGODB_URI=your_mongodb_connection_string
PORT=8000


Start the backend server:

npm run dev
# or
npm start

3️⃣ Frontend Setup

Open a new terminal:

cd frontend
npm install
npm run dev

🚧 Future Improvements

Form validation (frontend + backend)

Progress indicator

Better UI/UX

Authentication

Admin dashboard to view submissions

👨‍💻 Author

Subhajeet Dey
GitHub: https://github.com/subhajeetdey-dev

⭐ Support

If you find this project useful, please consider giving it a star ⭐ on GitHub.
