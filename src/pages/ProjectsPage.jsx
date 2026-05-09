import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, Filter, BarChart2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 container min-h-screen">
      <div className="flex flex-col items-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">My Work</h1>
        <p className="text-xl opacity-80 max-w-2xl text-center">
          A showcase of my research projects, model implementations, and data engineering pipelines.
        </p>
      </div>

      {/* Project Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
        {portfolioData.about.stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 text-center border-purple/10">
            <p className="text-3xl font-bold text-purple mb-1">{stat.value}</p>
            <p className="text-xs uppercase tracking-widest opacity-60 font-mono">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              filter === cat 
              ? 'bg-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
              : 'glass hover:border-purple/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="glass-card flex flex-col h-full group overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="p-8 flex-grow">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 px-3 py-1 border border-white/5 rounded-full">
                  {project.category}
                </span>
                <BarChart2 className="text-purple opacity-40 group-hover:opacity-100 transition-opacity" size={20} />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple transition-colors">
                {project.title}
              </h3>

              <p className="opacity-60 mb-8 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Impact Card */}
              <div className="p-4 rounded-xl bg-purple/5 border border-purple/10 mb-6 group-hover:bg-purple/10 transition-colors">
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-1">Impact</p>
                <p className="text-sm font-semibold italic">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-8 py-5 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold opacity-40 hover:opacity-100 hover:text-purple transition-all">
                <GitPullRequest size={16} /> CODE
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold opacity-40 hover:opacity-100 hover:text-purple transition-all">
                  <ExternalLink size={16} /> DEMO
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
