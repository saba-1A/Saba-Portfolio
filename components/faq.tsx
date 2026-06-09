import React, { useState } from 'react';
import { Plus, X, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA: Customized for Saba (Developer Persona) ---
const faqs =[
  {
    question: "What services do you provide?",
    answer: "I specialize in Full Stack Development, focusing on scalable React frontends and robust Node.js backends. I also handle UI/UX implementation, API integrations, and database architecture to create complete digital products."
  },
  {
    question: "How do I start working with you?",
    answer: "It's simple. Click the email button below to send me a message. We'll discuss your project requirements, technical challenges, and timeline to ensure we are a perfect fit before writing a single line of code."
  },
  {
    question: "What tech stack do you use?",
    answer: "My primary stack includes React (Next.js) for the frontend, Node.js or Python for the backend, and PostgreSQL or MongoDB for databases. I also use TailwindCSS for styling and Framer Motion for animations."
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary based on complexity. A standard landing page might take 1-2 weeks, while a full SaaS application could take 4-8 weeks. I provide a detailed roadmap during our initial discovery phase."
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes. I believe in an iterative process. We will have regular check-ins (sprints) where you can provide feedback, ensuring the final product aligns perfectly with your vision."
  },
  {
    question: "Can you refactor my existing codebase?",
    answer: "Absolutely. I can audit your current codebase, identify performance bottlenecks, and refactor it to modern standards using clean architecture principles."
  }
];

const tags =["Frontend Architecture", "UI Implementation", "API Integration"];

// --- ADVANCED ANIMATION VARIANTS ---
const customEase =[0.16, 1, 0.3, 1]; 

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // Your exact background color is maintained here
    <section className="bg-[#F4F4F6] text-[#111] pt-24 pb-24 px-6 font-sans selection:bg-[#111] selection:text-[#F4F4F6]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          
          {/* --- LEFT COLUMN: Sticky Layout & High-End Typography --- */}
          <div className="lg:sticky lg:top-12 flex flex-col h-max z-10">
            
            <div className="mb-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: customEase }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white text-xs font-semibold text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.03)] w-fit mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-[#111] relative flex items-center justify-center">
                   <div className="absolute inset-0 bg-[#111] rounded-full animate-ping opacity-30 duration-1000" />
                </div>
                CLIENT FAQ
              </motion.div>

              <div className="overflow-hidden pb-4">
                <motion.h2 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  className="text-6xl md:text-[5rem] lg:text-[5.5rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-black via-gray-800 to-gray-500 mb-2 leading-[1.1]"
                >
                  Answers<span className="font-serif italic text-gray-400">.</span>
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
                className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-md"
              >
                Find answers to common questions about my development process, tech stack, and how we can collaborate.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-[2rem] overflow-hidden h-[360px] md:h-[400px] w-full border-2 border-white relative group bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Developer Workspace" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                />
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-2 mt-8 mb-8"
              >
                {tags.map((tag, i) => (
                  <motion.span 
                    key={i} 
                    variants={fadeUpItem}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                    className="px-4 py-2 bg-white/40 backdrop-blur-md border border-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-xl text-xs text-gray-700 font-semibold tracking-wide cursor-default transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.a 
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                href="mailto:sabaf0186@gmail.com"
                className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#111] border border-black overflow-hidden text-white font-medium transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] w-full sm:w-auto"
              >
                <motion.div 
                  variants={{
                    hover: { x: ["-100%", "200%"] }
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] -translate-x-[150%]"
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  Email Me
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Advanced Glassmorphism Accordion --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 justify-center"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div 
                  layout 
                  variants={fadeUpItem}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`
                    relative group cursor-pointer rounded-[2rem] transition-all duration-500 origin-center overflow-hidden
                    ${isOpen 
                      ? 'bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] scale-[1.02] z-10' 
                      : 'bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:bg-white/60 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.03)]'}
                  `}
                >
                  {/* Glass Reflection Highlight (Top Left Glow) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-60 pointer-events-none rounded-[2rem]" />

                  <div className="relative z-10 p-6 md:p-8 flex justify-between items-center gap-6">
                    
                    {/* The Creative Stylish / Cursive Font Style */}
                    {/* Note: If you want LITERAL handwriting cursive, replace `font-serif italic` with `font-[cursive]` */}
                    <h3 className={`text-xl md:text-2xl font-serif italic tracking-wide transition-colors duration-300 ${isOpen ? 'text-[#111]' : 'text-gray-500 group-hover:text-gray-800'}`}>
                      {faq.question}
                    </h3>
                    
                    {/* Glassy Floating Icon Button */}
                    <div className={`shrink-0 relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 
                      ${isOpen 
                        ? 'bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white/50' 
                        : 'bg-white/30 border border-white/50 group-hover:bg-white/80 group-hover:shadow-sm'}`}
                    >
                      <AnimatePresence mode="wait">
                        {isOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X className="w-5 h-5 text-gray-900" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus className="w-5 h-5 text-gray-500 group-hover:text-[#111] transition-colors" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Animated Answer with exact spring physics */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          height: { duration: 0.4, ease: customEase },
                          opacity: { duration: 0.3, delay: 0.1 }
                        }}
                      >
                        {/* Clean Sans-Serif for the answer to maintain readability */}
                        <p className="relative z-10 px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-base md:text-lg max-w-[95%] font-sans font-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}