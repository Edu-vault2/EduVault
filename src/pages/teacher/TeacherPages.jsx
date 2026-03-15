import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';

const teacherLinks = [
  { icon: '📊', label: 'Dashboard', path: '/teacher/dashboard' },
  { icon: '🏫', label: 'My Classes', path: '/teacher/classes' },
  { icon: '👨‍🎓', label: 'Students', path: '/teacher/students' },
  { icon: '📋', label: 'Attendance', path: '/teacher/attendance' },
  { icon: '✏️', label: 'Marks Entry', path: '/teacher/marks' },
  { icon: '📝', label: 'Homework', path: '/teacher/homework' },
  { icon: '💬', label: 'Remarks', path: '/teacher/remarks' },
  { icon: '👤', label: 'Profile', path: '/teacher/profile' },
];

export const TeacherLayout = () => (
  <div className="flex">
    <Sidebar links={teacherLinks} role="teacher" />
    <main className="main-content flex-1"><Outlet /></main>
  </div>
);

// --- Teacher Dashboard ---
export const TeacherDashboard = () => {
  return (
    <div>
      <Topbar title="Teacher Dashboard" subtitle="Academic Year 2023-24" />
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          {label:'My Classes Today',value:'4',sub:'Next: Biology Gr.10 at 11AM',icon:'🏫'},
          {label:'Total Students',value:'156',sub:'Across 6 class sections',icon:'👥'},
          {label:'Pending Homework Reviews',value:'5',sub:'Needs attention today',icon:'📋',warn:true},
        ].map(s=>(
          <div key={s.label} className="stat-card flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${s.warn?'bg-yellow-100':'bg-primary/10'}`}>{s.icon}</div>
            <div><div className="font-display text-2xl font-bold text-primary">{s.value}</div><div className="text-xs text-gray-500">{s.label}</div><div className={`text-xs font-medium ${s.warn?'text-yellow-500':'text-blue-500'}`}>{s.sub}</div></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {[
              {time:'09:00',subject:'Advanced Calculus',class:'12th Grade, Mon/Wed/Fri',room:'Rm 402',students:28},
              {time:'11:00',subject:'Linear Algebra',class:'11th Grade, Tue/Thu',room:'Rm 301',students:32},
              {time:'14:00',subject:'Statistics II',class:'11th Grade, Mon/Wed',room:'Rm 301',students:24},
            ].map(s=>(
              <div key={s.time} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1.5 rounded-lg whitespace-nowrap">{s.time}</div>
                <div className="flex-1"><div className="font-semibold text-sm text-primary">{s.subject}</div><div className="text-xs text-gray-400">{s.class} · {s.room}</div></div>
                <div className="text-xs text-gray-400">👥 {s.students}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[{icon:'📋',label:'Mark Attendance',path:'/teacher/attendance'},{icon:'✏️',label:'Enter Marks',path:'/teacher/marks'},{icon:'📝',label:'Create Homework',path:'/teacher/homework'},{icon:'💬',label:'Add Remark',path:'/teacher/remarks'}].map(a=>(
              <a key={a.label} href={a.path} className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-primary/5 rounded-xl transition-all text-center group">
                <span className="text-2xl">{a.icon}</span>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-primary">{a.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Attendance Page ---
const attendanceStudents = [
  {id:'BIO-2023-054',name:'Alex Thompson',status:'Present'},
  {id:'BIO-2023-042',name:'Chloe Richards',status:'Late',remark:'10 min late - transport'},
  {id:'BIO-2023-089',name:'Daniel Varma',status:'Present'},
  {id:'BIO-2023-102',name:'Elena Gilbert',status:'Absent',remark:'Parent notified - sick leave'},
];

export const Attendance = () => {
  const [students, setStudents] = useState(attendanceStudents);
  const [submitted, setSubmitted] = useState(false);

  const setStatus = (id, status) => {
    setStudents(s => s.map(st => st.id === id ? {...st, status} : st));
  };

  const present = students.filter(s => s.status === 'Present').length;
  const absent = students.filter(s => s.status === 'Absent').length;
  const late = students.filter(s => s.status === 'Late').length;

  return (
    <div>
      <Topbar title="Mark Attendance" />
      {submitted && <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-4 text-sm text-green-700">✅ Attendance submitted successfully!</div>}
      <div className="card">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Class</label>
            <select className="input"><option>Grade 10 - Biology (Period 3)</option></select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Date</label>
            <input type="date" defaultValue="2023-10-24" className="input" />
          </div>
          <div className="pt-5">
            <button className="btn-primary text-xs">✓ Mark All Present</button>
          </div>
        </div>
        <div className="relative">
          <input placeholder="Search student..." className="input pl-9 mb-4" />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">{['Student Name','Student ID','Attendance Status','Remarks'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {students.map(s=>(
              <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td">
                  <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs">{s.name[0]}</div><span className="font-medium text-sm">{s.name}</span></div>
                </td>
                <td className="table-td text-xs text-gray-500">{s.id}</td>
                <td className="table-td">
                  <div className="flex gap-2">
                    {['Present','Late','Absent'].map(st=>(
                      <button key={st} onClick={() => setStatus(s.id, st)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border-2 ${s.status===st?(st==='Present'?'bg-green-500 text-white border-green-500':st==='Late'?'bg-yellow-500 text-white border-yellow-500':'bg-red-500 text-white border-red-500'):'border-gray-200 text-gray-400 hover:border-gray-300'}`}>{st}</button>
                    ))}
                  </div>
                </td>
                <td className="table-td">
                  <input defaultValue={s.remark||''} placeholder="Add note..." className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 w-full focus:outline-none focus:ring-1 focus:ring-primary/30" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div className="flex gap-4 text-sm">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500" />Present: {present}</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" />Absent: {absent}</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />Late: {late}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn-outline text-sm">Save Draft</button>
            <button onClick={() => setSubmitted(true)} className="btn-primary text-sm">▶ Submit Attendance</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Marks Entry Page ---
const marksStudents = [
  {id:'202401',name:'Abraham Wilson',max:100,marks:88,grade:'A',remark:''},
  {id:'202402',name:'Beatrix Potter',max:100,marks:94,grade:'A+',remark:'Excellent performance'},
  {id:'202403',name:'Charlie Davids',max:100,marks:105,grade:'',remark:'Check validity',error:true},
  {id:'202404',name:'Diana Prince',max:100,marks:null,grade:'',remark:''},
  {id:'202405',name:'Edward Norton',max:100,marks:65,grade:'B',remark:'Needs improvement'},
];

export const MarksEntry = () => {
  const [students, setStudents] = useState(marksStudents);
  const entered = students.filter(s => s.marks !== null).length;
  const avg = Math.round(students.filter(s => s.marks && !s.error).reduce((sum,s)=>sum+(s.marks||0),0)/students.filter(s=>s.marks&&!s.error).length);

  return (
    <div>
      <Topbar title="Student Marks Entry" subtitle="Academic Session 2023-24 • Mid-term Assessment"
        actions={
          <div className="flex gap-2">
            <button className="btn-outline text-xs">↓ Export CSV</button>
            <button className="btn-primary text-xs">▶ Submit to Admin</button>
          </div>
        }
      />
      <div className="card">
        <div className="flex items-center gap-4 mb-5">
          <select className="input w-48"><option>Grade 10 - Section A</option></select>
          <select className="input w-40"><option>Mathematics</option><option>Physics</option></select>
          <select className="input w-48"><option>Mid-term Examination</option></select>
          <button className="btn-primary text-xs">Apply Filter</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-5">
          {[{l:'Total Students',v:'45',icon:'👥'},{l:'Marks Entered',v:`${entered} / ${students.length}`,icon:'✅'},{l:'Class Average',v:`${avg}%`,icon:'📊'}].map(s=>(
            <div key={s.l} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div><div className="font-display text-xl font-bold text-primary">{s.v}</div><div className="text-xs text-gray-400">{s.l}</div></div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs text-green-600"><span>🔄 Auto-save enabled</span><span className="text-gray-400">• Last saved 2 mins ago</span></div>
          <input placeholder="Search student..." className="input w-48 text-xs" />
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">{['Student ID','Student Name','Max Marks','Marks Obtained','Grade','Remarks'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {students.map(s=>(
              <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td text-xs text-gray-500">#{s.id}</td>
                <td className="table-td">
                  <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{s.name[0]}</div><span className="font-medium text-sm">{s.name}</span></div>
                </td>
                <td className="table-td text-sm text-gray-500">{s.max}</td>
                <td className="table-td">
                  <input type="number" defaultValue={s.marks||''} placeholder="Enter" className={`w-20 border rounded-lg px-2 py-1.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30 ${s.error?'border-red-400 bg-red-50 text-red-600':'border-gray-200'}`} />
                  {s.error && <div className="text-xs text-red-500 mt-0.5">Exceeds Max</div>}
                </td>
                <td className="table-td"><span className={`font-bold text-sm ${s.grade==='A+'?'text-green-600':s.grade==='A'?'text-blue-600':s.grade==='B'?'text-yellow-600':'text-gray-400'}`}>{s.grade||'–'}</span></td>
                <td className="table-td"><input defaultValue={s.remark} placeholder="Add remark..." className="text-xs border border-gray-200 rounded-lg px-2 py-1.5 w-full focus:outline-none" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400">
          <span>Showing 5 of 45 students</span>
          <div className="flex gap-2">
            <button className="btn-outline text-xs py-1.5">Previous</button>
            <button className="btn-primary text-xs py-1.5">Next</button>
          </div>
        </div>
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex gap-3"><button className="btn-outline text-sm">🖨 Print Report</button><button className="btn-outline text-sm">🕐 Entry History</button></div>
          <div className="flex items-center gap-3"><span className="text-xs text-gray-400">Draft saved to cloud storage</span><button className="btn-primary">💾 Save Progress</button></div>
        </div>
      </div>
    </div>
  );
};

// --- Homework Page ---
const homeworks = [
  {title:'Introduction to Thermodynamics',class:'Physics 101 · Grade A',due:'Oct 24, 2023',submissions:'16/35',pct:72,status:'Active'},
  {title:'Shakespearean Sonnet Analysis',class:'English Literature · Year 2',due:'Oct 20, 2023',submissions:'30/30',pct:100,status:'Pending Review'},
  {title:'Quadratic Equations Quiz',class:'Mathematics · 10th Grade',due:'Oct 15, 2023',submissions:'25/25',pct:100,status:'Completed'},
  {title:'Evolutionary Biology Essay',class:'Science · AP Biology',due:'Oct 28, 2023',submissions:'5/22',pct:22,status:'Active'},
];

export const Homework = () => {
  const [showNew, setShowNew] = useState(false);
  return (
    <div>
      <Topbar title="Assigned Homework" subtitle="Dashboard › Homework"
        actions={<button onClick={() => setShowNew(true)} className="btn-primary">+ Create New Homework</button>} />
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[{l:'Active Assignments',v:'12',sub:'+2% this week',icon:'📋'},{l:'Pending Review',v:'05',sub:'Needs attention',icon:'⚠️',warn:true},{l:'Completed',v:'28',sub:'+5% this month',icon:'✅'}].map(s=>(
          <div key={s.l} className="stat-card flex items-center gap-3">
            <span className="text-2xl">{s.icon}</span>
            <div><div className="font-display text-2xl font-bold text-primary">{s.v}</div><div className="text-xs text-gray-500">{s.l}</div><div className={`text-xs font-medium ${s.warn?'text-yellow-500':'text-blue-500'}`}>{s.sub}</div></div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="flex gap-3 mb-4">
          {['All Homework','Active','Pending Review','Completed','Drafts'].map((t,i)=>(
            <button key={t} className={`text-sm font-medium pb-2 border-b-2 transition-all ${i===0?'border-primary text-primary':'-mb-px border-transparent text-gray-400'}`}>{t}</button>
          ))}
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">{['Assignment & Class','Due Date','Submissions','Status','Actions'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {homeworks.map((h,i)=>(
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td"><div className="font-semibold text-sm text-primary">{h.title}</div><div className="text-xs text-gray-400">{h.class}</div></td>
                <td className="table-td text-sm text-gray-500">📅 {h.due}</td>
                <td className="table-td">
                  <div className="text-xs font-medium mb-1">{h.submissions} · {h.pct}%</div>
                  <div className="h-1.5 bg-gray-100 rounded-full w-24"><div className={`h-full rounded-full ${h.pct===100?'bg-green-500':h.pct>=70?'bg-blue-500':'bg-yellow-400'}`} style={{width:`${h.pct}%`}} /></div>
                </td>
                <td className="table-td"><span className={h.status==='Active'?'badge-info':h.status==='Pending Review'?'badge-warning':'badge-success'}>{h.status}</span></td>
                <td className="table-td">
                  {h.status==='Pending Review'
                    ? <button className="btn-accent text-xs py-1.5 px-3">Review Now</button>
                    : <button className="text-gray-400 hover:text-gray-600 text-sm">⋮</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            <div className="p-6 border-b border-gray-100"><h3 className="font-display font-bold text-primary text-xl">Create New Homework</h3></div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Title</label><input placeholder="Assignment title" className="input" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Class</label><select className="input"><option>Grade 10 - Section A</option><option>Grade 11 - Section B</option></select></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Due Date</label><input type="date" className="input" /></div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Instructions</label><textarea placeholder="Add homework instructions..." className="input h-24 resize-none" /></div>
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={() => setShowNew(false)} className="btn-outline">Cancel</button>
              <button onClick={() => setShowNew(false)} className="btn-primary">+ Create Assignment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Remarks Page ---
const remarks = [
  {name:'John Smith',grade:'Grade 9-A • Mathematics',text:'Missed the last two homework assignments. Did not participate in today\'s quadratic equation review. Needs immediate follow-up before the mid-term assessment.',tag:'URGENT',tagColor:'badge-danger',time:'14 mins ago'},
  {name:'Jane Doe',grade:'Grade 10-B • Computer Science',text:'Jane showed great leadership during the group project today. She assisted peers with the complex algorithm logic and stayed late to ensure the team documentation was complete.',tag:'POSITIVE',tagColor:'badge-success',time:'2 hours ago'},
  {name:'Alex Rivera',grade:'Grade 10-B • World History',text:'Completed the extra credit essay on the French Revolution. Followed all citation guidelines. Standard progress maintained.',tag:'NEUTRAL',tagColor:'badge-gray',time:'4 hours ago'},
  {name:'Emma Wilson',grade:'Grade 9-A • English Literature',text:"Exceptional analysis during the Socratic seminar. Emma's ability to draw parallels between contemporary issues and the classic text was impressive.",tag:'POSITIVE',tagColor:'badge-success',time:'Yesterday'},
];

export const Remarks = () => {
  const [showNew, setShowNew] = useState(false);
  const [tag, setTag] = useState('All Remarks');
  return (
    <div>
      <Topbar title="Student Remarks Feed" subtitle="12 Total Remarks Today" actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">Filter Feed</button>
          <button className="btn-primary text-xs">Bulk Action</button>
        </div>
      } />
      <div className="card mb-4">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-display font-semibold text-primary">Recent Activity</h3>
          <p className="text-xs text-gray-400">Chronological overview of feedback across all your assigned classes.</p>
        </div>
        <div className="flex gap-2 mt-3 mb-4">
          {['All Remarks','Urgent (2)','Positive (4)','Neutral (2)'].map(t=>(
            <button key={t} onClick={() => setTag(t)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${tag===t?'bg-primary text-white':'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>{t}</button>
          ))}
          <select className="ml-auto input w-32 text-xs"><option>Grade 10-B</option></select>
        </div>
        <div className="space-y-3">
          {remarks.map((r,i)=>(
            <div key={i} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">{r.name[0]}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div><span className="font-semibold text-sm text-primary">{r.name}</span><span className="text-xs text-gray-400 ml-2">{r.grade}</span></div>
                    <span className="text-xs text-gray-400">{r.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                  <div className="mt-2"><span className={r.tagColor}>● {r.tag}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setShowNew(true)} className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:bg-primary-light transition-all">+</button>

      {showNew && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-gray-100"><h3 className="font-display font-bold text-primary text-xl">Add New Remark</h3></div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Student</label><select className="input"><option>Select student...</option><option>John Smith</option><option>Jane Doe</option></select></div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-2">Remark Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {['URGENT','POSITIVE','NEUTRAL'].map(t=>(
                    <button key={t} className={`py-2 rounded-lg text-xs font-bold border-2 transition-all ${t==='URGENT'?'border-red-300 text-red-600 bg-red-50':t==='POSITIVE'?'border-green-300 text-green-600 bg-green-50':'border-gray-200 text-gray-500'}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Remark</label><textarea placeholder="Write your remark here..." className="input h-28 resize-none" /></div>
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={() => setShowNew(false)} className="btn-outline">Cancel</button>
              <button onClick={() => setShowNew(false)} className="btn-primary">Save Remark</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Teacher Profile ---
export const TeacherProfile = () => (
  <div>
    <Topbar title="My Profile" />
    <div className="card">
      <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-3xl font-bold text-accent">SJ</div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Dr. Sarah Jenkins</h2>
            <p className="text-accent font-medium text-sm">Senior Mathematics Faculty</p>
            <div className="flex gap-3 mt-2 text-xs text-gray-500">
              <span>🏢 EDU-84823</span>
              <span>📚 Mathematics Dept.</span>
              <span>📅 Joined Aug 2015</span>
            </div>
          </div>
        </div>
        <button className="btn-outline text-sm">✏️ Edit Profile</button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-display font-semibold text-primary mb-4">Personal Information</h3>
          <div className="space-y-3">
            {[['Full Name','Sarah Elizabeth Jenkins'],['Email Address','s.jenkins@academy.edu'],['Phone Number','+1 (555) 012-3456'],['Office Location','Building B, Room 402'],['Date of Birth','May 14, 1982'],['Status','● Active Faculty']].map(([l,v])=>(
              <div key={l} className="flex justify-between py-2 border-b border-gray-50">
                <span className="text-xs font-semibold text-gray-400 uppercase">{l}</span>
                <span className={`text-sm font-medium ${v.startsWith('●')?'text-green-600':''}`}>{v}</span>
              </div>
            ))}
          </div>
          <h3 className="font-display font-semibold text-primary mt-6 mb-4">Qualifications</h3>
          {[['PhD in Mathematics','Stanford University, 2012'],['M.Sc. Theoretical Math','MIT, 2008'],['National Board Certification','Advanced Teaching License, 2018']].map(([d,u])=>(
            <div key={d} className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm">🎓</div>
              <div><div className="font-semibold text-sm text-primary">{d}</div><div className="text-xs text-gray-400">{u}</div></div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-display font-semibold text-primary mb-4">Assigned Classes (Current Semester)</h3>
          {[['Advanced Calculus','12th Grade','Mon, Wed, Fri 09:00 - 10:30',28],['Linear Algebra','11th Grade','Tue, Thu 11:00 - 12:30',32],['Statistics II','11th Grade','Mon, Wed 14:00 - 15:30',24]].map(([s,g,sch,st])=>(
            <div key={s} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-2">
              <div><div className="font-semibold text-sm text-primary">{s}</div><div className="text-xs text-gray-400">{g} · {sch}</div></div>
              <span className="text-xs text-gray-500">👥 {st}</span>
            </div>
          ))}
          <h3 className="font-display font-semibold text-primary mt-6 mb-4">Security & Account</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2"><span>🔒</span><span className="text-sm">Password</span></div>
              <button className="text-xs text-blue-600 font-medium">Change</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-2"><span>🔔</span><span className="text-sm">Push Notifications</span></div>
              <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer"><span className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
