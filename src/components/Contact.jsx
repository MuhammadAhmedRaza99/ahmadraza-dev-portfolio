import React from 'react';
import {Mail,MapPin,Send} from 'lucide-react';
import {GithubIcon,LinkedinIcon,TwitterIcon} from './SocialIcons';

const infoItems = [
  { icon: Mail,   label: 'Email Me', value: 'ahmad@example.com' },
  { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan' },
];

const socialLinks = [
  { href: 'https://github.com',   Icon: GithubIcon  },
  { href: 'https://linkedin.com', Icon: LinkedinIcon },
  { href: '#',                    Icon: TwitterIcon  },
];

const formFields = [
  {id:'name',label: 'Name',type:'text',placeholder: 'John Doe'          },
  {id:'email',label:'Email',type:'email',placeholder: 'john@example.com'  },
];

const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-5 lg:px-10" data-aos="fade-up">

      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-purple-400 mb-3">
          Get In Touch
        </span>
        <h2
          className="font-black text-center text-white"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: "'Outfit', sans-serif" }}
        >
          Let's Build Something
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-14">

        {/* ── Contact Info ── */}
        <div className="space-y-6" data-aos="fade-right">

          {infoItems.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-5 p-6 rounded-2xl backdrop-blur-xl bg-black/60 border border-white/5"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Icon size={22} />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-white">{label}</h4>
                <p className="text-white/50 text-sm">{value}</p>
              </div>
            </div>
          ))}

          {/* Social icons */}
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/10 text-white hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Contact Form ── */}
        <form className="space-y-5" data-aos="fade-left" onSubmit={(e) => e.preventDefault()}>

          <div className="grid md:grid-cols-2 gap-5">
            {formFields.map(({ id, label, type, placeholder }) => (
              <div key={id} className="space-y-1.5">
                <label
                  htmlFor={id}
                  className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/40"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="How can I help you?"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:scale-[1.02]"
          >
            Send Message <Send size={18} />
          </button>

        </form>

      </div>
    </div>
  </section>
);

export default Contact;
