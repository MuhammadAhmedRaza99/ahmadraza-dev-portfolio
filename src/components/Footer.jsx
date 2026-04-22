import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Visualizations', href: '#viz' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-color)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      {/* Main Footer Content */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <a href="#" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
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
            <p
              className="text-sm leading-7 max-w-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              Turning complex data into actionable insights. Passionate about building
              machine learning models and creating compelling data stories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4
              className="text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3" style={{ listStyle: 'none' }}>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)', lineHeight: '2' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Back to Top */}
          <div className="space-y-5">
            <h4
              className="text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: 'var(--text-primary)' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:ahmad@example.com"
                className="block text-sm font-medium transition-colors duration-300"
                style={{ color: 'var(--text-secondary)', lineHeight: '2' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                ahmad@example.com
              </a>
              {portfolioData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="block text-sm font-medium transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)', lineHeight: '2' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="mt-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full"
        style={{ borderTop: '1px solid var(--border-color)' }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm tracking-wide"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
          >
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <p
            className="text-sm tracking-wide flex items-center gap-2"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}
          >
            Built with
            <Heart size={14} style={{ color: '#ef4444' }} fill="#ef4444" />
            using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
