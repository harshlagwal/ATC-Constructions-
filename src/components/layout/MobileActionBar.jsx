import React from 'react';
import { businessConfig } from '../../config/business';
import { Phone, MessageSquare, FileText } from 'lucide-react';

export function MobileActionBar({ onQuoteClick }) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello ${businessConfig.businessName},\n\nI would like to request a quote.\n\nPlease share availability and pricing.`);
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest shadow-[0_-4px_16px_rgba(0,0,0,0.08)] border-t border-outline-variant/20 md:hidden">
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex items-stretch h-16">
        <a 
          href={`tel:${businessConfig.phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-on-surface-variant active:bg-surface-container transition-colors"
        >
          <Phone size={20} />
          <span className="font-label-sm text-[10px]">Call</span>
        </a>
        
        <button 
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-green-600 active:bg-green-50 transition-colors border-l border-r border-outline-variant/20"
        >
          <MessageSquare size={20} />
          <span className="font-label-sm text-[10px]">WhatsApp</span>
        </button>
        
        <button 
          onClick={onQuoteClick}
          className="flex-[1.5] flex flex-col items-center justify-center gap-1 bg-secondary text-on-secondary active:bg-secondary-container active:text-on-secondary-container transition-colors"
        >
          <FileText size={20} />
          <span className="font-label-sm text-[10px]">Get Quote</span>
        </button>
        </div>
      </div>
    </div>
  );
}
