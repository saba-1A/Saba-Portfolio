import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: "01",
    title: "Define & Strategy",
    description: "We dive deep into your goals, target audience, and technical requirements to create a roadmap that ensures success from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "I craft high-fidelity designs and interactive prototypes, focusing on user experience, accessibility, and modern aesthetics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: "03",
    title: "Development",
    description: "Translation of designs into pixel-perfect code using React, Next.js, and Node.js, ensuring clean architecture and high performance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Rigorous testing across devices and browsers to ensure the application is bug-free, secure, and optimized for speed.",
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Seamless deployment to production followed by ongoing maintenance and updates to keep your product running smoothly.",
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-16 bg-[#F0F0F2] text-[#1a1a1a] overflow-hidden">
      
      {/* CSS to hide scrollbar but allow scrolling */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_left,transparent_0%,#F0F0F2_80%)] pointer-events-none" />
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* 
         GRID CONTAINER 
      */}
      <div className="relative z-10 max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:h-[700px]">
        
        {/* ================= LEFT SIDE: FIXED IMAGE ================= */}
        <div className="hidden lg:block h-full w-full">
          <div className="relative group rounded-[32px] overflow-hidden shadow-2xl shadow-black/10 border border-white/60 bg-white h-full transform transition-transform duration-700 hover:scale-[1.01]">
            
            {/* 
               IMAGE CHOICE: 
               A dedicated workspace showing a laptop, notebook, and wireframing.
               This represents "Planning" and "Creation" perfectly.
               Color Palette: White, Gray, Black (Matches theme).
            */}
            <img 
              src="https://i.pinimg.com/1200x/de/ff/64/deff64ee22fcca4c6179c975a1b1f5e9.jpg" 
              alt="Digital Product Design Process" 
              className="w-full h-full object-cover transition-all duration-700"
            />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

            {/* Glassmorphic Badge */}
            <div className="absolute top-8 left-8 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
               <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </div>
                <span className="text-white/90 text-xs font-medium tracking-wide font-inter">Strategy Phase</span>
            </div>

            {/* Bottom Text Content */}
            <div className="absolute bottom-10 left-10 text-white max-w-sm">
                <h3 className="font-satoshi font-bold text-3xl mb-2">From Concept to Code</h3>
                <p className="font-inter text-sm text-white/80 leading-relaxed border-l-2 border-white/30 pl-4">
                  Planning is the most crucial part of development. We ensure every detail is mapped before a single line of code is written.
                </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: SCROLLABLE CONTENT ================= */}
        <div className="flex flex-col h-full lg:overflow-y-auto hide-scrollbar relative pr-2">
          
          {/* Header Area (Scrolls with content) */}
          <div className="flex flex-col mb-10 shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-fit flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] mb-6"
            >
               <div className="w-1.5 h-1.5 rounded-full bg-[#111] animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase font-satoshi">Workflow</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-satoshi text-[56px] md:text-[72px] font-bold tracking-tighter leading-[0.95] mb-6 text-[#111]"
            >
              My Process.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-[16px] max-w-md leading-relaxed mb-8 font-inter font-medium"
            >
              From concept to deployment, I follow a refined structured approach ensuring quality and speed.
            </motion.p>
            
            <div className="h-px w-full bg-black/5 mb-6" />
          </div>

          {/* Cards Container with Framer Motion Stagger */}
          <div className="flex flex-col gap-5 pb-20">
            {STEPS.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-[24px] bg-white group transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-transparent hover:border-black/5 shrink-0"
                style={{ boxShadow: '0 4px 10px -2px rgba(0, 0, 0, 0.02)' }}
              >
                {/* Large Number Watermark */}
                <div className="absolute top-6 right-8 text-[40px] font-satoshi font-black text-black/5 group-hover:text-black/10 transition-colors duration-500 select-none">
                  {step.number}
                </div>
                
                {/* Icon Circle */}
                <div className="mb-5 w-12 h-12 rounded-2xl bg-[#F0F0F2] flex items-center justify-center text-[#111] group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                
                <h3 className="font-satoshi text-[20px] font-bold text-[#111] tracking-tight mb-3">
                  {step.title}
                </h3>
                
                {/* Animated Line */}
                <div className="h-0.5 w-12 bg-black/10 mb-4 group-hover:w-full group-hover:bg-black transition-all duration-500 ease-out"></div>
                
                <p className="font-inter text-gray-500 text-[15px] leading-relaxed group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

           {/* 
              Bottom Fade Overlay 
              Stick to bottom of the container to show there is more content 
           */}
           <div className="sticky bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F0F2] via-[#F0F0F2]/80 to-transparent pointer-events-none lg:block hidden" />

        </div>
      </div>
    </section>
  );
};