import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, Database, BrainCircuit, BarChart3, ArrowUpRight, Cpu, Microscope, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'ML Ops', 'Deep Learning', 'NLP', 'Anomaly Detection'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Deep Learning': return <BrainCircuit size={20} />;
      case 'ML Ops': return <Zap size={20} />;
      case 'NLP': return <Cpu size={20} />;
      case 'Anomaly Detection': return <Microscope size={20} />;
      default: return <Database size={20} />;
    }
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="container relative z-10" data-aos="fade-up">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title" data-subtitle="PORTFOLIO">Technical Case Studies</h2>
          <p className="text-center max-w-2xl opacity-80 text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
            Experimental results and production-grade architectures developed during my research and academic career.
          </p>
        </div>

        {/* Technical Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                filter === cat 
                ? 'bg-sky-500/10 border-sky-500 text-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                : 'border-white/5 hover:border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card h-full flex flex-col p-0 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all overflow-hidden">
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-lg bg-sky-500/10 text-sky-500">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-500" />
                  </h3>

                  <p className="opacity-70 mb-8 leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/10 mb-8">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">Measured Impact</h4>
                    <p className="text-sm font-semibold italic opacity-90">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono tracking-wider px-3 py-1 rounded-md bg-white/5 border border-white/5" 
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-5 bg-white/[0.02] border-t border-white/5 flex items-center gap-8">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold opacity-40 hover:opacity-100 hover:text-sky-500 transition-all">
                    <GitPullRequest size={16} /> CODE_REPRO
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold opacity-40 hover:opacity-100 hover:text-indigo-400 transition-all">
                      <ExternalLink size={16} /> LIVE_SYSTEM
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

