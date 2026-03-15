import { useState } from 'react';
import Topbar from '../../components/layout/Topbar';
const teachers=[
  {id:'T-1024',name:'Dr. Sarah Jenkins',joined:'Aug 2018',subjects:['PHYSICS','MATHEMATICS'],classes:'11-A, 11-B, 12-C',email:'s.jenkins@school.edu',phone:'+1 234 567 8901',status:'Active'},
  {id:'T-1056',name:'Robert Chen',joined:'Jan 2020',subjects:['WORLD HISTORY'],classes:'9-A, 9-D, 10-B',email:'r.chen@school.edu',phone:'+1 234 567 8905',status:'On Leave'},
  {id:'T-1120',name:'Aria Thompson',joined:'Sept 2021',subjects:['FINE ARTS','DESIGN'],classes:'8-C, 10-A, 12-A',email:'a.thompson@school.edu',phone:'+1 234 567 8910',status:'Active'},
  {id:'T-0988',name:'Michael Rossi',joined:'Aug 2017',subjects:['BIOLOGY','CHEMISTRY'],classes:'11-B, 12-A, 12-B',email:'m.rossi@school.edu',phone:'+1 234 567 8922',status:'Active'},
];
const sc={Active:'badge-success','On Leave':'badge-warning'};
const subjectColors={'PHYSICS':'bg-blue-100 text-blue-700','MATHEMATICS':'bg-purple-100 text-purple-700','WORLD HISTORY':'bg-yellow-100 text-yellow-700','FINE ARTS':'bg-red-100 text-red-700','DESIGN':'bg-pink-100 text-pink-700','BIOLOGY':'bg-green-100 text-green-700','CHEMISTRY':'bg-cyan-100 text-cyan-700'};
const Teachers=()=>{
  const [showModal,setShowModal]=useState(false);
  return(
    <div>
      <Topbar title="Teacher Management" subtitle="Central High School" actions={<button onClick={()=>setShowModal(true)} className="btn-primary">+ Add New Teacher</button>}/>
      <div className="card">
        <p className="text-xs text-gray-400 mb-4">Efficiently manage and monitor your faculty records.</p>
        <div className="grid grid-cols-3 gap-4 mb-5">
          {[{l:'Total Teachers',v:'124',s:'+2.4% from last term'},{l:'Active Staff',v:'118',s:'95% capacity'},{l:'On Leave',v:'6',s:'Action required for 2'}].map(s=>(
            <div key={s.l} className="bg-gray-50 rounded-xl p-4"><div className="text-xs text-gray-500 mb-1">{s.l}</div><div className="font-display text-2xl font-bold text-primary">{s.v}</div><div className="text-xs text-gray-400">{s.s}</div></div>
          ))}
        </div>
        <div className="flex gap-3 mb-4">
          <div className="flex-1 relative"><input placeholder="Search by name, employee ID, or subject..." className="input pl-9"/><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span></div>
          <select className="input w-36"><option>Department</option><option>Science</option><option>Arts</option></select>
          <select className="input w-28"><option>Status</option><option>Active</option><option>On Leave</option></select>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100"><th className="table-th">Teacher Info</th><th className="table-th">ID</th><th className="table-th">Subject Expertise</th><th className="table-th">Assigned Classes</th><th className="table-th">Contact</th><th className="table-th">Status</th><th className="table-th">Actions</th></tr></thead>
          <tbody>{teachers.map(t=>(
            <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="table-td"><div className="flex items-center gap-2"><div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{t.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><div className="font-semibold text-primary text-sm">{t.name}</div><div className="text-xs text-gray-400">Joined {t.joined}</div></div></div></td>
              <td className="table-td text-xs font-mono text-gray-500">{t.id}</td>
              <td className="table-td"><div className="flex gap-1 flex-wrap">{t.subjects.map(s=><span key={s} className={`text-xs px-2 py-0.5 rounded font-semibold ${subjectColors[s]||'bg-gray-100 text-gray-600'}`}>{s}</span>)}</div></td>
              <td className="table-td text-xs text-gray-600">{t.classes}</td>
              <td className="table-td"><div className="text-xs text-gray-500">{t.email}</div><div className="text-xs text-gray-400">{t.phone}</div></td>
              <td className="table-td"><span className={sc[t.status]}>{t.status}</span></td>
              <td className="table-td"><div className="flex gap-2"><button className="text-blue-500 text-xs">👁</button><button className="text-gray-400 text-xs">✏</button><button className="text-red-400 text-xs">🗑</button></div></td>
            </tr>
          ))}</tbody>
        </table>
        <div className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">Showing 1 to 4 of 124 teachers</div>
      </div>
      {showModal&&(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div><h3 className="font-display font-bold text-primary">Add New Teacher</h3><p className="text-xs text-gray-400">Onboard a new faculty member to the academic database.</p></div>
              <div className="flex gap-2"><button onClick={()=>setShowModal(false)} className="btn-outline text-xs py-1.5">Cancel</button><button onClick={()=>setShowModal(false)} className="btn-primary text-xs py-1.5">💾 Save Profile</button></div>
            </div>
            <div className="p-6 space-y-5">
              <div><h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">👤 Personal Information</h4><div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name</label><input placeholder="e.g. Jonathan" className="input"/></div><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name</label><input placeholder="e.g. Doe" className="input"/></div><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label><input placeholder="j.doe@school.edu" className="input"/></div><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label><input placeholder="+1 (555) 000-0000" className="input"/></div></div></div>
              <div><h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">🏢 Administrative Assignment</h4><div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Department</label><select className="input"><option>Science & Mathematics</option><option>Arts & Humanities</option><option>Languages</option></select></div><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Employment Status</label><select className="input"><option>Full-time</option><option>Contract</option></select></div></div></div>
              <div><h4 className="font-semibold text-sm text-primary mb-3 flex items-center gap-2">🎓 Academic Qualifications</h4><div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Highest Degree</label><input placeholder="e.g. PhD in Applied Mathematics" className="input"/></div><div><label className="block text-xs font-semibold text-gray-600 mb-1.5">University/Institution</label><input placeholder="e.g. Stanford University" className="input"/></div></div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Teachers;
