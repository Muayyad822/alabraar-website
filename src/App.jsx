import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admission from "./pages/Admission";
import Enquiry from "./pages/Enquiry";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<ProtectedRoute><Admission /></ProtectedRoute>} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Enquiry />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;



