# 🎓 EduSite - Educational Platform for Students

EduSite is a modern, responsive educational web application built with React, Vite, Tailwind CSS, and Framer Motion. It’s designed to help students discover, filter, and enroll in courses across various domains like Government Jobs, IT, and Personal Skill Development.

> 🚀 Currently integrating **Appwrite** for full authentication and database management.

---



---

## 📌 Features

- ✅ **Home Page** – Clean introduction with a newsletter subscription section
- 📚 **Courses Page** – Filterable/searchable list of courses by category (Govt, IT, Skill)
- 🔍 **Course Details** – Dynamic route `/courses/:id` for detailed view
- 🧠 **Dashboard** – View and edit profile, and track enrolled courses
- ✍️ **Signup / Login** – Authentication UI (backend handled by Appwrite soon)
- 🎨 **Fully Responsive UI** – Built with Tailwind CSS & Framer Motion
- 🔐 **Authentication & Session Management** (coming soon with Appwrite)

---

## 🛠️ Tech Stack

| Tech         | Description                                      |
|--------------|--------------------------------------------------|
| React + Vite | Modern fast-react frontend framework             |
| Tailwind CSS | Utility-first CSS for styling                   |
| Framer Motion| Animation and transitions                        |
| Appwrite     | Open-source backend for auth, DB, and storage   |
| React Router | Routing system for navigation                   |

---

## 📦 What is Appwrite?

**Appwrite** is a secure open-source backend server you can host yourself or use in the cloud. It provides out-of-the-box APIs for:

- ✅ **Authentication** – Login, Signup, Sessions
- ✅ **Database** – Store and retrieve user or course data
- ✅ **Storage** – Upload files like course thumbnails, resumes, etc.
- ✅ **Functions** – Run backend logic (e.g., sending emails)

> Learn more: [https://appwrite.io](https://appwrite.io)

---

## 🔧 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/ujjawalsharma/edusite.git

# 2. Navigate into the directory
cd edusite

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
