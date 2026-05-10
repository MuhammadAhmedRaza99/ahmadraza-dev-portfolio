import React from 'react';
import {Mail,MapPin,Send} from 'lucide-react';
import {GithubIcon,LinkedinIcon,TwitterIcon} from './SocialIcons';

const Contact=()=>{
  return(
    <section id="contact" className="relative py-24">
      <div className="container relative z-10" data-aos="fade-up">
        <div className="flex flex-col items-center mb-20">
          <h2 className="section-title uppercase tracking-[0.3em] text-sm text-purple mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-center">Let's Build Something</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10" data-aos="fade-right">
            <div className="glass-card p-8 flex items-start gap-6 border-purple/10">
              <div className="p-4 rounded-xl bg-purple/10 text-purple">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Email Me</h4>
                <p className="opacity-60">ahmad@example.com</p>
              </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6 border-purple/10">
              <div className="p-4 rounded-xl bg-purple/10 text-purple">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Location</h4>
                <p className="opacity-60">Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex gap-6 pt-6 justify-center lg:justify-start">
              <a href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-purple hover:border-purple/50 transition-all"><GithubIcon size={20} /></a>
              <a href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-purple hover:border-purple/50 transition-all"><LinkedinIcon size={20} /></a>
              <a href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-purple hover:border-purple/50 transition-all"><TwitterIcon size={20} /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" data-aos="fade-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest opacity-60">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple/30 transition-all"/>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest opacity-60">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple/30 transition-all"/>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest opacity-60">Message</label>
              <textarea 
                rows="6"
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple/30 transition-all resize-none"
              ></textarea>
            </div>

            <button type="button" className="btn-glow w-full flex items-center justify-center gap-3 py-4">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
