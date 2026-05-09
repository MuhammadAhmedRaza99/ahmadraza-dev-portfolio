import React from 'react';
import { GraduationCap, Target, Rocket, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 container min-h-screen">
      <div className="flex flex-col items-center mb-20" data-aos="fade-down">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">About Me</h1>
        <p className="text-xl opacity-80 max-w-3xl text-center leading-relaxed">
          {portfolioData.about.bio}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Education Timeline */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
            <GraduationCap className="text-purple" /> Education
          </h2>
          <div className="space-y-12">
            {portfolioData.about.education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l border-purple/30 pb-2">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-purple glow-shadow"></div>
                <div className="glass-card p-6">
                  <span className="text-purple font-mono text-sm mb-2 block flex items-center gap-2">
                    <Calendar size={14} /> {edu.year}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-purple/80 font-semibold mb-3">{edu.institution}</p>
                  <p className="opacity-70 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey & Goals */}
        <div className="space-y-12" data-aos="fade-left">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <Rocket className="text-purple" /> My Journey
            </h2>
            <p className="opacity-80 leading-relaxed">
              {portfolioData.about.journey}
            </p>
          </div>

          <div className="glass-card p-8 border-purple/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <Target className="text-purple" /> Future Goals
            </h2>
            <p className="opacity-80 leading-relaxed">
              {portfolioData.about.goals}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
