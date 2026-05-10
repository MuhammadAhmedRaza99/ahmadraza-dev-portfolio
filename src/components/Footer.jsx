import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <span className="text-xl font-black uppercase tracking-tighter text-white [text-shadow:0_0_10px_rgba(168,85,247,0.4)]">
                {portfolioData.name}<span className="text-purple-500">.</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Data Science student at MAJU passionate about building intelligent systems
              and uncovering deep insights from data.
            </p>
            <div className="flex gap-3">
              {[
                { href: portfolioData.socials.find(s => s.name === 'GitHub')?.link,   icon: <GithubIcon size={18} /> },
                { href: portfolioData.socials.find(s => s.name === 'LinkedIn')?.link, icon: <LinkedinIcon size={18} /> },
                { href: portfolioData.socials.find(s => s.name === 'Mail')?.link,     icon: <Mail size={18} /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/10 text-white hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-400 mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link></li>
              <li><a href="/#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-400 mb-5">Education</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>MAJU — University</li>
              <li>DJ Govt Science College</li>
              <li>Data Science Track</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
            © {year} {portfolioData.name}. Data_Driven_Excellence
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/10 text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
