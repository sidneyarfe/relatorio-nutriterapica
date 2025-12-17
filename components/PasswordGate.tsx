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
    <div className={`w-full flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <GlassCard className="w-full p-6 md:p-8 border-gold/30 bg-neutral-900/60 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center text-center">
          <div className={`mb-6 p-4 rounded-full bg-gold/10 text-gold border border-gold/20 transition-all duration-500 ${error ? 'animate-shake bg-red-500/10 border-red-500/30 text-red-400' : ''}`}>
            {error ? <ShieldAlert size={24} /> : <Lock size={24} />}
          </div>

          <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-[0.2em]">Acesso Restrito</h3>
          <p className="text-neutral-400 text-xs mb-6 leading-relaxed max-w-[300px]">
            Este relatório contém informações confidenciais e dados sensíveis. Insira a credencial informada pelo seu advogado para visualizar o caso completo.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4 max-w-[280px]">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha de Acesso"
                className={`w-full bg-black/40 border ${error ? 'border-red-500/50' : 'border-white/10'} focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder:text-neutral-700 outline-none transition-all font-mono text-center tracking-widest text-sm`}
                autoFocus
              />
            </div>
            
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-3 bg-gold hover:bg-[#d4b075] text-black font-bold py-3 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(197,160,101,0.2)] text-sm"
            >
              <span>Desbloquear</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {error && (
            <p className="mt-4 text-red-400 text-[10px] font-bold uppercase tracking-tighter animate-pulse">
              Credencial Inválida.
            </p>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export default PasswordGate;