import React from 'react';
import { businessConfig } from '../../config/business';

export function Footer({ onNavigateTo, onViewChange }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-xl pb-lg">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-xl">
          <div className="flex flex-col gap-sm">
            <div className="mb-sm">
              <h3 className="font-headline-md text-xl md:text-2xl font-bold text-surface-container-lowest tracking-tight">
                Amit Traders
              </h3>
              <span className="font-label-sm text-xs text-surface-container-lowest/80 uppercase tracking-wider block mt-1">
                & Constructions
              </span>
            </div>
            <div className="inline-flex items-center gap-2 mb-xs">
              <span className="text-secondary">🛡️</span>
              <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">Govt. Approved Contractor</span>
            </div>
            <p className="font-body-md text-primary-fixed-dim">
              Quality construction materials delivered reliably to your site with our dedicated transport fleet.
            </p>
          </div>
          
          <div className="flex flex-col gap-sm">
            <h4 className="font-headline-md text-body-lg text-surface-container-lowest mb-xs">Quick Links</h4>
            <button onClick={() => onNavigateTo('materials')} className="text-left font-body-md text-primary-fixed-dim hover:text-secondary transition-colors">Materials</button>
            <button onClick={() => onNavigateTo('services')} className="text-left font-body-md text-primary-fixed-dim hover:text-secondary transition-colors">Services</button>
            <button onClick={() => onNavigateTo('fleet')} className="text-left font-body-md text-primary-fixed-dim hover:text-secondary transition-colors">Our Fleet</button>
            <button onClick={() => onNavigateTo('about')} className="text-left font-body-md text-primary-fixed-dim hover:text-secondary transition-colors">About Us</button>
            <button onClick={() => onNavigateTo('contact')} className="text-left font-body-md text-primary-fixed-dim hover:text-secondary transition-colors">Get a Quote</button>
          </div>

          <div className="flex flex-col gap-sm">
            <h4 className="font-headline-md text-body-lg text-surface-container-lowest mb-xs">Materials</h4>
            {businessConfig.materials.map(m => (
              <span key={m.id} className="font-body-md text-primary-fixed-dim">{m.label}</span>
            ))}
          </div>

          <div className="flex flex-col gap-sm">
            <h4 className="font-headline-md text-body-lg text-surface-container-lowest mb-xs">Contact</h4>
            <span className="font-body-md text-surface-container-lowest font-medium mb-xs">{businessConfig.ownerName} — Owner</span>
            <span className="font-body-md text-primary-fixed-dim">{businessConfig.address}</span>
            <span className="font-body-md text-primary-fixed-dim">{businessConfig.phone}</span>
            <span className="font-body-md text-primary-fixed-dim">{businessConfig.email}</span>
            <span className="font-body-md text-primary-fixed-dim mt-sm">{businessConfig.businessHours}</span>
          </div>
        </div>
        
        <div className="border-t border-outline-variant/20 pt-lg flex flex-col md:flex-row justify-between items-center gap-y-3 gap-x-md text-center md:text-left">
          <p className="font-body-sm text-primary-fixed-dim text-xs sm:text-sm">
            &copy; {currentYear} {businessConfig.businessName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-2">
            <div className="flex gap-3 text-xs sm:text-sm">
              <button onClick={() => onViewChange('privacy')} className="font-body-sm text-primary-fixed-dim hover:text-secondary transition-colors">Privacy Policy</button>
              <span className="text-primary-fixed-dim/30">|</span>
              <button onClick={() => onViewChange('terms')} className="font-body-sm text-primary-fixed-dim hover:text-secondary transition-colors">Terms of Service</button>
            </div>

            <span className="hidden sm:inline text-primary-fixed-dim/30">•</span>

            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-primary-fixed-dim/90 font-mono tracking-wide bg-surface-container-highest/10 px-2.5 py-1 rounded border border-white/10 shadow-sm">
              <span>Developed by</span>
              <span className="text-secondary font-bold tracking-wider">Harsh Lagwal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
