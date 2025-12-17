import React from 'react';
import { ArrowRight, Briefcase, Download, Printer } from 'lucide-react';

const FooterSection: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 px-4 relative bg-[#0a0a0a] border-t border-white/5 no-print">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-12 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
          <Briefcase size={16} />
          <span className="text-sm font-medium">Status Atual</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Processo Principal Encerrado <br />
          <span className="text-neutral-500">com Êxito Total.</span>
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Desde <strong className="text-white">27/10/2025</strong>, o escritório iniciou a Execução de Honorários de Sucumbência contra o Município de Belém, consolidando a vitória em todas as esferas.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/5591981160842?text=Desejo%20regularizar%20os%20honor%C3%A1rios%20do%20caso%20Nutriter%C3%A1pica."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black transition-all duration-200 bg-gold rounded-full hover:bg-[#d4b075] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-black"
          >
            <span className="mr-2">Fale com o Sócio Responsável</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <button 
            onClick={handlePrint}
            className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-neutral-800 border border-neutral-700 rounded-full hover:bg-neutral-700 focus:outline-none hover:border-gold/50 cursor-pointer"
          >
            <Download className="w-5 h-5 mr-2" />
            <span>Baixar Relatório (PDF)</span>
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm">
          <p>© Dias Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 font-mono text-xs">CONFIDENCIAL</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;