import React, { useState, useEffect } from 'react';
import { Lock, ShieldAlert, ArrowRight } from 'lucide-react';
import GlassCard from './GlassCard';

interface PasswordGateProps {
  onUnlock: () => void;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'nutriterapica2025') {
      onUnlock();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className={`w-full min-h-[60vh] flex flex-col items-center justify-center p-6 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />
      
      <GlassCard className="max-w-md w-full p-10 border-gold/20 bg-neutral-900/60 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center text-center">
          <div className={`mb-8 p-5 rounded-full bg-gold/10 text-gold border border-gold/20 transition-all duration-500 ${error ? 'animate-shake bg-red-500/10 border-red-500/30 text-red-400' : ''}`}>
            {error ? <ShieldAlert size={32} /> : <Lock size={32} />}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-[0.2em]">Acesso Restrito</h3>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">
            Este relatório contém informações estratégicas e confidenciais. Insira a credencial para prosseguir.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de Acesso"
                className={`w-full bg-black/40 border ${error ? 'border-red-500/50' : 'border-white/10'} focus:border-gold/50 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 outline-none transition-all font-mono text-center tracking-widest`}
                autoFocus
              />
            </div>
            
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-3 bg-gold hover:bg-[#d4b075] text-black font-bold py-4 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(197,160,101,0.2)]"
            >
              <span>Desbloquear Relatório</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-400 text-xs font-bold uppercase tracking-tighter animate-pulse">
              Credencial Inválida. Tente novamente.
            </p>
          )}
        </div>
      </GlassCard>

      <div className="mt-12 flex flex-col items-center gap-2 opacity-30">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">Dias Advocacia & Consultoria</p>
      </div>
    </div>
  );
};

export default PasswordGate;