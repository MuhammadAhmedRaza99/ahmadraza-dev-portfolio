import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip,
} from 'recharts';
import { portfolioData } from '../data/portfolioData';

const DataViz = () => (
  <section id="viz" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-5 lg:px-10" data-aos="fade-up">

      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-purple-400 mb-3">Analytics</span>
        <h2 className="text-4xl md:text-5xl font-black text-center text-white [font-family:'Outfit',sans-serif]">
          Technical Proficiency
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-14">

        {/* Skill Progress Bars */}
        <div className="space-y-7" data-aos="fade-right">
          <h3 className="text-lg font-bold flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-purple-500 inline-block" />
            Core Expertise
          </h3>
          {portfolioData.skills.map((skill, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <skill.icon size={16} className="text-purple-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">{skill.name}</span>
                </div>
                <span className="text-xs font-mono text-white/50">{skill.proficiency}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Radar Chart */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl bg-black/60 border border-white/5 flex flex-col items-center"
          data-aos="fade-left"
        >
          <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-400 mb-8">Domain Expertise</h3>
          <div className="w-full h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={portfolioData.visualizations.skillProficiency}>
                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 10, fontWeight: 600 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Proficiency" dataKey="A" stroke="#a855f7" fill="#a855f7" fillOpacity={0.2} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    border: '1px solid rgba(168,85,247,0.25)',
                    borderRadius: '10px',
                    fontSize: '12px',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default DataViz;
