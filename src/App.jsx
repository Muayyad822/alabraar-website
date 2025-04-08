import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AdminRoute from './components/AdminRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admission from './pages/Admission';
import Enquiry from './pages/Enquiry';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';
import CourseManagement from './pages/admin/CourseManagement';
import UserManagement from './pages/admin/UserManagement';
import Settings from './pages/admin/Settings';
import UserStats from './pages/admin/UserStats';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="page-wrapper">
          <Navbar />
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/contact" element={<Enquiry />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/courses" element={<AdminRoute><CourseManagement /></AdminRoute>} />
              <Route path="/admin/users" element={<AdminRoute><UserManagement /></AdminRoute>} />
              <Route path="/admin/user-stats" element={<AdminRoute><UserStats /></AdminRoute>} />
              <Route path="/admin/settings" element={<AdminRoute><Settings /></AdminRoute>} />
            </Routes>
          </main>
          <div className="footer-wrapper">
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;



