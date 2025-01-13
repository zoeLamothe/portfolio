import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        {/* Conteneur principal */}
        <div className="flex">
          {/* Section de Profil à gauche */}
          <div className="w-2/5 p-8">
            <ProfileSection />
          </div>

          {/* Contenu principal à droite */}
          <div className="w-3/5">
            {/* Navbar en haut */}
            <div className="flex justify-start p-4 w-full bg-white shadow-lg">
              <Navbar />
            </div>

            {/* Pages de contenu */}
            <div className="p-8">
              <Routes>
                {/* La page d'accueil */}
                <Route path="/" element={<Home />} />

                {/* La page CV */}
                <Route path="/cv" element={<CV />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
