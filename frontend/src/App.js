import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import References from './pages/References';
import Hobbies from './pages/Hobbies';
import Benevolat from './pages/Benevolat';
import Competitions from './pages/Competitions';
import Navbar from './components/Navbar';
import ProfileSection from './pages/ProfileSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <div className="flex">

          <div className="w-2/5 p-8">
            <ProfileSection />
          </div>

          <div className="w-3/5">
            <div className="flex justify-start p-4 w-full bg-white shadow-lg">
              <Navbar />
            </div>

            <div className="p-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/references" element={<References />} />
                <Route path="/benevolat" element={<Benevolat />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/competitions" element={<Competitions />} />
        
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
