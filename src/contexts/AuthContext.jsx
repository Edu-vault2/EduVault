import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  // Default users
  const users = {
    superadmin: {
      name: 'Alex Rivera',
      email: 'alex@eduflow.com',
      role: 'superadmin',
      avatar: 'AR'
    },
    schooladmin: {
      name: 'Dr. Sarah Jenkins',
      email: 'sarah@greenwood.edu',
      role: 'schooladmin',
      school: 'Greenwood Academy',
      avatar: 'SJ'
    },
    teacher: {
      name: 'Mrs. Sarah Jenkins',
      email: 's.jenkins@school.edu',
      role: 'teacher',
      avatar: 'SJ'
    },
    student: {
      name: 'Alex Johnson',
      email: 'alex.j@school.edu',
      role: 'student',
      grade: 'Grade 10-B',
      avatar: 'AJ'
    },
  };

  // 🔓 DEV BYPASS LOGIN (auto logged in)
  const [user, setUser] = useState(users.superadmin);

  const login = (role, data = {}) => {
    setUser({ ...users[role], ...data });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);