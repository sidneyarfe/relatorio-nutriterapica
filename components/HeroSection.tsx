import React from 'react';
import GlassCard from './GlassCard';
import { Scale, FileText, CheckCircle2, ChevronDown, Lock } from 'lucide-react';

interface HeroSectionProps {
  isUnlocked?: boolean;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isUnlocked = false, children }) => {
  return (
    <section className={`relative flex flex-col items-center justify-center px-4 py-10 overflow-hidden bg-[#050505] selection:bg-gold/30 ${isUnlocked ? 'min-h-[90vh]' : 'min-h-screen'}`}>
      
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

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-10 md:gap-12">
        
        {/* Main Title Block */}
        <div className="text-center space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Brand Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
              alt="Dias Advocacia" 
              referrerPolicy="no-referrer"
              className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(197,160,101,0.15)] opacity-80 hover:opacity-100 transition-all duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="flex flex-col items-center justify-center px-6 py-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md"><span class="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] font-serif">DIAS</span><span class="text-xs text-gold uppercase tracking-[0.4em] mt-1">Advocacia</span></div>';
                }
              }}
            />
          </div>

          {/* Titles */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Caso Nutriterápica
              </span>
            </h1>
          </div>

          {isUnlocked && (
            <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
              Relatório de êxito referente à anulação integral de débito fiscal municipal e defesa patrimonial.
            </p>
          )}
        </div>

        {/* Password Gate Area (Appears right after description when locked) */}
        {children && (
          <div className="w-full max-w-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {children}
          </div>
        )}

        {/* Unified Stats Dashboard - Censored with blur if not unlocked */}
        <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative group">
            <GlassCard className={`!p-0 overflow-hidden bg-neutral-900/40 backdrop-blur-2xl border-white/10 w-full h-fit transition-all duration-700 ${!isUnlocked ? 'filter blur-md grayscale pointer-events-none select-none opacity-40' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* Stat 1: Processo */}
                <div className="p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors">
                   <div className="mb-4 p-3 rounded-full bg-neutral-800/50 text-neutral-400">
                      <FileText size={20} />
                   </div>
                   <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2">Processo</p>
                   <p className="text-sm md:text-base text-white font-mono tracking-wide">0867160-51.2015.8.14.0301</p>
                </div>

                {/* Stat 2: Valor Original */}
                <div className="p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors relative overflow-hidden">
                   <div className="mb-4 p-3 rounded-full bg-neutral-800/50 text-neutral-400">
                      <Scale size={20} />
                   </div>
                   <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2">Débito Original</p>
                   <p className="text-xl md:text-2xl text-white font-semibold relative z-10">R$ 2.161.185,27</p>
                </div>

                {/* Stat 3: Resultado */}
                <div className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="mb-4 p-3 rounded-full bg-gold/10 text-gold shadow-[0_0_20px_rgba(197,160,101,0.2)]">
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

            {/* Restricted Label Overlay when locked */}
            {!isUnlocked && (
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                 <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white/50 text-xs font-bold uppercase tracking-[0.3em]">
                   <Lock size={14} className="text-gold" />
                   Informações Restritas
                 </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {isUnlocked && (
          <div className="flex flex-col items-center gap-3 opacity-0 animate-fade-in-up mt-4" style={{ animationDelay: '1s' }}>
             <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 text-center mr-[-0.3em]">Relatório Detalhado</span>
             <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
          </div>
        )}

      </div>

    </section>
  );
};

export default HeroSection;