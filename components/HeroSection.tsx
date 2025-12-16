import React from 'react';
import GlassCard from './GlassCard';
import { Scale, FileText, CheckCircle2, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden bg-[#050505] selection:bg-gold/30">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
         {/* Radial Gradient for depth */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-gold/5 rounded-full blur-[100px] opacity-60 pointer-events-none" />
         
         {/* Subtle Grid Texture */}
         <div 
           className="absolute inset-0 opacity-[0.05]"
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '100px 100px' 
           }} 
         />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-12 md:gap-16">
        
        {/* Main Title Block */}
        <div className="text-center space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Brand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg mb-4 hover:border-gold/30 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(197,160,101,0.8)] animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-gold tracking-[0.2em] uppercase">Dias Advocacia</span>
          </div>

          {/* Titles */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Caso Nutriterápica
              </span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
            Relatório de êxito referente à anulação integral de débito fiscal municipal e defesa patrimonial.
          </p>
        </div>

        {/* Unified Stats Dashboard - Replaces scattered cards for better organization */}
        <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <GlassCard className="!p-0 overflow-hidden bg-neutral-900/40 backdrop-blur-2xl border-white/10 w-full h-fit">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              {/* Stat 1: Processo */}
              <div className="p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
                 <div className="mb-4 p-3 rounded-full bg-neutral-800/50 text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all">
                    <FileText size={20} />
                 </div>
                 <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2">Processo</p>
                 <p className="text-sm md:text-base text-white font-mono tracking-wide">0867160-51.2015.8.14.0301</p>
              </div>

              {/* Stat 2: Valor Original */}
              <div className="p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors relative overflow-hidden">
                 <div className="mb-4 p-3 rounded-full bg-neutral-800/50 text-neutral-400 group-hover:text-red-400 group-hover:scale-110 transition-all">
                    <Scale size={20} />
                 </div>
                 <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2">Débito Original</p>
                 <p className="text-xl md:text-2xl text-white font-semibold relative z-10">R$ 2.161.185,27</p>
              </div>

              {/* Stat 3: Resultado (Highlighted) */}
              <div className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                 {/* Subtle Gold Gradient Background for this cell */}
                 <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="mb-4 p-3 rounded-full bg-gold/10 text-gold group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(197,160,101,0.2)]">
                    <CheckCircle2 size={20} />
                 </div>
                 <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Resultado Final</p>
                 <div className="flex flex-col items-center">
                    <p className="text-3xl md:text-4xl text-white font-bold drop-shadow-lg">R$ 0,00</p>
                    <p className="text-sm font-medium text-gold/80 mt-1 uppercase tracking-wider">débitos a pagar</p>
                 </div>
              </div>

            </div>
          </GlassCard>
        </div>
        
        {/* Scroll Indicator - Now strictly aligned with the content stack */}
        <div className="flex flex-col items-center gap-3 opacity-0 animate-fade-in-up mt-4 md:mt-8" style={{ animationDelay: '1.2s' }}>
           <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 text-center mr-[-0.3em]">Relatório Detalhado</span>
           <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
        </div>

      </div>

    </section>
  );
};

export default HeroSection;