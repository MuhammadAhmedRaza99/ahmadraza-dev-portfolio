import React from 'react';

const BackgroundOrbs=()=>(
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0"
      style={{ backgroundImage:
          'linear-gradient(rgba(168,85,247,0.05) 1px, transparent 1px), linear-gradient(90deg,rgba(168,85,247,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}/>
    <div
      className="absolute inset-0"
      style={{background:'radial-gradient(circle at 50% 40%, rgba(126,34,206,0.08), transparent 70%)',
      }}/>
    <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] animate-pulse" />
    <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] animate-pulse"
      style={{animationDelay:'2s'}}/>
  </div>
);
export default BackgroundOrbs;
