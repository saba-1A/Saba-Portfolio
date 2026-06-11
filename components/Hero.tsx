import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Globe, Layout, Layers, Server, Database, Smartphone, Cpu 
} from "lucide-react";

// ================= TECH STACK DATA =================
const TECH_STACK = [
  { name: "React", icon: <Code2 size={22} /> }, 
  { name: "Next.js", icon: <Globe size={22} /> },
  { name: "TypeScript", icon: <Layout size={22} /> },
  { name: "Tailwind", icon: <Layers size={22} /> },
  { name: "Node.js", icon: <Server size={22} /> },
  { name: "PostgreSQL", icon: <Database size={22} /> },
  { name: "React Native", icon: <Smartphone size={22} /> },
  { name: "GraphQL", icon: <Cpu size={22} /> },
];

export const Hero = () => {
  return (
    <div id="hero" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#F0F0F2] text-[#1a1a1a] font-sans selection:bg-black/10 selection:text-black">
      
      {/* ================= STYLES & FONTS ================= */}
      <style>
        {`
          @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
          .font-satoshi { font-family: 'Satoshi', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          
          /* The Infinite Loop Keyframe */
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
          }
        `}
      </style>

      {/* ================= BACKGROUND LAYERS (SHARED) ================= */}
      
      {/* 1. The Video Layer - Spans entire height including ticker */}
      <div className="absolute inset-0 z-0 h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 mix-blend-multiply filter invert contrast-125 saturate-0" 
        >
          <source src="public/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Radial Fade - Blends edges to grey */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F2_85%)] pointer-events-none" />

      {/* 3. Noise Texture - Uniform grain across everything */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>


      {/* ================= HERO MAIN CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 text-center pt-[140px]">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/40 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            <span className="text-[13px] font-inter text-gray-700 font-medium tracking-wide">
              Frontend & Full-Stack Development
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="font-satoshi font-bold tracking-tighter leading-[1.1] text-[52px] sm:text-[80px] lg:text-[100px] text-[#111] max-w-[1100px] mx-auto drop-shadow-sm">
          <BlurWord delay={0.1}>Modern</BlurWord>{" "}
          <BlurWord delay={0.2}>Web</BlurWord>{" "}
          <BlurWord delay={0.3}>Apps</BlurWord>
          <br className="hidden sm:block" />
          <span className="text-gray-400 inline-block px-2 italic font-serif font-light">
             <BlurWord delay={0.4}>that</BlurWord>
          </span>
          <BlurWord delay={0.5}>Scale.</BlurWord>
        </h1>

        {/* Subtitle */}
        <div className="mt-8 max-w-[600px] mx-auto">
          <p className="font-inter text-[17px] sm:text-[19px] leading-[1.6] text-gray-600 font-medium tracking-tight">
            <BlurWord delay={0.6}>
              I craft pixel-perfect, scalable web experiences with clean UI, smooth animations, and robust architecture.
            </BlurWord>
          </p>
        </div>

        {/* Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="flex flex-col sm:flex-row items-center gap-5 mt-12 mb-20"
        >
            <a href="#contact" className="group relative px-8 py-4 bg-[#111] text-white rounded-full font-medium text-[16px] tracking-wide overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
              </span>
            </a>

            <a href="#projects" className="group px-8 py-4 bg-white border border-gray-200 text-[#111] rounded-full font-medium text-[16px] tracking-wide transition-all hover:bg-gray-50 hover:border-gray-300 hover:scale-105 shadow-sm">
               View My Work
            </a>
        </motion.div>
      </div>


      {/* ================= INTEGRATED TICKER (Bottom of Hero) ================= */}
      {/* Positioned inside Hero to share background. No borders, no background colors. */}
      <div className="relative z-10 w-full py-10 overflow-hidden">
        
        {/* CSS Mask for Side Fades - Works on ANY background color */}
        <div className="absolute inset-0 z-20 pointer-events-none" 
             style={{
               background: 'linear-gradient(to right, #F0F0F2 0%, transparent 10%, transparent 90%, #F0F0F2 100%)'
             }} 
        />

        <div className="flex select-none">
          {/* 
            THE LOOP FIX: 
            Two identical sets side-by-side. 
            Both have 'animate-infinite-scroll'.
            'min-w-full' ensures they take up space correctly.
          */}
          
          {/* Set 1 */}
          <div className="flex shrink-0 animate-infinite-scroll items-center justify-around min-w-full gap-16 md:gap-24 px-8 md:px-12">
            {TECH_STACK.map((tech, index) => (
              <div key={`a-${index}`} className="flex items-center gap-2.5 group opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-900 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                <span className="text-[16px] md:text-[18px] font-satoshi font-semibold text-gray-800 tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Set 2 (Immediate duplicate) */}
          <div className="flex shrink-0 animate-infinite-scroll items-center justify-around min-w-full gap-16 md:gap-24 px-8 md:px-12">
            {TECH_STACK.map((tech, index) => (
              <div key={`b-${index}`} className="flex items-center gap-2.5 group opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-900 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                <span className="text-[16px] md:text-[18px] font-satoshi font-semibold text-gray-800 tracking-wide">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

// Reusable Blur Animation
const BlurWord = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block mx-1"
    >
      {children}
    </motion.span>
  );
};