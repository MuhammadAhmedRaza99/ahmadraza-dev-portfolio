import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataViz from './components/DataViz';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-[Inter,sans-serif] overflow-x-hidden">
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
