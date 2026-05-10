import React from 'react';
import { GraduationCap, Target, Rocket, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const card = 'p-6 rounded-2xl backdrop-blur-xl bg-black/60 border border-white/5 hover:border-purple-500/30 transition-all duration-300';

const AboutPage = () => (
  <div className="min-h-screen pt-32 pb-20">
    <div className="max-w-6xl mx-auto px-5 lg:px-10">

      {/* Header */}
      <div className="flex flex-col items-center mb-20 text-center" data-aos="fade-down">
        <h1
          className="font-black mb-5 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent [font-family:'Outfit',sans-serif]"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          About Me
        </h1>
        <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
          {portfolioData.about.bio}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14">

        {/* Education Timeline */}
        <div data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
            <GraduationCap className="text-purple-400" size={28} /> Education
          </h2>
          <div className="space-y-8">
            {portfolioData.about.education.map((edu, i) => (
              <div key={i} className="relative pl-8 border-l border-purple-500/25 pb-2">
                {/* Dot */}
                <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                <div className={card}>
                  <span className="text-purple-400 font-mono text-xs mb-2 flex items-center gap-2">
                    <Calendar size={13} /> {edu.year}
                  </span>
                  <h3 className="text-lg font-bold mb-1 text-white">{edu.degree}</h3>
                  <p className="text-purple-400/80 font-semibold text-sm mb-2">{edu.institution}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey & Goals */}
        <div className="space-y-8" data-aos="fade-left">
          <div className={card}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
              <Rocket className="text-purple-400" size={22} /> My Journey
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">{portfolioData.about.journey}</p>
          </div>

          <div className={`${card} border-purple-500/20`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3 text-white">
              <Target className="text-purple-400" size={22} /> Future Goals
            </h2>
            <p className="text-white/60 leading-relaxed text-sm">{portfolioData.about.goals}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.about.stats.map((stat, i) => (
              <div key={i} className={`${card} text-center`}>
                <p className="text-2xl font-black text-purple-400 [font-family:'Outfit',sans-serif]">{stat.value}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default AboutPage;
