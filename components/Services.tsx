import React from 'react';
import { Box, Layers, Layout, Palette, Search, Megaphone, PenTool, Image as ImageIcon, Sparkles, Globe, Share2, MousePointer2, Code, Terminal, Cpu, Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with React and Next.js, focused on pixel-perfect UI and smooth, native-like user experiences.",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    title: "Full-Stack Development",
    description: "Robust end-to-end web applications using Node.js and SQL/NoSQL databases, ensuring security and scalability.",
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    title: "API & Backend Integration",
    description: "Seamlessly integrating third-party services (Stripe, Firebase) and building custom REST/GraphQL APIs.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Motion & Interaction",
    description: "Enhancing user engagement with Framer Motion, GSAP, and micro-interactions for a polished, high-end feel.",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

const tags = [
  { name: "React.js", icon: <Code size={14} /> },
  { name: "Next.js", icon: <Layers size={14} /> },
  { name: "TypeScript", icon: <Terminal size={14} /> },
  { name: "Tailwind CSS", icon: <Palette size={14} /> },
  { name: "Framer Motion", icon: <Sparkles size={14} /> },
  { name: "Node.js", icon: <Cpu size={14} /> },
  { name: "SEO Optimization", icon: <Search size={14} /> },
  { name: "Design Systems", icon: <Box size={14} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#F0F0F2] text-[#1a1a1a] min-h-screen px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,transparent_0%,#F0F0F2_80%)] pointer-events-none" />
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="relative z-10 max-w-[1250px] mx-auto">
        
        {/* ================= HERO SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-fit flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm mb-8">
               <div className="w-1.5 h-1.5 rounded-full bg-[#111] animate-pulse"></div>
               <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase font-satoshi">Expertise</span>
            </div>

            <h1 className="font-satoshi text-[56px] md:text-[72px] font-bold tracking-tighter leading-[0.95] mb-6 text-[#111]">
              Services.
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md mb-10 leading-relaxed font-inter font-medium">
              Helping businesses build fast, scalable, and visually stunning web applications that drive results.
            </p>
            
            {/* Tech Pills - Styled EXACTLY like reference */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Frontend", "Full-Stack", "React", "Next.js", "APIs", "Animation"].map((item, i) => (
                <motion.span 
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="cursor-default px-5 py-2.5 bg-white rounded-lg text-[13px] font-semibold text-gray-700 border border-black/5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-md hover:border-black/10"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="group relative px-7 py-3 rounded-full bg-[#111] text-white overflow-hidden shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 active:scale-95 inline-flex items-center">
                 <span className="relative z-10 text-[13px] font-bold tracking-wide">Book a Free Call</span>
                 <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </a>

              <button className="px-7 py-3 rounded-full bg-white border border-black/5 text-[#111] shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 active:scale-95">
                 <span className="text-[13px] font-bold tracking-wide">See Projects</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Feature Image - Interactive Tilt */}
          <motion.div 
            className="relative h-[450px] w-full perspective-1000 group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             {/* Decorative blob */}
             <div className="absolute top-10 right-10 w-full h-full bg-black/5 rounded-[32px] -z-10 transform rotate-3 transition-transform group-hover:rotate-6 duration-500" />

            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl shadow-black/5 border border-white/60 bg-white">
              {/* Image: Coding/Workspace Context */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Development Workflow" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-end">
                 <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Project</p>
                    <p className="text-xl font-satoshi font-bold">Modern Architecture</p>
                 </div>
                 <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white">
                    <Code size={20} />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[24px] bg-white border border-black/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0F0F2]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start justify-between mb-6">
                {/* Icon Box */}
                <div className="p-3.5 rounded-2xl bg-[#F0F0F2] text-[#111] group-hover:bg-[#111] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {service.icon}
                </div>
                
                {/* Interaction Arrow */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent group-hover:bg-black/5 transition-all duration-300 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-[#111]" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#111] mb-3 font-satoshi group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed font-inter group-hover:text-gray-600 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= INFINITE SCROLLING TAGS ================= */}
        <div className="relative overflow-hidden w-full py-6">
          
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F0F0F2] via-[#F0F0F2]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F0F0F2] via-[#F0F0F2]/80 to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-6">
            <div className="flex w-full overflow-hidden">
               <InfiniteSlider items={tags} direction="left" />
               <InfiniteSlider items={tags} direction="left" />
            </div>
            
            <div className="flex w-full overflow-hidden">
               <InfiniteSlider items={[...tags].reverse()} direction="right" />
               <InfiniteSlider items={[...tags].reverse()} direction="right" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Slider Component
const InfiniteSlider = ({ items, direction }: { items: any[], direction: "left" | "right" }) => (
  <motion.div 
    initial={{ x: direction === "left" ? 0 : "-50%" }}
    animate={{ x: direction === "left" ? "-50%" : 0 }}
    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
    className="flex gap-4 pr-4 shrink-0"
  >
    {items.map((tag, i) => (
      <div 
        key={i} 
        className="flex items-center gap-2.5 px-6 py-3 bg-white border border-black/5 rounded-full shadow-sm text-[13px] font-medium text-gray-600 whitespace-nowrap hover:border-black/20 hover:text-[#111] transition-colors cursor-default"
      >
        <span className="text-gray-400 group-hover:text-[#111]">{tag.icon}</span>
        {tag.name}
      </div>
    ))}
  </motion.div>
);