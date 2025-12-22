
import React from 'react';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { ShieldCheck, ChevronDown, FileText, Landmark } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl w-full text-center z-10">
        <ScrollReveal>
          <img 
            src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
            alt="Logo" 
            className="h-12 w-auto mx-auto mb-12 opacity-80"
          />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            <ShieldCheck size={12} /> Liminar Confirmada TJPA
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Caso J.C. Moreira <br className="hidden md:block" /> 
            <span className="text-white/40">x</span> Estado do Pará
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl font-light mb-16 tracking-tight max-w-3xl mx-auto leading-relaxed">
            Relatório de Proteção Patrimonial focado na anulação de cobrança indevida de ICMS e reconhecimento de <span className="text-white font-medium">Decadência Tributária</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card Valor */}
            <GlassCard className="p-10 border-gold/30 bg-neutral-900/40 group hover:bg-gold/[0.03] transition-all">
              <div className="flex flex-col items-center justify-center text-center w-full h-full">
                <div className="mb-4 w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  <Landmark size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold mb-3">Patrimônio Protegido (Valor Atualizado)</p>
                <p className="text-4xl md:text-5xl font-bold text-gold tracking-tighter drop-shadow-[0_0_20px_rgba(197,160,101,0.3)] group-hover:scale-105 transition-transform">
                  R$ 894.151,93
                </p>
              </div>
            </GlassCard>

            {/* Card Processo */}
            <GlassCard className="p-10 border-white/10 bg-neutral-900/40 group hover:border-gold/30 transition-all">
              <div className="flex flex-col items-center justify-center text-center w-full h-full">
                <div className="mb-4 w-12 h-12 rounded-full bg-white/5 text-neutral-400 group-hover:text-gold transition-colors flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold mb-3">Processo Judicial (PJe)</p>
                <div className="flex flex-col items-center">
                  <p className="text-lg md:text-xl font-mono text-white tracking-widest group-hover:text-gold transition-colors">
                    0877120-89.2023
                  </p>
                  <p className="text-[10px] font-mono text-neutral-600 mt-1">.8.14.0301</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown size={32} className="text-gold opacity-50 mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
