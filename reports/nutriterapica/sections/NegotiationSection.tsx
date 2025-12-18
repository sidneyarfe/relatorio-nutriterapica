import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';

const NegotiationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Negocie agora o pagamento dos nossos honorários" 
            subtitle="Garanta a regularização final e o encerramento do contrato com condições exclusivas."
            centered
          />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <GlassCard className="px-8 pt-10 pb-8 md:px-12 md:pt-12 md:pb-8 h-fit border-gold/30 bg-gradient-to-br from-neutral-900/90 to-gold/5 overflow-hidden relative text-center">
                <div className="mb-6 p-4 rounded-full bg-gold/10 text-gold border border-gold/20 mx-auto w-fit">
                    <AlertCircle size={32} />
                </div>
                <h3 className="text-2xl text-white font-bold mb-4">Pagamento Pendente</h3>
                <p className="text-neutral-400 max-w-lg mb-8 leading-relaxed mx-auto">
                    O valor referente aos honorários de êxito (<span className="text-white font-mono">R$ 442.330,15</span>) encontra-se pendente de liquidação.
                </p>
                <a 
                    href="https://wa.me/5591981160842" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-[#d4b075] text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(197,160,101,0.3)]"
                >
                    <MessageCircle size={20} />
                    <span>Falar no WhatsApp</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NegotiationSection;