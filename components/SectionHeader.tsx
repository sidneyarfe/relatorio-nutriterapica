import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gold tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gold/50 rounded-full mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;