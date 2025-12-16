import React, { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const DebtEliminationSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  // Trigger internal animation state when component mounts/becomes visible via ScrollReveal
  // We use a small internal delay to sync with the reveal
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background radial gradient for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl w-full text-center relative z-10">
        
        <ScrollReveal>
          <h3 className="text-neutral-500 text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-12">
            Dívida Total Exigida
          </h3>
        </ScrollReveal>

        <div className="relative flex flex-col items-center gap-8">
          
          {/* Valor Original (Sendo Anulado) */}
          <ScrollReveal delay={0.2}>
            <div className="relative inline-block group">
              <span className={`
                text-4xl md:text-6xl font-light text-red-500/50 transition-all duration-1000
                ${animate ? 'opacity-40 blur-[1px]' : 'opacity-100'}
              `}>
                R$ 2.161.185,27
              </span>
              
              {/* Strikethrough Line Animation */}
              <div className={`
                absolute top-1/2 left-0 h-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]
                transition-all duration-[1.5s] ease-in-out delay-500
              `}
              style={{ width: animate ? '100%' : '0%' }}
              />
            </div>
          </ScrollReveal>

          {/* Arrow Indicator */}
          <ScrollReveal delay={0.6}>
            <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 animate-bounce">
              <ArrowDown size={24} />
            </div>
          </ScrollReveal>

          {/* O Grande Zero */}
          <ScrollReveal delay={0.8}>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[120px] md:text-[180px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gold to-[#8a6c3c] drop-shadow-[0_0_30px_rgba(197,160,101,0.3)] tracking-tighter">
                R$ 0,00
              </h2>
              
              <div className="mt-6 animate-pulse">
                 <div className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 size={16} />
                    <span>Extinto</span>
                 </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1.0}>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto mt-12 font-light">
              O trânsito em julgado confirmou a tese da defesa, resultando na anulação completa da dívida tributária.
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default DebtEliminationSection;