import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GallerySection } from './components/GallerySection';
import { AboutMe } from './components/AboutMe';
import { RecentWorks } from './components/RecentWork';
import { ProcessSection } from './components/ProcessSection';
import ServicesSection from './components/Services';
import './index.css';
import Reviews from './components/Reviews';
import FAQ from './components/faq';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-white/20">
      <Navbar />
      
      {/* Hero stays as a standalone block */}
      <Hero />
      
      {/* Adding 'relative z-10' and 'bg-black' here ensures that 
         all subsequent sections sit "above" the hero video.
      */}
      <main className="relative z-10 bg-black">
        
         <GallerySection />
         <AboutMe />
         <RecentWorks />
         <ProcessSection />
         <ServicesSection />
         <Reviews/>
         <FAQ/>
         <Footer/>
      </main>
    </div>
  );
};

export default App;