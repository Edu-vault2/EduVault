import { useNavigate } from 'react-router-dom';
import EduFlowLogo from '../../components/common/Logo';

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-display font-semibold text-primary text-sm mb-1">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary to-blue-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <EduFlowLogo size={42} />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-200">
          <span className="hover:text-white cursor-pointer">Features</span>
          <span className="hover:text-white cursor-pointer">How It Works</span>
          <span className="hover:text-white cursor-pointer">Benefits</span>
          <span className="hover:text-white cursor-pointer">Pricing</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/login')} className="text-sm font-medium text-blue-200 hover:text-white px-4 py-2">Login</button>
          <button onClick={() => navigate('/login')} className="bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all">Start Free Trial</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
            ⭐ TRUSTED BY 1,248+ SCHOOLS
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight mb-6">
            Simplify Your<br /><span className="text-accent">School</span> Management
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            The all-in-one platform to manage students, teachers, attendance, fees, exams, and parent communications effortlessly.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={() => navigate('/login')} className="bg-accent hover:bg-accent-light text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm">
              🚀 Start 10-Day Free Trial
            </button>
            <button className="flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium">
              ▶ Watch Demo
            </button>
          </div>
          <div className="flex items-center gap-6 mt-8 text-xs text-blue-300">
            <span>✓ No credit card required</span>
            <span>✓ Setup in 5 minutes</span>
            <span>✓ Free support</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
          <div className="bg-primary rounded-xl p-4 mb-3 border border-white/10">
            <div className="text-xs text-blue-300 mb-2">Today's Overview</div>
            <div className="grid grid-cols-2 gap-3">
              {[['Attendance','94.2%','↑'],['Students','1,250','↑'],['Pending Fees','$12,400','!'],['Notices','3','✓']].map(([k,v,s])=>(
                <div key={k} className="bg-white/10 rounded-lg p-3">
                  <div className="text-xs text-blue-300">{k}</div>
                  <div className="font-display font-bold text-white text-lg">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-blue-300 text-center">Live dashboard preview</div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white/5 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-3">Everything You Need to Run Your Institution</h2>
          <p className="text-blue-200 text-center text-sm mb-10">Powerful features designed for admins, teachers, and parents</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['🎓','Multi-School System','Manage multiple campuses from one super admin dashboard'],
              ['👨‍🎓','Student Lifecycle','From admission to graduation, track every student milestone'],
              ['📋','Simple Attendance','Mark attendance digitally, get instant alerts for absences'],
              ['📊','Exam & Report Cards','Schedule exams, enter marks, and auto-generate report cards'],
              ['💰','Fee Management','Configure fee structures, track payments, send bulk reminders'],
              ['📢','Announcements','Broadcast notices to students, teachers, and parents instantly'],
              ['📈','Analytics','Deep insights on performance, attendance, and financials'],
              ['🔒','Secure & Reliable','Role-based access, audit logs, daily backups, 99.9% uptime'],
            ].map(([i,t,d])=><FeatureCard key={t} icon={i} title={t} desc={d} />)}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Get Your School Online in Minutes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['1','Create School Profile','Sign up and enter your school details. Your dashboard is ready instantly.'],
            ['2','Add Teachers & Students','Import via CSV or add manually. Everyone gets their own secure login.'],
            ['3','Start Managing','Go live immediately — attendance, fees, exams all in one place.'],
          ].map(([n,t,d])=>(
            <div key={n} className="text-center">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4">{n}</div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{t}</h3>
              <p className="text-blue-200 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white/5 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-blue-200 text-sm mb-10">No hidden fees. Scale as you grow.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Standard Plan</div>
              <div className="font-display text-4xl font-bold text-white mb-1">$1.50 <span className="text-lg text-blue-300">/ student/mo</span></div>
              <p className="text-blue-200 text-sm mb-6">Everything a school needs to manage up to 500 students</p>
              <ul className="space-y-2 text-sm text-blue-200 mb-7">
                {['Up to 500 Students','Attendance management','Automated Report Cards','Parent & Staff Support','Full Fee Management'].map(f=>(
                  <li key={f} className="flex items-center gap-2"><span className="text-green-400">✓</span>{f}</li>
                ))}
              </ul>
              <button onClick={() => navigate('/login')} className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-xl transition-all">Get Started Today</button>
            </div>
            <div className="bg-accent/20 rounded-2xl p-7 border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Enterprise</div>
              <div className="font-display text-4xl font-bold text-white mb-1">Custom</div>
              <p className="text-blue-200 text-sm mb-6">For large school groups and multi-campus networks</p>
              <ul className="space-y-2 text-sm text-blue-200 mb-7">
                {['Unlimited Schools','White-label branding','Multi-school Management','Dedicated Account Manager','Advanced Analytics & API','Priority 24/7 Support'].map(f=>(
                  <li key={f} className="flex items-center gap-2"><span className="text-green-400">✓</span>{f}</li>
                ))}
              </ul>
              <button className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-xl transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="bg-accent/20 rounded-2xl p-12 border border-accent/30">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Modernize Your School?</h2>
          <p className="text-blue-200 text-sm mb-8">Join hundreds of schools already using EduFlow. No credit card required.</p>
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => navigate('/login')} className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-3.5 rounded-xl transition-all">Start Your Free Trial</button>
            <button className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">Talk to an Expert</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <EduFlowLogo size={32} />
          <div className="flex gap-6 text-xs text-blue-300">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Settings</span>
          </div>
          <div className="text-xs text-blue-400">© 2025 EduFlow Systems Inc.</div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
