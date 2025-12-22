
import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal';

const TimelineSection: React.FC = () => {
  const steps = [
    { 
      date: "28/08/2023", 
      title: "Protocolo da Ação", 
      desc: "Ajuizamento com pedido de Tutela de Urgência para suspensão imediata e reconhecimento de decadência." 
    },
    { 
      date: "14/09/2023", 
      title: "Vitória Liminar", 
      desc: "Justiça defere suspensão da dívida e proíbe apreensão de mercadorias pela SEFA-PA.", 
      highlight: true 
    },
    { 
      date: "25/10/2023", 
      title: "Agravo do Estado", 
      desc: "O Estado do Pará recorre tentando derrubar a liminar, alegando inexistência de decadência." 
    },
    { 
      date: "09/07/2025", 
      title: "Acórdão TJPA", 
      desc: "Vitória unânime no Tribunal. Desembargadores confirmam a tese de decadência e anulam a autuação.", 
      highlight: true 
    },
    { 
      date: "25/08/2025", 
      title: "Trânsito em Julgado", 
      desc: "A decisão do Tribunal torna-se definitiva e irreversível, extinguindo o crédito tributário indevido." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Jornada até a Segurança Jurídica" 
            subtitle="Cronologia da defesa estratégica até o reconhecimento final da decadência."
            centered 
          />
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 !== 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div 
                      className={`
                        p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500
                        ${step.highlight 
                          ? 'bg-gold/10 border-gold shadow-[0_0_30px_rgba(197,160,101,0.2)]' 
                          : 'bg-neutral-900/40 border-white/5 hover:border-gold/30 hover:bg-neutral-900/60 shadow-2xl'}
                      `}
                    >
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block ${step.highlight ? 'text-gold' : 'text-neutral-500'}`}>
                        {step.date}
                      </span>
                      <h3 className={`text-xl font-bold mb-3 ${step.highlight ? 'text-white' : 'text-neutral-200'}`}>
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dot on Line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-gold z-20 shadow-[0_0_10px_rgba(197,160,101,0.5)]">
                    <div className={`w-full h-full rounded-full bg-gold ${step.highlight ? 'animate-pulse opacity-100' : 'opacity-40'}`}></div>
                  </div>

                  {/* Empty Side for alignment balance on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
