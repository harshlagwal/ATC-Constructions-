import React from 'react';
import { Truck, Tractor } from 'lucide-react';

export function FleetCard({ title, description, image, alt, iconType, indicators }) {
  const Icon = iconType === 'tractor' ? Tractor : Truck;

  return (
    <div className="group rounded-xl overflow-hidden bg-primary-container relative h-[320px] md:h-[400px]">
      {image ? (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" 
          aria-label={alt}
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
      ) : (
        <div className="absolute inset-0 bg-surface-container flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-700">
          <Icon size={120} className="text-primary-fixed-dim/30" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
      
      {indicators && (
        <div className="absolute top-4 right-4 md:top-md md:right-md flex flex-col gap-xs">
          {indicators.map((ind, idx) => (
            <div key={idx} className="bg-primary/80 backdrop-blur-md px-sm py-xs rounded border border-on-primary/10 text-on-primary font-label-sm text-xs">
              {ind}
            </div>
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-4 md:p-lg">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-xs">{title}</h3>
            <p className="font-body-md text-primary-fixed-dim">{description}</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-surface-container-lowest/30 flex items-center justify-center backdrop-blur-sm">
            <Icon className="text-secondary" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
