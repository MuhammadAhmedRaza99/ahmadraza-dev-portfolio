import React from 'react';
import { GraduationCap, Code2, Database, BrainCircuit, Globe, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About=()=>{
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <h2 className="section-title" data-subtitle="BACKGROUND">Engineering Intelligence</h2>
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">The Mission</h3>
              <p className="text-lg leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                {portfolioData.about.bio}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-6">
                <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-sky-500 flex items-center gap-2">
                  <GraduationCap size={18} />
                  Academic Foundation
                </h4>
                <div className="space-y-6">
                  {portfolioData.about.education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10">
                      <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-sky-500"></div>
                      <h5 className="font-bold text-lg">{edu.degree}</h5>
                      <p className="text-sm font-medium opacity-60 mt-1">{edu.institution}</p>
                      <p className="text-xs font-mono text-sky-500 mt-2">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                  <Award size={18} />
                  Core Philosophies
                </h4>
                <ul className="space-y-4 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    Data-first architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    Scalable ML implementation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    Statistical rigor in EDA
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="card p-8 bg-white/[0.02] border-white/5">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Code2 className="text-sky-500" />
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioData.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-white/5 group-hover:bg-sky-500/10 transition-colors">
                      <skill.icon size={20} className="text-sky-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono opacity-40 uppercase tracking-tighter">{skill.category}</span>
                      <span className="text-sm font-bold">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
