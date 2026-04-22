import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="bg-opacity-50" style={{ background: 'var(--bg-color)' }}>
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              {portfolioData.about.bio}
            </p>
            
            <div className="space-y-4 pt-4">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="text-accent-primary" style={{ color: 'var(--accent-primary)' }} />
                Education
              </h4>
              <div className="space-y-4">
                {portfolioData.about.education.map((edu, index) => (
                  <div key={index} className="border-l-2 pl-4 ml-3" style={{ borderColor: 'var(--accent-primary)' }}>
                    <h5 className="font-bold">{edu.degree}</h5>
                    <p className="text-sm opacity-80">{edu.institution} | {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="card flex flex-col items-center justify-center p-4 text-center group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <skill.icon size={32} className="mb-3 transition-transform group-hover:scale-110" style={{ color: 'var(--accent-primary)' }} />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
