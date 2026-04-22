import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Visualizations', href: '#viz' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 shadow-lg'
          : 'py-6'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      }}
    >
      <div
        className="w-full max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between"
        style={{ minHeight: '48px' }}
      >
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 shrink-0">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform duration-300 group-hover:rotate-[12deg] group-hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            }}
          >
            {portfolioData.name[0]}
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {portfolioData.name.split(' ')[0]}
            <span style={{ color: 'var(--accent-primary)' }}>.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10" style={{ listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 group"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
            style={{
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border-color)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
            style={{
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'var(--bg-color)' }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer"
          style={{ color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col h-full px-8 pt-28 pb-10">
          <ul className="flex flex-col gap-6" style={{ listStyle: 'none' }}>
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-3xl font-bold tracking-tight py-2 transition-colors duration-300"
                  style={{
                    color: 'var(--text-primary)',
                    animationDelay: `${index * 100}ms`,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                >
                  <span
                    className="text-sm font-medium mr-3"
                    style={{ color: 'var(--accent-primary)', opacity: 0.6 }}
                  >
                    0{index + 1}
                  </span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="mt-auto pt-8"
            style={{ borderTop: '1px solid var(--border-color)' }}
          >
            <p
              className="text-sm tracking-wide"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
            >
              Let's connect and build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
