import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  LogOut, 
  User, 
  LayoutGrid,
  Scale
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import ScrollReveal from '../components/ScrollReveal';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Relatórios disponíveis no sistema
  const reports = [
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
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (email === 'sidney.araujo@diaslaw.com.br' && password === '@Diaslaw2025') {
        setIsLoggedIn(true);
      } else {
        setError('Credenciais inválidas. Verifique seu e-mail e senha.');
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neutral-900 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-md">
          {/* Logo Section */}
          <div className="mb-10 text-center animate-fade-in-up">
            <img 
              src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
              alt="Dias Advocacia" 
              className="h-16 md:h-20 w-auto mx-auto object-contain drop-shadow-[0_0_15px_rgba(197,160,101,0.2)]"
            />
            <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mt-4 font-bold">Portal de Relatórios</p>
          </div>

          <ScrollReveal>
            <GlassCard className="p-8 border-gold/20 bg-neutral-900/60 backdrop-blur-3xl shadow-2xl">
              <div className="flex flex-col items-center mb-8">
                <div className={`p-4 rounded-full bg-gold/10 text-gold border border-gold/20 mb-4 ${error ? 'animate-shake border-red-500/30 text-red-400' : ''}`}>
                  <Lock size={24} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">Acesso Restrito</h2>
                <p className="text-neutral-500 text-xs mt-2 leading-relaxed">Identifique-se para acessar os relatórios confidenciais.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-neutral-400 ml-1 tracking-widest">E-mail Corporativo</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@diaslaw.com.br"
                    className="w-full bg-black/40 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white outline-none transition-all text-sm"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-neutral-400 ml-1 tracking-widest">Senha de Acesso</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-black/40 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white outline-none transition-all text-sm"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-[10px] font-bold uppercase tracking-tight text-center py-2 bg-red-500/10 rounded-lg border border-red-500/20">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group flex items-center justify-center gap-3 bg-gold hover:bg-[#d4b075] text-black font-bold py-4 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(197,160,101,0.2)] disabled:opacity-50 mt-6"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Entrar no Portal</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </ScrollReveal>

          <p className="mt-10 text-center text-[10px] text-neutral-600 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} DIAS ADVOCACIA • DOCUMENTAÇÃO CONFIDENCIAL
          </p>
        </div>
      </div>
    );
  }

  // Dashboard / Galeria de Relatórios
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <img 
              src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
              alt="Dias Advocacia" 
              className="h-8 w-auto object-contain"
            />
            <div className="h-6 w-px bg-white/10" />
            <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 hidden md:block">Portal de Inteligência</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <User size={14} className="text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">Sidney Araújo</span>
            </div>
            <button 
              onClick={handleLogout}
              className="p-2.5 rounded-full hover:bg-red-500/10 hover:text-red-400 transition-colors text-neutral-500"
              title="Sair do Portal"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Welcome Section */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 text-gold mb-3">
              <LayoutGrid size={16} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Relatórios Disponíveis</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Bem-vindo, Dr. Sidney</h2>
            <p className="text-neutral-500 text-lg mt-4 max-w-2xl font-light">
              Selecione um caso para visualizar os dados estratégicos, cronograma de êxito e composição de honorários.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <ScrollReveal key={report.id} delay={index * 0.1}>
              <div 
                onClick={() => !report.disabled && navigate(report.path)}
                className={`group relative ${report.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <GlassCard className={`h-full flex flex-col p-8 border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-500 ${!report.disabled ? 'hover:border-gold/40' : 'opacity-60'}`}>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-10">
                    <div className={`p-4 rounded-2xl ${report.disabled ? 'bg-neutral-800 text-neutral-500' : 'bg-gold/10 text-gold border border-gold/20'}`}>
                      {report.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                      report.status === 'Concluído' ? 'border-green-500/30 text-green-400 bg-green-500/5' : 'border-neutral-500/30 text-neutral-400 bg-neutral-500/5'
                    }`}>
                      {report.status}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-2">{report.date}</p>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{report.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">{report.subtitle}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-neutral-600 font-bold mb-1">Impacto Gerado</span>
                      <span className="text-white font-mono text-sm font-bold">{report.impact}</span>
                    </div>
                    {!report.disabled && (
                      <div className="p-2 rounded-full bg-white/5 text-neutral-400 group-hover:bg-gold group-hover:text-black transition-all">
                        <ChevronRight size={20} />
                      </div>
                    )}
                  </div>
                </GlassCard>

                {report.disabled && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white/50 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <Lock size={12} />
                      Aguardando Publicação
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* New Case Placeholder */}
          <ScrollReveal delay={0.3}>
            <div className="h-full border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center p-10 group hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neutral-700 group-hover:text-neutral-500 transition-colors mb-4">
                <FileText size={24} />
              </div>
              <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-bold">Gerar Novo Relatório</p>
            </div>
          </ScrollReveal>
        </div>
      </main>

      {/* Institutional Footer */}
      <footer className="mt-20 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.3em]">
            Portal Restrito v1.0 • Dias Advocacia S/S
          </p>
          <div className="flex items-center gap-4 text-neutral-500">
            <span className="text-[10px] font-mono">ID: 24.824.741/0001-55</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;