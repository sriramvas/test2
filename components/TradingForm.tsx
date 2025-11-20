import React, { useState } from 'react';
import { OrderSide } from '../types';
import { getMarketAnalysis } from '../services/geminiService';

export const TradingForm: React.FC = () => {
  const [side, setSide] = useState<OrderSide>(OrderSide.LONG);
  const [leverage, setLeverage] = useState(10);
  const [amount, setAmount] = useState(1000);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  const fetchAnalysis = async () => {
    setLoadingAnalysis(true);
    const text = await getMarketAnalysis("SOL/USD", 98.45);
    setAnalysis(text);
    setLoadingAnalysis(false);
  }

  return (
    <div className="w-80 bg-[#0A0A0C] border-l border-[#1E1E1E] flex flex-col p-5 text-xs relative z-10 font-sans">
      {/* Custom Scrollbar hide */}
      
      {/* Toggle */}
      <div className="flex bg-[#151517] p-1 rounded-md mb-6 border border-[#222]">
        <button 
          onClick={() => setSide(OrderSide.LONG)}
          className={`flex-1 py-2 rounded text-center font-semibold transition-all duration-200 ${side === OrderSide.LONG ? 'bg-[#00C896] text-black shadow-[0_0_10px_rgba(0,200,150,0.2)]' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Long
        </button>
        <button 
          onClick={() => setSide(OrderSide.SHORT)}
          className={`flex-1 py-2 rounded text-center font-semibold transition-all duration-200 ${side === OrderSide.SHORT ? 'bg-[#FF4D4D] text-white shadow-[0_0_10px_rgba(255,77,77,0.2)]' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Short
        </button>
      </div>

      {/* Market Price Info */}
      <div className="flex justify-between items-end mb-6 pb-4 border-b border-[#1A1A1A]">
          <span className="text-gray-500 font-medium">Market Price</span>
          <div className="text-right">
             <span className="text-white font-mono text-lg font-medium block">$98.45</span>
             <span className="text-[#00C896] text-[10px]">+1.2%</span>
          </div>
      </div>

      {/* Inputs */}
      <div className="space-y-5 mb-auto">
        
        {/* Asset Select */}
        <div className="space-y-2">
          <label className="text-gray-500 font-medium ml-1">Asset</label>
          <div className="flex items-center justify-between bg-[#121214] px-3 py-2.5 rounded border border-[#222] hover:border-[#333] transition-colors cursor-pointer group">
             <div className="flex items-center gap-2.5">
               <div className="w-5 h-5 rounded-full bg-[#14F195] flex items-center justify-center text-[8px] text-black font-bold">S</div>
               <span className="text-white font-bold text-sm group-hover:text-gray-200">SOL</span>
               <span className="text-gray-600 text-[10px]">Solana</span>
             </div>
             <span className="text-gray-600 text-[10px]">▼</span>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="text-gray-500 font-medium ml-1">Amount</label>
          <div className="flex items-center justify-between bg-[#121214] px-3 py-2.5 rounded border border-[#222] focus-within:border-archer-orange/50 focus-within:bg-[#151518] transition-all">
             <input 
               type="number" 
               value={amount}
               onChange={(e) => setAmount(Number(e.target.value))}
               className="bg-transparent text-white outline-none w-full font-mono text-sm placeholder-gray-700" 
             />
             <span className="text-gray-500 font-medium">SOL</span>
          </div>
          <div className="flex justify-end">
            <div className="text-gray-600 text-[10px] font-mono">≈ $98,450.00</div>
          </div>
        </div>

        {/* Leverage Slider */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center">
             <label className="text-gray-500 font-medium ml-1">Leverage</label>
             <span className="text-archer-orange font-bold bg-archer-orange/10 px-2 py-0.5 rounded border border-archer-orange/20">{leverage}x</span>
          </div>
          <div className="relative h-1.5 w-full bg-[#222] rounded-full">
             <div 
               className="absolute top-0 left-0 h-full bg-archer-orange rounded-full" 
               style={{ width: `${(leverage/20)*100}%` }}
             ></div>
             <input 
              type="range" 
              min="1" 
              max="20" 
              value={leverage} 
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-[#444] text-[10px] font-mono px-1">
            <span>1x</span><span>5x</span><span>10x</span><span>15x</span><span>20x</span>
          </div>
        </div>
      </div>

      {/* AI Analysis Integration */}
      <div className="mb-6 p-3 bg-gradient-to-br from-[#151518] to-[#0F0F11] rounded border border-[#222] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-12 h-12 bg-archer-orange/5 blur-xl rounded-full -mr-4 -mt-4"></div>
        <div className="flex justify-between items-center mb-2 relative z-10">
          <div className="flex items-center gap-1.5">
             <span className="text-archer-orange text-[10px]">✦</span>
             <span className="text-gray-200 font-bold">AI Insight</span>
          </div>
          <button 
             onClick={fetchAnalysis} 
             className="text-[10px] text-gray-500 hover:text-white transition-colors"
             disabled={loadingAnalysis}
          >
            {loadingAnalysis ? '...' : 'Refresh'}
          </button>
        </div>
        <p className="text-gray-400 leading-relaxed text-[11px] relative z-10">
          {analysis || "Gemini AI detects short-term bullish momentum on 15m timeframe. Support at $98.00."}
        </p>
      </div>

      {/* Order Summary */}
      <div className="space-y-2.5 border-t border-[#1A1A1A] pt-5 mb-5 text-[11px]">
        <div className="flex justify-between">
          <span className="text-gray-500">Position Size</span>
          <span className="text-gray-200 font-mono">$984,500</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Collateral</span>
          <span className="text-gray-200 font-mono">$98,450</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Est. Liquidation</span>
          <span className="text-archer-red font-mono">$93.52</span>
        </div>
      </div>

      {/* CTA */}
      <button 
        className={`w-full py-3.5 rounded font-bold text-sm mt-auto shadow-lg transition-all transform active:scale-[0.98] hover:brightness-110 ${
          side === OrderSide.LONG 
            ? 'bg-gradient-to-r from-[#00C896] to-[#00A87E] text-black' 
            : 'bg-gradient-to-r from-[#FF4D4D] to-[#D93030] text-white'
        }`}
      >
        {side === OrderSide.LONG ? 'Buy / Long' : 'Sell / Short'} SOL
      </button>
    </div>
  );
};