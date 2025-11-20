import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-12 relative">
      
      {/* Diffusion Glow Upwards towards Hero Title - Further Reduced */}
      <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-[60%] h-[100px] bg-archer-orange/15 blur-[50px] rounded-full pointer-events-none z-0"></div>

      <div className="relative rounded-xl overflow-hidden bg-[#080808] border border-[#1A1A1A] shadow-2xl z-10">
        
        {/* Dashboard Images */}
        <div className="w-full bg-[#0F0F11]">
          
          {/* DESKTOP IMAGE (Hidden on mobile) */}
          <div className="hidden md:block">
            <img 
              src="https://images2.imgbox.com/4e/8b/lo9v506j_o.png" 
              alt="Archer Desktop Trading Interface" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* MOBILE IMAGE (Hidden on desktop) */}
          <div className="block md:hidden">
             <img 
              src="https://images2.imgbox.com/54/d0/oVcIComr_o.png" 
              alt="Archer Mobile Trading Interface" 
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};