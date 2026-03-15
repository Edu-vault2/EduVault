<<<<<<< HEAD
# EduFlow - School Management System

A comprehensive, multi-tenant SaaS school management platform built with React + Vite, Tailwind CSS.

## 🚀 Tech Stack
- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS v3
- **Routing:** React Router v6
- **Charts:** Recharts
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans + Sora (Google Fonts)

## 📂 Project Structure
```
EduVault/
├── src/
│   ├── components/       # Shared UI (Sidebar, Topbar, Logo)
│   ├── contexts/         # AuthContext
│   ├── layouts/          # Role-based layouts
│   ├── pages/
│   │   ├── marketing/    # Landing page
│   │   ├── auth/         # Login, Signup
│   │   ├── super-admin/  # Dashboard, Schools, Subscriptions, Settings, Support
│   │   ├── school-admin/ # Dashboard, Students, Teachers, Classes, Fees, Exams, Notices, Admission
│   │   ├── teacher/      # Dashboard, Attendance, Marks, Homework, Remarks, Profile
│   │   └── student/      # Dashboard, Attendance, Results, Fees, Profile
│   ├── styles/           # Global CSS + Tailwind
│   └── routes/           # AppRoutes
```

## 🔧 Installation & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## 🌐 Routes

| Role         | Login As     | Route                        |
|--------------|--------------|------------------------------|
| Super Admin  | superadmin   | `/super-admin/dashboard`     |
| School Admin | schooladmin  | `/school-admin/dashboard`    |
| Teacher      | teacher      | `/teacher/dashboard`         |
| Student      | student      | `/student/dashboard`         |

## 🎯 Demo Access
Visit `/login` → Click any **Quick Demo Access** button to log in instantly as any role.

## 🎨 Design System
- **Primary Color:** `#1a2744` (Navy Blue)
- **Accent Color:** `#d4a017` (Gold)
- **Font Display:** Sora
- **Font Body:** Plus Jakarta Sans

## 📱 Features

### Super Admin
- Platform dashboard with school onboarding trends
- Schools management (add, edit, suspend)
- Subscription plan management
- Platform settings & branding
- Support & help desk with ticket system

### School Admin
- School dashboard with live metrics
- Student directory with bulk import
- Teacher management
- Class & section management
- Fee & payment tracking with bulk reminders
- Exam scheduling & report cards
- Notices & announcements

### Teacher
- Class schedule & dashboard
- Attendance marking (Present/Late/Absent)
- Student marks entry
- Homework assignment management
- Student remarks feed

### Student
- Academic dashboard
- Attendance calendar view
- Detailed results with GPA tracking
- Fee payment management
- Notice board

## 📦 Backend (Express + Node.js)

A sample Express server structure is included for API integration:

```bash
# Backend (separate)
npm install express cors dotenv
node server.js
```

API runs on `http://localhost:5000`

---
Built with ❤️ using React + Vite + Tailwind CSS
=======
# EduVault
The big plat form for the small school, Data security for Smart School
>>>>>>> 3a44d6d3bced0006f4e2cf6e632d22a8c0d0d31e
