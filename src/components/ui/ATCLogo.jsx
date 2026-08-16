import React from 'react';
import logoImg from '../../assets/ATC Logo.png';

export function ATCLogo({ className = "", variant = "dark" }) {
  // We use the imported image logo. The variant prop is kept for compatibility 
  // but if the logo has a single version, it applies to both.
  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <img 
        src={logoImg} 
        alt="ATC Logo" 
        loading="lazy"
        className="h-10 md:h-12 w-auto object-contain"
        style={{
          filter: variant === 'light' ? 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' : 'none'
        }}
      />
      {/* Brand Lockup Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-headline-md text-lg md:text-xl font-bold leading-none tracking-tight ${variant === 'dark' ? 'text-primary' : 'text-surface-container-lowest'}`}>
          Amit Traders
        </span>
        <span className={`font-label-sm text-[10px] md:text-xs leading-tight uppercase tracking-wider mt-[2px] ${variant === 'dark' ? 'text-primary-fixed-dim' : 'text-surface-container-lowest/80'}`}>
          & Constructions
        </span>
      </div>
    </div>
  );
}
