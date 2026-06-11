import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" } 
  ];

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`
            pointer-events-auto relative
            flex items-center justify-between
            w-full max-w-[900px] 
            px-3 py-3 md:px-4 md:py-3
            rounded-full transition-all duration-300
            ${isScrolled 
              ? "bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
              : "bg-white/60 backdrop-blur-lg border border-white/20 shadow-sm"}
          `}
        >
          {/* ================= LEFT — LOGO ================= */}
          <a href="#hero" className="flex items-center gap-2.5 group relative pl-2">
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white relative z-10 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="font-bold text-sm">S</span>
              </div>
            </div>
            
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-[15px] font-bold tracking-tight leading-none text-gray-900">
                Saba
              </span>
            </div>
          </a>

          {/* ================= CENTER — LINKS (Desktop) ================= */}
          <div className="hidden md:flex items-center gap-1 mx-auto absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-5 py-2.5 text-[14px] font-medium text-gray-600 transition-colors duration-300 hover:text-black"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-black/5 rounded-full -z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* ================= RIGHT — ACTIONS ================= */}
          <div className="flex items-center gap-3 pr-1">
            
            {/* 
                UPDATED: Added 'hidden md:inline-flex' 
                This HIDES the button on mobile screens and shows it on Medium (tablet/laptop) screens.
            */}
            <a
              href="#contact"
              className="hidden md:inline-flex group relative items-center gap-2 px-6 py-3 bg-[#111] text-white text-[13px] font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
            >
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
               
               <span className="relative z-10">Let's Talk</span>
               <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 relative z-10" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-black/5 text-black/80 hover:bg-black/10 transition-all active:scale-95"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsMobileMenuOpen(false)}
               className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-24 inset-x-4 z-50 bg-white/90 backdrop-blur-2xl border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden p-2"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl text-gray-900 font-medium hover:bg-black/5 transition-colors group"
                  >
                    <span className="text-lg">{link.name}</span>
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-400" />
                  </motion.a>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-4 rounded-2xl bg-[#111] text-white font-medium text-center shadow-lg active:scale-[0.98] transition-transform"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};