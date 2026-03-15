import { useState } from 'react';
import Topbar from '../../components/layout/Topbar';

// --- Classes Page ---
const classesData = [
  {grade:'10',section:'Section A',level:'Secondary Education',teacher:'Ms. Sarah Jenkins',email:'jenkins.s@greenwood.edu',room:'B-204',capacity:35,enrolled:32,pct:91},
  {grade:'10',section:'Section B',level:'Secondary Education',teacher:'Mr. Michael Chen',email:'chen.m@greenwood.edu',room:'B-205',capacity:35,enrolled:35,pct:100,full:true},
  {grade:'11',section:'Section A',level:'Higher Secondary',teacher:'Dr. Elena Rodriguez',email:'rodriguez.e@greenwood.edu',room:'C-101',capacity:40,enrolled:28,pct:70},
  {grade:'12',section:'Section C',level:'Higher Secondary',teacher:null,room:'D-002',capacity:30,enrolled:15,pct:50},
];

export const Classes = () => {
  const [showNew, setShowNew] = useState(false);
  return (
    <div>
      <Topbar title="Class & Section Management" subtitle="Dashboard › Academics › Classes"
        actions={<button onClick={() => setShowNew(true)} className="btn-primary">⊕ Create New Class/Section</button>} />
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {label:'Total Classes',value:'12',sub:'+0% this year'},
          {label:'Total Sections',value:'36',sub:'+2.4% vs last term'},
          {label:'Total Capacity',value:'1,200',sub:'88% Occupancy',warn:false},
          {label:'Pending Assignments',value:'04',sub:'Action required',warn:true},
        ].map(s=>(
          <div key={s.label} className={`stat-card ${s.warn?'bg-yellow-50 border-yellow-200':''}`}>
            <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            <div className={`text-xs font-medium mt-1 ${s.warn?'text-yellow-600':'text-blue-500'}`}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative"><input placeholder="Search by class, section, or teacher name..." className="input pl-9" /><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span></div>
          <select className="input w-44"><option>Grade Level (All)</option></select>
          <select className="input w-44"><option>Occupancy Status</option></select>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">{['Class & Section','Class Teacher','Room','Occupancy','Actions'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
          <tbody>
            {classesData.map((c,i)=>(
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="table-td">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${c.grade==='12'?'bg-red-500':c.grade==='11'?'bg-yellow-500':'bg-primary'}`}>{c.grade}</div>
                    <div><div className="font-semibold text-sm text-primary">Class {c.grade} - {c.section}</div><div className="text-xs text-gray-400">{c.level}</div></div>
                  </div>
                </td>
                <td className="table-td">
                  {c.teacher ? (
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">{c.teacher[0]}</div>
                      <div><div className="text-sm font-medium">{c.teacher}</div><div className="text-xs text-gray-400">{c.email}</div></div>
                    </div>
                  ) : <span className="text-xs text-red-500 font-semibold">TEACHER UNASSIGNED</span>}
                </td>
                <td className="table-td text-sm text-gray-500">{c.room}</td>
                <td className="table-td">
                  <div className="flex items-center gap-2">
                    <div className="text-sm">{c.enrolled}/{c.capacity} Students</div>
                    {c.full && <span className="badge badge-danger text-xs">FULL</span>}
                    <span className={`text-xs font-semibold ${c.pct>=90?'text-red-500':c.pct>=70?'text-yellow-500':'text-green-500'}`}>{c.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-gray-100 rounded-full w-32">
                    <div className={`h-full rounded-full ${c.pct>=90?'bg-red-400':c.pct>=70?'bg-yellow-400':'bg-green-400'}`} style={{width:`${c.pct}%`}} />
                  </div>
                </td>
                <td className="table-td">
                  <div className="flex gap-2 items-center">
                    {!c.teacher && <button className="btn-primary text-xs py-1.5 px-3">Assign Teacher</button>}
                    <button className="text-blue-500 text-sm">✏️</button>
                    <button className="text-gray-400 text-sm">👁</button>
                    <button className="text-gray-300 text-sm">⋮</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-xs text-gray-400 mt-3">Showing 1-10 of 36 sections</div>
      </div>

      {showNew && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-6">
              <div className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-1">⊕ Setup New Academic Unit</div>
              <h3 className="font-display font-bold text-primary text-xl mb-1">Create New Class & Section</h3>
              <p className="text-gray-400 text-sm mb-5">Configure the classroom environment, assign a lead educator, and set enrollment limits.</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Grade Level</label><select className="input"><option>Select Grade (e.g., Grade 10)</option><option>Grade 8</option><option>Grade 9</option><option>Grade 10</option><option>Grade 11</option><option>Grade 12</option></select></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Section Name</label><input placeholder="Enter Section (e.g., Section A)" className="input" /></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Class Teacher Assignment</label><select className="input"><option>Search and Select Teacher</option></select></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Student Capacity</label><input type="number" placeholder="Max students (e.g., 30)" className="input" /></div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 mb-4">
                <div className="text-xs text-blue-600 font-semibold mb-0.5">ℹ Auto-Generation Note</div>
                <div className="text-xs text-blue-500">A unique Class ID will be generated automatically upon submission. Attendance and grading rosters will be initialized for the current semester.</div>
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={() => setShowNew(false)} className="btn-outline">Cancel</button>
              <button onClick={() => setShowNew(false)} className="btn-primary">⊕ Create Class</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Notices Page ---
const notices = [
  {tag:'ALL AUDIENCE',title:'Annual Science Fair 2024 - Project Submission Open',preview:'We are excited to announce that registration for this year\'s Science Fair is now officially open. All students from Grade 6 to 12 are encouraged to participate...',time:'Published 2h ago',views:452,urgent:false},
  {tag:'TEACHERS',urgent:true,title:'Emergency Faculty Meeting: Curriculum Update',preview:'All department heads are requested to attend a mandatory briefing in the main auditorium regarding the new district-wide curriculum directives. Attendance is compulsory.',time:'Published Today, 09:30 AM',sign:'32/45 Signed'},
  {tag:'PARENTS',scheduled:true,title:'Term 1 Grade Report Availability',preview:'Grade reports for Term 1 will be available for viewing on the Parent Portal starting this Friday. Parents are advised to...',time:'Scheduled: Oct 25, 09:00 AM'},
];

export const Notices = () => {
  const [showNew, setShowNew] = useState(false);
  const [target, setTarget] = useState('All');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div>
      <Topbar title="Notices & Announcements" actions={
        <button onClick={() => setShowNew(true)} className="btn-primary">+ New Notice</button>
      } />
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[{label:'Active Notices',value:'12',sub:'+2 this week',icon:'📢'},{label:'Avg. View Rate',value:'88%',sub:'+5% vs last month',icon:'👁'},{label:'Pending Drafts',value:'4',sub:'2 scheduled for tomorrow',icon:'✏️'}].map(s=>(
          <div key={s.label} className="stat-card flex items-center gap-4">
            <span className="text-3xl">{s.icon}</span>
            <div><div className="font-display text-2xl font-bold text-primary">{s.value}</div><div className="text-xs text-gray-500">{s.label}</div><div className="text-xs text-green-500 font-medium">{s.sub}</div></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            {['All','Teachers','Parents'].map(t=>(
              <button key={t} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${t===target?'bg-primary text-white':'text-gray-500 hover:bg-gray-100'}`} onClick={() => setTarget(t)}>{t}</button>
            ))}
          </div>
          {notices.map((n,i)=>(
            <div key={i} className={`card ${n.scheduled?'opacity-75':''}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {n.urgent && <span className="badge badge-danger">URGENT</span>}
                  {n.scheduled && <span className="badge badge-gray">DRAFT</span>}
                  <span className="badge badge-info">{n.tag}</span>
                  <span className="text-xs text-gray-400">{n.time}</span>
                </div>
                <button className="text-blue-500 text-xs font-medium hover:underline">Edit</button>
              </div>
              <h3 className="font-display font-bold text-primary mb-1">{n.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{n.preview}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex gap-3">{n.views && <span>👁 {n.views} Views</span>}{n.sign && <span>✍️ {n.sign}</span>}</div>
                {n.scheduled && <button className="text-blue-500 font-medium hover:underline">Preview Notice</button>}
              </div>
            </div>
          ))}
        </div>
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-4">⊕ Quick Broadcast</h3>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-semibold text-gray-600 mb-2">TARGET AUDIENCE</div>
              <div className="grid grid-cols-3 gap-2">
                {[['All','👥'],['Teachers','👩‍🏫'],['Parents','👨‍👩‍👧']].map(([t,i])=>(
                  <button key={t} onClick={() => setTarget(t)} className={`py-2 rounded-lg text-xs font-medium flex flex-col items-center gap-0.5 border-2 transition-all ${target===t?'border-primary bg-primary/5 text-primary':'border-gray-200 text-gray-400'}`}>
                    <span>{i}</span>{t}
                  </button>
                ))}
              </div>
            </div>
            <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Notice Title</label><input placeholder="Enter title..." value={title} onChange={e => setTitle(e.target.value)} className="input" /></div>
            <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Message Body</label><textarea placeholder="Type your announcement here..." value={body} onChange={e => setBody(e.target.value)} className="input h-28 resize-none" /></div>
            <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" className="rounded" /><span className="text-gray-600">Mark as High Priority</span></label>
            <button onClick={() => { setTitle(''); setBody(''); }} className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-xl transition-all">Send Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Exams Page ---
const exams = [
  {id:'MAT-2023-7',subject:'Advanced Mathematics',grade:'Grade 10-A',date:'Oct 24, 2023',proctor:'Mr. Robert Smith',status:'Scheduled'},
  {id:'PHY-1204-5',subject:'Theoretical Physics',grade:'Grade 12-C',date:'Oct 25, 2023',proctor:'Mrs. Diane Davis',status:'Ongoing'},
  {id:'HIS-9007-A',subject:'Modern World History',grade:'Grade 9-B',date:'Oct 26, 2023',proctor:'Mr. James Wilson',status:'Draft'},
  {id:'BIO-1100-M',subject:'Marine Biology',grade:'Grade 11-A',date:'Oct 27, 2023',proctor:'Ms. Emily Lee',status:'Scheduled'},
];

export const Exams = () => (
  <div>
    <Topbar title="Exams & Report Cards" subtitle="Manage academic assessment cycles and student performance tracking."
      actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">⚙️ Grade Config</button>
          <button className="btn-primary text-xs">📄 Generate Report Cards</button>
        </div>
      }
    />
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[{label:'Pending Results',value:'14 Classes',sub:'-2% vs last term',warn:true},{label:'Ready for Report Cards',value:'850 Students',sub:'+10% vs last term'},{label:'Upcoming Exams',value:'12 Subjects',sub:'Next session starts in 48 hrs'}].map(s=>(
        <div key={s.label} className="stat-card">
          <div className={`text-xs font-medium mb-1 ${s.warn?'text-red-400':'text-green-500'}`}>{s.sub}</div>
          <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
          <div className="text-xs text-gray-500">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="card mb-6">
      <div className="flex gap-4 mb-4 border-b border-gray-100">
        {['Exam Schedule','Result Approvals','Grade Configuration'].map((t,i)=>(
          <button key={t} className={`pb-3 text-sm font-medium border-b-2 transition-all ${i===0?'border-primary text-primary':'-mb-px border-transparent text-gray-400 hover:text-gray-600'}`}>{t}{i===1&&<span className="ml-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">2</span>}</button>
        ))}
      </div>
      <table className="w-full">
        <thead><tr className="border-b border-gray-100">{['Subject & ID','Grade Level','Exam Date','Proctor','Status','Actions'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
        <tbody>
          {exams.map((e,i)=>(
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="table-td"><div className="font-semibold text-sm text-primary">{e.subject}</div><div className="text-xs text-gray-400">{e.id}</div></td>
              <td className="table-td text-sm text-gray-500">{e.grade}</td>
              <td className="table-td text-sm">📅 {e.date}</td>
              <td className="table-td"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{e.proctor[0]}</div><span className="text-sm">{e.proctor}</span></div></td>
              <td className="table-td"><span className={e.status==='Scheduled'?'badge-info':e.status==='Ongoing'?'badge-warning':'badge-gray'}>{e.status}</span></td>
              <td className="table-td">
                <div className="flex gap-2"><button className="text-blue-500 text-sm hover:text-blue-700">✏️</button><button className="text-gray-400 text-sm hover:text-gray-600">⋮</button></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
        <span>Showing 1-4 of 24 assessments</span>
        <div className="flex gap-2"><button className="btn-outline text-xs py-1.5">Previous</button><button className="btn-primary text-xs py-1.5">Next</button></div>
      </div>
    </div>
  </div>
);

// --- Admission Page ---
const applications = [
  {id:'ADM-2023-001',name:'Jane Cooper',avatar:'JC',grade:'Grade 10',date:'Oct 24, 2023',status:'Approved'},
  {id:'ADM-2023-002',name:'Hanna Wright',avatar:'HW',grade:'Grade 8',date:'Oct 26, 2023',status:'Pending'},
  {id:'ADM-2023-003',name:'Tom Wilson',avatar:'TW',grade:'Grade 12',date:'Oct 28, 2023',status:'Under Review'},
  {id:'ADM-2023-004',name:'Amy Stone',avatar:'AS',grade:'Grade 9',date:'Oct 30, 2023',status:'Rejected'},
];

const statusC = {Approved:'badge-success',Pending:'badge-warning','Under Review':'badge-info',Rejected:'badge-danger'};

export const Admission = () => (
  <div>
    <Topbar title="Admission Management" subtitle="Dashboard / Admission — Application Overview"
      actions={<button className="btn-primary">+ New Application</button>} />
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[{l:'Total Applications',v:'1,240',c:'text-primary',sub:'+12%'},{l:'Pending Reviews',v:'45',c:'text-yellow-600',sub:'4 Pending'},{l:'Approved',v:'850',c:'text-green-600',sub:'Last 30d'},{l:'Rejected',v:'345',c:'text-red-500',sub:'-2%'}].map(s=>(
        <div key={s.l} className="stat-card">
          <div className={`font-display text-3xl font-bold ${s.c}`}>{s.v}</div>
          <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
          <div className={`text-xs font-medium mt-1 ${s.c}`}>{s.sub}</div>
        </div>
      ))}
    </div>
    <div className="card">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 relative"><input placeholder="Search by Student Name or ID..." className="input pl-9" /><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span></div>
        <select className="input w-36"><option>All Status</option><option>Pending</option><option>Approved</option><option>Rejected</option></select>
      </div>
      <table className="w-full">
        <thead><tr className="border-b border-gray-100">{['Application ID','Student Name','Applied Grade','Submission Date','Status','Actions'].map(h=><th key={h} className="table-th">{h}</th>)}</tr></thead>
        <tbody>
          {applications.map((a,i)=>(
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="table-td text-xs text-gray-500 font-mono">{a.id}</td>
              <td className="table-td">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">{a.avatar}</div>
                  <span className="font-medium text-sm">{a.name}</span>
                </div>
              </td>
              <td className="table-td text-sm">{a.grade}</td>
              <td className="table-td text-sm text-gray-500">{a.date}</td>
              <td className="table-td"><span className={statusC[a.status]}>{a.status}</span></td>
              <td className="table-td">
                <div className="flex gap-2 text-sm">
                  <button className="text-gray-400 hover:text-gray-600">👁</button>
                  <button className="text-green-500 hover:text-green-700">✓</button>
                  <button className="text-red-400 hover:text-red-600">✕</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
