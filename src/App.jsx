import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admission from "./pages/Admission";
import Enquiry from "./pages/Enquiry";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Enquiry />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;