import { useState } from 'react';
import Topbar from '../../components/layout/Topbar';

const schools = [
  {id:'SCH-2024-001',name:'Greenwood Academy',type:'Private',students:1240,status:'Active',joined:'Oct 12, 2023'},
  {id:'SCH-2024-045',name:'Northside High',type:'Public',students:850,status:'Pending',joined:'Jan 05, 2024'},
  {id:'SCH-2023-112',name:'Lakeview International',type:'International',students:2100,status:'Suspended',joined:'Nov 22, 2022'},
  {id:'SCH-2024-012',name:'St. Benedict Preparatory',type:'Private',students:420,status:'Active',joined:'Feb 14, 2024'},
  {id:'SCH-2024-078',name:'City Grammar School',type:'Public',students:1100,status:'Active',joined:'Mar 01, 2024'},
];

const statusColor = {Active:'badge-success',Pending:'badge-warning',Suspended:'badge-danger'};

const Schools = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({name:'',address:'',city:'',website:'',adminName:'',adminEmail:''});
  const [added, setAdded] = useState(false);

  const filtered = schools.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = () => {
    setAdded(true);
    setShowModal(false);
  };

  return (
    <div>
      <Topbar title="Schools Management" actions={
        <button onClick={() => setShowModal(true)} className="btn-primary">+ Add New School</button>
      } />
      {added && <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-4 text-sm text-green-700 flex items-center gap-2">✅ School registered successfully!</div>}
      <div className="card">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 relative">
            <input placeholder="Search schools..." value={search} onChange={e => setSearch(e.target.value)} className="input pl-9" />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          </div>
          <select className="input w-36"><option>All Types</option><option>Private</option><option>Public</option><option>International</option></select>
          <select className="input w-36"><option>All Status</option><option>Active</option><option>Pending</option><option>Suspended</option></select>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-xs text-gray-500 mb-1">Total Schools</div>
            <div className="font-display text-2xl font-bold text-primary">1,284 <span className="text-xs text-green-500 font-medium">+10% last month</span></div>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <div className="text-xs text-gray-500 mb-1">Active Schools</div>
            <div className="font-display text-2xl font-bold text-green-700">1,150 <span className="text-xs text-green-500 font-medium">+5% over signups</span></div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="text-xs text-gray-500 mb-1">Pending Verifications</div>
            <div className="font-display text-2xl font-bold text-yellow-700">32 <span className="text-xs text-red-500 font-medium">8 urgent requests</span></div>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="table-th">School Name</th>
              <th className="table-th">Type</th>
              <th className="table-th">Students</th>
              <th className="table-th">Status</th>
              <th className="table-th">Date Joined</th>
              <th className="table-th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s=>(
              <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="table-td">
                  <div className="font-semibold text-primary">{s.name}</div>
                  <div className="text-xs text-gray-400">ID: {s.id}</div>
                </td>
                <td className="table-td"><span className="badge badge-gray">{s.type}</span></td>
                <td className="table-td font-medium">{s.students.toLocaleString()}</td>
                <td className="table-td"><span className={statusColor[s.status]}>{s.status}</span></td>
                <td className="table-td text-gray-500">{s.joined}</td>
                <td className="table-td">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:underline text-xs font-medium">Edit</button>
                    <button className="text-gray-400 hover:underline text-xs font-medium">View</button>
                    <button className="text-red-500 hover:underline text-xs font-medium">Suspend</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">Showing 1 to {filtered.length} of 1,284 schools</div>
          <div className="flex gap-1">
            {[1,2,3,'...',32].map((p,i)=>(
              <button key={i} className={`w-8 h-8 rounded-lg text-xs font-medium ${p===1?'bg-primary text-white':'text-gray-500 hover:bg-gray-100'}`}>{p}</button>
            ))}
            <button className="w-8 h-8 rounded-lg text-xs text-gray-500 hover:bg-gray-100">›</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl">
            <div className="bg-primary px-6 py-5 rounded-t-2xl">
              <h3 className="font-display font-bold text-white text-lg">Register New School</h3>
              <p className="text-blue-200 text-sm">Enter the required information to onboard a new educational institution.</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">School Name</label>
                <input value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} placeholder="e.g. St. James International Academy" className="input" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Address Line 1</label>
                  <input placeholder="Street address" className="input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">City / State</label>
                  <input placeholder="City, State, Zip" className="input" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Admin Full Name</label>
                  <input placeholder="e.g. Dr. Sarah Jenkins" className="input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Admin Email</label>
                  <input placeholder="admin@school.edu" className="input" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 pb-6">
              <button onClick={() => setShowModal(false)} className="btn-outline">Cancel</button>
              <button onClick={handleAdd} className="btn-primary">✓ Register School</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Schools;
