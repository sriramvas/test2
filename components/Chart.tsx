import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CandleData } from '../types';

const data: CandleData[] = [
  { time: '13:25', open: 98.2, high: 98.8, low: 98.0, close: 98.5 },
  { time: '13:30', open: 98.5, high: 99.2, low: 98.4, close: 99.0 },
  { time: '13:35', open: 99.0, high: 99.5, low: 98.1, close: 98.2 }, // Red
  { time: '13:40', open: 98.2, high: 98.6, low: 97.8, close: 98.0 }, // Red
  { time: '13:45', open: 98.0, high: 98.9, low: 97.9, close: 98.7 },
  { time: '13:50', open: 98.7, high: 99.4, low: 98.6, close: 99.2 },
  { time: '13:55', open: 99.2, high: 99.8, low: 99.0, close: 99.5 },
  { time: '14:00', open: 99.5, high: 99.9, low: 98.8, close: 98.9 }, // Red
  { time: '14:05', open: 98.9, high: 99.1, low: 98.5, close: 98.7 },
  { time: '14:10', open: 98.7, high: 99.5, low: 98.6, close: 99.3 },
  { time: '14:15', open: 99.3, high: 99.8, low: 99.1, close: 99.6 },
  { time: '14:20', open: 99.6, high: 100.2, low: 99.4, close: 100.0 },
  { time: '14:25', open: 100.0, high: 100.5, low: 99.8, close: 99.2 }, // Red
  { time: '14:30', open: 99.2, high: 99.4, low: 98.5, close: 98.6 }, // Red
  { time: '14:35', open: 98.6, high: 99.2, low: 98.4, close: 99.0 },
  { time: '14:40', open: 99.0, high: 99.6, low: 98.8, close: 99.4 },
  { time: '14:45', open: 99.4, high: 99.9, low: 99.2, close: 99.1 }, // Red
  { time: '14:50', open: 99.1, high: 99.8, low: 99.0, close: 99.6 },
];

// Custom shape to render a candlestick
const Candlestick = (props: any) => {
  const {
    fill,
    x,
    y,
    width,
    height,
    low,
    high,
    open,
    close,
  } = props;

  // Calculate pixel positions for high/low using the Y-axis scale
  // Note: Recharts passes the computed y/height for the "body" (open/close).
  // We need to map the high/low values to pixels manually or infer from scale if passed,
  // but usually CustomShape receives scaled values.
  // A trick in Recharts: Use a BarChart where the dataKey is [min, max].
  // Then `y` is the top of the bar, `height` is the length.
  
  // However, `y` and `height` from props correspond to the dataKey range.
  // We'll assume we are passing the full object and need to scale it if we were doing raw SVG.
  // BUT, easier hack:
  // The Bar rendered represents the Body.
  // We just need to draw the line (wick).
  // The issue: We don't easily know the Y pixel for High/Low without the scale function.
  
  // Workaround:
  // Standard Recharts doesn't expose the scale easily to custom shapes unless we use `ComposedChart` with `Customized`.
  // For this visual demo, we will approximate the wick drawing based on relative heights, OR use a simple error bar approach.
  // Actually, let's stick to a simpler "Area Chart" style as seen in the background of the image, but overlaid with bars.
  
  const isGrowing = close > open;
  const color = isGrowing ? '#00C896' : '#FF4D4D';
  const bodyTop = y;
  const bodyHeight = height;
  
  // Approximating wicks for visual flair since we don't have the scale function easily injected into this prop
  // In a real app, we'd use a proper financial chart library like Lightweight Charts.
  const wickTop = bodyTop - (Math.random() * 10);
  const wickBottom = bodyTop + bodyHeight + (Math.random() * 10);

  return (
    <g>
      {/* Wick */}
      <line x1={x + width / 2} y1={wickTop} x2={x + width / 2} y2={wickBottom} stroke={color} strokeWidth="1" />
      {/* Body */}
      <rect x={x} y={y} width={width} height={height} fill={color} />
    </g>
  );
};

export const TradingChart: React.FC = () => {
  // Prepare data for Recharts Bar
  // Bar expects [min, max] for range
  const chartData = useMemo(() => {
    return data.map(d => ({
      ...d,
      range: [Math.min(d.open, d.close), Math.max(d.open, d.close)],
      isUp: d.close > d.open
    }))
  }, []);

  return (
    <div className="w-full h-full bg-[#0F0F11] flex flex-col">
      {/* Chart Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-archer-border">
        <div className="flex items-center gap-4">
           <span className="font-semibold text-white">Solana (SOL) Chart</span>
           <div className="flex gap-2 text-xs text-gray-500">
             <span className="text-white">1m</span>
             <span>5m</span>
             <span>15m</span>
             <span>1h</span>
             <span>Indicators</span>
           </div>
        </div>
        <div className="flex gap-3 text-gray-400">
           {/* Window controls simulation */}
           <span>_</span>
           <span>□</span>
           <span>x</span>
        </div>
      </div>

      {/* Chart Content */}
      <div className="flex-1 flex relative">
         {/* Tool sidebar */}
         <div className="w-10 border-r border-archer-border flex flex-col items-center gap-4 py-4 z-10 bg-[#0F0F11]">
            {/* Importing icons inside would be cleaner, but simple SVG placeholders work */}
            {['+', 'T', '—', '≈', '∡', '☺'].map((t, i) => (
               <div key={i} className="text-gray-500 hover:text-archer-orange cursor-pointer text-xs font-bold">{t}</div>
            ))}
         </div>

         {/* Main Chart Area */}
         <div className="flex-1 relative">
             {/* Price Overlay Info */}
             <div className="absolute top-4 left-4 z-20 text-xs font-mono">
               <div className="flex gap-3">
                  <span className="text-white font-bold">SOL</span>
                  <span className="text-archer-green">● O: 98.5</span>
                  <span className="text-archer-red">H: 100.2</span>
                  <span className="text-white">L: 98.0</span>
                  <span className="text-archer-green">C: 99.8</span>
               </div>
               <div className="mt-1 text-gray-500">
                 Vol: 349.96K
               </div>
             </div>

             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={chartData} margin={{ top: 20, right: 50, left: 0, bottom: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#1E1E1E" vertical={false} />
                 <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#555' }} axisLine={false} tickLine={false} />
                 <YAxis 
                    domain={['auto', 'auto']} 
                    orientation="right" 
                    tick={{ fontSize: 10, fill: '#555' }} 
                    axisLine={false} 
                    tickLine={false}
                    tickFormatter={(val) => val.toFixed(2)}
                 />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', fontSize: '12px' }} 
                   itemStyle={{ color: '#fff' }}
                   cursor={{ fill: 'transparent' }}
                 />
                 <Bar dataKey="range" shape={(props: any) => {
                    const { x, y, width, height, payload } = props;
                    const isUp = payload.isUp;
                    const color = isUp ? '#00C896' : '#FF4D4D';
                    
                    // Simple wick simulation relative to the body for visual effect
                    // In production, we'd pass high/low through a customized axis
                    const wickHeight = height * 0.4; 
                    
                    return (
                      <g>
                        <line 
                          x1={x + width/2} 
                          y1={y - wickHeight} 
                          x2={x + width/2} 
                          y2={y + height + wickHeight} 
                          stroke={color} 
                          strokeWidth={1} 
                        />
                        <rect x={x} y={y} width={width} height={height} fill={color} />
                      </g>
                    )
                 }} />
               </BarChart>
             </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};
