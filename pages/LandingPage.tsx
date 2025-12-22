import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  LayoutGrid,
  Scale,
  Search,
  X
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const reports = [
    {
      id: 'jcmoreira',
      title: 'Caso J.C. Moreira',
      subtitle: 'Vitória no TJPA e Decadência Tributária',
      date: 'Dezembro 2025',
      status: 'Concluído',
      impact: 'R$ 680k Protegidos',
      path: '/caso-jcmoreira',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: 'nutriterapica',
      title: 'Caso Nutriterápica',
      subtitle: 'Anulação de ISSQN e Defesa Patrimonial',
      date: 'Agosto 2024',
      status: 'Concluído',
      impact: 'R$ 4.2M Protegidos',
      path: '/caso-nutriterapica',
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: 'placeholder-1',
      title: 'Holding Familiar "G.A."',
      subtitle: 'Planejamento Sucessório e Blindagem',
      date: 'Em andamento',
      status: 'Análise',
      impact: 'Sigiloso',
      path: '#',
      disabled: true,
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const filteredReports = useMemo(() => {
    return reports.filter(report => 
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.impact.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation Header with Search */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 h-20 px-6">
        <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-6 shrink-0">
            <img src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" className="h-8 w-auto hidden sm:block" alt="Logo" />
            <LayoutGrid size={20} className="text-gold block sm:hidden" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-gold transition-colors">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar relatórios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-10 text-sm outline-none focus:border-gold/30 focus:bg-white/10 transition-all placeholder:text-neutral-600"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3 flex items-center text-neutral-500 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Acesso Restrito</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <ScrollReveal>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Relatórios Premium</h2>
              <p className="text-neutral-500 mt-4 max-w-2xl font-light">
                {searchQuery 
                  ? `Exibindo resultados para "${searchQuery}"`
                  : "Acesse os documentos de inteligência jurídica da Dias Advocacia."
                }
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              {filteredReports.length} {filteredReports.length === 1 ? 'Relatório Encontrado' : 'Relatórios Encontrados'}
            </div>
          </div>
        </ScrollReveal>

        {filteredReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report, index) => (
              <ScrollReveal key={report.id} delay={index * 0.1}>
                <div onClick={() => !report.disabled && navigate(report.path)} className="cursor-pointer group">
                  <GlassCard className={`h-full p-8 border-white/5 hover:border-gold/40 transition-all ${report.disabled ? 'opacity-40 grayscale' : ''}`}>
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-4 rounded-2xl bg-gold/10 text-gold border border-gold/20">{report.icon}</div>
                      <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-neutral-500/30 text-neutral-400">{report.status}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">{report.title}</h3>
                    <p className="text-neutral-400 text-sm mb-6 font-light leading-relaxed">{report.subtitle}</p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] uppercase text-neutral-600 font-bold">Impacto</p>
                        <p className="text-white font-mono text-sm font-bold">{report.impact}</p>
                      </div>
                      {!report.disabled && <ChevronRight size={20} className="text-neutral-600 group-hover:text-gold" />}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="p-6 rounded-full bg-white/5 border border-white/10 text-neutral-700 mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nenhum relatório encontrado</h3>
            <p className="text-neutral-500 max-w-xs mx-auto">Tente ajustar seus termos de pesquisa ou confira a lista completa.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-8 text-gold text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Limpar Pesquisa
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default LandingPage;