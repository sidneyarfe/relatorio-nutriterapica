import React from 'react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505] relative z-10 no-print">
       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-4">
          
          {/* Brand & Legal Info */}
          <div className="flex flex-col items-center md:items-start gap-3">
             <div className="flex items-center">
                <img 
                  src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
                  alt="Dias Advocacia" 
                  referrerPolicy="no-referrer"
                  className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_10px_rgba(197,160,101,0.1)]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                        target.parentElement.innerHTML = '<h4 class="text-white font-serif tracking-[0.15em] text-lg uppercase">DIAS <span class="text-gold text-xs font-sans tracking-[0.25em] ml-1">ADVOCACIA</span></h4>';
                    }
                  }}
                />
             </div>
             <p className="text-neutral-500 text-xs font-mono tracking-widest md:pl-1">CNPJ 24.824.741/0001-55</p>
          </div>

          {/* Address & Contact */}
          <div className="flex flex-col gap-1 items-center md:items-end text-center md:text-right">
             <p className="text-neutral-400 text-xs leading-relaxed max-w-[280px] md:max-w-none">
               Tv. Dom Romualdo de Seixas, 1476, Ed. Evolution, sala 1906
             </p>
             <p className="text-neutral-400 text-xs leading-relaxed">
               Belém/PA • CEP 66055-050
             </p>
             
             <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[11px] md:text-xs text-gold/80 pt-3 font-medium">
                <a href="https://diaslaw.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  diaslaw.com.br
                </a>
                <span className="hidden md:inline text-neutral-700">•</span>
                <span className="hover:text-gold transition-colors cursor-default">
                  contato@diaslaw.com.br
                </span>
                <span className="hidden md:inline text-neutral-700">•</span>
                <span>(91) 9116-0842</span>
             </div>
          </div>

       </div>
       
       {/* Bottom Bar: Copyright & Confidentiality */}
       <div className="max-w-6xl mx-auto px-4 mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 uppercase tracking-widest text-center">
          <p>© {currentYear} Dias Advocacia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 animate-pulse"></div>
            <p className="font-mono opacity-60">Documento Confidencial</p>
          </div>
       </div>
    </footer>
  );
};

export default FooterSection;