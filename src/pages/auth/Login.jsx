import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import EduFlowLogo from '../../components/common/Logo';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState('schooladmin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const roleRoutes = {
    superadmin: '/super-admin/dashboard',
    schooladmin: '/school-admin/dashboard',
    teacher: '/teacher/dashboard',
    student: '/student/dashboard',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(role);
      navigate(roleRoutes[role]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-xl">
            <span className="text-3xl"><img src="/logo.jpeg" alt="EduVault Logo" className="w-12 h-12 rounded-full" /></span>
          </div>
          <h1 className="font-display text-2xl font-bold text-primary">EduVault</h1>
          <p className="text-gray-500 text-sm">Manage your institution with ease</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="font-display font-bold text-primary text-xl mb-1">Welcome back</h2>
          <p className="text-gray-500 text-sm mb-6">Please enter your details to sign in</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">I am a...</label>
              <select value={role} onChange={e => setRole(e.target.value)} className="input bg-gray-50">
                <option value="schooladmin">School Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
              <input type="email" placeholder="name@school.edu" value={email} onChange={e => setEmail(e.target.value)} className="input" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-600">Password</label>
                <span className="text-xs text-blue-600 cursor-pointer hover:underline">Forgot password?</span>
              </div>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="input pr-10" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm">
                  {showPass ? '🙈' : '👁'}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="rounded" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember my session</label>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
              {loading ? <span className="animate-spin">⟳</span> : null}
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 mb-3">Need a school account?</p>
            <button onClick={() => navigate('/signup')} className="w-full border-2 border-primary/20 text-primary font-semibold py-2.5 rounded-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-2">
              🏫 Create a School
            </button>
          </div>
        </div>

        {/* Quick Demo Logins */}
        <div className="mt-4 bg-white/80 rounded-xl p-4 border border-gray-200">
          <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Quick Demo Access</p>
          <div className="grid grid-cols-2 gap-2">
            {[['superadmin','Super Admin','🔧'],['schooladmin','School Admin','🏫'],['teacher','Teacher','👩‍🏫'],['student','Student','🎒']].map(([r,l,i])=>(
              <button key={r} onClick={() => { login(r); navigate(roleRoutes[r]); }} className="text-xs py-2 px-3 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary font-medium flex items-center gap-1.5 transition-all">
                <span>{i}</span>{l}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">© 2025 EduFlow Systems Inc. · Privacy Policy · Terms</p>
      </div>
    </div>
  );
};

export default Login;
