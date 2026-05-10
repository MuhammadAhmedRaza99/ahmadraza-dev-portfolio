import React, { useState } from 'react';
import { GitPullRequest, ExternalLink, BarChart2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const card = 'rounded-2xl backdrop-blur-xl bg-black/60 border border-white/5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
  const filtered = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-14 text-center" data-aos="fade-down">
          <h1
            className="font-black mb-5 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent [font-family:'Outfit',sans-serif]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            My Work
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            A showcase of my research projects, model implementations, and data engineering pipelines.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-aos="fade-up">
          {portfolioData.about.stats.map((stat, i) => (
            <div key={i} className="text-center p-5 rounded-2xl backdrop-blur-xl bg-black/60 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
              <p className="text-2xl font-black text-purple-400 [font-family:'Outfit',sans-serif]">{stat.value}</p>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat
                  ? 'bg-purple-500 text-white shadow-[0_0_18px_rgba(168,85,247,0.4)]'
                  : 'backdrop-blur-md bg-white/[0.03] border border-white/10 text-white/60 hover:border-purple-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`${card} flex flex-col h-full group overflow-hidden`}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
            >
              <div className="p-7 flex-grow">
                {/* Category + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/30 px-3 py-1 border border-white/5 rounded-full">
                    {project.category}
                  </span>
                  <BarChart2 className="text-purple-400 opacity-30 group-hover:opacity-100 transition-opacity" size={18} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Impact */}
                <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 group-hover:bg-purple-500/10 transition-colors mb-5">
                  <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-sm font-semibold italic text-white/80">{project.impact}</p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/5 text-white/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[11px] font-bold text-white/30 hover:text-purple-400 hover:opacity-100 transition-all"
                >
                  <GitPullRequest size={15} /> CODE
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[11px] font-bold text-white/30 hover:text-purple-400 hover:opacity-100 transition-all"
                  >
                    <ExternalLink size={15} /> DEMO
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
