import React from 'react';
import GlassCard from '../../../components/GlassCard';
import SectionHeader from '../../../components/SectionHeader';
import ScrollReveal from '../../../components/ScrollReveal';
import { AlertTriangle, Calendar, FileWarning } from 'lucide-react';

const OriginSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl w-full">
        <ScrollReveal>
          <SectionHeader 
            title="A Origem do Conflito" 
            subtitle="Entenda as bases ilegais da cobrança municipal que motivaram a defesa."
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 h-full">
              <GlassCard className="flex-1 flex flex-col justify-center p-8 border-white/5 hover:border-gold/20 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 shrink-0">
                      <Calendar className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg text-white font-semibold mb-2">Período Autuado</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      O litígio envolveu a cobrança de <strong>ISSQN</strong> referente aos exercícios fiscais de <strong>2011 a 2014</strong>.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="flex-1 flex flex-col justify-center p-8 border-white/5 hover:border-red-500/20 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 shrink-0">
                      <FileWarning className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg text-white font-semibold mb-2">Autos de Infração</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                      A cobrança foi consolidada nos Autos nº <strong>2015/000115-001 a 004</strong>, totalizando uma dívida milionária indevida.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <GlassCard className="h-full flex flex-col justify-center p-10 relative overflow-hidden group border-white/5">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <AlertTriangle className="w-64 h-64 text-gold" />
                </div>
                
                <div className="relative z-10">
                    <h3 className="text-gold text-sm font-bold mb-6 uppercase tracking-widest border-b border-white/10 pb-4 inline-block">
                    A Ilegalidade Central
                    </h3>
                    <p className="text-xl md:text-2xl text-white leading-relaxed font-light mb-8">
                    O Município de Belém tentou aplicar <span className="text-red-400 font-medium">retroativamente</span> uma alteração de alíquota, aumentando de 3% para 5% sobre a receita bruta.
                    </p>
                    <div className="pl-4 border-l-2 border-red-500">
                    <p className="text-sm text-red-200/80 italic">
                        "Ferindo gravemente o princípio da segurança jurídica."
                    </p>
                    </div>
                </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OriginSection;