import React from 'react';
import { Dashboard } from './components/Dashboard';
import { MarketMakerVisual, TraderVisual, FooterGraphic, LogoPlaceholder } from './components/Visuals';
import { ArchitectureFlow } from './components/ArchitectureFlow';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-archer-orange selection:text-black">
      
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle,rgba(255,107,53,0.08)_0%,transparent_70%)] blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className="max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center relative z-50">
        <LogoPlaceholder className="h-8 w-auto" />
        <button className="hidden md:block text-sm md:text-base font-bold tracking-wide border border-[#222] bg-[#0A0A0A] text-gray-200 px-8 py-3 rounded-full hover:bg-[#111] hover:text-white hover:border-gray-500 transition-all duration-300">
          Use App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-12 md:pt-32 md:pb-24 text-center z-10 max-w-[90%] xl:max-w-7xl mx-auto px-4">
        
        <h1 className="text-[32px] sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] text-white max-w-6xl mx-auto">
          Trade fair. <br/>
          <span className="text-white whitespace-nowrap">No MEV. No latency.</span>
        </h1>
        <p className="text-[#D5D5D5] text-[16px] leading-[24px] md:text-[26px] md:leading-relaxed max-w-4xl mx-auto mb-8 md:mb-10 font-light tracking-wide">
          Archer eliminates latency races and brings you the <br className="hidden md:block" />
          most competitive prices for trading spots/perps!
        </p>
        <a 
          href="https://x.com/mmdhrumil/status/1983161517617926514?s=20"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#FF7834] text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,120,52,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Get Started
        </a>
      </section>

      {/* Dashboard Preview */}
      <section className="px-4 md:px-8 pb-2 md:pb-12 relative z-20">
        <Dashboard />
      </section>

      {/* Architecture Flow Diagram */}
      <ArchitectureFlow />

      {/* Features: Market Makers */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Title Row - Above Grid */}
        <h2 className="text-[28px] md:text-[45px] font-semibold tracking-tight leading-[1.1] mb-8 md:mb-12">
           <span className="text-[#858585]">For</span> Market Makers
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image Left */}
          <div className="relative group flex justify-center md:justify-start">
             <div className="absolute inset-0 bg-archer-orange/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <MarketMakerVisual />
          </div>
          {/* Text Right */}
          <div className="space-y-6 md:space-y-8">
             <div className="space-y-6 text-[18px] md:text-[32px] text-white font-normal md:font-light leading-tight">
               <p>Latency wars are eliminated <br className="hidden lg:block" /> on Archer!</p>
               <p>
                 This means, market-makers only compete on price and size and can quote tighter spreads.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Features: Traders */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Title Row - Above Grid */}
        <h2 className="text-[28px] md:text-[45px] font-semibold tracking-tight leading-[1.1] mb-8 md:mb-12">
           <span className="text-[#858585]">For</span> Traders/Retail Users
        </h2>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Image Left (First on desktop, First on mobile due to natural order) */}
          <div className="relative group flex justify-center md:justify-start">
             <div className="absolute inset-0 bg-archer-orange/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <TraderVisual />
          </div>
          
          {/* Text Right */}
          <div className="space-y-6 md:space-y-8">
             <div className="space-y-6 text-[18px] md:text-[32px] text-white font-normal md:font-light leading-tight">
               <p>
                 Trade with protection from reordering and get price improvements via the auction model.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="mt-10 md:mt-20 w-full bg-[#050505]">
        
        {/* 1. Visual Banner Section */}
        <div className="w-full bg-black border-t border-[#111]">
           <FooterGraphic />
        </div>

        {/* 2. Content Section */}
        <div className="w-full border-t border-[#111] px-6">
          <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start">
             {/* Left: Logo & Description */}
             <div className="mb-12 md:mb-0 space-y-6">
                <LogoPlaceholder className="h-8 w-auto" />
                <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-medium">
                  A MEV-Resistant Batch Auctions Exchange on Solana
                </p>
             </div>

             {/* Right: Socials */}
             <div className="flex flex-col gap-6 text-sm text-gray-400 text-left md:text-right min-w-[150px]">
               <span className="text-white font-bold text-base">Socials</span>
               <div className="flex flex-col gap-3">
                  <a href="https://x.com/ArcherExchange_" target="_blank" rel="noopener noreferrer" className="hover:text-archer-orange transition-colors hover:translate-x-1 duration-200">Twitter (X)</a>
                  <a href="https://x.com/mmdhrumil/status/1983161517617926514?s=20" target="_blank" rel="noopener noreferrer" className="hover:text-archer-orange transition-colors hover:translate-x-1 duration-200">Blog</a>
                  <a href="#" className="hover:text-archer-orange transition-colors hover:translate-x-1 duration-200">Contact Us</a>
               </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;