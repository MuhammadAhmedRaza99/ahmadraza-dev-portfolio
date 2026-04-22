import React from 'react';

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Light Mode Orbs / Subtle Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Moving Mesh Gradient (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
        <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] bg-cyan-300/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[60%] left-[60%] w-[350px] h-[350px] bg-indigo-300/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[40%] left-[10%] w-[250px] h-[250px] bg-fuchsia-300/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '7s' }}></div>
      </div>

      {/* Grid Pattern overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(var(--text-secondary) 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
      </div>

      <style jsx="true">{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BackgroundOrbs;
