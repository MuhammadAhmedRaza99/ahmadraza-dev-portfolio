import React from 'react';
import {Send,GitPullRequest,User,Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Contact Text Content (2/5) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Let's <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Collaborate</span> On Your Next Project
              </h2>
              <p className="text-lg opacity-70 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I am currently open for full-time opportunities and freelance projects. Let's talk about how my analytical skills can help your business.
              </p>
            </div>

            <div className="space-y-4 pt-10 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="text-accent-primary" size={24} /> 
                Direct Contact
              </h3>
              <a href="mailto:ahmad@example.com" className="group flex items-center gap-4 text-2xl font-medium transition-all hover:translate-x-2">
                ahmad@example.com
                <div className="w-10 h-10 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              {portfolioData.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.link} 
                  className="p-4 rounded-2xl glass border border-transparent hover:border-accent-primary transition-all group shadow-sm hover:shadow-lg"
                  title={social.name}
                >
                  <social.icon size={22} className="group-hover:text-accent-primary transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form (3/5) */}
          <div className="lg:col-span-3">
            <div className="card !p-10 lg:!p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60 px-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-border-color py-4 focus:outline-none focus:border-accent-primary transition-colors font-medium text-lg" 
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60 px-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-border-color py-4 focus:outline-none focus:border-accent-primary transition-colors font-medium text-lg" 
                    placeholder="name@company.com"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold opacity-60 px-1">How can I help?</label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-transparent border-b-2 border-border-color py-4 focus:outline-none focus:border-accent-primary transition-colors font-medium text-lg resize-none" 
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="btn btn-primary w-full md:w-auto px-12 py-5 text-xl">
                    Get In Touch <Send size={22} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
