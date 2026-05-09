import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell
} from 'recharts';
import { portfolioData } from '../data/portfolioData';

const DataViz = () => {
  const COLORS = ['#A855F7', '#7E22CE', '#D8B4FE', '#6B21A8'];

  return (
    <section id="viz" className="relative py-24 overflow-hidden">
      <div className="container relative z-10" data-aos="fade-up">
        <div className="flex flex-col items-center mb-20">
          <h2 className="section-title uppercase tracking-[0.3em] text-sm text-purple mb-4">Analytics</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-center">Technical Proficiency</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Progress Bars */}
          <div className="space-y-8" data-aos="fade-right">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-purple"></span> Core Expertise
            </h4>
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <skill.icon size={18} className="text-purple" />
                    <span className="font-bold text-sm uppercase tracking-widest">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono opacity-60">{skill.proficiency}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-purple shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Radar */}
          <div className="glass-card p-10 flex flex-col items-center" data-aos="fade-left">
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-purple mb-10">Domain Expertise</h4>
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={portfolioData.visualizations.skillProficiency}>
                  <PolarGrid stroke="rgba(255,255,255,0.05)" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 600, fontFamily: 'var(--font-mono)' }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#A855F7"
                    fill="#A855F7"
                    fillOpacity={0.2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)'
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
};

export default DataViz;
