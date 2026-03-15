const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ---- Mock Data ----
const schools = [
  { id: 'SCH-001', name: 'Greenwood Academy', students: 1240, status: 'Active', plan: 'Standard' },
  { id: 'SCH-002', name: 'Northside High', students: 850, status: 'Pending', plan: 'Enterprise' },
];

const students = [
  { id: 'STU-2023-881', name: 'Liam Anderson', class: 'Class 8', section: 'A', status: 'Active' },
  { id: 'STU-2023-842', name: 'Sophia Martinez', class: 'Class 7', section: 'B', status: 'Active' },
];

const teachers = [
  { id: 'T-1024', name: 'Dr. Sarah Jenkins', subjects: ['Physics', 'Mathematics'], status: 'Active' },
  { id: 'T-1056', name: 'Robert Chen', subjects: ['World History'], status: 'On Leave' },
];

// ---- Auth Routes ----
app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;
  const roles = {
    superadmin: { name: 'Alex Rivera', role: 'superadmin' },
    schooladmin: { name: 'Dr. Sarah Jenkins', role: 'schooladmin', school: 'Greenwood Academy' },
    teacher: { name: 'Mrs. Sarah Jenkins', role: 'teacher' },
    student: { name: 'Alex Johnson', role: 'student', grade: 'Grade 10-B' },
  };
  const user = roles[role] || roles.schooladmin;
  res.json({ success: true, token: `mock-jwt-${role}`, user });
});

// ---- Super Admin Routes ----
app.get('/api/super-admin/dashboard', (req, res) => {
  res.json({
    totalSchools: 1248,
    activeSubscriptions: 1102,
    monthlyRevenue: 45200,
    platformGrowth: 12.5,
    onboardingTrend: [
      { month: 'Jan', schools: 980 }, { month: 'Feb', schools: 1030 },
      { month: 'Mar', schools: 1080 }, { month: 'Apr', schools: 1120 },
      { month: 'May', schools: 1180 }, { month: 'Jun', schools: 1248 },
    ]
  });
});

app.get('/api/schools', (req, res) => res.json(schools));
app.post('/api/schools', (req, res) => {
  const school = { id: `SCH-${Date.now()}`, ...req.body, status: 'Pending' };
  schools.push(school);
  res.status(201).json(school);
});

// ---- School Admin Routes ----
app.get('/api/school-admin/dashboard', (req, res) => {
  res.json({
    attendance: '94.2%',
    totalStudents: 1250,
    pendingFees: 12400,
    recentNotices: 3,
  });
});

app.get('/api/students', (req, res) => res.json(students));
app.post('/api/students', (req, res) => {
  const student = { id: `STU-${Date.now()}`, ...req.body, status: 'Active' };
  students.push(student);
  res.status(201).json(student);
});

app.get('/api/teachers', (req, res) => res.json(teachers));
app.post('/api/teachers', (req, res) => {
  const teacher = { id: `T-${Date.now()}`, ...req.body, status: 'Active' };
  teachers.push(teacher);
  res.status(201).json(teacher);
});

// ---- Teacher Routes ----
app.get('/api/teacher/attendance', (req, res) => {
  res.json([
    { id: 'BIO-054', name: 'Alex Thompson', status: 'Present' },
    { id: 'BIO-042', name: 'Chloe Richards', status: 'Late' },
    { id: 'BIO-089', name: 'Daniel Varma', status: 'Present' },
    { id: 'BIO-102', name: 'Elena Gilbert', status: 'Absent' },
  ]);
});

app.post('/api/teacher/attendance', (req, res) => {
  res.json({ success: true, message: 'Attendance submitted successfully', data: req.body });
});

app.get('/api/teacher/marks', (req, res) => {
  res.json([
    { id: '202401', name: 'Abraham Wilson', marks: 88, grade: 'A' },
    { id: '202402', name: 'Beatrix Potter', marks: 94, grade: 'A+' },
    { id: '202403', name: 'Charlie Davids', marks: null, grade: '' },
  ]);
});

// ---- Student Routes ----
app.get('/api/student/dashboard', (req, res) => {
  res.json({
    attendance: '94%',
    latestExam: { subject: 'Mathematics', grade: 'A-' },
    nextPayment: { amount: 450, dueDate: 'Nov 15' },
    newNotices: 3,
  });
});

app.get('/api/student/results', (req, res) => {
  res.json({
    semesterGPA: 3.85,
    cumulativeGPA: 3.72,
    rank: '5th / 40',
    subjects: [
      { subject: 'Mathematics IV', internal: 28, exam: 65, total: 93, grade: 'A+' },
      { subject: 'Advanced Physics', internal: 26, exam: 62, total: 88, grade: 'A' },
    ]
  });
});

// ---- Health Check ----
app.get('/api/health', (req, res) => res.json({ status: 'OK', uptime: process.uptime() }));

app.listen(PORT, () => {
  console.log(`✅ EduFlow API Server running on http://localhost:${PORT}`);
});

module.exports = app;
