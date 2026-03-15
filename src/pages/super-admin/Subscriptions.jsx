import Topbar from '../../components/layout/Topbar';

const renewals = [
  {name:'University of Austin',plan:'Enterprise',amount:'Rs. 3,500',method:'Stripe',date:'Oct 24, 2023',status:'success'},
  {name:'Greenwood Academy',plan:'Standard',amount:'Rs. 2,500',method:'Bank',date:'Oct 22, 2023',status:'success'},
  {name:'North Valley Edu',plan:'Standard',amount:'Rs. 2,500',method:'Stripe',date:'Oct 20, 2023',status:'failed'},
];

const Subscriptions = () => (
  <div>

    <Topbar
      title="Subscription Management"
      actions={
        <div className="flex gap-2">
          <button className="btn-outline text-xs">Export Report</button>
          <button className="btn-primary text-xs">+ Create New Plan</button>
        </div>
      }
    />

    <div className="grid grid-cols-3 gap-4 mb-6">

      {[
        {label:'Total MRR',value:'Rs. 3,20,000',change:'+8.4%'},
        {label:'Active Subscribers',value:'1,280',change:'+2.1%'},
        {label:'Avg. Revenue / User',value:'Rs. 2,800',change:'+0.5%'},
      ].map(s=>(

        <div key={s.label} className="stat-card">

          <div className="text-xs text-gray-500 mb-1">
            {s.label}
          </div>

          <div className="font-display text-2xl font-bold text-primary">
            {s.value}
          </div>

          <div className="text-xs text-green-500 font-semibold">
            {s.change} vs last month
          </div>

        </div>

      ))}

    </div>


    <div className="card mb-6">

      <h3 className="font-display font-semibold text-primary mb-4">
        Active Plan Configuration
      </h3>

      <div className="grid grid-cols-2 gap-6">

        {[
          {
            tier:'TIER 1',
            name:'Standard Plan',
            price:'12000',
            students:'500 Students',
            storage:'50 GB',
            revenue:'Rs. 2,400/mo'
          },

          {
            tier:'TIER 2',
            name:'Enterprise Plan',
            price:'15000',
            students:'Unlimited',
            storage:'2 TB',
            revenue:'Rs. 3,500/mo',
            top:true
          },

        ].map(p=>(

          <div
            key={p.name}
            className={`border-2 rounded-xl p-5 relative ${p.top?'border-accent bg-accent/5':'border-gray-200'}`}
          >

            {p.top && (
              <div className="absolute -top-3 right-4 bg-accent text-white text-xs font-bold px-3 py-0.5 rounded-full">
                TOP REVENUE
              </div>
            )}

            <div className="text-xs font-bold text-gray-400 mb-1">
              {p.tier}
            </div>

            <div className="font-display font-bold text-primary text-xl mb-3">
              {p.name}
            </div>

            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-gray-500">Implementation Cost (Rs.)</span>
              <span className="font-bold">{p.price}</span>
            </div>

            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-gray-500">Student Capacity</span>
              <span className="font-bold">{p.students}</span>
            </div>

            <div className="flex items-center justify-between text-sm mb-4">
              <span className="text-gray-500">Storage Limit</span>
              <span className="font-bold">{p.storage}</span>
            </div>

            <div className="font-display font-bold text-primary text-lg mb-3">
              {p.revenue}
            </div>

            <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-all">
              Save Updates
            </button>

          </div>

        ))}

      </div>

    </div>


    <div className="card">

      <h3 className="font-display font-semibold text-primary mb-4">
        Recent Subscription Renewals
      </h3>

      <table className="w-full">

        <thead>
          <tr className="border-b border-gray-100">

            <th className="table-th">Institution Name</th>
            <th className="table-th">Plan Type</th>
            <th className="table-th">Amount</th>
            <th className="table-th">Method</th>
            <th className="table-th">Renew Date</th>
            <th className="table-th">Status</th>

          </tr>
        </thead>

        <tbody>

          {renewals.map(r=>(

            <tr key={r.name} className="border-b border-gray-50 hover:bg-gray-50">

              <td className="table-td font-semibold text-primary">
                {r.name}
              </td>

              <td className="table-td">
                <span className="badge badge-gray">
                  {r.plan}
                </span>
              </td>

              <td className="table-td font-medium">
                {r.amount}
              </td>

              <td className="table-td text-gray-500">
                {r.method}
              </td>

              <td className="table-td text-gray-500">
                {r.date}
              </td>

              <td className="table-td">
                <span className={r.status==='success'?'badge-success':'badge-danger'}>
                  {r.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
);

export default Subscriptions;