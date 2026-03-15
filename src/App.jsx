import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import './styles/index.css';

// Marketing
import Landing from './pages/marketing/Landing';

// Auth
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// Layouts
import SuperAdminLayout from './layouts/SuperAdminLayout';
import SchoolAdminLayout from './layouts/SchoolAdminLayout';
import { TeacherLayout } from './pages/teacher/TeacherPages';
import { StudentLayout } from './pages/student/StudentPages';

// Super Admin Pages
import SuperAdminDashboard from './pages/super-admin/Dashboard';
import Schools from './pages/super-admin/Schools';
import Subscriptions from './pages/super-admin/Subscriptions';
import Settings from './pages/super-admin/Settings';
import Support from './pages/super-admin/Support';

// School Admin Pages
import SchoolAdminDashboard from './pages/school-admin/Dashboard';
import Students from './pages/school-admin/Students';
import Teachers from './pages/school-admin/Teachers';
import Fees from './pages/school-admin/Fees';
import { Classes, Notices, Exams, Admission } from './pages/school-admin/AdminPages';

// Teacher Pages
import {
  TeacherDashboard,
  Attendance,
  MarksEntry,
  Homework,
  Remarks,
  TeacherProfile
} from './pages/teacher/TeacherPages';

// Student Pages
import {
  StudentDashboard,
  StudentAttendance,
  StudentResults,
  StudentFees,
  StudentProfile,
  StudentNotices
} from './pages/student/StudentPages';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Super Admin */}
          <Route path="/super-admin" element={<SuperAdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<SuperAdminDashboard />} />
            <Route path="schools" element={<Schools />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="users" element={<Schools />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
          </Route>

          {/* School Admin */}
          <Route path="/school-admin" element={<SchoolAdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<SchoolAdminDashboard />} />
            <Route path="admission" element={<Admission />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="classes" element={<Classes />} />
            <Route path="fees" element={<Fees />} />
            <Route path="exams" element={<Exams />} />
            <Route path="notices" element={<Notices />} />
          </Route>

          {/* Teacher */}
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="classes" element={<Classes />} />
            <Route path="students" element={<Students />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="marks" element={<MarksEntry />} />
            <Route path="homework" element={<Homework />} />
            <Route path="remarks" element={<Remarks />} />
            <Route path="profile" element={<TeacherProfile />} />
          </Route>

          {/* Student */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="attendance" element={<StudentAttendance />} />
            <Route path="results" element={<StudentResults />} />
            <Route path="fees" element={<StudentFees />} />
            <Route path="notices" element={<StudentNotices />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>

          {/* Catch All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
