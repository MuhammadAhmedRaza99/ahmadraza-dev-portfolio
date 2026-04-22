import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DataViz from './components/DataViz';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundOrbs from './components/BackgroundOrbs';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });

    // Dark Mode Check
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app transition-colors duration-300">
      <BackgroundOrbs />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <DataViz />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
