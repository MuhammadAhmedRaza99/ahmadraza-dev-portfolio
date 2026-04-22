import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Play } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 relative overflow-hidden" id="hero">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in" 
               style={{ border: '1px solid var(--accent-primary)', background: 'rgba(var(--accent-primary-rgb), 0.05)' }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--accent-primary)' }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: 'var(--accent-primary)' }}></span>
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-primary)' }}>Available for projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight" data-aos="zoom-in" data-aos-duration="1200">
            Capturing <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Insights</span> From The Data Noise
          </h1>

          <h2 className="text-2xl md:text-4xl font-medium mb-10 min-h-[1.5em]" style={{ color: 'var(--text-secondary)' }} data-aos="fade-up" data-aos-delay="200">
            Hi, I'm {portfolioData.name.split(' ')[0]}, a{' '}
            <span className="font-bold underline decoration-accent-primary underline-offset-8" style={{ color: 'var(--text-primary)' }}>
              <Typewriter
                words={portfolioData.roles}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed opacity-80" data-aos="fade-up" data-aos-delay="400" style={{ color: 'var(--text-secondary)' }}>
            {portfolioData.intro}
          </p>

          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="600">
            <a href="#projects" className="btn btn-primary px-10 py-4 text-lg">
              Explore Portfolio <ArrowRight size={22} />
            </a>
            <button className="btn btn-outline px-10 py-4 text-lg backdrop-blur-md">
              Download CV <Download size={22} />
            </button>
          </div>

          {/* Video or Preview Badge */}
          <div className="mt-20 group relative cursor-pointer" data-aos="fade-up" data-aos-delay="800">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass px-8 py-4 rounded-full flex items-center gap-4 transition-all hover:scale-105 active:scale-95">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-blue-600 shadow-md">
                <Play fill="currentColor" size={20} />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold">Watch Video Intro</span>
                <span className="block text-xs opacity-60">2 Min • Case Study</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Decoration */}
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
