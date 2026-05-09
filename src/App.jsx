import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataViz from './components/DataViz';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';

// Pages (To be created)
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    // Force Dark Theme
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Router>
      <div className="app bg-black min-h-screen text-white">
        <BackgroundOrbs />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <DataViz />
              <Contact />
            </main>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
