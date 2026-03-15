import Topbar from '../../components/layout/Topbar';
import { useNavigate } from 'react-router-dom';

const recentActivity=[
  {icon:'👤',color:'text-blue-500',title:'New Student Admitted','desc':'Ethan Walker has been enrolled in Grade 8-B','time':'10 mins ago'},
  {icon:'💵',color:'text-green-500',title:'Fee Payment Received','desc':'Invoice #INV-2024-088 paid by Sarah Smith','time':'2 hours ago'},
  {icon:'⚠️',color:'text-orange-500',title:'Attendance Alert','desc':'5 students in Grade 10-A marked absent for 3 consecutive days','time':'5 hours ago'},
  {icon:'📢',color:'text-purple-500',title:'Notice Published','desc':'Annual Sports Day Schedule sent to all Parents and Staff','time':'Yesterday'},
];

const SchoolAdminDashboard=()=>{
  const navigate=useNavigate();
  return(
    <div>
      <Topbar title="Dashboard Overview" subtitle="Welcome back, Principal. Here is your school's performance today." actions={
        <button onClick={()=>navigate('/school-admin/admissions')} className="btn-primary">+ New Admission</button>
      }/>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {label:"Today's Attendance",value:'94.2%',sub:'-2.1%',icon:'📅',bar:94,barColor:'bg-green-500'},
          {label:'Total Students',value:'1,250',sub:'+12 this week',icon:'👥',sub2:'Capacity: 1,500 (83%)'},
          {label:'Pending Fees',value:'$12,400',sub:'OVERDUE',icon:'💳',subColor:'text-red-500'},
          {label:'Recent Notices',value:'03',sub:'Today',icon:'📢'},
        ].map(s=>(
          <div key={s.label} className="stat-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">{s.label}</span>
              <span className="text-xl">{s.icon}</span>
            </div>
            <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
            <div className={`text-xs mt-0.5 ${s.subColor||'text-gray-400'}`}>{s.sub}</div>
            {s.bar && <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500 rounded-full" style={{width:`${s.bar}%`}}></div></div>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-primary">Recent Activity</h3>
            <button className="text-xs text-blue-600 font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((a,i)=>(
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0">
                <span className={`text-xl ${a.color}`}>{a.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-primary">{a.title}</div>
                    <div className="text-xs text-gray-400">{a.time}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-display font-semibold text-primary mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {[
                {icon:'👤',title:'New Admission',desc:'Register a new student',path:'/school-admin/admissions'},
                {icon:'📢',title:'Post Notice',desc:'Blast message to school',path:'/school-admin/notices'},
                {icon:'📋',title:'Schedule Exam',desc:'Plan dates and subjects',path:'/school-admin/exams'},
              ].map(a=>(
                <button key={a.title} onClick={()=>navigate(a.path)} className="w-full flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all text-left">
                  <span className="text-xl">{a.icon}</span>
                  <div><div className="text-sm font-semibold text-primary">{a.title}</div><div className="text-xs text-gray-400">{a.desc}</div></div>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-primary rounded-xl p-5 text-white">
            <div className="text-xs text-blue-300 mb-1 flex items-center gap-1">🗓 Board Meeting</div>
            <div className="font-semibold">Tomorrow, 10:00 AM</div>
            <button className="mt-3 w-full bg-white text-primary font-semibold py-2 rounded-lg text-sm hover:bg-blue-50 transition-all">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchoolAdminDashboard;
