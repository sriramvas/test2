import React from 'react';

export const ArchitectureFlow: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 pt-2 md:pt-24 pb-16 md:pb-24">
       {/* Header */}
       <div className="mb-12 md:mb-12 text-center max-w-7xl mx-auto">
          <h2 className="text-[28px] md:text-[54px] font-semibold tracking-tight leading-[1.1]">
             {/* Mobile Title */}
             <span className="md:hidden">
                <span className="text-[#858585]">Our</span> MEV-Resistant Design
             </span>
             {/* Desktop Title */}
             <span className="hidden md:inline">
                <span className="text-[#858585]">The</span> Architecture
             </span>
          </h2>
          
          {/* Desktop/Tablet Subtitle */}
          <p className="hidden md:block text-[#D5D5D5] text-[26px] mt-4 max-w-6xl mx-auto">
            With Dual Batch Flow Auctions, Archer enables a MEV-free trading experience
          </p>
       </div>

       {/* Diagram Container - Compressed Height */}
       <div className="relative p-3 md:p-8 rounded-3xl border border-[#1A1A1A] bg-[#080808] overflow-hidden max-w-2xl mx-auto shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-archer-orange/5 blur-[60px] md:blur-[80px] rounded-full pointer-events-none"></div>
          
          {/* Grid Lines Background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10 flex flex-col items-center gap-1 md:gap-4">

             {/* NODE 1: ORDER ENGINE */}
             <div className="flex flex-col items-center gap-1 md:gap-2 w-full max-w-sm md:max-w-md z-20">
                <StepLabel>Order Engine</StepLabel>
                <div className="w-full py-2 md:py-4 px-3 md:px-8 flex items-center justify-center gap-2 md:gap-4 rounded-lg border-2 border-archer-orange/40 bg-[#0F0F11] shadow-[0_0_20px_rgba(255,120,52,0.1)] relative overflow-hidden">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] border-2 border-archer-orange/50 flex items-center justify-center text-archer-orange shadow-sm shrink-0">
                            <svg width="16" height="16" className="md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <span className="font-black text-white tracking-wide text-base md:text-lg uppercase whitespace-nowrap">ALL ORDERS</span>
                    </div>
                </div>
             </div>

             {/* ARROW 1: Segregate */}
             <Connector label="Segregate" />

             {/* NODE 2: MAKERS/TAKERS */}
             <div className="flex flex-col items-center gap-1 w-full max-w-sm md:max-w-md z-20">
                <div className="w-full flex gap-2 md:gap-4">
                    {/* Makers Box */}
                    <div className="flex-1 p-2 md:p-4 rounded-lg border border-[#333] bg-[#0F0F11] flex flex-col items-center justify-center gap-1 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-archer-green shadow-[0_0_8px_#00C896]"></div>
                        <span className="text-white font-black text-sm md:text-base tracking-wide">MAKERS</span>
                        <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Limit</span>
                    </div>
                    
                    {/* Takers Box */}
                    <div className="flex-1 p-2 md:p-4 rounded-lg border border-[#333] bg-[#0F0F11] flex flex-col items-center justify-center gap-1 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-archer-orange shadow-[0_0_8px_#FF6B35]"></div>
                        <span className="text-white font-black text-sm md:text-base tracking-wide">TAKERS</span>
                        <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Market</span>
                    </div>
                </div>
             </div>

             {/* ARROW 2: Match */}
             <Connector label="Match" />

             {/* NODE 3: DUAL AUCTIONS */}
             <div className="flex flex-col items-center gap-1 md:gap-2 w-full max-w-sm md:max-w-md z-20">
                <StepLabel>Dual Auctions</StepLabel>
                <div className="w-full rounded-lg border border-archer-orange/40 bg-[#0F0F11] overflow-hidden shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-archer-orange/10 to-transparent pointer-events-none"></div>
                    
                    <div className="p-2 md:p-4 border-b border-[#222] flex justify-between items-center group">
                        <div className="flex items-center gap-2 md:gap-3">
                           <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-archer-green shadow-[0_0_8px_#00C896] shrink-0"></div>
                           <span className="text-white font-black text-sm md:text-base tracking-wide">BID AUCTION</span>
                        </div>
                        <svg width="16" height="16" className="text-[#666] md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    
                    <div className="p-2 md:p-4 flex justify-between items-center group">
                        <div className="flex items-center gap-2 md:gap-3">
                           <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-archer-red shadow-[0_0_8px_#FF4D4D] shrink-0"></div>
                           <span className="text-white font-black text-sm md:text-base tracking-wide">ASK AUCTION</span>
                        </div>
                        <svg width="16" height="16" className="text-[#666] md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6 6" /></svg>
                    </div>
                </div>
             </div>

             {/* ARROW 3: Execute */}
             <Connector label="Execute" />

             {/* NODE 4: OUTPUT */}
             <div className="flex flex-col items-center gap-2 w-full max-w-sm md:max-w-md z-20">
                <div className="w-full py-3 md:py-4 px-4 md:px-8 flex justify-between items-center rounded-lg border-2 border-archer-orange bg-gradient-to-br from-[#1A0B05] to-[#050505] shadow-[0_0_30px_rgba(255,107,53,0.2)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-archer-orange to-transparent opacity-100 shadow-[0_0_10px_#FF6B35]"></div>
                    
                    <div className="flex flex-col items-center gap-1 flex-1">
                        <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-wider text-center">Bid Price</span>
                        <span className="text-archer-green font-mono font-black text-base md:text-xl drop-shadow-[0_0_8px_rgba(0,200,150,0.4)]">99.97</span>
                    </div>
                    
                    <div className="h-8 md:h-10 w-[1px] bg-[#333] mx-2"></div>

                    <div className="flex flex-col items-center gap-1 flex-1">
                        <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-wider text-center">Ask Price</span>
                        <span className="text-archer-red font-mono font-black text-base md:text-xl drop-shadow-[0_0_8px_rgba(255,77,77,0.4)]">100.03</span>
                    </div>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

const StepLabel: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div className="uppercase text-white text-xs md:text-sm tracking-widest font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
    {children}
  </div>
);

const Connector: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex flex-col items-center justify-center h-4 md:h-14 relative">
     {/* Label */}
     <div className="absolute left-[calc(50%+10px)] md:left-[calc(50%+12px)] top-1/2 -translate-y-1/2 z-10">
        <div className="text-[8px] md:text-[10px] uppercase text-archer-orange font-black tracking-[0.15em] drop-shadow-md whitespace-nowrap">
          {label}
        </div>
     </div>
     
     {/* Vertical Line */}
     <div className="w-[2px] h-full bg-white relative overflow-hidden rounded-full">
        {/* Plain white line */}
     </div>
     
     {/* Arrow Head */}
     <div className="text-white absolute bottom-0 drop-shadow-lg">
       <svg width="8" height="8" className="md:w-2.5 md:h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22L0 2h24L12 22z" /></svg>
     </div>
  </div>
);
