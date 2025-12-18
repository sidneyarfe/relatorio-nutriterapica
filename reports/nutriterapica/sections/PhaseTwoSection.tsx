import React from 'react';
import SectionHeader from '../../../components/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal';
import { TimelineEvent } from '../../../types';

const PhaseTwoSection: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      date: '18/12/2019',
      title: 'Ação Anulatória',
      description: 'Início do processo judicial focando exclusivamente no "Objeto Principal" (o Tributo) sob a tese de Erro de Direito.',
    },
    {
      date: '19/12/2019',
      title: 'Tutela de Urgência',
      description: 'Liminar concedida para suspender a exigibilidade do débito e evitar protestos contra a empresa.',
    },
    {
      date: '04/11/2021',
      title: 'Sentença de 1º Grau',
      description: 'Decisão favorável à Nutriterápica, consolidando a tese de defesa.',
    },
    {
      date: '17/01/2022',
      title: 'Recurso de Apelação',
      description: 'O Município interpõe recurso, levando o caso ao Tribunal de Justiça.',
    },
    {
      date: '01/08/2024',
      title: 'Trânsito em Julgado',
      description: 'Vitória Irreversível. A tese de anulação foi acolhida definitivamente, extinguindo o débito.',
      highlight: true,
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 relative flex flex-col items-center">
       <div className="max-w-4xl w-full">
        <ScrollReveal>
          <SectionHeader 
            title="Fase 2: A Vitória Judicial" 
            subtitle="Cronologia da defesa do Objeto Principal até a extinção total."
            centered
          />
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          <div className="space-y-12">
            {events.map((event, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 group">
                    <div className={`p-6 rounded-xl border transition-all duration-300 ${event.highlight ? 'bg-gold/10 border-gold shadow-[0_0_30px_rgba(197,160,101,0.2)]' : 'bg-neutral-900/40 border-white/5 hover:border-gold/30 hover:bg-neutral-900/60'} backdrop-blur-md`}>
                      <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${event.highlight ? 'text-gold' : 'text-neutral-500'}`}>
                        {event.date}
                      </span>
                      <h3 className={`text-xl font-bold mb-3 ${event.highlight ? 'text-white' : 'text-neutral-200'}`}>
                        {event.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-gold z-10 shadow-[0_0_10px_rgba(197,160,101,0.5)]">
                    <div className="w-full h-full rounded-full bg-gold animate-pulse opacity-50"></div>
                  </div>
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

export default PhaseTwoSection;