import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden" id="hero">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-10 animate-fade-in border-purple/20" 
               style={{ background: 'rgba(168, 85, 247, 0.05)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-purple">Available for Innovation</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]" data-aos="zoom-out">
            Hi, I'm <span className="text-gradient purple-glow-text">{portfolioData.name}</span>
          </h1>

          <div className="text-2xl md:text-4xl font-mono mb-10 h-12" data-aos="fade-up" data-aos-delay="200">
            <span className="opacity-60">I am a </span>
            <span className="font-bold text-purple underline decoration-purple/30 underline-offset-8">
              <Typewriter
                words={portfolioData.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-3xl leading-relaxed opacity-70 font-medium" data-aos="fade-up" data-aos-delay="400">
            {portfolioData.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-20" data-aos="fade-up" data-aos-delay="600">
            <Link to="/projects" className="btn-glow flex items-center gap-3">
              View Projects <ArrowRight size={20} />
            </Link>
            <a href="#contact" className="px-8 py-3 rounded-xl border border-white/10 hover:border-purple/50 transition-all font-bold flex items-center gap-3 glass">
              Contact Me <Mail size={20} />
            </a>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl" data-aos="fade-up" data-aos-delay="800">
            {portfolioData.about.stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-purple mb-2">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50 font-mono text-center">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-16 flex items-center gap-8 opacity-40 hover:opacity-100 transition-opacity" data-aos="fade-up" data-aos-delay="1000">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple transition-colors"><GithubIcon size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple transition-colors"><LinkedinIcon size={24} /></a>
            <a href="mailto:ahmad@example.com" className="hover:text-purple transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
    </section>
  );
};

export default Hero;
