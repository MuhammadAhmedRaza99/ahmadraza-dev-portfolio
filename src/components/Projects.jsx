import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, Database, BrainCircuit, BarChart3, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  
  const categories = ['All', 'Data Analysis', 'ML', 'Visualization'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'ML': return <BrainCircuit size={20} />;
      case 'Data Analysis': return <Database size={20} />;
      case 'Visualization': return <BarChart3 size={20} />;
      default: return <Database size={20} />;
    }
  };

  return (
    <section id="projects" className="relative">
      <div className="container" data-aos="fade-up">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title">Case Studies</h2>
          <p className="text-center max-w-xl opacity-70" style={{ color: 'var(--text-secondary)' }}>
            Each project is a journey through data—from cleaning and exploration to modeling and storytelling.
          </p>
        </div>

        {/* Premium Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === cat 
                ? 'text-white shadow-lg lg:scale-110' 
                : 'hover:bg-accent-primary/5 bg-transparent border border-border-color'
              }`}
              style={{ 
                backgroundColor: filter === cat ? 'var(--accent-primary)' : 'transparent',
                color: filter === cat ? 'white' : 'var(--text-primary)',
                borderColor: filter === cat ? 'var(--accent-primary)' : 'var(--border-color)'
              }}
            >
              {cat}
              {filter === cat && <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent-secondary border-4 border-white dark:border-slate-900 shadow-sm animate-pulse"></span>}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glow Aura */}
              <div className={`absolute -inset-2 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-[32px] blur-xl transition-all duration-500 opacity-0 group-hover:opacity-40 group-hover:from-blue-500/20 group-hover:to-purple-500/20`}></div>
              
              <div className="card h-full flex flex-col p-8 relative overflow-hidden">
                {/* ID Badge */}
                <span className="absolute top-4 right-8 text-6xl font-black opacity-[0.03] select-none pointer-events-none italic" style={{ color: 'var(--text-primary)' }}>
                  0{project.id}
                </span>

                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10" style={{ color: 'var(--accent-primary)' }}>
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-border-color">
                    {project.category}
                  </span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="opacity-70 mb-8 leading-relaxed line-clamp-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-8 border-t space-y-6" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[11px] font-bold px-3 py-1.5 rounded-lg glass border border-white/10" 
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 hover:text-accent-primary transition-all">
                      <GitPullRequest size={18} /> Source
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 hover:text-accent-primary transition-all">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
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
