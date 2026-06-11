import React from 'react';
import { motion } from 'framer-motion'; // Assuming you have framer-motion installed since Hero uses it

interface Project {
  id: number;
  title: string;
  img: string;
  aspect: string;
  link: string;
}

// COLUMN 1 (Left)
const PROJECTS: Project[] = [
  { id: 1, title: "Artisan", img: "/artisan.mp4", aspect: "aspect-video", link: "https://artisan-food-app.vercel.app/" },
  { id: 2, title: "SpecFlow ", img: "/specflow.mp4", aspect: "aspect-video", link: "https://spec-flow-iota.vercel.app/" },
];

// Third project shown centered below the main grid - slideshow of two images
const FEATURED_PROJECT = {
  id: 3,
  title: "Dashboard",
  images: ["/new-project-1.jpg", "/new-project-2.jpg"],
  aspect: "aspect-video",
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`group relative w-full bg-white overflow-hidden rounded-2xl cursor-pointer ${project.aspect} shadow-2xl shadow-black/5 border border-white/50 transition-all duration-700`}>
    <video
      src={project.img}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover transition-all duration-700 ease-out"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Floating Glass Pill - Back to original design */}
    <div className="absolute bottom-6 left-6 right-6 z-10">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 rounded-full flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/90 backdrop-blur-md border border-white/60 shadow-xl"
      >
        <span className="text-[10px] tracking-[0.2em] text-[#111] uppercase font-satoshi font-black">
          {project.title} — View Casestudy
        </span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </div>
  </div>
);

const SlideshowCard = ({ project }: { project: { id: number; title: string; images: string[]; aspect: string } }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative w-full bg-white overflow-hidden rounded-2xl cursor-pointer ${project.aspect} shadow-2xl shadow-black/5 border border-white/50 transition-all duration-700`}
    >
      {project.images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`${project.title} slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Glass Pill - Back to original design */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="w-full py-4 px-6 rounded-full flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/90 backdrop-blur-md border border-white/60 shadow-xl">
          <span className="text-[10px] tracking-[0.2em] text-[#111] uppercase font-satoshi font-black">
            {project.title} — View Casestudy
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      {/* Toast */}
      <div
        className={`absolute top-6 left-1/2 -translate-x-1/2 z-20 px-5 py-2.5 rounded-full bg-[#111] text-white text-[11px] tracking-[0.15em] font-satoshi font-bold uppercase shadow-xl transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        Coming Soon
      </div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  return (
    // Changed bg to match Hero (#F0F0F2) and added relative for background layers
    <section id="projects" className="relative pt-32 pb-32 px-4 md:px-8 w-full bg-[#F0F0F2] text-[#1a1a1a] overflow-hidden">
      
      {/* ================= BACKGROUND LAYERS (From Hero) ================= */}
      
      {/* 1. Radial Fade - Blends edges to grey */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F2_85%)] pointer-events-none" />

      {/* 2. Noise Texture - Uniform grain */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Optional Section Header to tie it together */}
        <div className="flex flex-col items-center mb-24 text-center">
             <h2 className="font-satoshi font-bold text-[40px] md:text-[60px] leading-tight text-[#111] mb-6">
                Selected Work
             </h2>
             <p className="font-inter text-gray-600 max-w-[500px]">
                A collection of digital experiences crafted with precision and passion.
             </p>
        </div>

        {/* CLEAN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* FEATURED PROJECT - Centered below the grid */}
        <div className="mt-10 max-w-[700px] mx-auto">
          <SlideshowCard project={FEATURED_PROJECT} />
        </div>

        {/* FOOTER ACTIONS */}
        <div className="mt-32 flex flex-col items-center gap-8">
          <div className="flex items-center gap-8">
            {/* Button 1: Text Link */}
            <a href="#projects" className="text-[10px] tracking-[0.3em] font-satoshi font-bold uppercase text-gray-500 border-b border-transparent hover:border-gray-800 pb-1 hover:text-black transition-all duration-300">
              All Projects
            </a>
            
            {/* Button 2: Primary Action (Matches Hero 'Get Started') */}
            <a href="#contact" className="bg-[#111] text-white px-8 py-3 rounded-full text-[10px] tracking-[0.3em] font-satoshi font-bold uppercase shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 inline-block">
              Book a Free Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};