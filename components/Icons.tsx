import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-8 h-8 bg-archer-orange flex items-center justify-center rounded-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22H22L12 2Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 6L6 18H18L12 6Z" fill="black"/> 
        {/* Stylized A */}
        <path d="M12 2L4 22M12 2L20 22" stroke="black" strokeWidth="0" />
        <path d="M7 16H17" stroke="black" strokeWidth="3" strokeLinecap="square" />
      </svg>
    </div>
    <span className="text-white font-bold text-xl tracking-wide">ARCHER</span>
  </div>
);

export const IconTool: React.FC<{ d: string }> = ({ d }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-white cursor-pointer transition-colors">
    <path d={d} />
  </svg>
);

// Common tool icons for the chart sidebar
export const TOOLS = [
  { name: 'crosshair', d: 'M12 2v20M2 12h20' },
  { name: 'trendline', d: 'M21 21l-6-6m-2-2l-6-6' },
  { name: 'fib', d: 'M2 2v20M22 2v20M2 12h20M2 6h20M2 18h20' },
  { name: 'brush', d: 'M18 2l4 4-10 10H8v-4L18 2z' },
  { name: 'text', d: 'M4 7V4h16v3M9 20h6M12 4v16' },
  { name: 'lock', d: 'M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1z' },
  { name: 'eye', d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6' }
];
