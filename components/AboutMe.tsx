import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  "Framer Motion", "React.js", "Smooth UI Animations", 
  "Clean Code", "Performance-Focused", "Figma", "Interactive UI"
];

const EXPERIENCE = [
  { role: "Freelance", company: "Osdire", year: "Currently" },
  { role: "Full Stack Dev", company: "EVU", year: "Currently" },
  { role: "Frontend Dev", company: "Aortem", year: "Sept 2025" },
];

export const AboutMe: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-[#F0F0F2] text-[#1a1a1a] overflow-hidden">
      
      {/* ================= BACKGROUND LAYERS (Consistent with Hero) ================= */}
      
      {/* 1. Radial Fade */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F2_85%)] pointer-events-none" />

      {/* 2. Noise Texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1250px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: TEXT INFO */}
          <div className="flex flex-col pt-4">
            <h2 className="font-satoshi font-bold text-[60px] md:text-[88px] leading-[0.9] tracking-tighter text-[#111] mb-8">
              About Me.
            </h2>
            
            <p className="font-inter text-gray-600 text-base md:text-[18px] leading-[1.6] max-w-[480px] mb-12 font-medium">
              I’m Saba, a Frontend & Full-Stack Software Developer building modern web apps 
              with <span className="text-black font-semibold">React, Next.js, and Node.js</span>, using Framer Motion and smart UI 
              interactions to create engaging user experiences.
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-black/10 mb-10"></div>

            {/* SKILLS: Pills with Hover */}
            <div className="flex flex-wrap gap-3 mb-16">
              {SKILLS.map((skill, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "#111", // Turns black on hover
                    color: "#fff",
                    borderColor: "#111"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="cursor-default px-5 py-2.5 bg-white border border-black/5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] rounded-full text-[14px] font-medium font-inter text-gray-700 tracking-tight transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* EXPERIENCE TABLE */}
            <div className="flex flex-col gap-2">
              <h3 className="font-satoshi font-bold text-xl text-[#111] mb-4">Experience</h3>
              {EXPERIENCE.map((job, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0.8, x: 0 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.8)" }}
                  className="group grid grid-cols-[1.2fr_1.5fr_0.5fr] items-center p-4 -mx-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-black/5 cursor-default border border-transparent hover:border-black/5"
                >
                  <span className="text-[#111] font-satoshi font-bold text-[16px]">{job.role}</span>
                  <span className="text-gray-500 font-inter text-[15px] group-hover:text-black transition-colors">{job.company}</span>
                  <span className="text-right text-gray-400 font-inter text-[14px] group-hover:text-gray-600">{job.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE */}
          <motion.div 
            className="w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             {/* Decorative blob behind image */}
             <div className="absolute top-10 right-10 w-full h-full bg-[#e5e5e5] rounded-2xl -z-10 transform rotate-3" />

            <motion.div 
              className="w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/10 border border-white/50"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <motion.img 
                // Starts grayscale, color on hover
                initial={{ filter: "grayscale(100%) contrast(1.1)" }}
                whileHover={{ scale: 1.05, filter: "grayscale(0%) contrast(1)" }}
                transition={{ duration: 0.7 }}
                src="https://framerusercontent.com/images/roWFLkzHAotwSx5UxGPxpxMeA.jpg" 
                alt="Saba Portrait" 
                className="w-full h-auto object-cover aspect-[3/4] md:aspect-[4/5]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};