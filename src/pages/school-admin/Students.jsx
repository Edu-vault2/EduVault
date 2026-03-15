import { useState } from 'react';
import Topbar from '../../components/layout/Topbar';

const students=[
  {id:'#STU-2023-881',name:'Liam Anderson',email:'liam.a@school.edu',class:'Class 8',section:'Section A',father:'Mark Anderson',status:'ACTIVE'},
  {id:'#STU-2023-842',name:'Sophia Martinez',email:'sophia.m@school.edu',class:'Class 7',section:'Section B',father:'Carlos Martinez',status:'ACTIVE'},
  {id:'#STU-2023-112',name:'Ethan Williams',email:'ethan.w@school.edu',class:'Class 9',section:'Section C',father:'John Williams',status:'WITHDRAWN'},
  {id:'#STU-2023-888',name:'Isabella Chen',email:'isabella.c@school.edu',class:'Class 10',section:'Section A',father:'David Chen',status:'SUSPENDED'},
  {id:'#STU-2023-156',name:'Lucas Thompson',email:'lucas.t@school.edu',class:'Class 8',section:'Section B',father:'Michael Thompson',status:'ACTIVE'},
];
const sc={ACTIVE:'badge-success',WITHDRAWN:'badge-gray',SUSPENDED:'badge-danger'};

const Students=()=>{
  const [search,setSearch]=useState('');
  const [showModal,setShowModal]=useState(false);
  const filtered=students.filter(s=>s.name.toLowerCase().includes(search.toLowerCase()));
  return(
    <div>
      <Topbar title="Student Directory" subtitle="Admin Portal" actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">↑ Bulk Import</button>
          <button onClick={()=>setShowModal(true)} className="btn-primary text-xs">+ Add New Student</button>
        </div>
      }/>
      <div className="card">
        <p className="text-xs text-gray-400 mb-4">Manage and organize all student records across all classes.</p>
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 relative"><input placeholder="Search by name, ID, or father's name..." value={search} onChange={e=>setSearch(e.target.value)} className="input pl-9 text-sm"/><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span></div>
          <select className="input w-28 text-sm"><option>Class All</option>{[...Array(12)].map((_,i)=><option key={i}>Class {i+1}</option>)}</select>
          <select className="input w-32 text-sm"><option>Section All</option><option>Section A</option><option>Section B</option><option>Section C</option></select>
          <select className="input w-28 text-sm"><option>Status: All</option><option>Active</option><option>Withdrawn</option><option>Suspended</option></select>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100">
            <th className="table-th">Student Name</th><th className="table-th">Student ID</th>
            <th className="table-th">Class</th><th className="table-th">Section</th>
            <th className="table-th">Father's Name</th><th className="table-th">Status</th><th className="table-th">Actions</th>
          </tr></thead>
          <tbody>{filtered.map(s=>(
            <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="table-td"><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{s.name[0]}</div><div><div className="font-semibold text-primary text-sm">{s.name}</div><div className="text-xs text-gray-400">{s.email}</div></div></div></td>
              <td className="table-td text-xs font-mono text-gray-500">{s.id}</td>
              <td className="table-td text-sm">{s.class}</td>
              <td className="table-td text-sm">{s.section}</td>
              <td className="table-td text-sm">{s.father}</td>
              <td className="table-td"><span className={sc[s.status]}>{s.status}</span></td>
              <td className="table-td"><div className="flex gap-2"><button className="text-blue-600 text-xs hover:underline">👁</button><button className="text-gray-400 text-xs hover:underline">✏</button></div></td>
            </tr>
          ))}</tbody>
        </table>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">Showing 1 to {filtered.length} of 2,450 students</div>
          <div className="flex gap-1">{[1,2,3,'...',245].map((p,i)=><button key={i} className={`w-8 h-8 rounded-lg text-xs ${p===1?'bg-primary text-white':'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5 pt-4 border-t border-gray-100">
          {[{k:'Total Students',v:'2,450',s:'+12% from last year'},{k:'Active Now',v:'2,380',s:'Currently enrolled'},{k:'New Admissions',v:'156',s:'Current academic cycle'},{k:'Withdrawals',v:'42',s:'4.5% dropout rate'}].map(s=>(
            <div key={s.k}><div className="text-xs text-gray-400">{s.k}</div><div className="font-display text-xl font-bold text-primary">{s.v}</div><div className="text-xs text-gray-400">{s.s}</div></div>
          ))}
        </div>
      </div>
      {showModal&&(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="bg-primary px-6 py-5 rounded-t-2xl sticky top-0"><h3 className="font-display font-bold text-white text-lg">Student Admission</h3><p className="text-blue-200 text-xs">Register a new student by providing the required information across all sections.</p></div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-primary text-sm flex items-center gap-2 mb-3">👤 Student Personal Details</h4>
                <div className="text-center mb-4"><div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-2xl mx-auto cursor-pointer hover:bg-gray-200 transition-all">📷</div><div className="text-xs text-gray-400 mt-1">Upload Photo</div></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">First Name *</label><input placeholder="John" className="input"/></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Last Name *</label><input placeholder="Doe" className="input"/></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Date of Birth *</label><input type="date" className="input"/></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Gender *</label><select className="input"><option>Select Gender</option><option>Male</option><option>Female</option></select></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Enrollment Class *</label><select className="input"><option>Select Grade</option>{[...Array(12)].map((_,i)=><option key={i}>Grade {i+1}</option>)}</select></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Blood Group</label><input placeholder="e.g. O+" className="input"/></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary text-sm flex items-center gap-2 mb-3">👪 Guardian Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Father/Guardian Name</label><input className="input"/></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">Contact Number</label><input className="input"/></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={()=>setShowModal(false)} className="btn-outline">Cancel</button>
              <button onClick={()=>setShowModal(false)} className="btn-primary">Save & Admit Student</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Students;
