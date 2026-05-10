import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     path: '/',         type: 'route'  },
    { name: 'About',    path: '/about',    type: 'route'  },
    { name: 'Skills',   path: '/#viz',     type: 'scroll' },
    { name: 'Projects', path: '/projects', type: 'route'  },
    { name: 'Contact',  path: '/#contact', type: 'scroll' },
  ];

  const handleScrollLink = (e, path) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const id = path.split('#')[1];
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navBase = isScrolled
    ? 'backdrop-blur-xl bg-black/60 border-b border-white/5 py-4 shadow-2xl'
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBase}`}>
      <div className="max-w-6xl mx-auto px-5 lg:px-10 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-purple-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:rotate-12 transition-all duration-300">
            <Rocket className="text-white" size={20} />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter [text-shadow:0_0_10px_rgba(168,85,247,0.5)]">
            {portfolioData.name.split(' ')[0]}
            <span className="text-purple-500">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:text-purple-400 ${
                  location.pathname === link.path ? 'text-purple-400' : 'text-white/60'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleScrollLink(e, link.path)}
                className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-purple-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            )
          )}
          <Link
            to="/projects"
            className="bg-purple-500 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_18px_rgba(168,85,247,0.4)] hover:shadow-[0_0_28px_rgba(168,85,247,0.6)] hover:scale-105"
          >
            Portfolio
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4 text-white">
          <X size={32} />
        </button>
        <div className="flex flex-col h-full px-10 pt-32 gap-8">
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-purple-400 transition-colors">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.path} onClick={(e) => handleScrollLink(e, link.path)} className="text-4xl font-bold hover:text-purple-400 transition-colors">
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
