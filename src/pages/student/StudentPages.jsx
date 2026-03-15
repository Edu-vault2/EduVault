import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';

const studentLinks = [
  { icon: '📊', label: 'Dashboard', path: '/student/dashboard' },
  { icon: '📋', label: 'Attendance', path: '/student/attendance' },
  { icon: '📈', label: 'Results', path: '/student/results' },
  { icon: '💰', label: 'Fees', path: '/student/fees' },
  { icon: '📢', label: 'Notices', path: '/student/notices' },
  { icon: '👤', label: 'Profile', path: '/student/profile' },
];

export const StudentLayout = () => (
  <div className="flex">
    <Sidebar links={studentLinks} role="student" />
    <main className="main-content flex-1"><Outlet /></main>
  </div>
);

// --- Student Dashboard ---
export const StudentDashboard = () => (
  <div>
    <Topbar title="Student Dashboard Overview" subtitle="Welcome back, Bhavesh Jangid. Here's your academic summary for this semester."
      actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">↓ Report Card</button>
          <button className="btn-primary text-xs">📧 Contact Teacher</button>
        </div>
      }
    />
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[
        {label:'Attendance',value:'94%',sub:'-2.5% | On Track',icon:'📋',ok:true},
        {label:'Latest Exam',value:'A-',sub:'Mathematics · Oct 24, 2015',icon:'📝',ok:true},
        {label:'Next Payment',value:'₹450.00',sub:'Due Nov 15',icon:'💳',warn:true},
        {label:'New Notices',value:'03',sub:'Unread',icon:'📢',ok:true},
      ].map(s=>(
        <div key={s.label} className="stat-card">
          <div className="flex items-center justify-between mb-2"><span className="text-xs font-medium text-gray-500">{s.label}</span><span className="text-xl">{s.icon}</span></div>
          <div className={`font-display text-2xl font-bold ${s.warn?'text-red-500':'text-primary'}`}>{s.value}</div>
          <div className={`text-xs mt-1 ${s.warn?'text-red-400':'text-gray-400'}`}>{s.sub}</div>
          {s.warn && <button className="mt-2 w-full bg-primary text-white text-xs font-semibold py-1.5 rounded-lg">PAY NOW</button>}
          {s.label==='Attendance' && <div className="mt-2 h-1.5 bg-gray-100 rounded-full"><div className="h-full bg-green-500 rounded-full" style={{width:'94%'}} /></div>}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-6">
      <div className="card col-span-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-primary">Recent Notices</h3>
          <button className="text-xs text-blue-600 font-semibold hover:underline">See All</button>
        </div>
        <div className="space-y-3">
          {[
            {type:'PRIORITY',typeC:'badge-danger',time:'2h ago',title:'Parent-Teacher Meeting Schedule',text:'The upcoming PTM for Grade 11 has been scheduled for Friday afternoon. Please book your slots via the academic portal by Wednesday evening.',tags:['PRIORITY','ACADEMIC']},
            {type:'ACTIVITIES',typeC:'badge-info',time:'1 day ago',title:'Annual Cultural Fest Announcement',text:'Registration for the "Spectrum 2024" cultural fest is now open. Categories include music, dance, theatre, and digital arts.',tags:['ACTIVITIES']},
            {type:'GENERAL',typeC:'badge-gray',time:'3 days ago',title:'Science Lab Maintenance Notice',text:'The Chemistry lab will be closed for routine safety inspections from Oct 28 to Oct 30.',tags:['GENERAL']},
          ].map((n,i)=>(
            <div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {n.tags.map(t=><span key={t} className={t==='PRIORITY'?'badge-danger':t==='ACTIVITIES'?'badge-info':'badge-gray'}>{t}</span>)}
                  <span className="text-xs text-gray-400">{n.time}</span>
                </div>
              </div>
              <div className="font-semibold text-sm text-primary">{n.title}</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{n.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-3">Quick Links</h3>
          {[['📚','E-Library Access'],['📅','Class Timetable'],['📝','Previous Exams']].map(([i,l])=>(
            <div key={l} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0 cursor-pointer hover:text-primary transition-colors">
              <div className="flex items-center gap-2 text-sm"><span>{i}</span>{l}</div>
              <span className="text-gray-300">›</span>
            </div>
          ))}
        </div>
        <div className="card bg-primary text-white">
          <div className="text-xs text-blue-200 mb-1">Upcoming Event</div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-accent rounded-lg p-2 text-center"><div className="text-xs font-bold text-white">OCT</div><div className="font-display text-xl font-bold text-white">29</div></div>
            <div><div className="font-semibold">Inter-School Science Fair</div><div className="text-xs text-blue-200">Main Auditorium, 9:00 AM</div></div>
          </div>
          <div className="text-xs text-blue-200 italic mb-3">Don't forget to bring your project posters and student ID.</div>
          <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm">SET REMINDER</button>
        </div>
      </div>
    </div>
  </div>
);

// --- Student Attendance ---
const attLogs = [
  {date:'Oct 19, 2023',subject:'Mathematics',status:'Present',remark:'On Time'},
  {date:'Oct 18, 2023',subject:'Applied Science',status:'Present',remark:'On Time'},
  {date:'Oct 17, 2023',subject:'History of Arts',status:'Present',remark:'On Time'},
  {date:'Oct 16, 2023',subject:'Advanced English',status:'Present',remark:'On Time'},
  {date:'Oct 11, 2023',subject:'Chemistry Lab',status:'Late',remark:'Traffic Delay'},
  {date:'Oct 05, 2023',subject:'Mathematics',status:'Absent',remark:'Medical Leave'},
];

export const StudentAttendance = () => (
  <div>
    <Topbar title="Student Attendance View" subtitle="Overview of your academic presence for October 2023"
      actions={<select className="input w-32 text-xs"><option>Oct 2023</option><option>Sep 2023</option></select>} />
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[{l:'Present',v:'18',s:'/ 21 Days',c:'text-green-600',icon:'✅'},{l:'Absent',v:'02',s:'Days',c:'text-red-500',icon:'❌'},{l:'Late Arrivals',v:'01',s:'Time',c:'text-yellow-600',icon:'⏰'}].map(s=>(
        <div key={s.l} className="stat-card flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gray-50`}>{s.icon}</div>
          <div><div className={`font-display text-3xl font-bold ${s.c}`}>{s.v} <span className="text-sm text-gray-400">{s.s}</span></div><div className="text-xs text-gray-500">{s.l}</div></div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-primary flex items-center gap-2">📅 Attendance Calendar</h3>
          <div className="flex gap-1"><button className="text-gray-400 hover:text-gray-600">‹</button><button className="text-gray-400 hover:text-gray-600">›</button></div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=><div key={d} className="text-xs font-semibold text-gray-400">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {[null,null,null,null,null,null,null,'24','25','26','27','28','29','30','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'].map((d,i)=>(
            <div key={i} className={`w-8 h-8 flex items-center justify-center text-xs rounded-full mx-auto
              ${!d?'':d==='19'?'bg-primary text-white font-bold':
              ['2','3','4','6','8','9','10','12','13','14','16','17','18'].includes(String(d))?'bg-green-500 text-white':
              ['5'].includes(String(d))?'bg-red-400 text-white':
              d==='11'?'bg-yellow-400 text-white':'text-gray-600 hover:bg-gray-100 cursor-pointer'}`}>
              {d||''}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4 text-xs">
          {[['bg-green-500','Present'],['bg-red-400','Absent'],['bg-yellow-400','Late'],['bg-primary','Today']].map(([c,l])=>(
            <div key={l} className="flex items-center gap-1.5"><div className={`w-3 h-3 rounded-full ${c}`} />{l}</div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-primary">Recent Attendance Logs</h3>
          <button className="text-xs text-blue-600 font-semibold">View All</button>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">{['Date','Subject','Status','Remarks'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {attLogs.map((l,i)=>(
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td text-xs text-gray-500">{l.date}</td>
                <td className="table-td text-sm">{l.subject}</td>
                <td className="table-td"><span className={l.status==='Present'?'badge-success':l.status==='Late'?'badge-warning':'badge-danger'}>{l.status}</span></td>
                <td className="table-td text-xs text-gray-400">{l.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-xs text-gray-400 mt-2">Total records found: 19 results in October</div>
      </div>
    </div>
  </div>
);

// --- Student Results ---
const subjects = [
  {subject:'Mathematics IV',teacher:'Dr. Sarah Thompson',internal:28,exam:65,total:93,grade:'A+',status:'Pass'},
  {subject:'Advanced Physics',teacher:'Prof. Michael Chen',internal:26,exam:62,total:88,grade:'A',status:'Pass'},
  {subject:'World Literature',teacher:'Mrs. Elena Rodriguez',internal:29,exam:52,total:81,grade:'B+',status:'Pass'},
  {subject:'Computer Science II',teacher:'Mr. David Park',internal:27,exam:68,total:95,grade:'A+',status:'Pass'},
  {subject:'Modern History',teacher:'Dr. Angela Smith',internal:24,exam:48,total:72,grade:'B',status:'Pass'},
];

export const StudentResults = () => (
  <div>
    <Topbar title="Academic Performance" subtitle="Academic Records › Final Results"
      actions={
        <div className="flex gap-2">
          <select className="input w-44 text-xs"><option>2023-24 Academic Year</option></select>
          <button className="btn-primary text-xs">↓ Download Report PDF</button>
        </div>
      }
    />
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[
        {l:'Semester GPA',v:'3.85',sub:'+0.12 | Target: 4.00',c:'text-primary'},
        {l:'Cumulative GPA',v:'3.72',sub:'+0.05 | Class Avg: 3.40',c:'text-blue-600'},
        {l:'Class Rank',v:'5th / 40',sub:'Top 12.5% of cohort',c:'text-green-600'},
        {l:'Attendance',v:'96.4%',sub:'Correlation: High (0.85)',c:'text-purple-600'},
      ].map(s=>(
        <div key={s.l} className="stat-card">
          <div className="text-xs text-gray-500 mb-1">{s.l}</div>
          <div className={`font-display text-2xl font-bold ${s.c}`}>{s.v}</div>
          <div className="text-xs text-green-500 font-medium mt-0.5">{s.sub}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="card col-span-2">
        <h3 className="font-display font-semibold text-primary mb-4">Detailed Subject Breakdown</h3>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">{['Subject','Internal (30)','Exam (70)','Total (100)','Grade','Status','Action'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {subjects.map((s,i)=>(
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td"><div className="font-semibold text-sm text-primary">{s.subject}</div><div className="text-xs text-gray-400">{s.teacher}</div></td>
                <td className="table-td text-sm text-center">{s.internal}</td>
                <td className="table-td text-sm text-center">{s.exam}</td>
                <td className="table-td text-sm font-bold text-center">{s.total}</td>
                <td className="table-td"><span className={`font-bold text-sm ${s.grade==='A+'?'text-green-600':'text-blue-600'}`}>{s.grade}</span></td>
                <td className="table-td"><span className="badge-success">{s.status}</span></td>
                <td className="table-td"><button className="text-xs text-blue-600 font-medium hover:underline">View Remarks</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="font-semibold text-primary">Semester Aggregate: 134/150 | 295/350 | 429/500</div>
          <div className="font-bold text-green-600">OVERALL GRADE: A (Excellent)</div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-3">Subject Distribution</h3>
          {[['STEM Subjects','42%','bg-blue-500'],['Humanities','35%','bg-purple-500'],['Languages','15%','bg-green-500'],['Electives','8%','bg-yellow-400']].map(([l,p,c])=>(
            <div key={l} className="mb-2">
              <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">{l}</span><span className="font-medium">{p}</span></div>
              <div className="h-2 bg-gray-100 rounded-full"><div className={`h-full ${c} rounded-full`} style={{width:p}} /></div>
            </div>
          ))}
        </div>
        <div className="card bg-primary/5 border border-primary/10">
          <h3 className="font-display font-semibold text-primary mb-2">📋 Principal's Remarks</h3>
          <blockquote className="text-sm text-gray-600 italic leading-relaxed border-l-2 border-accent pl-3">"James has shown exceptional dedication to his studies this semester, particularly in the analytical subjects. The contribution to the computer science lab projects was noteworthy."</blockquote>
          <div className="text-xs text-gray-400 mt-2">— DR. ROBERT VANCE, PRINCIPAL</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Student Fees ---
const pendingFees = [
  {desc:'Term 2 Tuition Fees',sub:'Academic Year 2023-24',due:'Oct 15, 2023',amount:'₹2,000.00',status:'Pending'},
  {desc:'Monthly Transport Fee',sub:'September Service',due:'Sep 30, 2023',amount:'₹300.00',status:'Overdue'},
  {desc:'Library Resources',sub:'Annual Access Fee',due:'Nov 01, 2023',amount:'₹150.00',status:'Upcoming'},
];

export const StudentFees = () => (
  <div>
    <Topbar title="Fees & Payments" subtitle="Review your financial standing and manage school dues."
      actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">🖨 Print Full Statement</button>
          <button className="btn-primary text-xs">💳 Pay Now</button>
        </div>
      }
    />
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[
        {l:'Total Outstanding',v:'₹2,450.00',sub:'+5% vs last term | Due in 12 days',c:'text-red-500'},
        {l:'Last Payment',v:'₹1,200.00',sub:'Paid on Sep 14, 2023',c:'text-green-600'},
        {l:'Next Due Date',v:'Oct 15, 2023',sub:'TERM 1 PROGRESS',c:'text-primary'},
      ].map(s=>(
        <div key={s.l} className="stat-card">
          <div className="text-xs text-gray-500 mb-1">{s.l}</div>
          <div className={`font-display text-xl font-bold ${s.c}`}>{s.v}</div>
          <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-6">
      <div className="card col-span-2">
        <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">💳 Pending Fees</h3>
        <table className="w-full mb-6">
          <thead><tr className="border-b border-gray-100">{['Fee Description','Due Date','Amount','Status','Action'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {pendingFees.map((f,i)=>(
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td"><div className="font-semibold text-sm">{f.desc}</div><div className="text-xs text-gray-400">{f.sub}</div></td>
                <td className={`table-td text-sm font-medium ${f.status==='Overdue'?'text-red-500':''}`}>{f.due}</td>
                <td className="table-td font-bold">{f.amount}</td>
                <td className="table-td"><span className={f.status==='Pending'?'badge-warning':f.status==='Overdue'?'badge-danger':'badge-info'}>{f.status}</span></td>
                <td className="table-td"><button className="text-xs font-semibold text-blue-600 hover:underline">{f.status==='Upcoming'?'Prepay':'Pay Now'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className="font-display font-semibold text-primary mb-3 flex items-center gap-2">🕐 Payment History</h3>
        <div className="flex items-center gap-2 mb-3">
          <input placeholder="Search transactions..." className="input flex-1 text-xs" />
        </div>
        {[{date:'Sep 14, 2023',id:'#TRX-6829416',amount:'₹1,200.00',method:'Visa ending in 4242'},
          {date:'Aug 05, 2023',id:'#TRX-8711822',amount:'₹850.00',method:'Bank Transfer'}].map((p,i)=>(
          <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
            <div><div className="text-sm font-medium">{p.date}</div><div className="text-xs text-gray-400">{p.id} · {p.method}</div></div>
            <div className="flex items-center gap-3"><span className="font-bold text-primary">{p.amount}</span><button className="text-gray-300 hover:text-gray-500">↓</button></div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-3">Fee Distribution</h3>
          {[['Tuition Fees','₹2,000.00','bg-primary',80],
            ['Transport','₹300.00','bg-blue-400',12],
            ['Library & Resources','₹150.00','bg-accent',6]].map(([l,v,c,w])=>(
            <div key={l} className="mb-3">
              <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">{l}</span><span className="font-bold text-primary">{v}</span></div>
              <div className="h-2 bg-gray-100 rounded-full"><div className={`h-full ${c} rounded-full`} style={{width:`${w}%`}} /></div>
            </div>
          ))}
        </div>
        <div className="card bg-primary text-white">
          <h3 className="font-semibold mb-3 flex items-center gap-2">💬 Need Assistance?</h3>
          <p className="text-xs text-blue-200 mb-3">If you have questions about your fee structure or need to request a payment plan, our finance department is here to help.</p>
          {[['📧','finance@school.edu'],['📞','+1 (555) 0123-4567']].map(([i,v])=>(
            <div key={v} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 mb-2 text-sm">{i} {v}</div>
          ))}
        </div>
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-3">Upcoming Deadlines</h3>
          {[{date:'OCT 15',label:'Term 2 Tuition',sub:'Major Payment'},{date:'NOV 01',label:'Lab Accessories Fee',sub:'Science Stream'}].map((d,i)=>(
            <div key={i} className="flex items-center gap-3 mb-3">
              <div className={`${i===0?'bg-red-100 text-red-600':'bg-yellow-100 text-yellow-700'} rounded-lg p-2 text-center w-12`}>
                <div className="text-xs font-bold">{d.date.split(' ')[0]}</div>
                <div className="font-display font-bold">{d.date.split(' ')[1]}</div>
              </div>
              <div><div className="font-semibold text-sm">{d.label}</div><div className="text-xs text-gray-400">{d.sub}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- Student Profile ---
export const StudentProfile = () => (
  <div>
    <Topbar title="My Profile" actions={<button className="btn-primary text-xs">💾 Save Changes</button>} />
    <div className="grid grid-cols-3 gap-6">
      <div className="card col-span-2">
        <div className="flex items-center gap-5 mb-6 pb-6 border-b border-gray-100">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl">👤</div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs cursor-pointer">✏️</div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Bhavesh Jangid</h2>
            <div className="flex gap-3 mt-1 text-xs text-gray-500">
              <span>🎓 STU-2023-0891</span>
              <span>📚 Grade 10-B</span>
              <span>📅 AY 2023-24</span>
            </div>
          </div>
        </div>
        <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">👤 Personal Information</h3>
        <div className="grid grid-cols-2 gap-4">
          {[['Full Name','Bhavesh Jangid '],['Date of Birth','September 09, 2004'],['Gender','Male'],['Blood Group','B Positive'],['Enrollment Date','August 20, 2021'],['Email Address','bhaveshjangid309@gmail.com']].map(([l,v])=>(
            <div key={l}><div className="text-xs font-semibold text-gray-400 uppercase mb-0.5">{l}</div><div className="text-sm font-medium text-primary">{v}</div></div>
          ))}
        </div>
        <h3 className="font-display font-semibold text-primary mt-6 mb-4 flex items-center gap-2">👪 Guardian Information</h3>
        <div className="grid grid-cols-2 gap-4">
          {[['Primary Guardian','Lokesh Jnagid'],['Relationship','Father'],['Phone Number','+91 9462056233'],['Occupation','Businessman']].map(([l,v])=>(
            <div key={l}><div className="text-xs font-semibold text-gray-400 uppercase mb-0.5">{l}</div><div className="text-sm font-medium text-primary">{v}</div></div>
          ))}
          <div className="col-span-2"><div className="text-xs font-semibold text-gray-400 uppercase mb-0.5">Residential Address</div><div className="text-sm text-primary">Kalyan Nagar Road no 3 vishkerma industrial area ,Murlipura,jaipur Rajasthan 302010</div></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">⚙️ Account Settings</h3>
          <div className="mb-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Security</h4>
            <div className="space-y-2">
              <div><label className="block text-xs text-gray-500 mb-1">Old Password</label><input type="password" defaultValue="••••••••" className="input" /></div>
              <div><label className="block text-xs text-gray-500 mb-1">New Password</label><input type="password" placeholder="Min. 8 characters" className="input" /></div>
              <button className="w-full border border-primary/20 text-primary font-medium py-2 rounded-lg text-sm hover:bg-primary/5 transition-all">Update Password</button>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Preferences</h4>
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div><div className="text-sm font-medium">Email Notifications</div><div className="text-xs text-gray-400">Weekly progress reports</div></div>
              <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer"><span className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" /></div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div><div className="text-sm font-medium">SMS Alerts</div><div className="text-xs text-gray-400">Urgent campus notices</div></div>
              <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer"><span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full" /></div>
            </div>
          </div>
        </div>
        <div className="card bg-green-50 border border-green-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <div><div className="font-semibold text-green-700">Profile Verified</div><div className="text-xs text-green-500">Verified on Jan 12, 2024</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Student Notices ---
const notices = [
  {tag:'URGENT',tagC:'badge-danger',title:'Emergency: School Closure Due to Weather Conditions',text:"Due to forecasted heavy snowfall and hazardous road conditions, the school will remain closed tomorrow, Tuesday, Dec 12th. All physical classes are suspended. Online synchronous learning will proceed as per the Monday schedule starting at 9:00 AM.",time:'2 hours ago • Admin Office'},
  {tag:'EVENT',tagC:'badge-info',title:'Annual Inter-School Science & Innovation Fair',text:"Prepare your prototypes! This year's fair focuses on Sustainable Technology. Open to grades 8-12....",time:'1 day ago • Science Dept.'},
  {tag:'HOLIDAY',tagC:'badge-success',title:'Spring Break Schedule & Campus Access',text:'The school will be closed for Spring Break from March 25th to March 27th. The administrative office will be operational on a reduced schedule (10 AM - 2 PM) during this period.',time:'3 days ago • Management'},
];

export const StudentNotices = () => {
  const [active, setActive] = useState('All Notices');
  return (
    <div>
      <Topbar title="Notices & Announcements" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            {['All Notices','Urgent','Events'].map(t=>(
              <button key={t} onClick={()=>setActive(t)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${active===t?'bg-primary text-white':'text-gray-500 hover:bg-gray-100'}`}>{t}</button>
            ))}
          </div>
          {notices.map((n,i)=>(
            <div key={i} className={`card ${i===0?'border-l-4 border-red-400':''}`}>
              <div className="flex items-center gap-2 mb-2"><span className={n.tagC}>{n.tag}</span><span className="text-xs text-gray-400">{n.time}</span></div>
              <h3 className="font-display font-bold text-primary mb-1">{n.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{n.text}</p>
              {i===1&&<div className="flex gap-2 mt-3"><button className="btn-primary text-xs py-1.5">Add to Calendar</button><button className="btn-outline text-xs py-1.5">View Flyer</button></div>}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-display font-semibold text-primary mb-3">Notice Insights</h3>
            <div className="text-xs text-gray-500 mb-1">UNREAD PRIORITY</div>
            <div className="font-display text-3xl font-bold text-red-500 mb-3">03</div>
            <div className="text-xs text-gray-500 mb-2">NEXT 7 DAYS</div>
            {[{date:'DEC 15',title:'Science Fair',sub:'10:30 AM • Main Hall'},{date:'DEC 18',title:'PTM Meeting',sub:'03:00 PM • Online'}].map(e=>(
              <div key={e.title} className="flex gap-3 mb-2 p-2 bg-gray-50 rounded-xl">
                <div className="bg-primary text-white rounded-lg p-1.5 text-center min-w-[42px]"><div className="text-xs">{e.date.split(' ')[0]}</div><div className="font-bold text-sm">{e.date.split(' ')[1]}</div></div>
                <div><div className="font-semibold text-sm">{e.title}</div><div className="text-xs text-gray-400">{e.sub}</div></div>
              </div>
            ))}
          </div>
          <div className="card bg-primary text-white">
            <h3 className="font-semibold mb-2">💬 Support</h3>
            <p className="text-xs text-blue-200 mb-3">Have questions about a specific notice?</p>
            <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm">Contact Help Desk</button>
          </div>
        </div>
      </div>
    </div>
  );
};
