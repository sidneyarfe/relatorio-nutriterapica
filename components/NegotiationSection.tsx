import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';

const NegotiationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Negocie agora o pagamento dos nossos honorários" 
            subtitle="Garanta a regularização final e o encerramento do contrato com condições exclusivas."
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="p-10 border-gold/30 bg-gradient-to-br from-neutral-900/90 to-gold/5 overflow-hidden relative">
            
            {/* Pulsing Status Indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Pendente</span>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-gold/10 text-gold border border-gold/20 shadow-[0_0_20px_rgba(197,160,101,0.15)]">
                    <AlertCircle size={32} />
                </div>

                <h3 className="text-2xl text-white font-bold mb-4">
                    Pagamento Pendente
                </h3>
                
                <p className="text-neutral-400 max-w-lg mb-8 leading-relaxed">
                    O valor referente aos honorários de êxito (<span className="text-white font-mono">R$ 442.330,15</span>) encontra-se pendente de liquidação. Entre em contato diretamente com a sócio responsável para alinhar os detalhes finais.
                </p>

                <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-[#d4b075] text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(197,160,101,0.3)] hover:shadow-[0_0_30px_rgba(197,160,101,0.5)]"
                >
                    <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                    <span>Falar com Felipe Dias no WhatsApp</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <p className="mt-6 text-neutral-600 text-xs uppercase tracking-wider">
                    Atendimento exclusivo para fechamento
                </p>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NegotiationSection;