import React from 'react';

// Placeholder for the Logo
export const LogoPlaceholder: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://images2.imgbox.com/c3/46/CCLcysoT_o.png" 
      alt="Archer Logo" 
      className={`object-contain ${className}`}
    />
  );
};

// Placeholder for "Market Makers" graphic
export const MarketMakerVisual: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* 
         TODO: Replace src with your actual Imgur link.
         Example: https://i.imgur.com/ExampleID.png
      */}
      <img 
        src="https://images2.imgbox.com/cf/ca/3zTOxasM_o.png" 
        alt="Market Makers Visualization" 
        className="w-full max-w-md h-auto object-contain"
      />
    </div>
  );
};

// Placeholder for "Traders" graphic
export const TraderVisual: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <img 
        src="https://images2.imgbox.com/af/83/q0OQtJtt_o.png" 
        alt="Traders Visualization" 
        // Made smaller on mobile (w-[60%] max-w-[220px]) compared to desktop (w-full max-w-sm)
        className="w-[60%] md:w-full max-w-[220px] md:max-w-sm h-auto object-contain"
      />
    </div>
  );
};

// Placeholder for the Footer Burst/Logo graphic
export const FooterGraphic: React.FC = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center overflow-hidden">
      
      {/* DESKTOP IMAGE (Hidden on mobile) */}
      <div className="hidden md:block w-full">
        <img 
          src="https://images2.imgbox.com/44/62/eVuCFwEH_o.png" 
          alt="Footer Banner Desktop" 
          className="w-full h-auto object-cover max-w-[1600px] mx-auto"
        />
      </div>

      {/* MOBILE IMAGE (Hidden on desktop) */}
      <div className="block md:hidden w-full">
        <img 
          src="https://images2.imgbox.com/ec/7f/bQVztxts_o.png" 
          alt="Footer Banner Mobile" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};