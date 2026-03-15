import { useState } from 'react';
import Topbar from '../../components/layout/Topbar';
const classes=[
  {grade:10,section:'Section A',level:'Secondary Education',teacher:'Ms. Sarah Jenkins',teacherEmail:'jenkins.s@greenwood.edu',room:'B-204',students:32,capacity:35,occupancy:91},
  {grade:10,section:'Section B',level:'Secondary Education',teacher:'Mr. Michael Chen',teacherEmail:'chen.m@greenwood.edu',room:'B-205',students:35,capacity:35,occupancy:100,full:true},
  {grade:11,section:'Section A',level:'Higher Secondary',teacher:'Dr. Elena Rodriguez',teacherEmail:'rodriguez.e@greenwood.edu',room:'C-101',students:28,capacity:40,occupancy:70},
  {grade:12,section:'Section C',level:'Higher Secondary',teacher:null,room:'D-002',students:15,capacity:30,occupancy:50},
];
const getBarColor=(o)=>o>=100?'bg-red-500':o>=80?'bg-yellow-500':'bg-green-500';
const Classes=()=>{
  const [showModal,setShowModal]=useState(false);
  return(
    <div>
      <Topbar title="Class & Section Management" subtitle="Dashboard › Academics › Classes" actions={
        <div className="flex items-center gap-3">
          <select className="input w-48 text-sm"><option>Current Session (2023-24)</option></select>
          <button onClick={()=>setShowModal(true)} className="btn-primary">+ Create New Class/Section</button>
        </div>
      }/>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[{l:'Total Classes',v:'12',s:'+0% this year'},{l:'Total Sections',v:'36',s:'+2.4% vs last term'},{l:'Total Capacity',v:'1,200',s:'88% Occupancy'},{l:'Pending Assignments',v:'04',s:'Action required',urgent:true}].map(s=>(
          <div key={s.l} className={`stat-card ${s.urgent?'bg-primary text-white':''}`}><div className={`text-xs mb-1 ${s.urgent?'text-blue-200':'text-gray-500'}`}>{s.l}</div><div className={`font-display text-2xl font-bold ${s.urgent?'text-white':'text-primary'}`}>{s.v}</div><div className={`text-xs ${s.urgent?'text-blue-200':'text-gray-400'}`}>{s.s}</div></div>
        ))}
      </div>
      <div className="card">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 relative"><input placeholder="Search by class, section, or teacher name..." className="input pl-9"/><span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span></div>
          <select className="input w-40"><option>Grade Level (All)</option></select>
          <select className="input w-40"><option>Occupancy Status</option></select>
        </div>
        <table className="w-full">
          <thead><tr className="border-b border-gray-100"><th className="table-th">Class & Section</th><th className="table-th">Class Teacher</th><th className="table-th">Room</th><th className="table-th">Occupancy</th><th className="table-th">Actions</th></tr></thead>
          <tbody>{classes.map((c,i)=>(
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="table-td">
                <div className="flex items-center gap-3"><div className={`w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm`}>{c.grade}</div>
                <div><div className="font-semibold text-primary">Class {c.grade} - {c.section}</div><div className="text-xs text-gray-400">{c.level}</div></div></div>
              </td>
              <td className="table-td">{c.teacher?<div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">{c.teacher.split(' ')[1][0]}</div><div><div className="text-sm font-medium">{c.teacher}</div><div className="text-xs text-gray-400">{c.teacherEmail}</div></div></div>:<span className="badge-danger text-xs">TEACHER UNASSIGNED</span>}</td>
              <td className="table-td"><div className="flex items-center gap-1.5 text-xs text-gray-500">🚪 <span>{c.room}</span></div></td>
              <td className="table-td">
                <div className="text-xs text-gray-600 mb-1">{c.students}/{c.capacity} Students <span className={`font-bold ${c.full?'text-red-500':'text-gray-700'}`}>{c.occupancy}%{c.full?' FULL':''}</span></div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${getBarColor(c.occupancy)}`} style={{width:`${Math.min(c.occupancy,100)}%`}}></div></div>
              </td>
              <td className="table-td">
                {!c.teacher?<button className="btn-primary text-xs py-1.5 px-3">Assign Teacher</button>:<div className="flex gap-2"><button className="text-gray-400 text-sm">✏</button><button className="text-gray-400 text-sm">👁</button><button className="text-gray-400 text-sm">⋮</button></div>}
              </td>
            </tr>
          ))}</tbody>
        </table>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">Showing 1-10 of 36 sections</div>
          <div className="flex gap-1">{[1,2,3,4].map(p=><button key={p} className={`w-8 h-8 rounded-lg text-xs ${p===1?'bg-primary text-white':'text-gray-500 hover:bg-gray-100'}`}>{p}</button>)}<button className="w-8 h-8 rounded-lg text-xs text-gray-500 hover:bg-gray-100">›</button></div>
        </div>
      </div>
      {showModal&&(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">⚙ SETUP NEW ACADEMIC UNIT</div>
              <h3 className="font-display font-bold text-primary text-xl mb-1">Create New Class & Section</h3>
              <p className="text-xs text-gray-400 mb-5">Configure the classroom environment, assign a lead educator, and set enrollment limits.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">GRADE LEVEL</label><select className="input"><option>Select Grade</option>{[...Array(12)].map((_,i)=><option key={i}>Grade {i+1}</option>)}</select></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">SECTION NAME</label><input placeholder="e.g. Section A" className="input"/></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">CLASS TEACHER ASSIGNMENT</label><select className="input"><option>Search and Select Teacher</option></select></div>
                  <div><label className="block text-xs font-semibold text-gray-600 mb-1.5">STUDENT CAPACITY</label><input placeholder="Max students (e.g. 30)" type="number" className="input"/></div>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 flex gap-2 text-xs text-blue-700"><span>ℹ</span><div><div className="font-semibold mb-0.5">Auto-Generation Note</div>A unique Class ID will be generated automatically upon submission.</div></div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={()=>setShowModal(false)} className="btn-outline">Cancel</button>
                <button onClick={()=>setShowModal(false)} className="btn-primary">⊕ Create Class</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Classes;
