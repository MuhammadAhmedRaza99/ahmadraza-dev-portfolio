import React from 'react';
import { Heart, ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-black flex items-center gap-3 mb-6">
              <span className="purple-glow-text uppercase tracking-tighter">
                {portfolioData.name}<span className="text-purple">.</span>
              </span>
            </Link>
            <p className="opacity-60 max-w-sm mb-8 leading-relaxed">
              Data Science student at MAJU with a passion for building intelligent systems and uncovering deep insights from data.
            </p>
            <div className="flex gap-4">
              <a href={portfolioData.socials.find(s => s.name === "GitHub")?.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-purple transition-all"><GithubIcon size={18} /></a>
              <a href={portfolioData.socials.find(s => s.name === "LinkedIn")?.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-purple transition-all"><LinkedinIcon size={18} /></a>
              <a href={portfolioData.socials.find(s => s.name === "Mail")?.link} className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-purple transition-all"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><Link to="/" className="hover:text-purple transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-purple transition-colors">Projects</Link></li>
              <li><a href="/#contact" className="hover:text-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple mb-6">Education</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li>MAJU (University)</li>
              <li>DJ Govt Science College</li>
              <li>Data Science Track</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-xs opacity-40 font-mono">
            © {currentYear} {portfolioData.name}. DATA_DRIVEN_EXCELLENCE
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-purple/50 transition-all text-purple"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
