import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'About', path: '/about', type: 'route' },
    { name: 'Skills', path: '/#viz', type: 'scroll' },
    { name: 'Projects', path: '/projects', type: 'route' },
    { name: 'Contact', path: '/#contact', type: 'scroll' },
  ];

  const handleLinkClick = (e, path, type) => {
    if (type === 'scroll') {
      if (location.pathname !== '/') {
        // If not on home page, navigation will happen via href naturally
      } else {
        e.preventDefault();
        const id = path.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-black flex items-center gap-3 group">
          <div className="w-11 h-11 bg-purple rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:rotate-12 transition-all">
            <Rocket className="text-white" size={22} />
          </div>
          <span className="purple-glow-text uppercase tracking-tighter">
            {portfolioData.name.split(' ')[0]}<span className="text-purple">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all hover:text-purple ${
                  location.pathname === link.path ? 'text-purple' : 'opacity-60'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path, 'scroll')}
                className="text-[13px] font-bold uppercase tracking-[0.2em] opacity-60 hover:opacity-100 hover:text-purple transition-all"
              >
                {link.name}
              </a>
            )
          ))}
          <Link to="/projects" className="btn-glow text-[11px] uppercase tracking-[0.2em] px-8 py-3">
            Portfolio
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black transition-all duration-500 ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col h-full p-10 pt-32 gap-8">
          {navLinks.map((link) => (
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-bold hover:text-purple transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path, 'scroll')}
                className="text-4xl font-bold hover:text-purple transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-4 text-white"
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
