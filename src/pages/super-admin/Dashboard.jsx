import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Topbar from '../../components/layout/Topbar';
import { useNavigate } from 'react-router-dom';

const data = [
  {month:'Jan',schools:980},{month:'Feb',schools:1030},{month:'Mar',schools:1080},
  {month:'Apr',schools:1120},{month:'May',schools:1180},{month:'Jun',schools:1248},
];

const activity = [
  {icon:'✅',color:'text-green-500',title:"St. Mary's Academy",desc:"Successfully joined the platform",time:"3 mins ago"},
  {icon:'⚠️',color:'text-yellow-500',title:"Greenwood High",desc:"Subscription expired today",time:"1 hour ago"},
  {icon:'🔄',color:'text-blue-500',title:"Global Update",desc:"LMS core engine patched to v2.3.8",time:"4 hours ago"},
  {icon:'🔴',color:'text-red-500',title:"North Valley Edu",desc:"Account suspended (unpaid)",time:"10 hours ago"},
];

const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 flex items-center justify-between mb-5 text-sm">
        <div className="flex items-center gap-2">
          <span>ℹ️</span>
          <span className="text-yellow-800 font-medium">System Update Notice: V2.4 scheduled for June 15th at 02:00 UTC. Expected downtime is 15 minutes.</span>
        </div>
        <button className="text-yellow-600 text-xs font-semibold underline">View Details</button>
      </div>
      <Topbar title="Dashboard Overview" subtitle="EduFlow Platform" actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">↓ Export Report</button>
          <button onClick={() => navigate('/super-admin/schools')} className="btn-primary text-xs">+ Add New School</button>
        </div>
      } />
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {label:'Total Schools',value:'1,248',change:'+9.2%',icon:'🏫',color:'text-blue-600'},
          {label:'Active Subscriptions',value:'1,102',change:'+8%',icon:'✅',color:'text-green-600'},
          {label:'Monthly Revenue',value:'$45,200',change:'+12%',icon:'💰',color:'text-purple-600'},
          {label:'Platform Growth',value:'+12.5%',change:'Steady',icon:'📈',color:'text-orange-600'},
        ].map(s=>(
          <div key={s.label} className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{s.icon}</span>
              <span className={`text-xs font-semibold ${s.color} bg-gray-50 px-2 py-0.5 rounded-full`}>{s.change}</span>
            </div>
            <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-semibold text-primary">School Onboarding Trend</h3>
              <p className="text-xs text-gray-400">Net new schools added per month</p>
            </div>
            <div className="flex gap-2 text-xs">
              <button className="bg-primary text-white px-3 py-1 rounded-lg">6 Months</button>
              <button className="text-gray-500 px-3 py-1 rounded-lg hover:bg-gray-100">1 Year</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{fontSize:11}} />
              <YAxis tick={{fontSize:11}} />
              <Tooltip />
              <Line type="monotone" dataKey="schools" stroke="#1a2744" strokeWidth={2.5} dot={{fill:'#d4a017',r:4}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="card">
          <h3 className="font-display font-semibold text-primary mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {activity.map((a,i)=>(
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0">
                <span className={`text-lg ${a.color}`}>{a.icon}</span>
                <div>
                  <div className="text-sm font-medium text-primary">{a.title}</div>
                  <div className="text-xs text-gray-400">{a.desc}</div>
                  <div className="text-xs text-gray-300 mt-0.5">{a.time}</div>
                </div>
              </div>
            ))}
            <button className="text-xs text-blue-600 font-semibold hover:underline w-full text-center pt-1">View All Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuperAdminDashboard;
