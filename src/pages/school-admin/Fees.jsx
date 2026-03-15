import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import Topbar from '../../components/layout/Topbar';

const data=[
{month:'JAN',collected:28000,pending:6000},
{month:'FEB',collected:32000,pending:5000},
{month:'MAR',collected:35000,pending:4000},
{month:'APR',collected:30000,pending:7000},
{month:'MAY',collected:38000,pending:3000},
{month:'JUN',collected:40000,pending:4500}
];

const txns=[
{name:'Liam Anderson',grade:'Grade 4-B',type:'Monthly Tuition',amount:'Rs. 2,000',date:'Oct 12, 2023',status:'PAID'},
{name:'Sophia Martinez',grade:'Grade 2-A',type:'Transport Fee',amount:'Rs. 600',date:'Oct 11, 2023',status:'PENDING'},
{name:'Ethan Brooks',grade:'Grade 5-C',type:'Annual Sports',amount:'Rs. 800',date:'Oct 09, 2023',status:'OVERDUE'}
];

const sc={PAID:'badge-success',PENDING:'badge-warning',OVERDUE:'badge-danger'};

const Fees=()=>(

<div>

<Topbar
title="Fees & Payments Overview"
actions={
<div className="flex gap-2">
<button className="btn-primary text-xs">🔔 Send Bulk Reminders</button>
<button className="btn-outline text-xs">↓ Export Report</button>
</div>
}
/>

<div className="grid grid-cols-4 gap-4 mb-6">

{[
{l:'Total Revenue',v:'Rs. 3,50,000',s:'+10%',c:'text-blue-600'},
{l:'Collected Fees',v:'Rs. 3,05,000',s:'+7%',c:'text-green-600'},
{l:'Pending Dues',v:'Rs. 45,000',s:'-4%',c:'text-red-600'},
{l:'Late Fees Collected',v:'Rs. 2,000',s:'+12%',c:'text-orange-600'}
].map(s=>(

<div key={s.l} className="stat-card">

<div className="text-xs text-gray-500 mb-1">
{s.l}
</div>

<div className={`font-display text-2xl font-bold ${s.c}`}>
{s.v}
</div>

<div className="text-xs text-gray-400">
{s.s}
</div>

</div>

))}

</div>

<div className="grid grid-cols-3 gap-6 mb-6">

<div className="card col-span-2">

<div className="flex items-center justify-between mb-4">
<h3 className="font-display font-semibold text-primary">
Collected vs. Pending Fees
</h3>

<select className="input w-36 text-xs py-1.5">
<option>Last 6 Months</option>
</select>
</div>

<ResponsiveContainer width="100%" height={200}>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>

<XAxis dataKey="month" tick={{fontSize:11}}/>

<YAxis tick={{fontSize:11}}/>

<Tooltip/>

<Legend/>

<Bar dataKey="collected" name="Collected" fill="#1a2744" radius={[3,3,0,0]}/>

<Bar dataKey="pending" name="Pending" fill="#e2e8f0" radius={[3,3,0,0]}/>

</BarChart>

</ResponsiveContainer>

</div>

<div className="card">

<div className="flex items-center justify-between mb-4">

<h3 className="font-display font-semibold text-primary">
Fee Configuration
</h3>

<button className="text-xs text-blue-600 font-semibold hover:underline">
Edit Rules
</button>

</div>

<div className="space-y-3">

{[
{l:'Tuition (Class 1-8)',v:'Rs. 2,000/mo'},
{l:'Late Fee Rate',v:'5% flat'},
{l:'Transport Fee',v:'Rs. 600/mo'}
].map(f=>(

<div
key={f.l}
className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer"
>

<div>

<div className="text-xs text-gray-400">
{f.l}
</div>

<div className="font-semibold text-primary text-sm">
{f.v}
</div>

</div>

<span className="text-gray-400">›</span>

</div>

))}

<button className="w-full border-2 border-dashed border-gray-200 rounded-xl py-2.5 text-xs text-gray-400 hover:border-primary hover:text-primary transition-all">
+ Add New Fee Type
</button>

</div>

</div>

</div>

<div className="card">

<div className="flex items-center justify-between mb-4">

<h3 className="font-display font-semibold text-primary">
Recent Transactions
</h3>

<button className="text-xs text-blue-600 font-semibold hover:underline">
View All History ↗
</button>

</div>

<table className="w-full">

<thead>

<tr className="border-b border-gray-100">

<th className="table-th">Student Name</th>
<th className="table-th">Grade</th>
<th className="table-th">Fee Type</th>
<th className="table-th">Amount</th>
<th className="table-th">Date</th>
<th className="table-th">Status</th>
<th className="table-th">Action</th>

</tr>

</thead>

<tbody>

{txns.map(t=>(

<tr key={t.name} className="border-b border-gray-50 hover:bg-gray-50">

<td className="table-td">

<div className="flex items-center gap-2">

<div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
{t.name[0]}
</div>

<span className="font-medium text-sm">
{t.name}
</span>

</div>

</td>

<td className="table-td text-sm text-gray-500">
{t.grade}
</td>

<td className="table-td text-sm text-gray-500">
{t.type}
</td>

<td className="table-td font-bold text-primary">
{t.amount}
</td>

<td className="table-td text-sm text-gray-400">
{t.date}
</td>

<td className="table-td">
<span className={sc[t.status]}>
{t.status}
</span>
</td>

<td className="table-td">
<button className="text-gray-400 text-lg">⋮</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);

export default Fees;