import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  // 1. We attach this ref to the scrolling wrapper, NOT the fixed footer.
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 2. This perfectly detects when the user actually scrolls to the footer!
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  // 3. Premium Spring/Fade Animations (Matches your FAQ section!)
  const customEase =[0.16, 1, 0.3, 1];

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.4, delayChildren: 0.2 } // Increased stagger so they appear one by one
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: customEase } } // Increased duration to 1.5s for a buttery slow float
  };

  return (
    /* ================= THE REVEAL WRAPPER ================= */
    <div 
      ref={containerRef}
      className="relative h-[100vh] min-h-[700px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      
      {/* ================= FIXED FOOTER ================= */}
      <footer className="fixed bottom-0 w-full h-[100vh] min-h-[700px] bg-[#F0F0F2] text-[#1a1a1a] font-sans px-6 overflow-hidden selection:bg-black/10 selection:text-black flex flex-col justify-center">
        
        {/* --- EXACT ORIGINAL BACKGROUND & SHADE --- */}
        <div className="absolute inset-0 z-0 h-full">
          <video 
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 mix-blend-multiply filter invert contrast-125 saturate-0"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Radial Fade */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F2_85%)] pointer-events-none" />

        {/* --- MILKY TRANSLUCENT GLOW --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-[80vw] max-w-[800px] h-[500px] bg-white opacity-60 blur-[120px] rounded-full pointer-events-none" />

        {/* Noise Texture */}
        <div className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>


        {/* ================= CONTENT (ANIMATED) ================= */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          // We trigger "show" ONLY when the user scrolls down to see it
          animate={isInView ? "show" : "hidden"}
          className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center mt-12"
        >
          
          {/* --- Animated Badge --- */}
          <motion.div variants={fadeUpItem} className="mb-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              <span className="text-[12px] font-inter text-gray-700 font-semibold tracking-widest uppercase">
                Open to Collaboration
              </span>
            </div>
          </motion.div>

          {/* --- Animated Heading (With grey italic 'build' word) --- */}
          <motion.h2 variants={fadeUpItem} className="font-satoshi font-medium tracking-tight leading-[1.15] text-[40px] sm:text-[56px] lg:text-[68px] text-[#111] text-center max-w-4xl mb-14 drop-shadow-sm">
            Ideas don’t <span className="font-serif italic font-light text-gray-400 mx-1">build</span> themselves.  
            <br className="hidden md:block" /> Let’s talk.
          </motion.h2>

          {/* --- Animated Side-by-Side Links --- */}
          <motion.div variants={fadeUpItem} className="flex flex-row items-center justify-center gap-10 md:gap-16">
            <a 
              href="https://www.linkedin.com/in/saba-fathima-8a68a9271/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[22px] md:text-[26px] font-satoshi font-medium text-[#111] border-b-[1.5px] border-[#111]/40 pb-1 hover:border-[#111] hover:text-gray-600 transition-all duration-300"
            >
              LinkedIn
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </a>

            <a 
              href="https://github.com/sabaf0186" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[22px] md:text-[26px] font-satoshi font-medium text-[#111] border-b-[1.5px] border-[#111]/40 pb-1 hover:border-[#111] hover:text-gray-600 transition-all duration-300"
            >
              GitHub
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </a>
          </motion.div>

        </motion.div>

        {/* ================= BOTTOM BAR (NO LINE) ================= */}
        {/* Placed absolutely at the bottom with a smooth slow fade-in */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="absolute bottom-10 w-full left-0 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 font-inter text-[14px] font-medium z-10"
        >
          <a href="mailto:sabaf0186@gmail.com" className="hover:text-[#111] transition-colors duration-300">
            sabaf0186@gmail.com
          </a>

          <div>
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </motion.div>

      </footer>
    </div>
  );
}