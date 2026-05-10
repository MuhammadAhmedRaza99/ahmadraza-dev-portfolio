import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-5 lg:px-10 w-full relative z-10">
      <div className="flex flex-col items-center text-center">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-purple-500/5 border border-purple-500/20 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-400">
            Available for Innovation
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-black tracking-tighter leading-tight mb-6 [font-family:'Outfit',sans-serif]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          data-aos="zoom-out"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent [text-shadow:none]">
            {portfolioData.name}
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className="font-mono text-white/60 mb-8 flex flex-wrap items-center justify-center gap-2"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)' }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span>I am a</span>
          <span className="font-bold text-purple-400 underline decoration-purple-500/30 underline-offset-8">
            <Typewriter words={portfolioData.roles} loop={0} cursor cursorStyle="|" typeSpeed={75} deleteSpeed={40} delaySpeed={1800} />
          </span>
        </div>

        {/* Intro */}
        <p
          className="text-white/60 leading-relaxed mb-12 max-w-2xl"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {portfolioData.intro}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="350">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] hover:scale-105"
          >
            View Projects <ArrowRight size={18} />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl border border-white/10 hover:border-purple-500/50 backdrop-blur-md bg-white/[0.03] transition-all duration-300"
          >
            Contact Me <Mail size={18} />
          </a>
        </div>

        {/* Stats Cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          {portfolioData.about.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-5 rounded-2xl backdrop-blur-xl bg-black/60 border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl md:text-3xl font-black text-purple-400 mb-1 [font-family:'Outfit',sans-serif]">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-mono text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div
          className="mt-14 flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          {[
            { href: 'https://github.com',        icon: <GithubIcon size={22} />,   external: true  },
            { href: 'https://linkedin.com',       icon: <LinkedinIcon size={22} />, external: true  },
            { href: 'mailto:ahmad@example.com',   icon: <Mail size={22} />,         external: false },
          ].map(({ href, icon, external }, i) => (
            <a
              key={i}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
