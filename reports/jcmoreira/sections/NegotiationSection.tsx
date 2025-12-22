
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import GlassCard from '../../../components/GlassCard';
import ScrollReveal from '../../../components/ScrollReveal';
import { MessageCircle, AlertCircle } from 'lucide-react';

const NegotiationSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gold tracking-tight mb-4">
              Negocie agora o pagamento dos nossos honorários
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
              Garanta a regularização final e o encerramento do contrato com condições exclusivas.
            </p>
            <div className="h-1 w-20 bg-gold/50 rounded-full mt-6 mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <GlassCard className="w-full max-w-3xl px-8 py-10 md:px-12 md:py-12 border-gold/30 bg-neutral-900/60 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-center text-center">
                {/* Alert Icon */}
                <div className="mb-6 p-4 rounded-full bg-gold/10 text-gold border border-gold/20 shadow-[0_0_20px_rgba(197,160,101,0.15)]">
                  <AlertCircle size={32} strokeWidth={1.5} />
                </div>

                {/* Alert Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Pagamento Pendente
                </h3>
                
                <p className="text-neutral-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed font-light">
                  O valor referente aos honorários de êxito (<strong className="text-white font-mono">R$ 134.122,79</strong>) encontra-se pendente de liquidação. Entre em contato diretamente com o sócio responsável para alinhar os detalhes finais.
                </p>

                {/* Action Button */}
                <a 
                  href="https://wa.me/5591981160842?text=Olá,%20gostaria%20de%20falar%20sobre%20a%20regularização%20dos%20honorários%20do%20caso%20J.C.%20Moreira." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-[#d4b075] text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(197,160,101,0.3)] hover:shadow-[0_0_40px_rgba(197,160,101,0.5)]"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm md:text-base">Falar com Felipe Dias no WhatsApp</span>
                </a>

                {/* Subtext */}
                <p className="mt-6 text-neutral-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                  Atendimento exclusivo para fechamento
                </p>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NegotiationSection;
