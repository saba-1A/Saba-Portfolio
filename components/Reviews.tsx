import React, { useEffect, useState, useRef } from 'react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const testimonials =[
  {
    name: "Alex Morgan",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80",
    quote: "Saba's code is cleaner than our documentation. The transition from Figma to React was pixel-perfect, and the API integration was flawless.",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder at StartUp X",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80",
    quote: "We needed a complex dashboard, and Saba delivered a high-performance solution. The frontend handles massive datasets without any lag.",
  },
  {
    name: "David Chen",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80",
    quote: "Exceptional Full Stack skills. Saba optimized our backend queries and completely modernized our UI. Our load times dropped by 40%.",
  },
  {
    name: "Emily R.",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80",
    quote: "Reliable, fast, and communicative. Saba didn't just write code; she engineered a scalable solution that our users love.",
  }
];

const stats =[
  { value: 5, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Code Efficiency" },
  { value: 5, suffix: "+", label: "Client Satisfaction" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  },[isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function Reviews() {
  return (
    <section id="testimonials" className="relative bg-[#F4F4F6] text-[#111] py-24 px-6 overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* Background Texture & Soft Gradients */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-80 z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60 z-0 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto space-y-32 relative z-10">

        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* FIXED IMAGE UI: Clean, straight offset without messy rotations */}
          <div className="w-full lg:w-1/2 relative group px-4 md:px-8 mt-4 md:mt-8">
            
            {/* The Solid Light Gray Offset Shape (Perfectly Straight) */}
            <div className="absolute inset-0 bg-[#E8E8EB] rounded-[2rem] translate-x-8 -translate-y-6 md:translate-x-12 md:-translate-y-8 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-4" />
            
            {/* Main Image Container */}
            <div className="relative w-full rounded-[2rem] overflow-hidden bg-white shadow-sm border border-black/5">
              <img
                src="https://framerusercontent.com/images/PjaPY2S6qP6ii6fCxTJHhHU66SM.png?width=1200&height=904"
                alt="Saba Coding Setup"
                className="w-full h-[450px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* "Available for work" Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-4 bg-white py-3.5 px-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center gap-3 z-20"
            >
              <div className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </div>
              <div>
                <p className="text-[#111] font-semibold text-sm leading-tight">Available for work</p>
                <p className="text-gray-500 text-xs mt-0.5">Accepting new projects</p>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-black/5 shadow-sm text-xs font-bold tracking-widest text-gray-600 uppercase w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-[#111]" />
              Testimonials
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-medium tracking-tight text-[#111] leading-[1.05]"
            >
              Trusted by <br />
              <span className="bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent font-serif italic pr-2">Visionaries.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Real feedback from founders and CTOs who trusted <span className="text-[#111] font-semibold underline decoration-gray-300 underline-offset-4">Saba</span> to engineer scalable, high-performance web applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#contact" className="group relative px-8 py-4 rounded-full bg-[#111] text-white font-medium overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 inline-flex items-center">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Free Call
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              
              <button className="px-8 py-4 rounded-full bg-transparent border border-gray-300 text-[#111] font-medium hover:bg-white/50 hover:border-gray-400 transition-all">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>

        {/* --- MOVING REVIEWS --- */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4F4F6] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4F4F6] to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: "-50%" }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[420px] bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col shrink-0 transition-all duration-300 group hover:-translate-y-1 hover:bg-[#EAEBEE]/60 hover:backdrop-blur-xl hover:border-white/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-default"
              >
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-gray-50 rounded-full text-gray-400 group-hover:text-[#111] transition-colors group-hover:bg-white/50">
                      <Quote size={20} fill="currentColor" />
                   </div>
                   <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-full group-hover:bg-white/50 transition-colors">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-[#111] text-[#111]" strokeWidth={0} />
                      ))}
                    </div>
                </div>

                <p className="text-[#111] text-lg leading-relaxed font-medium mb-8">
                  "{t.quote}"
                </p>

                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-100 group-hover:border-gray-300/30 transition-colors">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover grayscale-[50%] ring-2 ring-white/50"
                  />
                  <div>
                    <h4 className="text-base font-bold text-[#111] leading-tight">{t.name}</h4>
                    <p className="text-gray-600 text-xs uppercase tracking-wider font-semibold mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="w-full relative mt-10">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto py-16 px-6 flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 w-full flex flex-col items-center justify-center relative">
                
                {i !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-black/10 to-transparent" />
                )}

                <div className="mb-2 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full blur-2xl -z-10 opacity-60" />
                  
                  <span className="text-7xl md:text-[5.5rem] font-light text-[#111] tracking-tighter tabular-nums">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-gray-500 text-sm uppercase tracking-[0.25em] font-bold mt-4">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}