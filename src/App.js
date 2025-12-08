import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Environment from "./pages/Environment";
import Entrepreneurship from "./pages/Entrepreneurship";
import Education from "./pages/Education";
import Health from "./pages/Health";
import Women from "./pages/Women";
import Rural from "./pages/Rural";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/programs/environment" element={<Environment />} />
        <Route path="/programs/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/programs/education" element={<Education />} />
        <Route path="/programs/health" element={<Health />} />
        <Route path="/programs/women" element={<Women />} />
        <Route path="/programs/rural" element={<Rural />} />
      </Routes>
      <Footer />
    </Router>
  );
}
