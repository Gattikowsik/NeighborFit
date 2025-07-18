import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Questionnaire from './pages/Questionnaire';
import Results from './pages/Results';
import NeighborhoodDetail from './pages/NeighborhoodDetail';
import NotFound from './pages/NotFound';
import Login from './pages/Login'; 
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/results" element={<Results />} />
        <Route path="/neighborhood/:id" element={<NeighborhoodDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;