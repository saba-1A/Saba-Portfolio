import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "Artisan",
    image: "/artisan2.png",
    link: "https://artisan-food-app.vercel.app/"
  },

  {
    title: "Dashboard",
    image: "/new-project-2.jpg",
    link: null
  },
  {
    title: "Spec Flow Ai",
    image: "/spec-flow-ai2.webp",
    link: "https://spec-flow-iota.vercel.app/"
  }
];

export const RecentWorks: React.FC = () => {
  const [toastIndex, setToastIndex] = React.useState<number | null>(null);

  const handleComingSoon = (index: number) => {
    setToastIndex(index);
    setTimeout(() => setToastIndex(null), 2500);
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-[#F0F0F2] text-[#1a1a1a] overflow-hidden">
      
      {/* ================= BACKGROUND LAYERS (From Reference) ================= */}
      
      {/* 1. Radial Fade */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F2_85%)] pointer-events-none" />

      {/* 2. Noise Texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-[1250px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 group cursor-pointer w-fit">
          <h3 className="text-gray-500 text-lg font-medium group-hover:text-[#111] transition-colors font-satoshi">
            Recent Works
          </h3>
          <motion.div 
            whileHover={{ x: 3 }} // Changed from y to x for a "forward" motion feels better here
            className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm group-hover:border-black/30 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-90deg] origin-center" /> 
              {/* Rotated arrow to point right, or remove rotation to keep pointing down */}
            </svg>
          </motion.div>
        </div>

        {/* Grid: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              className="relative group aspect-video overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/5 border border-white/50"
              whileHover="hover"
              initial="initial"
            >
              {/* Project Image - Always Color, No Zoom */}
              <img
                src={project.image}
                alt={project.title}
                className={`h-full w-full ${project.link ? "object-cover" : "object-contain"}`}
              />

              {/* Gradient Overlay (Darkens slightly on hover to make text pop) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/*
                  SLIDE UP CONTAINER
              */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]">

                {/*
                    CLICKABLE BUTTON
                    Styled to match the "Silky/Milky" theme: White glassmorphism
                */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full border border-white/60 bg-white/90 backdrop-blur-md flex items-center justify-between hover:bg-white cursor-pointer shadow-lg shadow-black/5 transition-all"
                  >
                    <span className="text-base font-bold text-[#111] font-satoshi">
                      {project.title}
                    </span>

                    {/* Arrow Icon - Dark Color */}
                    <div className="bg-[#F0F0F2] p-1.5 rounded-full">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 10.5L10.5 3.5M10.5 3.5H3.5M10.5 3.5V10.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </a>
                ) : (
                  <button
                    onClick={() => handleComingSoon(index)}
                    className="w-full py-3.5 px-6 rounded-full border border-white/60 bg-white/90 backdrop-blur-md flex items-center justify-between hover:bg-white cursor-pointer shadow-lg shadow-black/5 transition-all"
                  >
                    <span className="text-base font-bold text-[#111] font-satoshi">
                      {project.title}
                    </span>

                    {/* Arrow Icon - Dark Color */}
                    <div className="bg-[#F0F0F2] p-1.5 rounded-full">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 10.5L10.5 3.5M10.5 3.5H3.5M10.5 3.5V10.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                )}

              </div>

              {/* Coming Soon Toast */}
              <div
                className={`absolute top-5 left-1/2 -translate-x-1/2 z-20 px-5 py-2.5 rounded-full bg-[#111] text-white text-[11px] tracking-[0.15em] font-satoshi font-bold uppercase shadow-xl transition-all duration-300 ${
                  toastIndex === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                Coming Soon
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};