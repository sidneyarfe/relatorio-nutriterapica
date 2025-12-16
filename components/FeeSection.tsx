import React from 'react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import { Wallet, TrendingUp, ArrowRight, Check } from 'lucide-react';

const FeeSection: React.FC = () => {
  // Valores
  const originalDebt = 2161185.27;
  const totalSavings = 4234866.53;
  const feePercentage = 0.20; // 20%
  
  // Honorários são sobre o valor do proveito econômico (original derrubado ou atualizado conforme contrato, 
  // assumindo aqui sobre o original conforme prompt "20% do valor da dívida original")
  const feeValue = originalDebt * feePercentage;
  
  // Porcentagem que o honorário representa do valor REAL economizado (4.2M)
  const realImpactPercentage = (feeValue / totalSavings) * 100;

  return (
    <section className="py-24 px-4 bg-[#080808] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <SectionHeader 
            title="Veja o retorno sobre o seu investimento" 
            subtitle="Por conta da nossa atuação, conseguimos preservar R$ 3.802.629,48 do seu patrimônio que seriam subtraídos pela cobrança injusta do ISS."
            centered
          />
        </ScrollReveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna da Esquerda: O Valor dos Honorários */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal delay={0.2} className="h-full">
              <GlassCard className="h-full p-8 border-white/5 bg-neutral-900/30 flex flex-col justify-between relative overflow-hidden group hover:bg-white/5 transition-colors">
                 
                 {/* Decorative Background Icon */}
                 <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none rotate-[-15deg]">
                    <Wallet size={140} strokeWidth={0.5} />
                 </div>

                 <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 shadow-inner">
                            <Wallet size={24} />
                        </div>
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em]">Custo do Serviço</span>
                    </div>

                    <div className="space-y-2 relative z-10">
                        <p className="text-neutral-400 text-xs uppercase tracking-wider">Honorários (20% sobre o êxito)</p>
                        <p className="text-3xl lg:text-4xl font-mono text-white tracking-tight font-light">R$ 442.330,15</p>
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                    <p className="text-sm text-neutral-400 leading-relaxed">
                       Remuneração pelo sucesso integral da demanda, garantindo a anulação total do débito milionário.
                    </p>
                 </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Seta Conectora Mobile/Desktop */}
          <div className="lg:col-span-1 flex items-center justify-center lg:rotate-0 rotate-90 py-4 lg:py-0">
             <div className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-500">
                <ArrowRight className="w-5 h-5" />
             </div>
          </div>

          {/* Coluna da Direita: A Comparação Visual (O Grande Contexto) */}
          <div className="lg:col-span-6 h-full">
            <ScrollReveal delay={0.4} className="h-full">
                <GlassCard className="h-full p-8 border-gold/20 bg-gradient-to-br from-neutral-900/80 to-gold/5 relative overflow-hidden flex flex-col justify-center">
                    
                    <h3 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
                        <TrendingUp size={20} className="text-gold" />
                        Dimensão Real do Benefício
                    </h3>

                    {/* Barra de Comparação */}
                    <div className="space-y-6">
                        
                        {/* Barra Total (Economia) */}
                        <div>
                            <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold mb-3">
                                <span className="text-gold flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                                    Economia Gerada
                                </span>
                                <span className="text-white font-mono text-xs">R$ 4,2 Milhões</span>
                            </div>
                            
                            <div className="h-14 w-full bg-neutral-900/80 rounded-xl overflow-hidden relative border border-white/10 shadow-inner">
                                {/* Fundo listrado sutil (Patrimônio Preservado) */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #C5A065 25%, transparent 25%, transparent 50%, #C5A065 50%, #C5A065 75%, transparent 75%, transparent)', backgroundSize: '16px 16px' }}></div>
                                
                                {/* A parte dos honorários dentro da economia */}
                                <div 
                                    style={{ width: `${realImpactPercentage}%` }} 
                                    className="h-full bg-neutral-700/80 border-r border-white/20 relative group cursor-help transition-all duration-1000 ease-out"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">Custo</span>
                                    </div>
                                </div>
                                
                                {/* Label do Patrimônio */}
                                <div className="absolute inset-y-0 right-4 flex items-center">
                                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider drop-shadow-md">Patrimônio Preservado</span>
                                </div>
                            </div>
                        </div>

                        {/* Texto de Impacto */}
                        <div className="flex items-start gap-3 mt-6 bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                O custo dos honorários representa apenas <strong className="text-white">~10,2%</strong> da economia real atualizada que foi garantida para a empresa.
                            </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5 flex items-end justify-between">
                             <p className="text-neutral-500 text-[10px] uppercase tracking-widest mb-1">Resultado Líquido</p>
                             <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                + R$ 3.802.629,48
                             </p>
                        </div>

                    </div>

                </GlassCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeeSection;