import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip, Legend
} from 'recharts';
import { portfolioData } from '../data/portfolioData';

const DataViz = () => {
  const COLORS = ['#2563eb', '#7c3aed', '#38bdf8', '#818cf8'];

  return (
    <section id="viz" className="bg-opacity-50" style={{ background: 'var(--bg-color)' }}>
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">Data Visualizations</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          A visual representation of my skill proficiency across various data science domains and my project experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Radar Chart: Skills */}
          <div className="card h-[450px] flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">Skill Proficiency</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={portfolioData.visualizations.skillProficiency}>
                <PolarGrid stroke="var(--border-color)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-primary)', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name={portfolioData.name}
                  dataKey="A"
                  stroke="var(--accent-primary)"
                  fill="var(--accent-primary)"
                  fillOpacity={0.6}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart: Project Distribution */}
          <div className="card h-[450px] flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">Project Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData.visualizations.projectDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {portfolioData.visualizations.projectDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataViz;
